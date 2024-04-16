'use client';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

function FormTips() {
    const { setFieldValue } = useFormikContext();
    const [tips, setTips] = useState({
        tips: {},
        numTips: 1,
    })

    // adds each tip to the state (object)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = event;
        setTips({ ...tips, [name]: value, numTips: (tips.numTips + 1) })
    };

    const removeHandler = (index: number) => {
        let updatedTips: {} = { ...tips };
        delete updatedTips[`tip${index}`];
        setTips({ numTips: tips.numTips - 1, tips: updatedTips })
    };

    useEffect(() => {
        // add tips to formik state
        setFieldValue('tips', tips.tips);
    }, [tips]);

    return (
        <div className='flex w-full'>
            <div className='mb-12 flex w-4/5 flex-col'>
                {Array(tips.numTips)
                    .fill(null)
                    .map((val, index) => {
                        return (
                            <div key={index} className='flex'>
                                <input
                                    className='m-2 w-full rounded-md bg-red-900 px-3 py-[0.5rem] leading-[1.6]'
                                    onChange={changeHandler}
                                    name={`tip${index}`}
                                    value={tips[`tip${index}`] || ''}
                                    placeholder='Your Advice'
                                />

                                {index != 0 && (
                                    <button
                                        className='justify-end text-red-600'
                                        type='button'
                                    >
                                        <svg
                                            onClick={() => removeHandler(index)}
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth={1.5}
                                            stroke='currentColor'
                                            className='h-6 w-6'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        );
                    })}
            </div>
            <div className='mx-auto flex flex-col items-end justify-end'>
                <button
                    className=''
                    type='button'
                    onClick={() =>
                        // useTipsStore.setState({ numTips: numTips + 1 })
                        setTips({ ...tips, numTips: tips.numTips + 1 })
                    }
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-12 w-12'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default FormTips;
