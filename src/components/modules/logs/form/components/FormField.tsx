import { useFormikContext } from 'formik';
import { FormValues } from '@/lib/types/types';

const FormField = ({ name, title }: { name: string; title: string }) => {
    const { values } = useFormikContext<FormValues>();
    const { errors, touched, handleChange, handleBlur } = useFormikContext();

    return (
        <>
            <div className='relative m-4 w-1/2 text-silver'>
                <input
                    autoComplete='off'
                    id={`trvl${name}`}
                    name={name}
                    className={`transition-color peer z-10 block min-h-[auto] w-full rounded border-2 border-solid border-forestGreen/40 bg-transparent px-3 py-2 leading-[1.4] shadow-sm outline-none duration-0 ease-linear focus:border-2 focus:border-forestGreen/60`}
                    type='text'
                    value={
                        //@ts-ignore
                        values[name]
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <label
                    htmlFor={`trvl${name}`}
                    className={`${
                        //@ts-ignore
                        values[name]
                            ? '-translate-x-[.45rem] -translate-y-[1.45rem] scale-[0.7] bg-Night'
                            : 'bg-transparent'
                    }
                     pointer-events-none absolute bottom-[0.6rem] left-4 mb-0 max-w-[90%] truncate rounded-md px-2 pt-0 leading-[1.4] transition-all duration-200 ease-out peer-focus:-translate-x-[.45rem] peer-focus:-translate-y-[1.45rem] peer-focus:scale-[0.7] peer-focus:bg-Night peer-focus:text-silver`}
                >
                    {title}
                </label>
            </div>
            {errors[name] && touched[name] && (
                <p className='relative m-2 mx-auto w-9/12 cursor-alias text-sm text-red-600'>
                    {
                        //@ts-ignore
                        errors[name]
                    }
                </p>
            )}
        </>
    );
};

export default FormField;
