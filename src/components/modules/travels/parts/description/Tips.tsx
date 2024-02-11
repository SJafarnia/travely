import { JsonValue } from '@prisma/client/runtime/library';

function Tips({ tips }: { tips: JsonValue | undefined }) {
    if (!tips) return;

    const tipsList = Object.values(tips);

    return (
        <>
            <div className='mb-10 mt-20 font-caveat text-4xl text-jet sm:text-5xl'>
                Tips and Recommendations{' '}
            </div>
            <div className='mx-auto flex justify-center'>
                <ul className='list-inside text-left font-semibold text-jet/90 [&>li]:my-4 [&>li]:list-disc [&>li]:p-2'>
                    {tipsList.map((tip, index) => (
                        <li key={index} className='relative'>
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tips;
