import type React from 'react';
import { useState } from 'react';
import { Card, Box, Typography, IconButton } from '@mui/material';
import { GlassTooltip } from "@components/Glass";
import { DeleteTwoTone, ContentCopyTwoTone } from '@mui/icons-material';
import type { RotationResult } from '../../../app/analysis/chi-ji/types';
import SpellButton from "@components/SpellButtons/SpellButton";
import { formatNumber, formatPercent } from "@util/stringManipulation";
import { iconFallbackUrl, iconLocalUrl, wowheadSpellUrl } from "@util/wowhead";
import TALENTS from "@data/specs/monk/mistweaver/talents";
import SPELLS from "@data/spells";
import type spell from "@data/spells/spell";
import { RAINBOW_COLORS } from '@components/Buttons/RainbowCard';
import { FONT, HAIRLINE, HAIRLINE_SOFT, ICON, TINT, tintAlpha } from "@components/Theme/tokens";

interface RotationCardProps {
    rotation: RotationResult;
    talents: spell[];
    index: number;
    onCopy: () => void;
    onDelete: () => void;
}

interface Source {
    key: string;
    title: string;
    color: string;
    // base healing is the spell's own, so it has no icon of its own
    spell?: spell;
    value: number;
}

const HEALING_SOURCES: Omit<Source, 'value'>[] = [
    { key: 'baseHealing', title: 'Base', color: '#4caf50' },
    { key: 'chiCocoons', title: 'Chi Cocoon', color: '#0a995d', spell: TALENTS.CHI_COCOON },
    { key: 'chiJiGusts', title: 'Chi-Ji Gusts', color: '#fb3100', spell: TALENTS.CHI_JI_GUST_OF_MISTS },
    { key: 'ancientTeachings', title: 'Ancient Teachings', color: '#f1a828', spell: TALENTS.ANCIENT_TEACHINGS },
    { key: 'wayOfTheCrane', title: 'Way of the Crane', color: '#ff3600', spell: TALENTS.WAY_OF_THE_CRANE },
    { key: 'rapidDiffusion', title: 'Rapid Diffusion', color: '#257343', spell: TALENTS.RAPID_DIFFUSION },
    { key: 'gustOfMists', title: 'Gust of Mists', color: '#79ceab', spell: TALENTS.GUST_OF_MISTS },
];

interface Row {
    key: string;
    name: string;
    spell: spell;
    healing: number;
    sources: Source[];
}

type View = 'ability' | 'output';

const VIEWS: { id: View; label: string }[] = [
    { id: 'ability', label: 'per ability' },
    { id: 'output', label: 'actual output' },
];

const TABS = ['healing breakdown', 'talents selected'];

// spell, hps, % healing
const COLUMNS = '24px 1fr 72px 72px';

// largest first, zero sources dropped
const toSources = (valueOf: (key: string) => number): Source[] =>
    HEALING_SOURCES
        .map(source => ({ ...source, value: valueOf(source.key) }))
        .filter(source => source.value > 0)
        .sort((a, b) => b.value - a.value);

const CAP_WIDTH = 0.4;

// a row background that is `length`% wide, split into hard-edged segments by source and closed by a cap line
const sourceFill = (sources: Source[], length: number, cap: string): string => {
    const total = sources.reduce((sum, source) => sum + source.value, 0);
    const bodyEnd = Math.max(length - CAP_WIDTH, 0);
    let start = 0;
    const stops = sources.map(source => {
        const end = start + (source.value / total) * bodyEnd;
        const color = tintAlpha(source.color, '38');
        const stop = `${color} ${start}%, ${color} ${end}%`;
        start = end;
        return stop;
    });
    return `linear-gradient(90deg, ${stops.join(', ')}, ${cap} ${bodyEnd}%, ${cap} ${length}%, transparent ${length}%)`;
};

const SourceLegend: React.FC<{ sources: Source[]; total: number }> = ({ sources, total }) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 1.5, rowGap: 0.5 }}>
        {sources.map(source => (
            <Box key={source.key} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {source.spell ? (
                    // a plain wowhead link, so the tooltip works without SpellButton's hover scaling
                    <Box
                        component="a"
                        href={wowheadSpellUrl(source.spell.id, source.spell.spellModifier)}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'flex', flexShrink: 0 }}
                    >
                        <Box
                            component="img"
                            src={iconLocalUrl(source.spell.icon)}
                            alt={source.title}
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                if (!e.currentTarget.src.startsWith('https://wow.zamimg.com')) {
                                    e.currentTarget.src = iconFallbackUrl(source.spell!.icon);
                                }
                            }}
                            sx={{ width: ICON.xs, height: ICON.xs, borderRadius: 0.5, outline: `1px solid ${source.color}` }}
                        />
                    </Box>
                ) : (
                    <GlassTooltip title={source.title}>
                        <Box sx={{ width: ICON.xs, height: ICON.xs, borderRadius: 0.5, bgcolor: source.color, flexShrink: 0 }} />
                    </GlassTooltip>
                )}
                <Typography sx={{ fontSize: FONT.micro, color: 'text.secondary' }}>
                    {formatPercent((source.value / total) * 100, 1)}
                </Typography>
            </Box>
        ))}
    </Box>
);

