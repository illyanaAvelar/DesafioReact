import { CardListContainer } from './styledComponents/index'
import Card from '../Card//Card'

function CardList() {
const object123 = {
  obj1: 10
}
  return (
   <CardListContainer>
       <Card group='A' type="Tipo" name="Fiat Uno" details={object123}/>
       <Card group='A' type="Tipo" name="Fiat Uno" details={object123}/>
       <Card group='A' type="Tipo" name="Fiat Uno" details={object123}/>
   </CardListContainer>
  );
}

export default CardList;