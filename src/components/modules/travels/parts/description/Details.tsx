function Details({ description }: { description: string | null | undefined, }) {
    return (
        <p className="text-jet font-medium mt-20">
            {description}
        </p>
    )
}

export default Details