import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';
import talents from '@data/specs/paladin/talents';

const spells = {
    DEVOTION_AURA: {
        name: "Devotion Aura",
        id: 465,
        icon: 'spell_holy_devotionaura',
        castTime: 0,
        category: CATEGORY.OTHER,
    },
    HAMMER_OF_JUSTICE: {
        name: "Hammer of Justice",
        id: 853,
        icon: 'spell_holy_sealofmight',
        castTime: 0,
        cooldown: 45,
        duration: 6,
        category: CATEGORY.UTILITY,
    },
    CONSECRATION: {
        name: "Consecration",
        id: 26573,
        icon: 'spell_holy_innerfire',
        castTime: 0,
        cooldown: 9,
        duration: 12,
        category: CATEGORY.PASSIVE,
    },
    HAND_OF_RECKONING: {
        name: "Hand of Reckoning",
        id: 62124,
        icon: 'spell_holy_unyieldingfaith',
        castTime: 0,
        cooldown: 8,
        duration: 6,
        category: CATEGORY.UTILITY,
    },
    INTERCESSION: {
        name: "Intercession",
        id: 391054,
        icon: 'ability_paladin_intercession',
        castTime: 2,
        cooldown: 600,
        category: CATEGORY.UTILITY,
    },
    CRUSADER_AURA: talents.CRUSADER_AURA,
    BLESSING_OF_FREEDOM: talents.BLESSING_OF_FREEDOM,
    TURN_EVIL: talents.TURN_EVIL,
    BLINDING_LIGHT: talents.BLINDING_LIGHT,
    DIVINE_STEED: talents.DIVINE_STEED,
} satisfies Record<string, spell>;

export default spells;
