import { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

interface IFormComponent {
  label: string;
}


const FormComponent = ({label}: IFormComponent) => {
  const [value, setValue] = useState('');

  return (
    <div>
        <InputLabel>{label}</InputLabel>
        <Input 
            value={value}
            onChange={e => {
            setValue(e.target.value);
            }}
            style={{ marginRight: 30, width: 300}}
        />
    </div>
  );
}

export default FormComponent;