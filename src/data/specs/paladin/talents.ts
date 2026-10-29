import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';

const talents = {
    FORBEARANCE: {
        name: "Forbearance",
        id: 25771,
        icon: 'spell_holy_removecurse',
        category: CATEGORY.OTHER,
    },
    CRUSADER_AURA: {
        name: "Crusader Aura",
        id: 32223,
        icon: 'spell_holy_crusaderaura',
        castTime: 0,
        category: CATEGORY.OTHER,
    },
    BLESSING_OF_FREEDOM: {
        name: "Blessing of Freedom",
        id: 1044,
        icon: 'spell_holy_sealofvalor',
        castTime: 0,
        cooldown: 25,
        duration: 8,
        exclusive: [469304],
        category: CATEGORY.UTILITY,
    },
    TURN_EVIL: {
        name: "Turn Evil",
        id: 10326,
        icon: 'ability_paladin_turnevil',
        castTime: 1.5,
        cooldown: 15,
        duration: 40,
        category: CATEGORY.UTILITY,
    },
    UNBREAKABLE_SPIRIT: {
        name: "Unbreakable Spirit",
        id: 114154,
        icon: 'spell_holy_holyguidance',
    },
    BLINDING_LIGHT: {
        name: "Blinding Light",
        id: 115750,
        icon: 'ability_paladin_blindinglight',
        castTime: 0,
        cooldown: 90,
        category: CATEGORY.UTILITY,
    },
    LIGHTS_REVOCATION: {
        name: "Light's Revocation",
        id: 146956,
        icon: 'spell_holy_divineshield',
    },
    BLESSING_OF_DAWN: {
        name: "Blessing of Dawn",
        id: 183416,
        icon: 'achievement_zone_valeofeternalblossoms',
    },
    DIVINE_STEED: {
        name: "Divine Steed",
        id: 190784,
        icon: 'ability_paladin_divinesteed',
        castTime: 0,
        cooldown: 45,
        category: CATEGORY.UTILITY,
    },
    HOLY_RITUAL: {
        name: "Holy Ritual",
        id: 199422,
        icon: 'inv_relics_libramoftruth',
    },
    CONSECRATED_GROUND: {
        name: "Consecrated Ground",
        id: 204054,
        icon: 'ability_paladin_righteousvengeance',
    },
    CLEANSE_TOXINS: {
        name: "Cleanse Toxins",
        id: 213644,
        icon: 'spell_holy_renew',
        castTime: 0,
        cooldown: 8,
    },
    CAVALIER: {
        name: "Cavalier",
        id: 230332,
        icon: 'ability_paladin_divinesteed',
    },
    FIST_OF_JUSTICE: {
        name: "Fist of Justice",
        id: 234299,
        icon: 'spell_holy_fistofjustice',
    },
    UNBOUND_FREEDOM: {
        name: "Unbound Freedom",
        id: 305394,
        icon: 'spell_holy_sealofvalor',
    },
    HEALING_HANDS: {
        name: "Healing Hands",
        id: 326734,
        icon: 'ability_paladin_infusionoflight',
    },
    GOLDEN_PATH: {
        name: "Golden Path",
        id: 377128,
        icon: 'ability_priest_cascade',
        exclusive: [469434],
    },
    QUICKENED_INVOCATION: {
        name: "Quickened Invocation",
        id: 379391,
        icon: 'spell_holy_pureofheart',
        exclusive: [386738],
    },
    SACRIFICE_OF_THE_JUST: {
        name: "Sacrifice of the Just",
        id: 384820,
        icon: 'spell_holy_sealofsacrifice',
        exclusive: [384914],
    },
    IMPROVED_BLESSING_OF_PROTECTION: {
        name: "Improved Blessing of Protection",
        id: 384909,
        icon: 'spell_holy_sealofprotection',
    },
    RECOMPENSE: {
        name: "Recompense",
        id: 384914,
        icon: 'ability_racial_foregedinflames',
        exclusive: [384820],
    },
    AFTERIMAGE: {
        name: "Afterimage",
        id: 385414,
        icon: 'spell_holy_aspiration',
    },
    OBDURACY: {
        name: "Obduracy",
        id: 385427,
        icon: 'ability_paladin_speedoflight',
        maxRank: 2,
    },
    SEAL_OF_MIGHT: {
        name: "Seal of Might",
        id: 385450,
        icon: 'spell_holy_sealofwrath',
        maxRank: 2,
    },
    HOLY_AEGIS: {
        name: "Holy Aegis",
        id: 385515,
        icon: 'ability_paladin_touchedbylight',
    },
    AURAS_OF_THE_RESOLUTE: {
        name: "Auras of the Resolute",
        id: 385633,
        icon: 'spell_holy_devotionaura',
    },
    ECHOING_BLESSINGS: {
        name: "Echoing Blessings",
        id: 387801,
        icon: 'achievement_dungeon_heroic_gloryoftheraider',
    },
    IMPROVED_CLEANSE: {
        name: "Improved Cleanse",
        id: 393024,
        icon: 'spell_holy_purify',
    },
    SANCTIFIED_PLATES: {
        name: "Sanctified Plates",
        id: 402964,
        icon: 'inv_chest_plate_raidpaladin_s_01',
        maxRank: 2,
    },
    LIGHTFORGED_BLESSING: {
        name: "Lightforged Blessing",
        id: 403479,
        icon: 'spell_holy_circleofrenewal',
    },
    PUNISHMENT: {
        name: "Punishment",
        id: 403530,
        icon: 'spell_holy_rebuke',
    },
    GUIDED_PRAYER: {
        name: "Guided Prayer",
        id: 404357,
        icon: 'ability_crown_of_the_heavens_icon',
    },
    FAITHS_ARMOR: {
        name: "Faith's Armor",
        id: 406101,
        icon: 'inv_shield_1h_newplayer_a_01',
    },
    WRENCH_EVIL: {
        name: "Wrench Evil",
        id: 460720,
        icon: 'ability_paladin_turnevil',
        exclusive: [469317],
    },
    WORTHY_SACRIFICE: {
        name: "Worthy Sacrifice",
        id: 469279,
        icon: 'ability_paladin_handoflight',
        exclusive: [469321],
    },
    STEED_OF_LIBERTY: {
        name: "Steed of Liberty",
        id: 469304,
        icon: 'spell_holy_crusaderaura',
        exclusive: [1044],
    },
    EYE_FOR_AN_EYE: {
        name: "Eye for an Eye",
        id: 469309,
        icon: 'spell_holy_eyeforaneye',
    },
    STOICISM: {
        name: "Stoicism",
        id: 469316,
        icon: 'spell_magic_magearmor',
    },
    STAND_AGAINST_EVIL: {
        name: "Stand Against Evil",
        id: 469317,
        icon: 'spell_holy_excorcism',
        exclusive: [460720],
    },
    RIGHTEOUS_PROTECTION: {
        name: "Righteous Protection",
        id: 469321,
        icon: 'spell_holy_blessingofprotection',
        exclusive: [469279],
    },
    LIGHTS_COUNTENANCE: {
        name: "Light's Countenance",
        id: 469325,
        icon: 'inv_shoulder_raidpaladindragon_d_01',
    },
    SACRED_STRENGTH: {
        name: "Sacred Strength",
        id: 469337,
        icon: 'spell_holy_righteousnessaura',
        exclusive: [408459],
    },
    DIVINE_SPURS: {
        name: "Divine Spurs",
        id: 469409,
        icon: 'ability_mount_charger',
    },
    A_JUST_REWARD: {
        name: "A Just Reward",
        id: 469411,
        icon: 'spell_holy_blindingheal',
        maxRank: 2,
    },
    LIGHTBEARER: {
        name: "Lightbearer",
        id: 469416,
        icon: 'spell_paladin_clarityofpurpose',
    },
    SELFLESS_HEALER: {
        name: "Selfless Healer",
        id: 469434,
        icon: 'ability_paladin_gaurdedbythelight',
        exclusive: [377128],
    },
    INSPIRED_GUARD: {
        name: "Inspired Guard",
        id: 469439,
        icon: 'spell_holy_divineprotection',
    },
    HOLY_REPRIEVE: {
        name: "Holy Reprieve",
        id: 469445,
        icon: 'spell_holy_sealofsalvation',
    },
    DIVINE_REACH: {
        name: "Divine Reach",
        id: 469476,
        icon: 'spell_holy_mindvision',
    },
    BLESSED_CALLING: {
        name: "Blessed Calling",
        id: 469770,
        icon: 'ability_paladin_judgementofthepure',
    },
    LEAD_THE_CHARGE: {
        name: "Lead the Charge",
        id: 469780,
        icon: 'inv_helm_plate_raidpaladin_r_01mythic',
    },
    BLESSING_OF_DUSK: {
        name: "Blessing of Dusk",
        id: 1241945,
        icon: 'achievement_zone_newshadowmoonvalley',
    },
    VENGEFUL_WRATH: {
        name: "Vengeful Wrath",
        id: 1241958,
        icon: 'spell_paladin_hammerofwrath',
        maxRank: 2,
    },
    SHIELD_OF_VENGEANCE: {
        name: "Shield of Vengeance",
        id: 1261562,
        icon: 'ability_paladin_shieldofthetemplar',
    },
    FEAR_NO_EVIL: {
        name: "Fear No Evil",
        id: 1265541,
        icon: 'inv_bracer_plate_raidpaladin_r_01mythic',
    },
    BROUGHT_TO_LIGHT: {
        name: "Brought to Light",
        id: 1265549,
        icon: 'paladin_holy',
    },
    ARMORY_OF_LIGHT: {
        name: "Armory of Light",
        id: 1277443,
        icon: 'inv12_ability_paladin_sentinel',
    },
} satisfies Record<string, spell>;

export default talents;
export { talents as PALADIN_TALENTS };
