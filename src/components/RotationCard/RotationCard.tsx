import type React from 'react';
import { useState } from 'react';
import { Card, Box, Typography, IconButton, Collapse, Divider } from '@mui/material';
import { ExpandMore, ExpandLess, DeleteTwoTone } from '@mui/icons-material';
import type { RotationResult } from '../../../app/analysis/chi-ji/types';
import SpellButton from "@components/SpellButtons/SpellButton";
import SwirlChip from "@components/SwirlChip/SwirlChip";
import { formatNumber, formatPercent, pluralize } from "@util/stringManipulation";
import TALENTS from "@data/specs/monk/mistweaver/talents";
import SPELLS from "@data/spells";
import type spell from "@data/spells/spell";
import { RAINBOW_COLORS } from '@components/Buttons/RainbowCard';
import { FONT, HAIRLINE, HAIRLINE_SOFT, ICON, RADIUS, TINT, tintAlpha } from "@components/Theme/tokens";

interface RotationCardProps {
    rotation: RotationResult;
    talents: spell[];
    index: number;
    expanded: boolean;
    onToggleExpansion: () => void;
    onDelete: () => void;
}

interface Source {
    key: string;
    title: string;
    color: string;
    value: number;
}

const HEALING_SOURCES = [
    { key: 'baseHealing', title: 'Base', color: '#4caf50' },
    { key: 'chiCocoons', title: 'Chi Cocoon', color: '#0a995d' },
    { key: 'chiJiGusts', title: 'Chi-Ji Gusts', color: '#fb3100' },
    { key: 'ancientTeachings', title: 'Ancient Teachings', color: '#f1a828' },
    { key: 'wayOfTheCrane', title: 'Way of the Crane', color: '#ff3600' },
    { key: 'rapidDiffusion', title: 'Rapid Diffusion', color: '#257343' },
    { key: 'gustOfMists', title: 'Gust of Mists', color: '#79ceab' },
];

// largest first, zero sources dropped
const toSources = (valueOf: (key: string) => number): Source[] =>
    HEALING_SOURCES
        .map(source => ({ ...source, value: valueOf(source.key) }))
        .filter(source => source.value > 0)
        .sort((a, b) => b.value - a.value);

const SourceBar: React.FC<{ sources: Source[]; width?: string }> = ({ sources, width = '100%' }) => {
    const total = sources.reduce((sum, source) => sum + source.value, 0);
    return (
        <Box sx={{ display: 'flex', width, height: 6, borderRadius: 0.5, overflow: 'hidden' }}>
            {sources.map(source => (
                <Box key={source.key} sx={{ width: `${(source.value / total) * 100}%`, bgcolor: source.color }} />
            ))}
        </Box>
    );
};

const SourceChip: React.FC<{ source: Source; detail: string }> = ({ source, detail }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            px: 0.75,
            py: 0.25,
            borderRadius: `${RADIUS.control}px`,
            border: '1px solid',
            borderColor: tintAlpha(source.color, TINT.restBorder),
            bgcolor: tintAlpha(source.color, TINT.wash),
        }}
    >
        <Typography sx={{ fontSize: FONT.micro, fontWeight: 600, lineHeight: 1, color: source.color }}>
            {source.title}
        </Typography>
        <Typography sx={{ fontSize: FONT.micro, lineHeight: 1, color: 'text.secondary' }}>
            {detail}
        </Typography>
    </Box>
);

