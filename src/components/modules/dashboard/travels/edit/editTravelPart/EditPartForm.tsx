'use client';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { TbWorldPin } from 'react-icons/tb';
import { AiOutlineAudio } from 'react-icons/ai';
import { useFormikContext } from 'formik';
import FormButton from '@/components/modules/logs/form/components/FormButton';
import SubmitIcon from '@/components/modules/logs/form/components/icons/SubmitIcon';
import FormSegment from '@/components/modules/logs/form/components/FormSegment';
import dynamic from 'next/dynamic';
import FormTips from '@/components/modules/logs/form/components/FormTips';
import { addPartValueType } from '@/lib/types/types';
import { useTravelPartData } from '@/lib/zustand/store';
import ImageSlider from '@/components/modules/travels/ImageSlider';
import { useLayoutEffect } from 'react';

const DynamicMap = dynamic(
    () => import('@/components/modules/logs/form/components/FormMap'),
    {
        ssr: false,
    }
);

function EditPartForm({
    values,
    isSubmitting,
}: {
    values: Omit<addPartValueType, 'images'>;
    isSubmitting: boolean;
}) {
    const { handleChange, handleBlur, setFieldValue } = useFormikContext();
    const data: addPartValueType = useTravelPartData(
        (state: any) => state.travelPartData
    );

    useLayoutEffect(() => {
        setFieldValue('title', data.title);
        setFieldValue('description', data.description);
    }, [data]);

    return (
        <div className='first flex w-10/12 flex-col gap-4 text-center text-xl text-silver [&>p]:w-full'>
            <FormSegment
                variant='title'
                text='Choose a Title For This Part'
                styles=''
                icon={<></>}
                tooltipId='my-tooltip'
                formField={
                    <input
                        value={values.title || data.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='title'
                        className='w-full rounded-md bg-red-900 p-4'
                        placeholder='Title'
                    ></input>
                }
            />

            <FormSegment
                text="Show us exactly where you've been on a map"
                styles=''
                variant='default'
                icon={<TbWorldPin className='mx-2 inline h-6 w-6' />}
                formField={<DynamicMap />}
            />

            <FormSegment
                text=''
                styles='my-5'
                variant='default'
                icon={<></>}
                formField={
                    <div className='mx-auto'>
                        <ImageSlider images={data.images} />
                    </div>
                }
            />

            <FormSegment
                text='Tell us how it went'
                styles=''
                variant='default'
                icon={<AiOutlineAudio className='mx-2 inline h-5 w-5' />}
                formField={
                    <textarea
                        value={values.description || data.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='description'
                        className='w-full rounded-md bg-red-900 p-4'
                        placeholder='Share your experience'
                        rows={3}
                        cols={5}
                    ></textarea>
                }
            />

            <FormSegment
                text='Provide us with some tips'
                styles=''
                variant='default'
                icon={
                    <MdOutlineTipsAndUpdates className='mx-2 inline h-5 w-5' />
                }
                tooltipId='my-tooltip'
                tooltipContent='Requirements for the trip, fun facts, things to do'
                formField={<FormTips />}
            />

            {isSubmitting ? (
                <div className='mx-auto my-8 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent p-3 align-[-0.125em] text-forestGreen/70 motion-reduce:animate-[spin_1.5s_linear_infinite]'></div>
            ) : (
                values?.title &&
                //@ts-ignore
                values?.mapData['lng'] != undefined && (
                    <FormButton
                        type='submit'
                        className='mx-auto my-8 animate-fadeOut text-forestGreen/70 transition-transform duration-300 ease-in-out hover:scale-110 disabled:blur-2xl'
                        icon={<SubmitIcon className='h-12 w-12' />}
                        disabled={
                            //@ts-ignore
                            values.mapData['lng'] === undefined ||
                            values.mapData['lat'] === undefined ||
                            isSubmitting
                        }
                    />
                )
            )}
        </div>
    );
}

export default EditPartForm;
