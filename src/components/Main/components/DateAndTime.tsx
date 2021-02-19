import {DateTimeContainer, InputContainer, Label} from '../styledComponents/index'
import { Input, Button } from '../../../shared/styledComponents/index'
import { Link } from 'react-router-dom';

const DateAndTime = () => (
    <DateTimeContainer>
        <Label color='white'>BUSQUE POR UM CARRO PARA ALUGAR</Label>
        <InputContainer>
            <Input width={250} opacity={1} margin={20} placeholder='Local de retirada'/>
            <Input width={200} opacity={1} margin={20} type='date' placeholder='Data de retirada'/>
            <Input width={150} opacity={1} margin={20} type='time' placeholder='Hora de retirada'/>
            <Input width={150} opacity={1} margin={20} placeholder='Cupom'/>
        </InputContainer>
        <InputContainer>
            <Input width={250} opacity={1} margin={20} placeholder='Local de retirada'/>
            <Input width={200} opacity={1} margin={20} type='date' placeholder='Data de devolução'/>
            <Input width={150} opacity={1} margin={20} type='time' placeholder='Hora de devolução'/>
            <Link to='/rental-specifications'>   
                <Button width={150} negativeMargin={0}>
                    Continuar
                </Button>
            </Link>
        </InputContainer>
        
    </DateTimeContainer>
)

export default DateAndTime