import Header from '../../shared/components/Header/Header'
import { Button } from '../../shared/styledComponents/index'
import { Label } from '../../components/Main/styledComponents/index'
import Form from '../../components/Form/Form'
import { useState } from 'react'
import Modal from '../../components/Modal/Modal'

const Register = () => {
    const [openModal, setOpenModal] = useState(false)

    return(
    <>
        <Header/>
        <Label color='black'>Olá! Preencha seus dados para realizar seu cadastro</Label>
        <div style={{margin:50}}>
            <Label color='#5f5f5f'>Dados Pessoais</Label>
        </div>
        <Form register/>
        <Button 
            negativeMargin={-5} 
            width={250}
            onClick={()=>{setOpenModal(true)}}
        >
        Finalizar Cadastro
        </Button>
        {openModal &&
        <Modal text="Cadastro realizado com sucesso!"/>}
    </>
    )
}
export default Register;
