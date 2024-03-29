function useLockModalScrollHook(mounted: boolean) {
    if (mounted) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible'; // Or 'auto' depending on your preferred behavior
    }
}

export default useLockModalScrollHook;