const HeaderCell: React.FC<{ children?: React.ReactNode; right?: boolean }> = ({ children, right }) => (
    <Typography sx={{ fontSize: FONT.micro, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', color: 'text.disabled', textAlign: right ? 'right' : 'left' }}>
        {children}
    </Typography>
);

const NumberCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Typography sx={{ fontSize: FONT.small, fontFamily: 'monospace', color: 'text.secondary', textAlign: 'right' }}>
        {children}
    </Typography>
);

const Panel: React.FC<{ active: boolean; children: React.ReactNode }> = ({ active, children }) => (
    // an active panel inherits visibility, so one nested in a hidden panel stays hidden
    <Box sx={{ gridArea: '1 / 1', ...(!active && { visibility: 'hidden' }) }}>
        {children}
    </Box>
);

const BreakdownRows: React.FC<{ rows: Row[]; accent: string; showSources?: boolean; duration: number; totalHealing: number }> = ({
    accent,
    rows,
    showSources,
    duration,
    totalHealing,
}) => {
    // bars are relative to the top row so smaller ones stay readable
    const topHealing = Math.max(...rows.map(row => row.healing), 0);

    return (
        <>
            {rows.map((row, i) => {
                const fillEnd = topHealing > 0 ? (row.healing / topHealing) * 100 : 0;

                return (
                    <GlassTooltip
                        key={row.key}
                        placement="top"
                        title={
                            <Box>
                                <Box>{formatNumber(Math.round(row.healing))} total</Box>
                                {showSources && row.sources.map(source => (
                                    <Box key={source.key}>{source.title}: {formatNumber(Math.round(source.value))}</Box>
                                ))}
                            </Box>
                        }
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: COLUMNS,
                                alignItems: 'center',
                                gap: 1,
                                px: 2,
                                py: 0.75,
                                borderTop: `1px solid ${HAIRLINE_SOFT}`,
                                background: sourceFill(row.sources, fillEnd, tintAlpha(accent, "8c")),
                                '&:hover': { filter: 'brightness(1.15)' },
                            }}
                        >
                            <Typography sx={{ fontSize: FONT.micro, fontFamily: 'monospace', color: 'text.disabled', textAlign: 'right' }}>
                                {i + 1}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                                <SpellButton selectedSpell={row.spell} size={ICON.sm} />
                                <Box sx={{ minWidth: 0 }}>
                                    <Typography noWrap sx={{ fontSize: FONT.body, fontWeight: 500 }}>
                                        {row.name}
                                    </Typography>
                                    {showSources && (
                                        <SourceLegend
                                            sources={row.sources}
                                            total={row.sources.reduce((sum, source) => sum + source.value, 0)}
                                        />
                                    )}
                                </Box>
                            </Box>
                            <NumberCell>{formatNumber(Math.round(row.healing / duration))}</NumberCell>
                            <NumberCell>{formatNumber((row.healing / totalHealing) * 100, 2)}</NumberCell>
                        </Box>
                    </GlassTooltip>
                );
            })}
        </>
    );
};

