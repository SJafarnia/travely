'use client';
import { useLayoutEffect } from 'react';
import { useTravelImages } from '@/lib/zustand/store';
import { useFormikContext } from 'formik';
import Image from 'next/image';
import { ImCross } from 'react-icons/im';

function ImageUploader() {
    const { setFieldValue } = useFormikContext();

    // @ts-ignore
    const images: File[] = useTravelImages((state) => state.images);

    // adds each image to the state (array)
    const fileSetter = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;
        if (
            file?.type == 'image/png' ||
            file?.type == 'image/jpeg' ||
            file?.type == 'image/jpg'
        ) {
            useTravelImages.setState({ images: [...images, file] });
        }
        return;
    };

    //removes single image with dblClick
    const removeHandler = (img: File) => {
        const newArray = images.filter((item: File) => item !== img);

        useTravelImages.setState({ images: [...newArray] });
    };

    useLayoutEffect(() => {
        // add images to formik state
        setFieldValue('images', [...images]);
    }, [images]);

    return (
        <div className='my-5 flex w-full flex-col gap-4 self-center'>
            {images.length > 0 && (
                <div className='flex w-full flex-grow flex-col gap-4 self-center'>
                    {images.map((img: File) => {
                        return (
                            <div
                                key={img.name}
                                className='relative mx-auto my-5 w-full animate-fadeOut text-right'
                            >
                                <span
                                    onClick={() => removeHandler(img)}
                                    className='absolute right-8 top-8 z-50 w-max cursor-pointer rounded-md bg-white p-3 text-red-700 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl'
                                >
                                    <ImCross />
                                </span>
                                <Image
                                    loading='lazy'
                                    src={URL.createObjectURL(img)}
                                    width={1000}
                                    height={1000}
                                    className='h-[566px] max-w-full animate-fadeOut rounded-md'
                                    alt='blur'
                                    blurDataURL=''
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            <div className='my-4 flex flex-grow justify-center md:items-center'>
                <label
                    htmlFor='ff'
                    className='cursor-pointer self-end p-1 hover:animate-bounce'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-10 w-10'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                        />
                    </svg>
                </label>
                <input
                    hidden
                    type='file'
                    className='s'
                    accept='image/*'
                    id='ff'
                    onChange={fileSetter}
                />
            </div>
        </div>
    );
}

export default ImageUploader;
