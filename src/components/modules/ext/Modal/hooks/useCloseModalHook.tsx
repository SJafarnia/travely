import { useEffect } from "react";
import { useRouter } from 'next/navigation';


function useCloseModalHook(setMounted: React.Dispatch<React.SetStateAction<boolean>>) {
    // closes the modal with any click outside of it
    const router = useRouter()

    return (
        useEffect(() => {
            const handleClickOutside: any = (event: React.MouseEvent<HTMLElement>) => {
                const targetElement = event.target as HTMLElement;
                targetElement.classList.contains("travelModal") && router.back();
                setMounted(false);
            }
            document.addEventListener('click', handleClickOutside);

            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, [])
    )
}

export default useCloseModalHook

