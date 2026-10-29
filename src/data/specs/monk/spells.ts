import type spell from "@data/spells/spell";
import { CATEGORY } from "@data/spells/spell";
import { SCHOOLS } from "@data/shared/schools";
import talents from "@data/specs/monk/talents";

const spells = {
    DISABLE: {
        name: "Disable",
        id: 116095,
        icon: 'ability_shockwave',
        category: CATEGORY.UTILITY,
    },
    LEG_SWEEP: {
        name: "Leg Sweep",
        id: 119381,
        icon: 'ability_monk_legsweep',
        category: CATEGORY.UTILITY,
    },
    TOUCH_OF_DEATH: {
        name: "Touch of Death",
        id: 115080,
        icon: 'ability_monk_touchofdeath',
        school: SCHOOLS.PHYSICAL,
    },
    TEACHINGS_OF_THE_MONASTERY: {
        name: "Teachings of the Monastery",
        id: 116645,
        icon: 'passive_monk_teachingsofmonastery',
        category: CATEGORY.PASSIVE,
        effects: {
            rskResetChance: 12, // percent
        }
    },
    TIGERS_LUST: {
        name: "Tiger's Lust",
        id: 116841,
        icon: 'ability_monk_tigerslust',
        category: CATEGORY.UTILITY,
    },
    TRANSCENDENCE: {
        name: "Transcendence",
        id: 434763,
        icon: 'monk_ability_transcendence',
        category: CATEGORY.UTILITY,
    },
    TRANSCENDENCE_TRANSFER: {
        name: "Transcendence: Transfer",
        id: 434766,
        icon: 'spell_shaman_spectraltransformation',
        category: CATEGORY.UTILITY,
    },
    TRANSCENDENCE_LINKED_SPIRITS: {
        name: "Transcendence: Linked Spirits",
        id: 434774,
        icon: 'monk_ability_transcendence',
    },
    ROLL: {
        name: "Roll",
        id: 109132,
        icon: 'ability_monk_roll',
        castTime: 0,
        cooldown: 20,
        category: CATEGORY.UTILITY,
    },
    PROVOKE: {
        name: "Provoke",
        id: 115546,
        icon: 'ability_monk_provoke',
        castTime: 0,
        cooldown: 8,
        category: CATEGORY.UTILITY,
    },
    ZEN_FLIGHT: {
        name: "Zen Flight",
        id: 125883,
        icon: 'ability_monk_zenflight',
        castTime: 0,
        category: CATEGORY.UTILITY,
    },
    PARALYSIS: talents.PARALYSIS,
    FORTIFYING_BREW: talents.FORTIFYING_BREW,
    CHI_TORPEDO: talents.CHI_TORPEDO,
    RING_OF_PEACE: talents.RING_OF_PEACE,
    SONG_OF_CHI_JI: talents.SONG_OF_CHI_JI,
} satisfies Record<string, spell>;

export default spells;
export { spells as SHARED_MONK_SPELLS };
