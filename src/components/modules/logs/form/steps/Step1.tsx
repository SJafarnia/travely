import { useFormikContext } from 'formik';
import FormField from '../components/FormField';
import { BsPassport } from "react-icons/bs";
import { TbWorldQuestion } from "react-icons/tb";

function Step1({ values, isSubmitting, nextStep }: { values: any, isSubmitting: boolean, nextStep: () => void }) {

    return (
        <>
            <p className='text-center my-3 text-creamWhite'>
                - Tell us what should be the title of your journey
                <span><BsPassport className='inline mx-2 w-6 h-6' /></span>
            </p>
            <FormField name={"title"} title='Title of your journey' />


            <p className='my-3 text-creamWhite'>
                - Can you tell us where on earth you've been?
                <span><TbWorldQuestion className='inline mx-2 w-6 h-6' /></span>
            </p>
            <FormField name={"location"} title='Location (Continent, Country)' />

            {values.title && values.location &&
                <div className={`transition-opacity my-8 animate-fadeOut`}>
                    <button type="button" onClick={nextStep} disabled={!values.title || !values.location || isSubmitting} className='disabled:blur-2xl text-forestGreen/70 hover:text-forestGreen/90 hover:scale-110 transition-transform duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            }
        </>
    )
}

export default Step1