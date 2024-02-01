import FormMap from "../components/FormMap"
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsBalloon } from "react-icons/bs";
import { TbWorldPin } from "react-icons/tb";
import { AiOutlineAudio } from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";
import Tips from "../components/FormTips";
import { FormValues } from "@/lib/types/types";
import { useFormikContext } from "formik";
import ImageUploader from "../components/ImageUploader";
import FormButton from "../components/FormButton";
import PrevStepIcon from "../components/icons/PrevStepIcon";
import SubmitIcon from "../components/icons/SubmitIcon";
import FormSegment from "../components/FormSegment";

function Step2(
    {
        values,
        isSubmitting,
        prevStep,
    }:
        {
            values: FormValues,
            isSubmitting: boolean,
            prevStep: () => void,
        }
) {

    const { handleChange, handleBlur } = useFormikContext()

    return (
        <div className='flex gap-4 flex-col text-center text-silver w-10/12 [&>p]:w-full'>

            <FormSegment
                text="Now it's time to share the first part of your trip"
                styles="text-center cursor-pointer my-3 text-white font-bold text-2xl mb-8"
                icon={<BsBalloon className='inline mx-2 w-6 h-6' />}
                tooltipId="my-tooltip"
                tooltipContent="You can add more parts of your journey to this log from your profile"
            />

            <FormSegment
                text="Show us exactly where you've been on a map"
                styles="text-center cursor-pointer  my-2 text-xl"
                icon={<TbWorldPin className='inline mx-2 w-6 h-6' />}
                formField={
                    <FormMap />
                }
            />

            <FormSegment
                text="Uplaod your amazing photos"
                styles="my-5 cursor-pointer text-xl"
                icon={<IoCameraOutline className='inline mx-2 w-5 h-5' />}
                formField={
                    <ImageUploader />
                }
            />

            <FormSegment
                text="Tell us how it went"
                styles="my-4 cursor-pointer text-xl"
                icon={<AiOutlineAudio className='inline mx-2 w-5 h-5' />}
                formField={
                    <textarea value={values.description} onBlur={handleBlur} onChange={handleChange} name='description' className='w-full rounded-md p-4 bg-red-900' placeholder='Share your experience' rows={3} cols={5}></textarea>
                }
            />

            <FormSegment
                text="Provide us with some tips"
                styles="my-4 cursor-pointer text-xl"
                icon={<MdOutlineTipsAndUpdates className='inline mx-2 w-5 h-5' />}
                tooltipId="my-tooltip"
                tooltipContent="Requirements for the trip, fun facts, things to do"
                formField={
                    <Tips />
                }
            />

            <FormButton
                type='button'
                className='disabled:blur-2xl mt-8 mx-auto text-creamWhite/50 hover:scale-110 hover:text-creamWhite/80 transition-all duration-300 ease-in-out animate-fadeOut'
                onClick={prevStep}
                icon={<PrevStepIcon className='w-12 h-12' />}
            />

            {isSubmitting ?
                <div
                    className="mx-auto p-3 my-8 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-forestGreen/70 motion-reduce:animate-[spin_1.5s_linear_infinite]">
                </div>
                :
                values.location && values.title &&
                //@ts-ignore
                values.mapData["lng"] != undefined
                && values.images.length > 0 && (
                    <FormButton
                        type="submit"
                        className="disabled:blur-2xl my-8 text-forestGreen/70 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out animate-fadeOut"
                        icon={<SubmitIcon className="w-12 h-12" />}
                        disabled={
                            //@ts-ignore
                            values.mapData["lng"] === undefined || values.mapData["lat"] === undefined || isSubmitting
                        }
                    />
                )
            }
        </div>
    )
}

export default Step2