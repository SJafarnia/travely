import TravelPageTemplate from "@/components/templates/TravelPageTemplate"

export default function page({ params }: { params: { id: string } }) {
  return (
    <TravelPageTemplate />
  )
}