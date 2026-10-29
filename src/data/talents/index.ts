import RESTORATION_DRUID from '@data/specs/druid/restoration/druid/talents';
import DRUID from '@data/specs/druid/talents';
import PRESERVATION_EVOKER from '@data/specs/evoker/preservation/talents';
import EVOKER from '@data/specs/evoker/talents';
import MONK from '@data/specs/monk/talents';
import MISTWEAVER_MONK from '@data/specs/monk/mistweaver/talents';
import HOLY_PALADIN from '@data/specs/paladin/holy/talents';
import DISCIPLINE_PRIEST from '@data/specs/priest/discipline/talents';
import HOLY_PRIEST from '@data/specs/priest/holy/talents';
import PRIEST from '@data/specs/priest/talents';
import RESTORATION_SHAMAN from '@data/specs/shaman/restoration/talents';
import SHAMAN from '@data/specs/shaman/talents';

const TALENTS = {
    ...DRUID,
    ...RESTORATION_DRUID,
    ...EVOKER,
    ...PRESERVATION_EVOKER,
    ...HOLY_PALADIN,
    ...PRIEST,
    ...DISCIPLINE_PRIEST,
    ...HOLY_PRIEST,
    ...SHAMAN,
    ...RESTORATION_SHAMAN,
    ...MONK,
    ...MISTWEAVER_MONK,
}

export default TALENTS;
