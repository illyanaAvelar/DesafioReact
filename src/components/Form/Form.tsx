import { FormContainer, FormRow } from './styledComponents/index'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { useState } from 'react';

function Form() {
    const [value, setValue] = useState('');

    return (
    <FormContainer>
        <FormRow>
            <InputLabel>Label</InputLabel>
            <Input 
                value={value}
                onChange={e => {
                setValue(e.target.value);
                }}
            />
            <InputLabel>Label</InputLabel>
            <Input 
                value={value}
                onChange={e => {
                setValue(e.target.value);
                }}
            />
             <InputLabel>Label</InputLabel>
            <Input 
                value={value}
                onChange={e => {
                setValue(e.target.value);
                }}
            />
        </FormRow>
        <FormRow>
            <InputLabel>Label</InputLabel>
            <Input 
                value={value}
                onChange={e => {
                setValue(e.target.value);
                }}
            />
             <InputLabel>Label</InputLabel>
            <Input 
                value={value}
                onChange={e => {
                setValue(e.target.value);
                }}
            />
             <InputLabel>Label</InputLabel>
            <Input 
                value={value}
                onChange={e => {
                setValue(e.target.value);
                }}
            />
        </FormRow>
    </FormContainer>
  );
}

export default Form;