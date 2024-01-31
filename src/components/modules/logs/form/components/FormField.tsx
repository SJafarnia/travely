import { useFormikContext } from "formik"
import { FormValues } from "@/lib/types/types";

const FormField = ({ name, title }: { name: string, title: string }) => {

    const { values } = useFormikContext<FormValues>()
    const { errors, touched, handleChange, handleBlur } = useFormikContext()

    return (
        <div className='m-4 relative w-1/2 text-silver'>
            <input id={`trvl${name}`} name={name} className={` border-forestGreen/40 focus:border-forestGreen/60 m-4 peer z-10 border-solid focus:border-2 transition-color duration-0 shadow-sm border-2 block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear`} type='text' value={
                //@ts-ignore
                values[name]
            } onBlur={handleBlur} onChange={handleChange} />
            <label htmlFor={`trvl${name}`} className={`${
                //@ts-ignore
                values[name] ? "-translate-y-[1.15rem] scale-[0.7] bg-Night" : "bg-transparent"
                }
                     rounded-md px-2 pt-0 pointer-events-none absolute left-5 top-[1.4rem] mb-0 max-w-[90%] truncate leading-[1.4] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.7] peer-focus:text-silver peer-focus:bg-Night`}>{title}</label>
            <p className="text-red-600 mx-auto ml-5 cursor-alias">
                {
                    //@ts-ignore
                    errors[name] && touched[name] && errors[name]
                }
            </p>
        </div >
    )
}

export default FormField