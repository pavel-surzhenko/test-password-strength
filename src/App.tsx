import './App.scss';
import { useState } from 'react';

export const App: React.FC = () => {
    const [value, setValue] = useState('');
    let backGround1 = '';
    let backGround2 = '';
    let backGround3 = '';
    let level = '';

    const isEasy = (v: string) => /^\d+$|^[a-z]+$|^[\W_]+$/i.test(v);

    const isMedium = (v: string) =>
        /^(?=.*[a-z])(?=.*\d)[a-z\d]+$/i.test(v) ||
        /^(?=.*[a-z])(?=.*[\W_])[^\d]+$/i.test(v) ||
        /^(?=.*[0-9])(?=.*[\W_])[\d\W_]+$/i.test(v);

    const isStrong = (v: string) => /(?=.*\d)(?=.*[a-z])(?=.*[\W_]).+/i.test(v);

    const isRu = (v: string) => /([а-я]+)/i.test(v);

    if ((value.length > 0 && value.length < 8) || isRu(value)) {
        backGround1 = backGround2 = backGround3 = 'red';
    } else if (isEasy(value)) {
        backGround1 = 'red';
    } else if (isMedium(value)) {
        backGround1 = backGround2 = 'yellow';
    } else if (isStrong(value)) {
        backGround1 = backGround2 = backGround3 = 'green';
    }

    return (
        <section>
            <h1>Test your password</h1>
            <span>{isRu(value) && 'Please in English'}</span>
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></input>
            <span>{level}</span>
            <div style={{ background: `${backGround1}` }}></div>
            <div style={{ background: `${backGround2}` }}></div>
            <div style={{ background: `${backGround3}` }}></div>
        </section>
    );
};
