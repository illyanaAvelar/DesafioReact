import { Link } from 'react-router-dom';
import { Button } from '../../shared/styledComponents'
import {ModalContainer} from './styledComponents/index'

interface IModal {
    text: string;
}

const Modal = ({text}:IModal) => {
 return (
    <ModalContainer>
        <h2>{text}</h2>
        <Link to='/main'>
            <Button width={200} negativeMargin={0}>Continuar</Button>
        </Link>
    </ModalContainer>
 )

}

export default Modal;