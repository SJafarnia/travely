import TravelsTemplate from "@/components/templates/TravelsTemplate"

export default function page({ params: { userEmail } }: { params: { userEmail: string } }) {

    return (
        <TravelsTemplate user={userEmail} />
    )
}
