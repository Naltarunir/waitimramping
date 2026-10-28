// heavy easing used for every transition
export const EASE = "cubic-bezier(0.22,1,0.36,1)";

export const DURATION = {
    // color, opacity and small movement on hover and press
    hover: "0.3s",
    // scroll reveal
    reveal: "800ms",
    // looping attention pulse
    pulse: "1.2s",
};

// motion("transform", "opacity") -> "transform 0.3s <ease>, opacity 0.3s <ease>"
export const motion = (...properties: string[]) =>
    properties.map(property => `${property} ${DURATION.hover} ${EASE}`).join(", ");
