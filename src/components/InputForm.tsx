export const PasswordInput: React.FC<IProps> = ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            type='text'
            value={value}
            onChange={handleChange}
        />
    );
};

interface IProps {
    value: string;
    onChange: (value: string) => any;
}
