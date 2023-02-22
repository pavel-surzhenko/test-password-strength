const isEasy = (password: string) => /^\d+$|^[a-z]+$|^[\W_]+$/i.test(password);
const isMedium = (password: string) =>
    /^(?=.*[a-z])(?=.*\d)[a-z\d]+$/i.test(password) ||
    /^(?=.*[a-z])(?=.*[\W_])[^\d]+$/i.test(password) ||
    /^(?=.*[0-9])(?=.*[\W_])[\d\W_]+$/i.test(password);
const isStrong = (password: string) => /(?=.*\d)(?=.*[a-z])(?=.*[\W_]).+/i.test(password);

export const getPasswordStrength = (password: string) => {
    if (password.length > 0 && password.length < 8) {
        return 'short';
    }
    if (isStrong(password)) {
        return 'strong';
    }
    if (isMedium(password)) {
        return 'medium';
    }
    if (isEasy(password)) {
        return 'easy';
    }

    return 'default';
}
