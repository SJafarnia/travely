'use client';
import { Formik } from 'formik';
import validationSchema from './FormValidation';
import FormField from '../../../logs/form/components/FormField';
import ImageHandler from './ImageHandler';
import SubmitIcon from '../../../logs/form/components/icons/SubmitIcon';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { submitUpdateUser } from './FormSubmit';
import { FetchFormData } from './FetchFormData';
import { useUserData } from '@/lib/zustand/store';

function EditProfile() {
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <div className='w-full bg-Night/95 text-white'>
            <Formik
                initialValues={{
                    userName: '',
                    location: '',
                    image: null,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    const formData = new FormData();
                    formData.append('image', values.image);

                    const res = await submitUpdateUser(
                        session.user.email,
                        values.userName,
                        formData
                    );

                    if (res) {
                        // update userData state after submitting changes
                        useUserData.setState({
                            userData: {
                                username: res.username,
                                profileImg: res.profileImg,
                            },
                        });

                        return router.back();
                    }
                }}
            >
                {({ handleSubmit, isSubmitting }) => {
                    return (
                        <form
                            onSubmit={handleSubmit}
                            className='my-8 flex flex-col items-center justify-center gap-8 [&>div]:m-0 [&>div]:mx-auto [&>div]:w-10/12'
                        >
                            <FetchFormData session={session} />

                            <ImageHandler className='my-4 flex flex-grow justify-center md:items-center' />
                            <FormField name='userName' title={`Username`} />
                            <FormField name='location' title='Location' />

                            {isSubmitting ? (
                                <p className='mx-auto my-8 inline-block h-10 w-10 animate-spin cursor-wait rounded-full border-4 border-solid border-current border-r-transparent p-4 align-[-0.125em] text-forestGreen/70 motion-reduce:animate-[spin_1.5s_linear_infinite]'></p>
                            ) : (
                                <button
                                    disabled={isSubmitting}
                                    type='submit'
                                    className='mx-auto my-8 animate-fadeOut text-forestGreen/70 transition-transform duration-300 ease-in-out hover:scale-110'
                                >
                                    {<SubmitIcon className='h-12 w-12' />}
                                </button>
                            )}
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default EditProfile;
