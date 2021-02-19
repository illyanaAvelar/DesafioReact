import Header from '../../shared/components/Header/Header'
import CardList from '../../components/CardList/CardList'
import { Button } from '../../shared/styledComponents/index'
import Aditionals from '../../components/Aditionals/Aditionals'
import { Label } from '../../components/Main/styledComponents/index'
const RentalSpecifications = () => {
    return(
    <>
        <Header/>
        <Label color='black'>Escolha um grupo de carros</Label>
        <CardList/>
        <Label color='black'>Escolha adicionais caso deseje</Label>
        <Aditionals/>
        <Label color='black'>Preencha seus dados para realizar a reserva</Label>
        <Button negativeMargin={-15} width={250}>Realizar Reserva</Button>
    </>
    )
}
export default RentalSpecifications;
