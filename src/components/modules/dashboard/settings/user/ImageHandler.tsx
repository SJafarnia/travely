'use client';
import { ProfileFormType } from '@/lib/types/types';
import { useFormikContext } from 'formik';
import Image from 'next/image';

interface divProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

function ImageHandler({ ...props }: divProps) {
    const { values, setFieldValue } = useFormikContext<ProfileFormType>();

    const fileSetter = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;
        if (
            file?.type == 'image/png' ||
            file?.type == 'image/jpeg' ||
            file?.type == 'image/jpg'
        ) {
            setFieldValue('image', file);
        }
        return;
    };

    return (
        <div {...props}>
            <label
                htmlFor='ff'
                className='group relative cursor-pointer self-end rounded-full p-1'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute bottom-0 right-0 z-50 m-auto h-12 w-12 transition-transform duration-300 ease-in-out group-hover:-translate-x-12 group-hover:-translate-y-12 group-hover:scale-110'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                    />
                </svg>

                {typeof values.image == 'string' ? (
                    <Image
                        src={values.image}
                        width={1000}
                        height={1000}
                        className='h-[145px] w-[145px] animate-fadeOut rounded-full transition-opacity duration-300 group-hover:opacity-45'
                        alt='blur'
                    />
                ) : (
                    <Image
                        src={URL.createObjectURL(new Blob([values.image]))}
                        width={1000}
                        height={1000}
                        className='h-[145px] w-[145px] animate-fadeOut rounded-full transition-opacity duration-300 group-hover:opacity-45'
                        alt='blur'
                    />
                )}
            </label>
            <input
                hidden
                value={undefined}
                type='file'
                className=''
                accept='image/*'
                id='ff'
                onChange={fileSetter}
            />
        </div>
    );
}

export default ImageHandler;
