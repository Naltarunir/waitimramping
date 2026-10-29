export interface HeroTreeInfo {
    name: string;
    shortName: string;
    color: string;
    icon: string;
}

export const HERO_TREES = {
    CONDUIT_OF_THE_CELESTIALS: {
        name: "Conduit of the Celestials",
        shortName: "Conduit",
        color: "#67ecaf",
        icon: "conduit_of_the_celestials", // ph
    },
    MASTER_OF_HARMONY: {
        name: "Master of Harmony",
        shortName: "MoH",
        color: "#6ed4cd",
        icon: "master_of_harmony", // ph
    },
    HERALD_OF_THE_SUN: {
        name: "Herald of the Sun",
        shortName: "Herald",
        color: "#ffd700",
        icon: "herald_of_the_sun", // ph
    },
    LIGHTSMITH: {
        name: "Lightsmith",
        shortName: "Lightsmith",
        color: "#c0c0c0",
        icon: "lightsmith", // ph
    },
    TOTEMIC: {
        name: "Totemic",
        shortName: "Totemic",
        color: "#ff8876",
        icon: "totemic", // ph
    },
    FARSEER: {
        name: "Farseer",
        shortName: "Farseer",
        color: "#2546d4",
        icon: "farseer", // ph
    },
    ORACLE: {
        name: "Oracle",
        shortName: "Oracle",
        color: "#e0c068",
        icon: "oracle", // ph
    },
    ARCHON: {
        name: "Archon",
        shortName: "Archon",
        color: "#f3e5ab",
        icon: "archon", // ph
    },
    VOIDWEAVER: {
        name: "Voidweaver",
        shortName: "Voidweaver",
        color: "#8a4fff",
        icon: "voidweaver", // ph
    },
    CHRONOWARDEN: {
        name: "Chronowarden",
        shortName: "Chrono",
        color: "#d4a84b",
        icon: "chronowarden", // ph
    },
    FLAMESHAPER: {
        name: "Flameshaper",
        shortName: "Flameshaper",
        color: "#ff6a3d",
        icon: "flameshaper", // ph
    },
    KEEPER_OF_THE_GROVE: {
        name: "Keeper of the Grove",
        shortName: "Keeper",
        color: "#7fc35a",
        icon: "keeper_of_the_grove", // ph
    },
    WILDSTALKER: {
        name: "Wildstalker",
        shortName: "Wildstalker",
        color: "#3fa64a",
        icon: "wildstalker", // ph
    },
} satisfies Record<string, HeroTreeInfo>;

export type HeroTree = typeof HERO_TREES[keyof typeof HERO_TREES];
