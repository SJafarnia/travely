'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useCloseModalHook from './hooks/useCloseModalHook';
import useLockModalScrollHook from './hooks/useLockModalScrollHook';

function ModalCloseButton() {
    const router = useRouter();
    //initial state of modal
    const [mounted, setMounted] = useState(true);

    const buttonHandler = () => {
        //locks the modal, unscrollable body
        setMounted(false);
        router.back();
    };

    useLockModalScrollHook(mounted);
    useCloseModalHook(setMounted);

    return (
        // returns to travels list
        <button
            onClick={buttonHandler}
            type='button'
            className='absolute right-4 top-4 inline-flex cursor-pointer items-center justify-center rounded-md bg-Night/90 p-2 text-goldenRod ring-offset-0 transition-all duration-300 ease-in-out hover:bg-goldenRod hover:text-jet focus:outline-none'
        >
            <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                />
            </svg>
        </button>
    );
}

export default ModalCloseButton;
