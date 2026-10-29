import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';
import talents from '@data/specs/priest/talents';

const spells = {
    MIND_SOOTHE: {
        name: "Mind Soothe",
        id: 453,
        icon: 'spell_holy_mindsooth',
        castTime: 0,
        cooldown: 5,
        duration: 20,
        category: CATEGORY.UTILITY,
    },
    MIND_VISION: {
        name: "Mind Vision",
        id: 2096,
        icon: 'spell_holy_mindvision',
        castTime: 0,
        duration: 60,
        category: CATEGORY.UTILITY,
    },
    POWER_WORD_FORTITUDE: {
        name: "Power Word: Fortitude",
        id: 21562,
        icon: 'spell_holy_wordfortitude',
        castTime: 0,
        duration: 3600,
        category: CATEGORY.UTILITY,
    },
    LEVITATE: {
        name: "Levitate",
        id: 1706,
        icon: 'spell_holy_layonhands',
        castTime: 0,
        category: CATEGORY.UTILITY,
    },
    MASS_RESURRECTION: {
        name: "Mass Resurrection",
        id: 212036,
        icon: 'achievement_guildperk_massresurrection',
        castTime: 10,
        category: CATEGORY.UTILITY,
    },
    DISPEL_MAGIC: talents.DISPEL_MAGIC,
    FADE: talents.FADE,
    MIND_CONTROL: talents.MIND_CONTROL,
    PSYCHIC_SCREAM: talents.PSYCHIC_SCREAM,
    SHACKLE_HORROR: talents.SHACKLE_HORROR,
    POWER_INFUSION: talents.POWER_INFUSION,
    HOLY_FIRE: talents.HOLY_FIRE,
    DESPERATE_PRAYER: talents.DESPERATE_PRAYER,
    MASS_DISPEL: talents.MASS_DISPEL,
    LEAP_OF_FAITH: talents.LEAP_OF_FAITH,
    ANGELIC_FEATHER: talents.ANGELIC_FEATHER,
    DOMINATE_MIND: talents.DOMINATE_MIND,
} satisfies Record<string, spell>;

export default spells;
