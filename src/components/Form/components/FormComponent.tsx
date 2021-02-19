import { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

interface IFormComponent {
  label: string;
  type: string;
}


const FormComponent = ({label, type}: IFormComponent) => {
  const [value, setValue] = useState('');

  return (
    <div>
        <InputLabel>{label}</InputLabel>
        <Input
            type={type} 
            value={value}
            onChange={e => {
            setValue(e.target.value);
            }}
            style={{ marginRight: 30, width: type === 'password' ? 280 : 300}}
        />
    </div>
  );
}

export default FormComponent;