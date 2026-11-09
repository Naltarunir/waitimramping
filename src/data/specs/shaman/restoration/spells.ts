import type spell from "@data/spells/spell";
import { CATEGORY } from "@data/spells/spell";
import { SCHOOLS } from '@data/shared/schools';
import { HERO_TREES } from '@data/heroTalents';
import talents from "@data/specs/shaman/restoration/talents";

const TOTEMIC = HERO_TREES.TOTEMIC;
const FARSEER = HERO_TREES.FARSEER;

const spells = {
    HEALING_WAVE: {
        name: "Healing Wave",
        id: 77472,
        icon: "spell_nature_healingwavelesser",
        castTime: 2.5,
        school: SCHOOLS.NATURE,
        category: CATEGORY.HEALING,
    },
    FLAME_SHOCK: {
        name: "Flame Shock",
        id: 188389,
        icon: "spell_fire_flameshock",
        castTime: 0,
        cooldown: 6,
        school: SCHOOLS.NATURE, //Also FIRE aka Vulcanic but that is not covered yet!
        category: CATEGORY.DAMAGE,
    },
    WATER_SHIELD: {
        name: "Water Shield",
        id: 52127,
        icon: "ability_shaman_watershield",
        castTime: 0,
        school: SCHOOLS.NATURE,
        category: CATEGORY.OTHER,
    },
    PURIFY_SPIRIT: {
        name: "Purify Spirit",
        id: 77130,
        icon: 'ability_shaman_cleansespirit',
        castTime: 0,
        cooldown: 8,
        school: SCHOOLS.NATURE,
        category: CATEGORY.UTILITY,
    },
    ANCESTRAL_VISION: {
        name: "Ancestral Vision",
        id: 212048,
        icon: 'spell_shaman_elementaloath',
        castTime: 10,
        school: SCHOOLS.NATURE,
        category: CATEGORY.UTILITY,
    },
    DEEP_HEALING: {
        name: "Deep Healing",
        id: 77226,
        castTime: 0,
        icon: 'spell_nature_healingtouch',
        school: SCHOOLS.PHYSICAL,
        category: CATEGORY.PASSIVE,
    },
    IMPROVED_PURIFY_SPIRIT: talents.IMPROVED_PURIFY_SPIRIT,
    UNLEASH_LIFE: talents.UNLEASH_LIFE,
    HEALING_STREAM_TOTEM: talents.HEALING_STREAM_TOTEM,
    SPIRIT_LINK_TOTEM: talents.SPIRIT_LINK_TOTEM,
    ASCENDANCE: talents.ASCENDANCE, 
    HEALING_TIDE_TOTEM: talents.HEALING_TIDE_TOTEM,
    DOWNPOUR: talents.DOWNPOUR,
    RIPTIDE: talents.RIPTIDE,
    HEALING_RAIN: talents.HEALING_RAIN,
    EARTHLIVING_WEAPON: talents.EARTHLIVING_WEAPON,
    STORMSTREAM_TOTEM: talents.STORMSTREAM_TOTEM,
    //Farseer
    ANCESTRAL_SWIFTNESS: talents.ANCESTRAL_SWIFTNESS,
    HYDROBUBBLE: {
        name: "Hydrobubble",
        id: 444490,
        castTime: 0,
        icon: 'spell_winston_bubble',
        school: SCHOOLS.NATURE,
        category: CATEGORY.PASSIVE,
    },
    //Totemic
    SURGING_TOTEM: talents.SURGING_TOTEM,
    TIDECALLERS_GUARD: talents.TIDECALLERS_GUARD,
    WHIRLING_AIR: {
        name: "Whirling Air",
        id: 453409,
        castTime: 0,
        icon: 'inv_10_elementalcombinedfoozles_air',
        school: SCHOOLS.PHYSICAL,
        category: CATEGORY.PASSIVE,
    },
    WHIRLING_EARTH: {
        name: "Whirling Earth",
        id: 453406,
        castTime: 0,
        icon: ' inv_10_elementalcombinedfoozles_earth',
        school: SCHOOLS.PHYSICAL,
        category: CATEGORY.PASSIVE,
    },
    WHIRLING_WATER: {
        name: "Whirling Water",
        id: 453407,
        castTime: 0,
        icon: 'inv_10_elementalcombinedfoozles_water',
        school: SCHOOLS.PHYSICAL,
        category: CATEGORY.PASSIVE,
    },

} satisfies Record<string, spell>;

export default spells;
export { spells as RESTORATION_SHAMAN_SPELLS };
