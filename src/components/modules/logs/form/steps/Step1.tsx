import FormField from '../components/FormField';
import { BsPassport } from "react-icons/bs";
import { TbWorldQuestion } from "react-icons/tb";
import NextStepIcon from '../components/icons/NextStepIcon';
import FormButton from '../components/FormButton';
import FormSegment from '../components/FormSegment';

function Step1({ values, isSubmitting, nextStep }: { values: any, isSubmitting: boolean, nextStep: () => void }) {

    return (
        <>
            <FormSegment
                text="- Tell us what should be the title of your journey"
                styles="text-center my-3 text-creamWhite"
                icon={<BsPassport className='inline mx-2 w-6 h-6' />}
                formField={
                    <FormField name={"title"} title='Title of your journey' />
                }
            />

            <FormSegment
                text="- Can you tell us where on earth you've been?"
                styles="my-3 text-creamWhite"
                icon={<TbWorldQuestion className='inline mx-2 w-6 h-6' />}
                formField={
                    <FormField name={"location"} title='Location (Continent, Country)' />
                }
            />

            {values.title && values.location &&
                <div className={`transition-opacity my-8 animate-fadeOut`}>
                    <FormButton
                        type='button'
                        className='disabled:blur-2xl text-forestGreen/70 hover:text-forestGreen/90 hover:scale-110 transition-transform duration-300 ease-in-out'
                        onClick={nextStep}
                        disabled={!values.title || !values.location || isSubmitting}
                        icon={<NextStepIcon className='w-12 h-12' />}
                    />
                </div>
            }
        </>
    )
}

export default Step1