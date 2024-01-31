import FormMap from "../components/FormMap"
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsBalloon } from "react-icons/bs";
import { TbWorldPin } from "react-icons/tb";
import { AiOutlineAudio } from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";
import Tips from "../components/Tips";
import { FormValues, MarkerType } from "@/lib/types/types";
import { useFormikContext } from "formik";
import ImageUploader from "../components/ImageUploader";

function Step2(
    {
        values,
        isSubmitting,
        prevStep,
        markers,
        setMarkers
    }:
        {
            values: FormValues,
            isSubmitting: boolean,
            prevStep: () => void,
            markers: any,
            setMarkers: React.Dispatch<React.SetStateAction<MarkerType[]>>
        }
) {

    const { handleChange, handleBlur } = useFormikContext()

    return (
        <div className='flex gap-4 flex-col text-center text-silver w-10/12 [&>p]:w-full'>
            <p className='text-center my-3 text-white font-bold text-2xl mb-8' data-tooltip-id="my-tooltip" data-tooltip-content="You can add more parts of your journey to this log from your profile">
                Now it's time to share the first part of your trip
                <span><BsBalloon className='inline mx-2 w-6 h-6' /></span>
            </p>

            <p className='text-center my-2 text-xl '>
                Show us exactly where you've been on a map
                <span><TbWorldPin className='inline mx-2 w-6 h-6' /></span>
            </p>
            <FormMap setMarkers={setMarkers} markers={markers} />


            <p className='my-5 cursor-pointer text-xl'>
                Uplaod your amazing photos<span><IoCameraOutline className='inline mx-2 w-5 h-5' /></span>
            </p>
            <ImageUploader />

            <p className='my-4 cursor-pointer text-xl'>
                Tell us how it went<span><AiOutlineAudio className='inline mx-2 w-5 h-5' /></span>
            </p>
            <textarea value={values.description} onBlur={handleBlur} onChange={handleChange} name='description' className='w-full rounded-md p-4 bg-red-900' placeholder='Share your experience' rows={3} cols={5}></textarea>

            <p className='my-4 cursor-pointer text-xl' data-tooltip-id="my-tooltip" data-tooltip-content="Requirements for the trip, fun facts, things to do">

                Provide us with some tips
                <span>
                    <MdOutlineTipsAndUpdates className='inline mx-2 w-5 h-5' />
                </span>
            </p>
            <Tips />

            <button type="button" className='disabled:blur-2xl mt-8 mx-auto text-creamWhite/50 hover:scale-110 hover:text-creamWhite/80 transition-all duration-300 ease-in-out animate-fadeOut' onClick={prevStep}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </button>

            {isSubmitting ?
                <div
                    className="mx-auto p-3 my-8 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-forestGreen/70 motion-reduce:animate-[spin_1.5s_linear_infinite]">
                </div>
                :
                values.location && values.title && values.mapData && values.images.length > 0 && (
                    <button type="submit" className='disabled:blur-2xl my-8 text-forestGreen/70 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out animate-fadeOut' disabled={!values.mapData || isSubmitting}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>)
            }
        </div>
    )
}

export default Step2