export const RotationCard: React.FC<RotationCardProps> = ({
    rotation,
    talents,
    index,
    expanded,
    onToggleExpansion,
    onDelete,
}) => {
    const [talentsOpen, setTalentsOpen] = useState(false);
    const accent = RAINBOW_COLORS[index % RAINBOW_COLORS.length];

    const aggregateSources = toSources(key =>
        rotation.breakdown.reduce((sum, item) => sum + (item.sources[key as keyof typeof item.sources] ?? 0), 0)
    );
    const aggregateTotal = aggregateSources.reduce((sum, source) => sum + source.value, 0);

    const findSpell = (name: string): spell =>
        rotation.spells.find(s => s.name === name) ??
        Object.values(TALENTS).find(t => t.name === name) ??
        SPELLS.RENEWING_MIST;

    return (
        <Card
            variant="outlined"
            sx={{
                width: '100%',
                maxWidth: 650,
                mx: 'auto',
                p: 2,
                borderColor: tintAlpha(accent, TINT.divider),
                bgcolor: 'background.paper',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', flex: 1 }}>
                    {rotation.spells.map((spell, i) => (
                        <SpellButton key={`${spell.id}-${i}`} selectedSpell={spell} />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, flexShrink: 0 }}>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography sx={{ fontSize: FONT.heading, fontWeight: 700, lineHeight: 1, color: accent }}>
                            {formatNumber(Math.round(rotation.hps))}
                            <Typography component="span" sx={{ fontSize: FONT.body, ml: 0.5, color: 'text.secondary' }}>
                                hps
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: FONT.small, color: 'text.secondary' }}>
                            {formatNumber(rotation.duration, 1)}s, {formatNumber(Math.round(rotation.totalHealing))} total
                        </Typography>
                    </Box>
                    <IconButton size="small" onClick={onDelete} color="error" sx={{ p: 0 }}>
                        <DeleteTwoTone fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {talents.length > 0 && (
                <Box sx={{ mb: 1.5 }}>
                    <Box
                        onClick={() => setTalentsOpen(open => !open)}
                        sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', color: 'text.disabled', '&:hover': { color: 'text.primary' } }}
                    >
                        <Typography sx={{ fontSize: FONT.micro, fontWeight: 700, letterSpacing: 0.5, color: 'inherit' }}>
                            {talents.length} {pluralize(talents.length, "talent")}
                        </Typography>
                        {talentsOpen ? <ExpandLess sx={{ fontSize: 15 }} /> : <ExpandMore sx={{ fontSize: 15 }} />}
                    </Box>
                    <Collapse in={talentsOpen}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                            {talents.map(talent => (
                                <SpellButton key={talent.id} selectedSpell={talent} size={ICON.xs} />
                            ))}
                        </Box>
                    </Collapse>
                </Box>
            )}

            {aggregateSources.length > 0 && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                    <SourceBar sources={aggregateSources} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {aggregateSources.map(source => (
                            <SourceChip
                                key={source.key}
                                source={source}
                                detail={formatPercent((source.value / aggregateTotal) * 100, 1)}
                            />
                        ))}
                    </Box>
                </Box>
            )}

            <Divider sx={{ my: 1.5, borderColor: HAIRLINE }} />

            <Box
                onClick={onToggleExpansion}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    px: 1,
                    py: 0.5,
                    borderRadius: `${RADIUS.control}px`,
                    '&:hover': { bgcolor: tintAlpha(accent, TINT.wash) },
                }}
            >
                <Typography sx={{ fontSize: FONT.body, fontWeight: 600, color: accent }}>
                    Breakdown
                </Typography>
                {expanded ? <ExpandLess sx={{ color: accent }} /> : <ExpandMore sx={{ color: accent }} />}
            </Box>

            <Collapse in={expanded}>
                <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {rotation.breakdown.map((item, i) => {
                        const sources = toSources(key => item.sources[key as keyof typeof item.sources] ?? 0);

                        return (
                            <Box key={item.spellName}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.75 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <SpellButton selectedSpell={findSpell(item.spellName)} size={ICON.md} />
                                        <Typography sx={{ fontSize: FONT.body, fontWeight: 600 }}>
                                            {item.spellName}
                                        </Typography>
                                    </Box>
                                    <SwirlChip
                                        message={formatPercent(item.percentage, 1)}
                                        borderColor={accent}
                                        fontSize={FONT.micro}
                                    />
                                </Box>

                                {sources.length > 0 && (
                                    <>
                                        <Box sx={{ mb: 0.75, borderRadius: 0.5, bgcolor: HAIRLINE_SOFT }}>
                                            <SourceBar sources={sources} width={`${item.percentage}%`} />
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {sources.map(source => (
                                                <SourceChip
                                                    key={source.key}
                                                    source={source}
                                                    detail={formatNumber(Math.round(source.value))}
                                                />
                                            ))}
                                        </Box>
                                    </>
                                )}

                                {i < rotation.breakdown.length - 1 && (
                                    <Divider sx={{ mt: 1.5, borderColor: HAIRLINE_SOFT }} />
                                )}
                            </Box>
                        );
                    })}
                </Box>
            </Collapse>
        </Card>
    );
};
