export const PasswordStrength: React.FC<IProps> = (props) => {
    return (
        <>
            <div style={{ background: `${props.easy}` }}></div>
            <div style={{ background: `${props.medium}` }}></div>
            <div style={{ background: `${props.strong}` }}></div>
        </>
    );
};

interface IProps {
    easy: string;
    medium: string;
    strong: string 
}
