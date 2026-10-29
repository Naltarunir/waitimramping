import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';
import talents from '@data/specs/evoker/talents';

const spells = {
    DISINTEGRATE: {
        name: "Disintegrate",
        id: 356995,
        icon: 'ability_evoker_disintegrate',
        castTime: 0,
        duration: 3,
        coeff: 1.5851,
        category: CATEGORY.DAMAGE,
    },
    DEEP_BREATH: {
        name: "Deep Breath",
        id: 357210,
        icon: 'ability_evoker_deepbreath',
        castTime: 0,
        cooldown: 120,
        duration: 6,
        category: CATEGORY.UTILITY,
    },
    LIVING_FLAME: {
        name: "Living Flame",
        id: 361469,
        icon: 'ability_evoker_livingflame',
        castTime: 2,
        category: CATEGORY.DAMAGE,
    },
    BLESSING_OF_THE_BRONZE: {
        name: "Blessing of the Bronze",
        id: 364342,
        icon: 'ability_evoker_blessingofthebronze',
        castTime: 0,
        cooldown: 15,
        category: CATEGORY.UTILITY,
    },
    TAIL_SWIPE: {
        name: "Tail Swipe",
        id: 368970,
        icon: 'ability_racial_tailswipe',
        castTime: 0,
        cooldown: 180,
        duration: 4,
        category: CATEGORY.UTILITY,
    },
    FURY_OF_THE_ASPECTS: {
        name: "Fury of the Aspects",
        id: 390386,
        icon: 'ability_evoker_furyoftheaspects',
        castTime: 0,
        cooldown: 300,
        duration: 40,
        category: CATEGORY.UTILITY,
    },
    LANDSLIDE: talents.LANDSLIDE,
    SLEEP_WALK: talents.SLEEP_WALK,
    OBSIDIAN_SCALES: talents.OBSIDIAN_SCALES,
    EXPUNGE: talents.EXPUNGE,
    SOURCE_OF_MAGIC: talents.SOURCE_OF_MAGIC,
    TIP_THE_SCALES: talents.TIP_THE_SCALES,
    RESCUE: talents.RESCUE,
    OPPRESSING_ROAR: talents.OPPRESSING_ROAR,
    ZEPHYR: talents.ZEPHYR,
    CAUTERIZING_FLAME: talents.CAUTERIZING_FLAME,
    TIME_SPIRAL: talents.TIME_SPIRAL,
    SPATIAL_PARADOX: talents.SPATIAL_PARADOX,
    RENEWING_BLAZE: talents.RENEWING_BLAZE,
} satisfies Record<string, spell>;

export default spells;
