import type spell from '@data/spells/spell';
import { CATEGORY } from '@data/spells/spell';
import talents from '@data/specs/evoker/preservation/talents';

const spells = {
  TEMPORAL_ANOMALY: {
    name: 'Temporal Anomaly',
    id: 373861,
    icon: 'ability_evoker_temporalanomaly',
    castTime: 1.5,
    category: CATEGORY.HEALING,
  },
  ECHO: {
    name: 'Echo',
    id: 364343,
    icon: 'ability_evoker_echo',
    castTime: 0,
    category: CATEGORY.HEALING,
  },
  VERDANT_EMBRACE: {
    name: 'Verdant Embrace',
    id: 360995,
    icon: 'ability_evoker_rescue',
    castTime: 0,
    category: CATEGORY.HEALING,
  },
  DREAM_BREATH: {
    name: 'Dream Breath',
    id: 355936,
    icon: 'ability_evoker_dreambreath',
    castTime: 2.5,
    empowerLevel: 5,
    category: CATEGORY.HEALING,
  },
  EMERALD_BLOSSOM: {
    name: 'Emerald Blossom',
    id: 355913,
    icon: 'ability_evoker_emeraldblossom',
    castTime: 0,
    category: CATEGORY.HEALING,
  },
  REVERSION: {
    name: 'Reversion',
    id: 366155,
    icon: 'ability_evoker_reversion',
    castTime: 0,
    category: CATEGORY.HEALING,
  },
  STASIS: {
    name: 'Stasis',
    id: 370537,
    icon: 'ability_evoker_stasis',
    castTime: 0,
    category: CATEGORY.COOLDOWN,
  },
  HOVER: {
    name: 'Hover',
    id: 358267,
    icon: 'ability_evoker_hover',
    castTime: 0,
    category: CATEGORY.UTILITY,
  },
  FIRE_BREATH: {
    name: 'Fire Breath',
    id: 357208,
    icon: 'ability_evoker_firebreath',
    castTime: 0,
    cooldown: 30,
    duration: 2.5,
    category: CATEGORY.DAMAGE,
  },
  NATURALIZE: {
    name: 'Naturalize',
    id: 360823,
    icon: 'ability_evoker_fontofmagic_green',
    castTime: 0,
    cooldown: 8,
    category: CATEGORY.UTILITY,
  },
  MASS_RETURN: {
    name: 'Mass Return',
    id: 361178,
    icon: 'ability_evoker_return2',
    castTime: 10,
    category: CATEGORY.UTILITY,
  },
  AZURE_STRIKE: {
    name: 'Azure Strike',
    id: 362969,
    icon: 'ability_evoker_azurestrike',
    castTime: 0,
    coeff: 1.63185,
    category: CATEGORY.DAMAGE,
  },
  TIME_DILATION: talents.TIME_DILATION,
  DREAM_FLIGHT: talents.DREAM_FLIGHT,
  REWIND: talents.REWIND,
  TEMPORAL_BARRIER: talents.TEMPORAL_BARRIER,
} satisfies Record<string, spell>;

export default spells;
export { spells as PRESERVATION_EVOKER_SPELLS };
