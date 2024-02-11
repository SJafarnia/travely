'use client';

function ViewLog() {
    return (
        <div className='mx-auto text-center transition-all duration-300 ease-in-out hover:scale-105'>
            <button
                onClick={() => {
                    window.location.reload();
                }}
                className='rounded-lg bg-Night/90 p-4 font-montserrat font-semibold text-goldenRod'
            >
                View full log
            </button>
        </div>
    );
}

export default ViewLog;
