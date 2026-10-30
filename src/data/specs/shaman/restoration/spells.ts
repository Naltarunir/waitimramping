import type spell from "@data/spells/spell";
import { CATEGORY } from "@data/spells/spell";
import { SCHOOLS } from '@data/shared/schools';
import { HERO_TREES } from '@data/heroTalents';
import talents from "@data/specs/shaman/restoration/talents";

const TOTEMIC = HERO_TREES.TOTEMIC;
const FARSEER = HERO_TREES.FARSEER;

const spells = {
    RIPTIDE: {
        name: "Riptide",
        id: 61295,
        icon: "spell_nature_riptide",
        castTime: 0,
        cooldown: 6,
        school: SCHOOLS.NATURE,
        duration: 99,
        category: CATEGORY.HEALING,
        periodic: true,
    },
    HEALING_RAIN: {
        name: "Healing Rain",
        id: 73920,
        icon: "spell_nature_giftofthewaterspirit",
        heroTalent: FARSEER,
        castTime: 2,
        cooldown: 12,
        school: SCHOOLS.NATURE,
        targets: 6,
        category: CATEGORY.COOLDOWN,
    },
    SURGING_TOTEM: {
        name: "Surging Totem",
        id: 444995,
        icon: "inv_ability_totemicshaman_surgingtotem",
        heroTalent: TOTEMIC,
        castTime: 0,
        cooldown: 25,
        school: SCHOOLS.NATURE,
        targets: 6,
        category: CATEGORY.COOLDOWN,
    },
    DOWNPOUR: {
        name: "Downpour",
        id: 207778, //This is the actuall spell ID, the crawler only graps the talentID
        icon: "ability_mage_waterjet",
        castTime: 0,
        school: SCHOOLS.NATURE,
        targets: 5,
        category: CATEGORY.HEALING,
    },
    EARTH_SHIELD: {
        name: "Earth Shield",
        id: 974,
        icon: "spell_nature_skinofearth",
        castTime: 0,
        duration: 1000,
        school: SCHOOLS.NATURE,
        category: CATEGORY.HEALING,
    },
    CHAIN_HEAL: {
        name: "Chain Heal",
        id: 1064,
        icon: "inv_1115_shaman_chainheal",
        castTime: 2.5,
        school: SCHOOLS.NATURE,
        targets: 4,
        category: CATEGORY.HEALING,
    },
    HEALING_WAVE: {
        name: "Healing Wave",
        id: 77472,
        icon: "spell_nature_healingwavelesser",
        castTime: 2.5,
        school: SCHOOLS.NATURE,
        category: CATEGORY.HEALING,
    },
    NATURES_SWIFTNESS: {
        name: "Nature's Swiftness",
        id: 378081,
        icon: "spell_nature_ravenform",
        heroTalent: TOTEMIC,
        castTime: 0,
        gcd: false,
        cooldown: 99,
        school: SCHOOLS.NATURE,
        category: CATEGORY.COOLDOWN,
    },
    UNLEASH_LIFE: {
        name: "Unleash Life",
        id: 73685,
        icon: "spell_shaman_unleashweapon_life",
        castTime: 0,
        cooldown: 20,
        duration: 8,
        school: SCHOOLS.NATURE,
        category: CATEGORY.COOLDOWN,
    },
    HEALING_STREAM_TOTEM: {
        name: "Healing Stream Totem",
        id: 5394,
        icon: "inv_spear_04",
        castTime: 0,
        cooldown: 30,
        school: SCHOOLS.NATURE,
        category: CATEGORY.HEALING,
    },
    SPIRIT_LINK_TOTEM: {
        name: "Spirit Link Totem",
        id: 98008,
        icon: "spell_shaman_spiritlink",
        castTime: 0,
        cooldown: 180,
        school: SCHOOLS.NATURE,
        category: CATEGORY.COOLDOWN,
    },
    ASCENDANCE: {
        name: "Ascendance",
        id: 114049,
        icon: "spell_fire_elementaldevastation",
        castTime: 0,
        cooldown: 180, //120 if also taken with FIRST_ASCENDANT
        school: SCHOOLS.PHYSICAL,
        category: CATEGORY.COOLDOWN,
    },
    HEALING_TIDE_TOTEM: {
        name: "Healing Tide Totem",
        id: 108280,
        icon: "ability_shaman_healingtide",
        castTime: 0,
        cooldown: 180, //120 if also taken with FIRST_ASCENDANT
        school: SCHOOLS.NATURE,
        category: CATEGORY.COOLDOWN,
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
    LAVA_BURST: {
        name: "Lava Burst",
        id: 51505,
        icon: "spell_shaman_lavaburst",
        castTime: 0,
        cooldown: 8,
        //school: SCHOOLS.FIRE, Is not covered yet!
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
    STORMSTREAM_TOTEM: {
        name: "Stormstream Totem",
        id: 1267068,
        icon: "inv12_apextalent_shaman_stormstreamtotem",
        castTime: 0,
        school: SCHOOLS.NATURE,
        category: CATEGORY.HEALING,
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
    ANCESTRAL_SWIFTNESS: talents.ANCESTRAL_SWIFTNESS,
    EARTHLIVING_WEAPON: talents.EARTHLIVING_WEAPON,
} satisfies Record<string, spell>;

export default spells;
export { spells as RESTORATION_SHAMAN_SPELLS };
