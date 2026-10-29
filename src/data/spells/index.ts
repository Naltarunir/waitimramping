import RESTORATION_DRUID from '@data/specs/druid/restoration/druid/spells';
import DRUID from '@data/specs/druid/spells';
import PRESERVATION_EVOKER from '@data/specs/evoker/preservation/spells';
import EVOKER from '@data/specs/evoker/spells';
import MISTWEAVER_MONK from '@data/specs/monk/mistweaver/spells';
import SHARED_MONK_SPELLS from '@data/specs/monk/spells';
import HOLY_PALADIN from '@data/specs/paladin/holy/spells';
import PALADIN from '@data/specs/paladin/spells';
import PALADIN_TALENTS from '@data/specs/paladin/talents';
import DISCIPLINE_PRIEST from '@data/specs/priest/discipline/spells';
import HOLY_PRIEST from '@data/specs/priest/holy/spells';
import PRIEST from '@data/specs/priest/spells';
import RESTORATION_SHAMAN from '@data/specs/shaman/restoration/spells';
import SHAMAN from '@data/specs/shaman/spells';

const SPELLS = {
    ...DRUID,
    ...RESTORATION_DRUID,
    ...SHARED_MONK_SPELLS,
    ...MISTWEAVER_MONK,
    ...EVOKER,
    ...PRESERVATION_EVOKER,
    ...PALADIN,
    ...HOLY_PALADIN,
    ...PALADIN_TALENTS,
    ...PRIEST,
    ...DISCIPLINE_PRIEST,
    ...HOLY_PRIEST,
    ...SHAMAN,
    ...RESTORATION_SHAMAN
}

export const getSpellById = (id: number) =>
    Object.values(SPELLS).find(s => s.id === id);

export default SPELLS;