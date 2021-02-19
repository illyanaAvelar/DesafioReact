import { StyledAditionalsCard } from '../styledComponents/index'
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import ChildFriendly from '@material-ui/icons/ChildFriendly';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import { BABY_CHAIR, CAR_COVERAGE, THIRD_PARTY_COVERAGE } from '../constants/constants';
interface IAditionalsCardProps {
    type: string;
}

const AditionalsCard = ({type}:IAditionalsCardProps) => (
 <StyledAditionalsCard>
    {type === BABY_CHAIR &&
    <ChildFriendly style={{ color:'green' }}/>
    }
    {type === CAR_COVERAGE &&
    <VerifiedUser style={{ color:'green' }}/>
    }
    {type === THIRD_PARTY_COVERAGE &&
    <AssignmentInd style={{ color:'green' }}/>
    }
    TESTE
 </StyledAditionalsCard>
)

export default AditionalsCard