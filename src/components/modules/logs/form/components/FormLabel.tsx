type labelProps = {
    text: string,
    icon: React.ReactNode,
    styles: string,
    tooltipId?: string,
    tooltipContent?: string
}

export default function FormLabel({ text, icon, styles, tooltipId, tooltipContent }: labelProps) {
    return (
        <p className={styles} data-tooltip-id={`${tooltipId}`} data-tooltip-content={`${tooltipContent}`}>
            {text}<span>{icon}</span>
        </p>
    )
}
