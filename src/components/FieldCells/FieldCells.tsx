"use client";
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Box, TextField, InputAdornment, Typography } from '@mui/material';
import { Add, Remove } from "@components/Icons";
import { GlassTooltip } from '@components/Glass';
import { FIELD_HEIGHT, FONT, MONO_FONT } from "@components/Theme/tokens";

export interface FieldDef {
    key: string;
    label: string;
    min?: number;
    tooltip?: string;
    adornment?: string;
    stepper?: boolean;
}

interface FieldCellsProps {
    fields: FieldDef[];
    options: object;
    onOptionsChange: (newOptions: any) => void;
    label?: string;
}

// how long typing has to pause before the value is applied
const COMMIT_DELAY_MS = 400;

const inputSx = { width: 92, '& .MuiInputBase-input': { fontSize: FONT.body, fontFamily: MONO_FONT, py: 0 } };

export const FieldCells: React.FC<FieldCellsProps> = ({ fields, options, onOptionsChange, label }) => {
    const values = options as Record<string, number | undefined>;
    const [localValues, setLocalValues] = useState<{ [key: string]: string }>({});
    const [belowMin, setBelowMin] = useState<{ [key: string]: boolean }>({});
    const timers = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>({});

    const cancelPending = (key: string) => {
        clearTimeout(timers.current[key]);
        delete timers.current[key];
    };

    useEffect(() => () => Object.values(timers.current).forEach(clearTimeout), []);

    const handleChange = (field: string, value: number) => {
        onOptionsChange((prev: any) => ({ ...prev, [field]: value }));
    };

    const formatNumber = (num: number): string => num.toLocaleString();
    const parseNumber = (str: string): number => Number(str.replace(/,/g, ''));

    const step = (field: FieldDef, delta: number) => {
        cancelPending(field.key);
        const next = Math.max((values[field.key] ?? 0) + delta, field.min ?? 0);
        handleChange(field.key, next);
        setLocalValues(prev => { const s = { ...prev }; delete s[field.key]; return s; });
        setBelowMin(prev => ({ ...prev, [field.key]: false }));
    };

    const stepperButtons = (field: FieldDef) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 1, mr: "-4px" }}>
            {[[Remove, -1] as const, [Add, 1] as const].map(([Icon, delta]) => (
                <Box
                    key={delta}
                    component="span"
                    role="button"
                    onClick={() => step(field, delta)}
                    sx={{
                        display: "flex",
                        cursor: "pointer",
                        color: "text.disabled",
                        "&:hover": { color: "text.primary" },
                    }}
                >
                    <Icon sx={{ fontSize: 12 }} />
                </Box>
            ))}
        </Box>
    );

    const makeInput = (field: FieldDef) => (
        <TextField
            type="text"
            size="small"
            variant="standard"
            value={localValues[field.key] !== undefined ? localValues[field.key] : formatNumber(values[field.key] ?? 0)}
            onChange={(e) => {
                setLocalValues(prev => ({ ...prev, [field.key]: e.target.value }));
                const raw = parseNumber(e.target.value);
                if (!isNaN(raw)) {
                    setBelowMin(prev => ({ ...prev, [field.key]: raw < (field.min ?? 0) }));
                    cancelPending(field.key);
                    timers.current[field.key] = setTimeout(() => {
                        delete timers.current[field.key];
                        handleChange(field.key, raw);
                    }, COMMIT_DELAY_MS);
                }
            }}
            onBlur={() => {
                // apply whatever is still waiting on the delay right away
                const cur = values[field.key] ?? 0;
                const pending = localValues[field.key];
                cancelPending(field.key);
                const typed = pending !== undefined ? parseNumber(pending) : cur;
                const next = Math.max(isNaN(typed) ? cur : typed, field.min ?? 0);
                if (next !== cur) handleChange(field.key, next);
                setLocalValues(prev => { const s = { ...prev }; delete s[field.key]; return s; });
                setBelowMin(prev => ({ ...prev, [field.key]: false }));
            }}
            slotProps={{
                htmlInput: { min: field.min, inputMode: 'numeric', pattern: '[0-9,]*' },
                input: {
                    disableUnderline: true,
                    endAdornment: field.adornment ? (
                        <InputAdornment position="end">
                            <Typography variant="caption" color="text.disabled">{field.adornment}</Typography>
                        </InputAdornment>
                    ) : undefined,
                },
            }}
            sx={inputSx}
        />
    );

    const renderCell = (field: FieldDef) => {
        const isBelowMin = !!belowMin[field.key];
        const cell = (
            <Box
                key={field.key}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 0.25,
                    minHeight: FIELD_HEIGHT,
                    boxSizing: "border-box",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: isBelowMin ? "error.main" : "divider",
                    "&:focus-within": { borderColor: isBelowMin ? "error.main" : "text.secondary" },
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography sx={{ fontSize: FONT.micro, fontWeight: 600, letterSpacing: 0.5, color: isBelowMin ? "error.main" : "text.disabled" }}>
                        {isBelowMin ? `min ${formatNumber(field.min ?? 0)}${field.adornment ?? ''}` : field.label}
                    </Typography>
                    {field.stepper && stepperButtons(field)}
                </Box>
                {makeInput(field)}
            </Box>
        );
        return field.tooltip
            ? <GlassTooltip key={field.key} title={field.tooltip}>{cell}</GlassTooltip>
            : cell;
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {label && (
                <span style={{ fontSize: FONT.micro, fontWeight: 600, opacity: 0.45, letterSpacing: 1, whiteSpace: "nowrap" }}>{label}</span>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {fields.map(renderCell)}
            </div>
        </div>
    );
};

export default FieldCells;
