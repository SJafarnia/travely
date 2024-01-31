'use client'
import { useTipsStore } from "@/lib/zustand/store";
import { useFormikContext } from "formik";
import { useEffect } from "react"

function Tips() {
    const { setFieldValue } = useFormikContext();
    // @ts-ignore
    const tips = useTipsStore((state) => state.tips)
    // @ts-ignore
    const numTips: number = useTipsStore((state) => state.numTips)

    // adds each tip to the state (object)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event;
        // @ts-ignore
        useTipsStore.setState({ tips: { ...tips, [name]: value } });
    }

    const removeHandler = (index: number) => {
        // remove tip from state
        let updatedTips: any = { ...tips };
        delete updatedTips[`tip${index}`];
        useTipsStore.setState({ tips: updatedTips });

        //remove tip input from DOM
        useTipsStore.setState({ numTips: numTips - 1 });
    }

    useEffect(() => {
        // add tips to formik state
        setFieldValue('tips', tips);
    }, [tips]);

    return (
        <div className="flex w-full">
            <div className="flex flex-col w-4/5 mb-12">
                {Array(numTips).fill(null).map((val, index) => {
                    return (
                        <div key={index} className="flex">
                            <input
                                className="rounded-md w-full m-2 px-3 py-[0.5rem] leading-[1.6] bg-red-900"
                                onChange={changeHandler}
                                name={`tip${index}`}
                                value={tips[`tip${index}`]}
                                placeholder="Your Advice"
                            />

                            {index != 0 &&
                                <button className="justify-end text-red-600" type="button">
                                    <svg onClick={() => removeHandler(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button >
                            }
                        </div>
                    )
                }
                )}
            </div>
            <div className="mx-auto justify-end flex flex-col items-end">
                <button className="" type="button" onClick={() => useTipsStore.setState({ numTips: numTips + 1 })}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button >
            </div>
        </div >
    )
}

export default Tips