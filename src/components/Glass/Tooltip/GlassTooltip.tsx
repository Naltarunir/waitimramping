import { Tooltip, type TooltipProps } from "@mui/material";
import { BLUR, HAIRLINE } from "@components/Theme/tokens";

export const GlassTooltip = (props: TooltipProps) => {
    const { slotProps, ...otherProps } = props;
    
    return (
        <Tooltip
            {...otherProps}
            arrow
            disableInteractive
            slotProps={{
                ...slotProps,
                tooltip: {
                    ...slotProps?.tooltip,
                    sx: {
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: BLUR.surface,
                        border: `1px solid ${HAIRLINE}`,
                        boxShadow: "none",
                        ...((slotProps?.tooltip as any)?.sx),
                    }
                },
                arrow: {
                    ...slotProps?.arrow,
                    sx: {
                        color: "rgba(0, 0, 0, 0.3)",
                        "&::before": {
                            border: `1px solid ${HAIRLINE}`,
                        }
                    }
                },
                popper: {
                    ...(slotProps?.popper as any),
                    modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, -5],
                        },
                    },
                ],
                }
            }}
        />
    );
};
