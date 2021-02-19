import FormComponent from './components/FormComponent'
import { FormContainer, FormRow } from './styledComponents/index'

function Form() {

    return (
    <FormContainer>
        <FormRow>
            <FormComponent label='Nacionalidade'/>
            <FormComponent label='Documento'/>
            <FormComponent label='Numero'/>
        </FormRow>
        <FormRow>
            <FormComponent label='Nome Completo'/>
            <FormComponent label='Email'/>
            <FormComponent label='Celular'/>
        </FormRow>
    </FormContainer>
  );
}

export default Form;