import { StyledAditionalsCard, AddOnDescription, AddOnContent} from '../styledComponents/index'
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import ChildFriendly from '@material-ui/icons/ChildFriendly';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import AddIcon from '@material-ui/icons/Add';
import { BABY_CHAIR, CAR_COVERAGE, THIRD_PARTY_COVERAGE } from '../constants/constants';
import { Button } from '../../../shared/styledComponents';

const handleOnClick = () => {
  
};

interface IAditionalsCardProps {
    type: string;
}

const AditionalsCard = ({type}:IAditionalsCardProps) => (
 <StyledAditionalsCard>
    {type === BABY_CHAIR && <AddOnContent>
        <ChildFriendly style={{ color:'green' }}/>
        <AddOnDescription>
            <div>
                Cadeira de bebê 
            </div>
            R$20,00 por dia 
        </AddOnDescription>
    </AddOnContent>
    }
    {type === CAR_COVERAGE && <AddOnContent>
        <VerifiedUser style={{ color:'green' }}/>
        <AddOnDescription>
            <div>
                Cobertura do carro
            </div>
            R$28,00 por dia 
        </AddOnDescription>
    </AddOnContent>
    }
    {type === THIRD_PARTY_COVERAGE && <AddOnContent>
        <AssignmentInd style={{ color:'green' }}/>
        <AddOnDescription>
            <div>
                Cobertura terceiros
            </div>
            R$10,00 por dia 
        </AddOnDescription>
    </AddOnContent>
    }
    <Button 
        width={80} 
        negativeMargin={-1} 
        onClick={handleOnClick}
    >
        <AddIcon/>
    </Button>
 </StyledAditionalsCard>
)

export default AditionalsCard