export const RotationCard: React.FC<RotationCardProps> = ({
    rotation,
    talents,
    index,
    onCopy,
    onDelete,
}) => {
    const [tab, setTab] = useState(0);
    const [view, setView] = useState<View>('ability');
    const accent = RAINBOW_COLORS[index % RAINBOW_COLORS.length];

    const findSpell = (name: string): spell =>
        rotation.spells.find(s => s.name === name) ??
        Object.values(TALENTS).find(t => t.name === name) ??
        SPELLS.RENEWING_MIST;

    // each ability that was cast, with where its healing came from
    const abilityRows = (): Row[] => rotation.breakdown.map(item => ({
        key: item.spellName,
        name: item.spellName,
        spell: findSpell(item.spellName),
        healing: item.healing,
        sources: toSources(key => item.sources[key as keyof typeof item.sources] ?? 0),
    }));

    // healing as it's credited in a log: gusts, Ancient Teachings and the like are their own entries,
    // and Rapid Diffusion counts as Renewing Mist
    const outputRows = (): Row[] => {
        const rows = new Map<string, Row>();
        const credit = (key: string, name: string, spell: spell, source: Source) => {
            const row = rows.get(key);
            if (row) {
                row.healing += source.value;
                row.sources[0].value += source.value;
            } else {
                rows.set(key, { key, name, spell, healing: source.value, sources: [{ ...source }] });
            }
        };

        for (const item of rotation.breakdown) {
            for (const source of toSources(key => item.sources[key as keyof typeof item.sources] ?? 0)) {
                if (source.key === 'baseHealing') {
                    credit(item.spellName, item.spellName, findSpell(item.spellName), source);
                } else if (source.key === 'rapidDiffusion') {
                    credit(SPELLS.RENEWING_MIST.name, SPELLS.RENEWING_MIST.name, SPELLS.RENEWING_MIST, { ...HEALING_SOURCES[0], value: source.value });
                } else if (source.spell) {
                    credit(source.key, source.title, source.spell, source);
                }
            }
        }
        return [...rows.values()].sort((a, b) => b.healing - a.healing);
    };

    const tabs = talents.length > 0 ? TABS : TABS.slice(0, 1);

    return (
        <Card variant="outlined" sx={{ borderColor: tintAlpha(accent, TINT.divider), bgcolor: 'background.paper' }}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ flexShrink: 0 }}>
                        <Typography sx={{ fontSize: FONT.heading, fontWeight: 700, lineHeight: 1, color: accent, whiteSpace: 'nowrap' }}>
                            {formatNumber(Math.round(rotation.hps))} hps
                        </Typography>
                        <Typography sx={{ fontSize: FONT.micro, color: 'text.disabled', whiteSpace: 'nowrap' }}>
                            {formatNumber(rotation.duration, 1)}s, {formatNumber(Math.round(rotation.totalHealing))} total
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {rotation.spells.map((spell, i) => (
                            <SpellButton key={`${spell.id}-${i}`} selectedSpell={spell} size={28} />
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5, alignSelf: 'flex-start' }}>
                        <GlassTooltip title="Copy to current rotation">
                            <IconButton size="small" onClick={onCopy} sx={{ p: 0.25 }}>
                                <ContentCopyTwoTone sx={{ fontSize: 18 }} />
                            </IconButton>
                        </GlassTooltip>
                        <IconButton size="small" onClick={onDelete} color="error" sx={{ p: 0.25 }}>
                            <DeleteTwoTone sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2.5, px: 2, borderTop: `1px solid ${HAIRLINE}`, borderBottom: `1px solid ${HAIRLINE}` }}>
                {tabs.map((label, i) => (
                    <Box
                        key={label}
                        onClick={() => setTab(i)}
                        sx={{
                            py: 1,
                            cursor: 'pointer',
                            borderBottom: '2px solid',
                            borderColor: tab === i ? accent : 'transparent',
                            color: tab === i ? accent : 'text.disabled',
                            '&:hover': { color: tab === i ? accent : 'text.primary' },
                        }}
                    >
                        <Typography sx={{ fontSize: FONT.micro, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: 'inherit', whiteSpace: 'nowrap' }}>
                            {i === 1 ? `${label} · ${talents.length}` : label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* panels share one grid cell, so the card is as tall as its tallest panel and switching never jumps */}
            <Box sx={{ display: 'grid' }}>
                <Panel active={tab === 0}>
                    <Box sx={{ display: 'flex', gap: 1.5, px: 2, pt: 1 }}>
                        {VIEWS.map(({ id, label }) => (
                            <Typography
                                key={id}
                                onClick={() => setView(id)}
                                sx={{
                                    fontSize: FONT.micro,
                                    fontWeight: 700,
                                    letterSpacing: 0.5,
                                    cursor: 'pointer',
                                    color: view === id ? accent : 'text.disabled',
                                    '&:hover': { color: view === id ? accent : 'text.primary' },
                                }}
                            >
                                {label}
                            </Typography>
                        ))}
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: COLUMNS, alignItems: 'center', gap: 1, px: 2, py: 0.75 }}>
                        <HeaderCell />
                        <HeaderCell>spell</HeaderCell>
                        <HeaderCell right>hps</HeaderCell>
                        <HeaderCell right>% healing</HeaderCell>
                    </Box>
                    <Box sx={{ display: 'grid' }}>
                        <Panel active={view === 'ability'}>
                            <BreakdownRows accent={accent} rows={abilityRows()} showSources duration={rotation.duration} totalHealing={rotation.totalHealing} />
                        </Panel>
                        <Panel active={view === 'output'}>
                            <BreakdownRows accent={accent} rows={outputRows()} duration={rotation.duration} totalHealing={rotation.totalHealing} />
                        </Panel>
                    </Box>
                </Panel>

                {talents.length > 0 && (
                    <Panel active={tab === 1}>
                        <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {talents.map(talent => (
                                <SpellButton key={talent.id} selectedSpell={talent} size={ICON.md} />
                            ))}
                        </Box>
                    </Panel>
                )}
            </Box>
        </Card>
    );
};
