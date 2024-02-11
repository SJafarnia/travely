'use client';
import { Formik } from 'formik';
import validationSchema from './FormValidation';
import FormField from '../logs/form/components/FormField';
import ImageHandler from './ImageHandler';
import FormButton from '../logs/form/components/FormButton';
import SubmitIcon from '../logs/form/components/icons/SubmitIcon';
import { useRouter } from 'next/navigation';

function EditProfile() {
    const router = useRouter()
    return (
        <div className='w-full bg-Night/95 text-white'>
            <Formik
                // TODO: replace initial values with user data
                initialValues={{
                    userName: '',
                    location: '',
                    image: undefined,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    router.back()
                }}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    <form
                        onSubmit={handleSubmit}
                        className='my-8 flex flex-col items-center justify-center '
                    >
                        <ImageHandler />
                        <FormField name='userName' title='Username' />
                        <FormField name='location' title='Location' />
                        <FormButton
                            type='submit'
                            className='mx-auto my-8 animate-fadeOut text-forestGreen/70 transition-transform duration-300 ease-in-out hover:scale-110 disabled:blur-2xl'
                            icon={<SubmitIcon className='h-12 w-12' />}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditProfile;
