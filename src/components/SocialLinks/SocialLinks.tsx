"use client";
import { Stack } from "@mui/material";
import { GlassTooltip } from "@components/Glass";
import { NavIconButton } from "@components/Buttons/NavIconButton";
import { SOCIAL_LINKS } from "@data/socials";

interface SocialLinksProps {
    omit?: (keyof typeof SOCIAL_LINKS)[];
}

const SocialLinks = ({ omit = [] }: SocialLinksProps) => (
    <Stack direction="row" spacing={0.5}>
        {Object.entries(SOCIAL_LINKS)
            .filter(([key]) => !omit.includes(key as keyof typeof SOCIAL_LINKS))
            .map(([key, { label, href, icon, color }]) => (
                <GlassTooltip key={key} title={label} placement="top">
                    <NavIconButton
                        color="inherit"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        hoverColor={color}
                        enableLift={true}
                        initialColor="rgba(255, 255, 255, 0.5)"
                    >
                        {icon}
                    </NavIconButton>
                </GlassTooltip>
            ))}
    </Stack>
);

export default SocialLinks;
