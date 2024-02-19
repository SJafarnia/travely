function Loading() {
    return (
        <div className='flex h-full w-full animate-pulse items-center  justify-center bg-Night/90'>
            <div
                className='mx-auto h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]'
                role='status'
            ></div>
        </div>
    );
}

export default Loading;
