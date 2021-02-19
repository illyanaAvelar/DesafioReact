import { AditionalsCard, AditionalsCardContainer } from './styledComponents/index'

function CardList() {
  return (
      <>
        <AditionalsCardContainer>
            <AditionalsCard/>
            <AditionalsCard/>
            <AditionalsCard/>
        </AditionalsCardContainer>
        <AditionalsCardContainer>
            <AditionalsCard/>
            <AditionalsCard/>
            <AditionalsCard/>
        </AditionalsCardContainer>
      </>
  );
}

export default CardList;