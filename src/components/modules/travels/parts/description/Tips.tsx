import { JsonValue } from "@prisma/client/runtime/library"

function Tips({ tips }: { tips: JsonValue | undefined }) {

    if (!tips) return

    const tipsList = Object.values(tips)

    return (
        <>
            <div className="font-caveat mt-20 mb-10 text-4xl sm:text-5xl text-jet">Tips and Recommendations </div>
            <div className="mx-auto flex justify-center">
                <ul className="[&>li]:list-disc list-inside [&>li]:my-4 [&>li]:p-2 text-left text-jet/90 font-semibold">
                    {tipsList.map((tip, index) => (
                        <li key={index} className="relative">
                            <span>
                                {tip}
                            </span>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default Tips