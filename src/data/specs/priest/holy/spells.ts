import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';
import talents from '@data/specs/priest/holy/talents';

const spells = {
  HOLY_WORD_CHASTISE: {
    name: 'Holy Word: Chastise',
    id: 88625,
    icon: 'spell_holy_chastise',
    category: CATEGORY.DAMAGE,
  },
  GUARDIAN_SPIRIT: {
    name: 'Guardian Spirit',
    id: 47788,
    icon: 'spell_holy_guardianspirit',
    category: CATEGORY.DEFENSIVE,
  },
  FLASH_HEAL: {
    name: 'Flash Heal',
    id: 2061,
    icon: 'spell_holy_flashheal',
    category: CATEGORY.HEALING,
  },
  PRAYER_OF_HEALING: {
    name: 'Prayer of Healing',
    id: 596,
    icon: 'spell_holy_prayerofhealing02',
    category: CATEGORY.HEALING,
  },
  RENEW: {
    name: 'Renew',
    id: 139,
    icon: 'spell_holy_renew',
    category: CATEGORY.HEALING,
  },
  HOLY_NOVA: {
    name: 'Holy Nova',
    id: 132157,
    icon: 'spell_holy_holynova',
    category: CATEGORY.HEALING,
  },
  PURIFY: {
    name: 'Purify',
    id: 527,
    icon: 'spell_holy_dispelmagic',
    castTime: 0,
    cooldown: 8,
    category: CATEGORY.UTILITY,
  },
  SMITE: {
    name: 'Smite',
    id: 585,
    icon: 'spell_holy_holysmite',
    castTime: 1.5,
    coeff: 0.987,
    category: CATEGORY.DAMAGE,
  },
  PRAYER_OF_MENDING: {
    name: 'Prayer of Mending',
    id: 33076,
    icon: 'spell_holy_prayerofmendingtga',
    castTime: 0,
    cooldown: 12,
  },
  ECHO_OF_LIGHT: {
    name: 'Echo of Light',
    id: 77489,
    icon: 'spell_holy_aspiration',
    castTime: 0,
    duration: 4,
    category: CATEGORY.PASSIVE,
  },
  SPIRIT_OF_REDEMPTION: {
    name: 'Spirit of Redemption',
    id: 20711,
    icon: 'inv_enchant_essenceeternallarge',
    category: CATEGORY.PASSIVE,
  },
  HOLY_WORD_SERENITY: talents.HOLY_WORD_SERENITY,
  HOLY_WORD_SANCTIFY: talents.HOLY_WORD_SANCTIFY,
  DIVINE_HYMN: talents.DIVINE_HYMN,
  APOTHEOSIS: talents.APOTHEOSIS,
  HALO: talents.HALO,
} satisfies Record<string, spell>;

export default spells;
export { spells as HOLY_PRIEST_SPELLS };
