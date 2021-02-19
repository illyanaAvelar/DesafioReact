import { AditionalsCardContainer } from './styledComponents/index'
import AditionalsCard from './components/AditionalsCard'
import { BABY_CHAIR, CAR_COVERAGE, THIRD_PARTY_COVERAGE } from './constants/constants';

function CardList() {
  return (
      <>
        <AditionalsCardContainer>
            <AditionalsCard type={BABY_CHAIR}/>
            <AditionalsCard type={CAR_COVERAGE}/>
            <AditionalsCard type={THIRD_PARTY_COVERAGE}/>
        </AditionalsCardContainer>
        <AditionalsCardContainer>
            <AditionalsCard type={BABY_CHAIR}/>
            <AditionalsCard type={CAR_COVERAGE}/>
            <AditionalsCard type={THIRD_PARTY_COVERAGE}/>
        </AditionalsCardContainer>
      </>
  );
}

export default CardList;