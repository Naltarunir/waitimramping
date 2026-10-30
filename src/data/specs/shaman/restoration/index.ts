import type { specialization } from "@data/class";
import SHARED_SHAMAN_SPELLS from "@data/specs/shaman/spells";
import SHARED_SHAMAN_TALENTS from "@data/specs/shaman/talents";
import RESTORATION_SHAMAN_SPELLS from "@data/specs/shaman/restoration/spells";
import RESTORATION_SHAMAN_TALENTS from "@data/specs/shaman/restoration/talents";
import RESTORATION_SHAMAN_ROTATIONS from "@data/specs/shaman/restoration/rotations";
import RESTORATION_SHAMAN_BUGS from "@data/specs/shaman/restoration/bugs";
import RESTORATION_SHAMAN_INTERACTIONS from '@data/specs/shaman/restoration/interactions.json';

const RESTORATION_SHAMAN = ({
  key: "shaman_restoration",
  spells: { ...SHARED_SHAMAN_SPELLS, ...RESTORATION_SHAMAN_SPELLS },
  talents: { ...SHARED_SHAMAN_TALENTS, ...RESTORATION_SHAMAN_TALENTS },
  rotations: RESTORATION_SHAMAN_ROTATIONS,
  bugs: RESTORATION_SHAMAN_BUGS,
  interactions: RESTORATION_SHAMAN_INTERACTIONS,
  icon: "spell_nature_magicimmunity",
  name: "Restoration",
  class: "Shaman",
  color: "#7cb63c",
  masteryCoefficient: 3.0,
  stats: {
    intellect: 0,
    mastery: 3.0 * 8, // 24%
    crit: 0,
    versatility: 0,
    haste: 0,
  },
} satisfies specialization);

export default RESTORATION_SHAMAN;

//ToDo: 
// Manual Fix interactions
// Check the Spell Table (something is very wrong there)
// Check the correct spell chath.
// Move spells to talents according to reality (simc expo. is wrong)