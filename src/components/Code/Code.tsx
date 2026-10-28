import type React from "react";
import { Typography, type TypographyProps } from "@mui/material";
import { MONO_FONT } from "@components/Theme/tokens";

const Code: React.FC<TypographyProps> = ({ sx, ...rest }) => (
    <Typography
        component="code"
        sx={[
            {
                fontFamily: MONO_FONT,
                backgroundColor: "rgba(255,255,255,0.08)",
                px: 0.5,
                py: 0.25,
                borderRadius: 0.5,
                fontSize: "0.75rem",
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...rest}
    />
);

export default Code;
