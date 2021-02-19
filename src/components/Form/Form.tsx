import FormComponent from './components/FormComponent'
import { FormContainer, FormRow } from './styledComponents/index'
import { Label } from '../Main/styledComponents/index'
import { FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useState } from 'react';
interface IForm {
    register: boolean;
}

function Form({register}: IForm) {
    const [value, setValue] = useState('');

    return (
    <FormContainer>
        <FormRow>
            <FormComponent type='text' label='Nacionalidade'/>
            <FormComponent type='text' label='Documento'/>
            <FormComponent type='text' label='Numero'/>
        </FormRow>
        <FormRow>
            <FormComponent type='text' label='Nome Completo'/>
            <FormComponent type='text' label='Email'/>
            <FormComponent type='text' label='Celular'/>
        </FormRow>
        { register &&
        <>
        <FormRow>
            <FormLabel component="legend">Gênero</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={() => setValue(value)}>
                <div>
                    <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="other" control={<Radio />} label="Outro" />
                </div>
            </RadioGroup>
            <FormComponent type='password' label='Senha'/>
            <FormComponent type='password' label='Confirmação da senha'/>
        </FormRow>
        <div style={{margin:50}}>
            <Label color='#5f5f5f'>Dados da CNH</Label>
        </div>
        <FormRow>
            <FormComponent type='text' label='RG'/>
            <FormComponent type='date' label='Data de Nascimento'/>
            <FormComponent type='text' label='Número de Registro'/>
        </FormRow>
        <FormRow>
            <FormComponent type='text' label='Número da CNH'/>
            <FormComponent type='date' label='Data de Validade'/>
            <FormComponent type='text' label='Estado'/>
        </FormRow>
        <div style={{margin:50}}>
            <Label color='#5f5f5f'>Dados de Endereço</Label>
        </div>
        <FormRow>
            <FormComponent type='text' label='CEP'/>
            <FormComponent type='text' label='Logradouro'/>
            <FormComponent type='text' label='Bairro'/>
        </FormRow>
        <FormRow>
            <FormComponent type='text' label='Número'/>
            <FormComponent type='text' label='Complemento'/>
            <FormComponent type='text' label='Município'/>
        </FormRow>
        </>
        }
    </FormContainer>
  );
}

export default Form;