import { getTravelDataById } from '@/lib/db/queries'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { deslugify } from "@/utils/textModifiers"
// export const metadata: Metadata = {
//     title: 'Travels',
//     description: 'Travels Page',
// }

export default async function Layout({
    children,
    params: { travelId }
}: {
    children: React.ReactNode,
    params: { travelId: string },
}) {
    // const travel = await getTravelDataById(deslugify(travelId))

    // if (!travel) {
    //     return notFound();
    // }

    return (
        <>
            {children}
        </>
    )
}
