import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';

const talents = {
    FAST_FEET: {
        name: "Fast Feet",
        id: 388809,
        icon: 'ability_monk_risingsunkick',
        effects: {
            risingSunKickIncrease: 0.7,
            spinningCraneKickIncrease: 0.1,
        },
    },
    CHI_PROFICIENCY: {
        name: "Chi Proficiency",
        id: 450426,
        icon: 'ability_monk_chiswirl',
        maxRank: 2,
        effects: {
            magicDamageIncrease: 0.02,
            healingDoneIncrease: 0.02,
        },
    },
    FEROCITY_OF_XUEN: {
        name: "Ferocity of Xuen",
        id: 388674,
        icon: 'ability_mount_pinktiger',
        maxRank: 2,
        effects: {
            damageIncrease: 0.02,
        }
    },
    MARTIAL_INSTINCTS: {
        name: "Martial Instincts",
        id: 450427,
        icon: 'ability_monk_palmstrike',
        maxRank: 2,
        effects: {
            damageIncrease: 0.02,
        }
    },
    STILLSTEP_COIL: {
        name: "Stillstep Coil",
        id: 1266733,
        icon: 'inv_helm_leather_raidmonkprogenitormythic_d_01',
    },
    SAVE_THEM_ALL: {
        name: "Save Them All",
        id: 389579,
        icon: 'inv_weapon_hand_22',
    },
    DIFFUSE_MAGIC: {
        name: "Diffuse Magic",
        id: 1243287,
        icon: 'spell_monk_diffusemagic',
    },
    ELUSIVE_MISTS: {
        name: "Elusive Mists",
        id: 388681,
        icon: 'ability_monk_soothingmists',
    },
    CHI_WAVE: {
        name: "Chi Wave",
        id: 450391,
        icon: 'ability_monk_chiwave',
    },
    TRANSCENDENCE: {
        name: "Transcendence",
        id: 101643,
        icon: 'monk_ability_transcendence',
    },
    TRANSCENDENCE_TRANSFER: {
        name: "Transcendence: Transfer",
        id: 119996,
        icon: 'spell_shaman_spectraltransformation',
    },
    TRANSCENDENCE_LINKED_SPIRITS: {
        name: "Transcendence: Linked Spirits",
        id: 434774,
        icon: 'monk_ability_transcendence',
    },
    PARALYSIS: {
        name: "Paralysis",
        id: 115078,
        icon: 'ability_monk_paralysis',
        castTime: 0,
        cooldown: 45,
        duration: 60,
        category: CATEGORY.UTILITY,
    },
    CRASHING_MOMENTUM: {
        name: "Crashing Momentum",
        id: 450342,
        icon: 'ability_monk_blackoutkick',
    },
    CALMING_PRESENCE: {
        name: "Calming Presence",
        id: 388664,
        icon: 'inv_misc_orb_01',
        effects: {
            damageReduction: 3, // percent
        }
    },
    FORTIFYING_BREW: {
        name: "Fortifying Brew",
        id: 115203,
        icon: 'ability_monk_fortifyingale_new',
        castTime: 0,
        cooldown: 360,
        category: CATEGORY.DEFENSIVE,
    },
    IMPROVED_TOUCH_OF_DEATH: {
        name: "Improved Touch of Death",
        id: 322113,
        icon: 'ability_monk_touchofdeath',
    },
    MIST_CALLER: {
        name: "Mist Caller",
        id: 1266811,
        icon: 'ability_monk_serenity',
    },
    VITAL_CLARITY: {
        name: "Vital Clarity",
        id: 1266748,
        icon: 'ability_monk_souldance',
    },
    VIVACIOUS_VIVIFICATION: {
        name: "Vivacious Vivification",
        id: 388812,
        icon: 'ability_monk_vivify',
    },
    SERENE_SURGE: {
        name: "Serene Surge",
        id: 1266734,
        icon: 'ability_monk_surgingmist',
    },
    CHI_TORPEDO: {
        name: "Chi Torpedo",
        id: 115008,
        icon: 'ability_monk_quitornado',
        castTime: 0,
        cooldown: 20,
        duration: 1.1,
        exclusive: [115173],
        category: CATEGORY.UTILITY,
    },
    STAGGER: {
        name: "Stagger",
        id: 115069,
        icon: 'monk_stance_drunkenox',
    },
    CELERITY: {
        name: "Celerity",
        id: 115173,
        icon: 'ability_monk_quipunch',
        exclusive: [115008],
    },
    SUMMON_BLACK_OX_STATUE: {
        name: "Summon Black Ox Statue",
        id: 115315,
        icon: 'monk_ability_summonoxstatue',
        castTime: 0,
        cooldown: 10,
        duration: 900,
    },
    SPEAR_HAND_STRIKE: {
        name: "Spear Hand Strike",
        id: 116705,
        icon: 'ability_monk_spearhand',
        castTime: 0,
        cooldown: 15,
        duration: 5,
    },
    RING_OF_PEACE: {
        name: "Ring of Peace",
        id: 116844,
        icon: 'spell_monk_ringofpeace',
        castTime: 0,
        cooldown: 45,
        duration: 5,
        exclusive: [198898],
        category: CATEGORY.UTILITY,
    },
    WINDWALKING: {
        name: "Windwalking",
        id: 157411,
        icon: 'monk_stance_whitetiger',
    },
    SONG_OF_CHI_JI: {
        name: "Song of Chi-Ji",
        id: 198898,
        icon: 'inv_chaos_orb',
        castTime: 1.8,
        cooldown: 30,
        duration: 5,
        exclusive: [116844],
        category: CATEGORY.UTILITY,
    },
    DETOX: {
        name: "Detox",
        id: 218164,
        icon: 'ability_rogue_imrovedrecuperate',
        castTime: 0,
        cooldown: 8,
    },
    TIGER_TAIL_SWEEP: {
        name: "Tiger Tail Sweep",
        id: 264348,
        icon: 'ability_monk_legsweep',
    },
    HASTY_PROVOCATION: {
        name: "Hasty Provocation",
        id: 328670,
        icon: 'ability_monk_provoke',
        exclusive: [450503],
    },
    ANCIENT_ARTS: {
        name: "Ancient Arts",
        id: 344359,
        icon: 'ability_monk_dpsstance',
        maxRank: 2,
    },
    STRENGTH_OF_SPIRIT: {
        name: "Strength of Spirit",
        id: 387276,
        icon: 'ability_monk_healthsphere',
        exclusive: [392910],
    },
    GRACE_OF_THE_CRANE: {
        name: "Grace of the Crane",
        id: 388811,
        icon: 'monk_ability_cherrymanatea',
    },
    EXPEDITIOUS_FORTIFICATION: {
        name: "Expeditious Fortification",
        id: 388813,
        icon: 'ability_monk_fortifyingale_new',
        exclusive: [388814],
    },
    IRONSHELL_BREW: {
        name: "Ironshell Brew",
        id: 388814,
        icon: 'ability_monk_fortifyingale_new',
        exclusive: [388813],
    },
    IMPROVED_DETOX: {
        name: "Improved Detox",
        id: 388874,
        icon: 'ability_rogue_imrovedrecuperate',
    },
    VIGOROUS_EXPULSION: {
        name: "Vigorous Expulsion",
        id: 392900,
        icon: 'ability_monk_expelharm',
    },
    PROFOUND_REBUTTAL: {
        name: "Profound Rebuttal",
        id: 392910,
        icon: 'ability_monk_expelharm',
        exclusive: [387276],
    },
    ESCAPE_FROM_REALITY: {
        name: "Escape from Reality",
        id: 394110,
        icon: 'monk_ability_transcendence',
        exclusive: [434774],
    },
    FATAL_TOUCH: {
        name: "Fatal Touch",
        id: 394123,
        icon: 'ability_monk_touchofdeath',
    },
    YULONS_GRACE: {
        name: "Yu'lon's Grace",
        id: 414131,
        icon: 'ability_monk_dragonkick',
    },
    DANCE_OF_THE_WIND: {
        name: "Dance of the Wind",
        id: 414132,
        icon: 'ability_monk_dematerialize',
    },
    LIGHTER_THAN_AIR: {
        name: "Lighter Than Air",
        id: 449582,
        icon: 'ability_monk_ridethewind',
    },
    RUSHING_REFLEXES: {
        name: "Rushing Reflexes",
        id: 450154,
        icon: 'ability_monk_yulonsgift',
    },
    PRESSURE_POINTS: {
        name: "Pressure Points",
        id: 450432,
        icon: 'ability_monk_deadlyreach',
    },
    PEACE_AND_PROSPERITY: {
        name: "Peace and Prosperity",
        id: 450448,
        icon: 'inv_inscription_deck_redcrane',
    },
    QUICK_FOOTED: {
        name: "Quick Footed",
        id: 450503,
        icon: 'ability_monk_hurricanestrike',
        exclusive: [328670],
    },
    WINDS_REACH: {
        name: "Wind's Reach",
        id: 450514,
        icon: 'ability_monk_zenflight',
    },
    BOUNDING_AGILITY: {
        name: "Bounding Agility",
        id: 450520,
        icon: 'ability_monk_roll',
    },
    JADE_WALK: {
        name: "Jade Walk",
        id: 450553,
        icon: 'spell_lifegivingspeed',
    },
    HEALING_WINDS: {
        name: "Healing Winds",
        id: 450560,
        icon: 'ability_monk_pathofmists',
    },
    FLOW_OF_CHI: {
        name: "Flow of Chi",
        id: 450569,
        icon: 'ability_monk_healthsphere',
    },
    SPIRITS_ESSENCE: {
        name: "Spirit's Essence",
        id: 450595,
        icon: 'spell_shaman_spectraltransformation',
    },
    SWIFT_ART: {
        name: "Swift Art",
        id: 450622,
        icon: 'ability_monk_standingkick',
    },
    ENERGY_TRANSFER: {
        name: "Energy Transfer",
        id: 450631,
        icon: 'monk_ability_avertharm',
    },
    CELESTIAL_DETERMINATION: {
        name: "Celestial Determination",
        id: 450638,
        icon: 'ability_monk_essencefont',
    },
    SILENT_SANCTUARY: {
        name: "Silent Sanctuary",
        id: 1266719,
        icon: 'spell_monk_zenpilgrimage',
    },
    REINVIGORATION: {
        name: "Reinvigoration",
        id: 1266740,
        icon: 'ability_monk_quipunch',
    },
    CHI_TRANSFER: {
        name: "Chi Transfer",
        id: 1272452,
        icon: 'ability_monk_zenmeditation',
    },
    ZENITH_STOMP: {
        name: "Zenith Stomp",
        id: 1272694,
        icon: 'inv_ability_monk_jadefirestomp',
    },
    TIGER_FANG: {
        name: "Tiger Fang",
        id: 1272781,
        icon: 'ability_mount_siberiantigermount',
    },
} satisfies Record<string, spell>;

export default talents;
export { talents as SHARED_MONK_TALENTS };
