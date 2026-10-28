"use client";
import type React from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import {
    IconArrowDown,
    IconArrowLeft,
    IconArrowUp,
    IconBrandDiscordFilled,
    IconBrandGithubFilled,
    IconBrandPatreonFilled,
    IconBrandTwitch,
    IconBrandYoutubeFilled,
    IconBug,
    IconCalculator,
    IconCheck,
    IconChevronDown,
    IconChevronUp,
    IconCircleMinus,
    IconCopy,
    IconDownload,
    IconHelp,
    IconLink,
    IconMaximize,
    IconMenu2,
    IconMinimize,
    IconMinus,
    IconPaperclip,
    IconPlayerSkipForward,
    IconPlus,
    IconRefresh,
    IconSearchOff,
    IconTool,
    IconTrash,
    IconTrophy,
    IconX,
    type Icon as TablerGlyph,
} from "@tabler/icons-react";

// Tabler icons behind the same names and props the MUI icons had, so call sites keep working.
// Brand logos use the filled variants to match the custom filled icons.

type IconSize = "inherit" | "small" | "medium" | "large";

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
    fontSize?: IconSize;
    sx?: SxProps<Theme>;
}

const SIZE: Record<IconSize, string> = {
    inherit: "1em",
    small: "1.25rem",
    medium: "1.5rem",
    large: "2.25rem",
};

const make = (Glyph: TablerGlyph): React.FC<IconProps> => {
    const Wrapped: React.FC<IconProps> = ({ fontSize = "medium", sx, ...rest }) => (
        <Box
            component="span"
            aria-hidden="true"
            sx={[
                { display: "inline-flex", flexShrink: 0, lineHeight: 0, fontSize: SIZE[fontSize], color: "inherit" },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...rest}
        >
            <Glyph size="1em" stroke={1.75} />
        </Box>
    );
    return Wrapped;
};

export const Add = make(IconPlus);
export const ArrowBack = make(IconArrowLeft);
export const ArrowDownward = make(IconArrowDown);
export const ArrowDropDown = make(IconChevronDown);
export const ArrowDropUp = make(IconChevronUp);
export const ArrowUpward = make(IconArrowUp);
export const AttachFile = make(IconPaperclip);
export const BugReport = make(IconBug);
export const Build = make(IconTool);
export const Calculate = make(IconCalculator);
export const Check = make(IconCheck);
export const Close = make(IconX);
export const ContentCopyTwoTone = make(IconCopy);
export const Delete = make(IconTrash);
export const DeleteForever = make(IconTrash);
export const DeleteTwoTone = make(IconTrash);
export const Discord = make(IconBrandDiscordFilled);
export const Download = make(IconDownload);
export const EmojiEvents = make(IconTrophy);
export const ExpandLess = make(IconChevronUp);
export const ExpandMore = make(IconChevronDown);
export const Fullscreen = make(IconMaximize);
export const FullscreenExit = make(IconMinimize);
export const GitHub = make(IconBrandGithubFilled);
export const HelpOutline = make(IconHelp);
export const KeyboardArrowDown = make(IconChevronDown);
export const KeyboardArrowUp = make(IconChevronUp);
export const Link = make(IconLink);
export const Menu = make(IconMenu2);
export const Patreon = make(IconBrandPatreonFilled);
export const Refresh = make(IconRefresh);
export const Remove = make(IconMinus);
export const RemoveCircleOutline = make(IconCircleMinus);
export const SearchOff = make(IconSearchOff);
export const SkipNext = make(IconPlayerSkipForward);
export const Twitch = make(IconBrandTwitch);
export const YouTube = make(IconBrandYoutubeFilled);
