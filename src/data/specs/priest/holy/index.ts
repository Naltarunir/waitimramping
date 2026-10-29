import type { specialization } from '@data/class';
import PRIEST_SPELLS from '@data/specs/priest/spells';
import HOLY_PRIEST_SPELLS from '@data/specs/priest/holy/spells';
import HOLY_PRIEST_TALENTS from '@data/specs/priest/holy/talents';
import HOLY_PRIEST_ROTATIONS from '@data/specs/priest/holy/rotations';

const HOLY_PRIEST = ({
  key: "priest_holy",
  spells: { ...PRIEST_SPELLS, ...HOLY_PRIEST_SPELLS },
  talents: HOLY_PRIEST_TALENTS,
  rotations: HOLY_PRIEST_ROTATIONS,
  icon: 'spell_holy_guardianspirit',
  name: 'Holy',
  class: 'Priest',
  color: '#668ea7',
  masteryCoefficient: 0.908437,
  stats: {
    intellect: 0,
    mastery: 0.908437 * 8, // 7.267496%
    crit: 0,
    versatility: 0,
    haste: 0,
  },
} satisfies specialization);

export default HOLY_PRIEST;