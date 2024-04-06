function StatusBar({ date }: { date: string }) {
    // TODO: add likes to DB and show them here
    const liked: boolean = true;

    return (
        <section className='mb-1 flex p-4 gap-4 mx-auto w-full'>
            <div className="font-semibold">
                <span>{date}</span>
            </div>
            <div className='cursor-pointer'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-6 w-6'
                >
                    <path
                        fillRule='evenodd'
                        d='M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z'
                        clipRule='evenodd'
                    />
                </svg>
            </div>
        </section>
    );
}

export default StatusBar;
