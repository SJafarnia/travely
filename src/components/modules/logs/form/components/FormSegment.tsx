
type SegmentProps = {
    text: string,
    icon: React.ReactNode,
    styles: string,
    tooltipId?: string,
    tooltipContent?: string
    formField?: React.ReactNode
}

export default function FormSegment({ text, icon, styles, tooltipId, tooltipContent, formField }: SegmentProps) {
    return (
        <>
            <p className={styles} data-tooltip-id={`${tooltipId}`} data-tooltip-content={`${tooltipContent}`}>
                {text}<span>{icon}</span>
            </p>
            {formField && formField}
        </>

    )
}
