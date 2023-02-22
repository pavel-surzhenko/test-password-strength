import { useState } from 'react';
import { PasswordInput, PasswordStrength } from '../components';
import { Header } from '../components/Header';
import { getPasswordStrength } from '../hooks/usePasswordStrength';

export const MainPage:React.FC = () => {
    const [value, setValue] = useState('');
    const handleChange = (newValue: string) => setValue(newValue)

    const strengthColors = {
        short: { easy: 'red', medium: 'red', strong: 'red' },
        default: { easy: 'gray', medium: 'gray', strong: 'gray' },
        easy: { easy: 'red', medium: 'gray', strong: 'gray' },
        medium: { easy: 'yellow', medium: 'yellow', strong: 'gray' },
        strong: { easy: 'green', medium: 'green', strong: 'green' },
    };

    const passwordStrength = getPasswordStrength(value);

    return (
        <section>
            <Header />
            <PasswordInput value = {value} onChange = {handleChange}/>
            <PasswordStrength {...strengthColors[passwordStrength]}/>
        </section>
    );
};
