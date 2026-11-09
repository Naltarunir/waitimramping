import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';
import { SCHOOLS } from '@data/shared/schools';
import talents from '@data/specs/shaman/talents';

const spells = {
    EARTHBIND_TOTEM: {
        name: "Earthbind Totem",
        id: 2484,
        icon: 'spell_nature_strengthofearthtotem02',
        castTime: 0,
        cooldown: 30,
        duration: 20,
        category: CATEGORY.UTILITY,
    },
    GHOST_WOLF: {
        name: "Ghost Wolf",
        id: 2645,
        icon: 'spell_nature_spiritwolf',
        castTime: 0,
        category: CATEGORY.UTILITY,
    },
    FAR_SIGHT: {
        name: "Far Sight",
        id: 6196,
        icon: 'spell_nature_farsight',
        castTime: 2,
        duration: 60,
        category: CATEGORY.UTILITY,
    },
    LIGHTNING_BOLT: {
        name: "Lightning Bolt",
        id: 188196,
        icon: 'spell_nature_lightning',
        castTime: 2.5,
        coeff: 1.7,
        category: CATEGORY.DAMAGE,
    },
    LIGHTNING_SHIELD: {
        name: "Lightning Shield",
        id: 192106,
        icon: 'spell_nature_lightningshield',
        castTime: 0,
        duration: 3600,
        category: CATEGORY.OTHER,
    },
    SKYFURY: {
        name: "Skyfury",
        id: 462854,
        icon: 'achievement_raidprimalist_windelemental',
        castTime: 0,
        duration: 3600,
        category: CATEGORY.UTILITY,
    },
    LAVA_SURGE: {
        name: "Lava Surge",
        id: 77756,
        icon: 'spell_shaman_lavasurge',
        school: SCHOOLS.PHYSICAL,
        category: CATEGORY.DAMAGE,
    },
    CREATION_CORE: {
        name: "Creation Core",
        id: 383012,
        icon: 'inv_artifact_xp03',
        school: SCHOOLS.PHYSICAL,
        category: CATEGORY.PASSIVE,
    },
    IMPROVED_PURIFY_SPIRIT: talents.IMPROVED_PURIFY_SPIRIT,
    LAVA_BURST: talents.LAVA_BURST,
    EARTH_SHIELD: talents.EARTH_SHIELD,
    CHAIN_HEAL: talents.CHAIN_HEAL,
    NATURES_SWIFTNESS: talents.NATURES_SWIFTNESS,
    PURGE: talents.PURGE,
    TREMOR_TOTEM: talents.TREMOR_TOTEM,
    EARTHGRAB_TOTEM: talents.EARTHGRAB_TOTEM,
    HEX: talents.HEX,
    WIND_SHEAR: talents.WIND_SHEAR,
    SPIRIT_WALK: talents.SPIRIT_WALK,
    SPIRITWALKERS_GRACE: talents.SPIRITWALKERS_GRACE,
    ASTRAL_SHIFT: talents.ASTRAL_SHIFT,
    TOTEMIC_PROJECTION: talents.TOTEMIC_PROJECTION,
    CHAIN_LIGHTNING: talents.CHAIN_LIGHTNING,
    CAPACITOR_TOTEM: talents.CAPACITOR_TOTEM,
    GUST_OF_WIND: talents.GUST_OF_WIND,
    WIND_RUSH_TOTEM: talents.WIND_RUSH_TOTEM,
    FROST_SHOCK: talents.FROST_SHOCK,
    EARTH_ELEMENTAL: talents.EARTH_ELEMENTAL,
    GREATER_PURGE: talents.GREATER_PURGE,
    POISON_CLEANSING_TOTEM: talents.POISON_CLEANSING_TOTEM,
} satisfies Record<string, spell>;

export default spells;
export { spells as SHARED_SHAMAN_SPELLS };