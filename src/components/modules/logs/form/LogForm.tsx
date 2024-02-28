'use client';
import { useState } from 'react';
import { Formik } from 'formik';
import { Tooltip } from 'react-tooltip';
import validationSchema from './components/FormValidation';
import Step1 from './steps/Step1';
import { submitLogs } from './components/FormSubmit';
import { useRouter } from 'next/navigation';
import { FormValues, FormValuesToSubmit } from '@/lib/types/types';
import TravelPartForm from './steps/TravelPartForm';

export type errors = {
    title?: any;
    location?: any;
};

function LogForm() {
    const router = useRouter();
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className='my-auto'>
            <Formik
                initialValues={{
                    title: '',
                    location: '',
                    description: '',
                    mapData: {
                        lat: undefined,
                        lng: undefined,
                    },
                    tips: {},
                    images: [],
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);

                    // separate images from state object (lack of server action support for File type)
                    const imageFiles = new FormData();
                    values.images.forEach((value, index) => {
                        imageFiles.append(`file${index}`, value);
                    });
                    let updatedFormValues: any = { ...values };
                    delete updatedFormValues['images'];

                    const submit = await submitLogs(
                        updatedFormValues,
                        imageFiles
                    );

                    if (submit) {
                        setSubmitting(false);
                        // raise a Toast for creating the log
                        router.push('/');
                    }
                }}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    <form
                        onSubmit={handleSubmit}
                        className='my-8 flex flex-col items-center justify-center '
                    >
                        {step === 1 && (
                            <Step1
                                values={values}
                                isSubmitting={isSubmitting}
                                nextStep={nextStep}
                            />
                        )}
                        {step === 2 && (
                            <TravelPartForm
                                values={values}
                                isSubmitting={isSubmitting}
                                prevStep={prevStep}
                            />
                        )}
                        <Tooltip
                            id='my-tooltip'
                            className=' text-sm'
                            style={{ fontSize: '0.875rem' }}
                        />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default LogForm;
