"use client"
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useIsNonProd } from "@lib/betaModeClient";
import { RAINBOW_COLORS } from '@components/Buttons/RainbowCard';
import { EASE, FONT, HAIRLINE, HAIRLINE_SOFT, HEADING_FONT, INK } from '@components/Theme/tokens';

const THEME_COLORS = {
    nonProd: RAINBOW_COLORS[3],
    primary: RAINBOW_COLORS[0],
    chart: "#494949",
    tableBody: "#121212",
};

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            chart: {
                gridColor: string;
            };
        };
    }
    
    interface ThemeOptions {
        custom?: {
            chart?: {
                gridColor?: string;
            };
        };
    }
}

const Theme = ({ children }: { children: React.ReactNode }) => {
    const isNonProd = useIsNonProd();

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: isNonProd ? THEME_COLORS.nonProd : THEME_COLORS.primary,
            }
        },
        custom: {
            chart: {
                gridColor: THEME_COLORS.chart,
            },
        },
        typography: {
            fontFamily: 'inherit',
            h1: { fontFamily: HEADING_FONT },
            h2: { fontFamily: HEADING_FONT },
            h3: { fontFamily: HEADING_FONT },
            h4: { fontFamily: HEADING_FONT },
            allVariants: {
                textTransform: 'lowercase' as const,
            },
        },
        components: {
            MuiTabs: {
                styleOverrides: {
                    root: {
                        minHeight: 36,
                        borderBottom: `1px solid ${HAIRLINE}`,
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        minHeight: 36,
                        paddingTop: 0,
                        paddingBottom: 0,
                        fontSize: FONT.body,
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        backgroundColor: THEME_COLORS.tableBody,
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        color: INK.muted,
                        fontSize: FONT.micro,
                        borderBottom: `1px solid ${HAIRLINE}`,
                    },
                    body: {
                        borderBottom: `1px solid ${HAIRLINE_SOFT}`,
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        '&:last-child td, &:last-child th': {
                            borderBottom: 0,
                        },
                    },
                },
            },
            MuiTableBody: {
                styleOverrides: {
                    root: {
                        backgroundColor: THEME_COLORS.tableBody,
                    },
                },
            },
            MuiButtonBase: {
                styleOverrides: {
                    root: {
                        transition: `background-color 0.2s ${EASE}, border-color 0.2s ${EASE}, color 0.2s ${EASE}, transform 0.2s ${EASE}, opacity 0.2s ${EASE}`,
                        '&:active': {
                            transform: 'scale(0.98)',
                        },
                        '&.Mui-focusVisible': {
                            outline: `2px solid ${isNonProd ? THEME_COLORS.nonProd : THEME_COLORS.primary}`,
                            outlineOffset: 2,
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        },
                    },
                },
            },
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default Theme;
