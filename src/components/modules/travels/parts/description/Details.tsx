function Details({ description, styles }: { styles: string, description: string | null | undefined, }) {
    return (
        <p className={styles}>
            {description}
        </p>
    )
}

export default Details