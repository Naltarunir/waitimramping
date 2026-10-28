import { IconButton, type IconButtonProps } from "@mui/material";
import { motion } from "@components/Theme/motion";

interface NavIconButtonProps extends Omit<IconButtonProps, 'sx'> {
    hoverColor?: string;
    enableLift?: boolean;
    initialColor?: string;
    children: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
}

export const NavIconButton = ({ 
    hoverColor = "rgba(255, 255, 255, 0.8)", 
    enableLift = false,
    initialColor = "white",
    children, 
    ...props 
}: NavIconButtonProps) => {
    return (
        <IconButton
            {...props}
            sx={{
                color: initialColor,
                transition: motion("color", "transform"),
                backgroundColor: "transparent",
                "&:hover": {
                    color: hoverColor,
                    transform: enableLift ? "translateY(-2px)" : "none",
                    backgroundColor: "transparent",
                },
            }}
        >
            {children}
        </IconButton>
    );
};
