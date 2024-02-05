"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import closeModalHook from './hooks/useCloseModalHook';
import lockModalScrollHook from './hooks/useLockModalScrollHook';

function ModalCloseButton() {
    const router = useRouter()
    //initial state of modal
    const [mounted, setMounted] = useState(true);

    const buttonHandler = () => {
        //locks the modal, unscrollable body
        setMounted(false);
        router.back();
    }

    lockModalScrollHook(mounted);
    closeModalHook(setMounted);

    return (
        // returns to travels list
        <button onClick={buttonHandler} type="button" className="absolute top-4 right-4 cursor-pointer bg-Night/90 rounded-md p-2 inline-flex items-center justify-center text-goldenRod hover:text-jet transition-all duration-300 ease-in-out hover:bg-goldenRod focus:outline-none ring-offset-0">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    )
}

export default ModalCloseButton