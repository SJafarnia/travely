'use client';
import { Formik } from 'formik';
import AddPartForm from './AddPartForm';
import { submitPart } from './SubmitPart';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addPartValueType } from '@/lib/types/types';
import { slugify } from '@/lib/utils/textModifiers';

function AddPart({ travelId }: { travelId: string }) {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div className='mx-auto my-16 flex w-3/5 flex-col rounded-md bg-Night/95 p-8 text-creamWhite shadow-2xl shadow-forestGreen/50'>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    mapData: {
                        lat: undefined,
                        lng: undefined,
                    },
                    tips: {},
                    images: [],
                }}
                // validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);

                    // separate images from state object (lack of server action support for File type)
                    const imageFiles = new FormData();
                    values.images.forEach((value, index) => {
                        imageFiles.append(`file${index}`, value);
                    });
                    let updatedFormValues: addPartValueType = { ...values };
                    delete updatedFormValues['images'];

                    const submit = await submitPart(
                        updatedFormValues,
                        imageFiles,
                        travelId
                    );

                    if (submit) {
                        setSubmitting(false);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Travel data updated successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            router.push(
                                `/user/${session.user?.email}/travels/${slugify(travelId)}`
                            );
                        });
                    }
                }}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    <form
                        onSubmit={handleSubmit}
                        className='my-8 flex flex-col items-center justify-center '
                    >
                        <AddPartForm
                            values={values}
                            isSubmitting={isSubmitting}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default AddPart;
