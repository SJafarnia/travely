'use client'
import { useEffect } from 'react';

function useCloseModal(
    modalSetter: React.Dispatch<React.SetStateAction<"followings" | "followers" | ''>>
) {
    // closes the modal with any click outside of it
    return useEffect(() => {
        const handleClickOutside: any = (
            event: React.MouseEvent<HTMLElement>
        ) => {
            const targetElement = event.target as HTMLElement;
            if (targetElement.classList.contains('ModalCloser')) {
                modalSetter('');
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
}

export default useCloseModal;
