import * as Yup from 'yup';

const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required'),
});

export default validationSchema;
