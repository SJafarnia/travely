type buttonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
    icon: React.ReactNode,
    disabled?: boolean,
    type: "submit" | "reset" | "button" | undefined,
}

function FormButton({ disabled, type, icon, ...props }: buttonProps) {
    return (
        <button type={type} disabled={disabled} {...props}>
            {icon}
        </button>
    )
}

export default FormButton