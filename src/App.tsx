import './App.scss';
import { useState } from 'react';

export const App: React.FC = () => {
    const [value, setValue] = useState('');
    let backGround1 = '';
    let backGround2 = '';
    let backGround3 = '';
    let level = '';

    const isEasy = (v: string) => /^([a-zа-яё]+|\d+|\W+|[\W_]+)$/i.test(v);
    const isMedium = (v: string) =>
        /^([a-zа-яё\W_]+)$/i.test(v) ||
        /^([a-zа-яё\d]+)$/i.test(v) ||
        /^([\d\W_]+)$/i.test(v);
    const isStrong = (v: string) => /^([a-zа-яё\d\W_]+)$/i.test(v);

    if (value.length > 0 && value.length < 8) {
        backGround1 = 'red';
        backGround2 = 'red';
        backGround3 = 'red';
    } else if (isEasy(value)) {
        backGround1 = 'red';
    } else if (isMedium(value)) {
        backGround1 = 'yellow';
        backGround2 = 'yellow';
    } else if (isStrong(value)) {
        backGround1 = backGround2 = backGround3 = 'green';
    }

    return (
        <section>
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
