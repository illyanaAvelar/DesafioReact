import Header from '../../shared/components/Header/Header'
import CardList from '../../components/CardList/CardList'
import { Button } from '../../shared/styledComponents/index'
import Aditionals from '../../components/Aditionals/Aditionals'
import { Label } from '../../components/Main/styledComponents/index'
import Form from '../../components/Form/Form'

const Register = () => {

    return(
    <>
        <Header/>
        <Label color='black'>Olá! Preencha seus dados para realizar seu cadastro</Label>
        <Form/>
        <Button 
            negativeMargin={-5} 
            width={250}
            onClick={()=>{}}
        >
        Finalizar Cadastro
        </Button>
    </>
    )
}
export default Register;
