import { useEffect } from "react";

function lockModalScrollHook(mounted: boolean) {
    // makes the body unscrollable while modal is on top
    return (
        useEffect(() => {
            if (mounted) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible'; // Or 'auto' depending on your preferred behavior
            }
        }, [mounted])
    )
}

export default lockModalScrollHook