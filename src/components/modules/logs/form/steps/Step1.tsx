import FormField from '../components/FormField';
import { BsPassport } from 'react-icons/bs';
import { TbWorldQuestion } from 'react-icons/tb';
import NextStepIcon from '../components/icons/NextStepIcon';
import FormButton from '../components/FormButton';
import FormSegment from '../components/FormSegment';

function Step1({
    values,
    isSubmitting,
    nextStep,
}: {
    values: any;
    isSubmitting: boolean;
    nextStep: () => void;
}) {
    return (
        <>
            <FormSegment
                text='- Tell us what should be the title of your journey'
                styles='text-center my-3 text-creamWhite'
                icon={<BsPassport className='mx-2 inline h-6 w-6' />}
                formField={
                    <FormField name={'title'} title='Title of your journey' />
                }
            />

            <FormSegment
                text="- Can you tell us where on earth you've been?"
                styles='my-3 text-creamWhite'
                icon={<TbWorldQuestion className='mx-2 inline h-6 w-6' />}
                formField={
                    <FormField
                        name={'location'}
                        title='Location (Continent, Country)'
                    />
                }
            />

            {values.title && values.location && (
                <div className={`my-8 animate-fadeOut transition-opacity`}>
                    <FormButton
                        type='button'
                        className='text-forestGreen/70 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-forestGreen/90 disabled:blur-2xl'
                        onClick={nextStep}
                        disabled={
                            !values.title || !values.location || isSubmitting
                        }
                        icon={<NextStepIcon className='h-12 w-12' />}
                    />
                </div>
            )}
        </>
    );
}

export default Step1;
