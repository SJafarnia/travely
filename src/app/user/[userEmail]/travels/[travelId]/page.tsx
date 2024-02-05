import TravelPageTemplate from "@/components/templates/TravelPageTemplate"

export default function page({ params: { userEmail, travelId } }: { params: { userEmail: string, travelId: string } }) {

  return (
    <TravelPageTemplate travelId={travelId} />
  )
}