import * as Yup from 'yup';

const validationSchema = Yup.object({
    userName: Yup.string()
        .min(3, {
            message: 'Username must be at least 3 characters',
        })
        .max(20, 'Username cannot exceed 20 characters')
        .test(
            'no-symbols-or-dashes',
            'Symbols and dashes are not allowed in Username',
            (value) => {
                return /^[a-zA-Z0-9_.]*$/.test(value);
            }
        )
        .test(
            'no-consecutive-dots',
            'Consecutive dots are not allowed in the username',
            (value) => {
                return !/\.{2,}/.test(value);
            }
        )
        .required('Username is required'),
});

export default validationSchema;
