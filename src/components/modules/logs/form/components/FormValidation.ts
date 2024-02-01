import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    location: Yup.string().required('Location is required'),
    description: Yup.string(),
    // Add more validation for the places they visited
    mapData: Yup.object().shape({
        lat: Yup.string().required('Map data is required'),
        lng: Yup.string().required('Map data is required'),
    })
    // ...
});

export default validationSchema