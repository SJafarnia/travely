'use client';
import { Formik } from 'formik';
import { submitEditPart } from './SubmitEditedPart';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { addPartValueType } from '@/lib/types/types';
import { slugify } from '@/lib/utils/textModifiers';
import EditPartForm from './EditPartForm';
import { useTravelPartData } from '@/lib/zustand/store';
import useFetchTravelPartData from '@/components/hooks/useFetchTravelPartData';

function EditPart({ travelPartId }: { travelPartId: string }) {
    const router = useRouter();
    useFetchTravelPartData(travelPartId);
    console.log(travelPartId);
    const data: addPartValueType = useTravelPartData(
        (state: any) => state.travelPartData
    );

    return (
        <div className='mx-auto my-16 flex w-4/5 flex-col rounded-md bg-Night/95 p-4 text-creamWhite shadow-2xl shadow-forestGreen/50'>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    mapData: {
                        lat: undefined,
                        lng: undefined,
                    },
                    tips: {},
                }}
                // validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);

                    const submit = await submitEditPart(values, travelPartId);

                    console.log({ submit });
                    if (submit) {
                        setSubmitting(false);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Travel Part data updated successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            router.back();
                        });
                    }
                }}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    <form
                        onSubmit={handleSubmit}
                        className='my-8 flex flex-col items-center justify-center '
                    >
                        <EditPartForm
                            values={values}
                            isSubmitting={isSubmitting}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditPart;
