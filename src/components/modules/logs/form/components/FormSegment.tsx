import { cn } from '@/lib/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';

type SegmentProps = VariantProps<typeof SegmentVariants> & {
    text: string;
    icon: React.ReactNode;
    styles?: string;
    tooltipId?: string;
    tooltipContent?: string;
    formField?: React.ReactNode;
};

const SegmentVariants = cva('cursor-pointer my-4', {
    variants: {
        variant: {
            default: '',
            title: 'text-white font-bold text-2xl mb-6',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

export default function FormSegment({
    text,
    icon,
    styles,
    variant,
    tooltipId,
    tooltipContent,
    formField,
}: SegmentProps) {
    return (
        <>
            <p
                className={cn(SegmentVariants({ variant, className: styles }))}
                data-tooltip-id={`${tooltipId}`}
                data-tooltip-content={`${tooltipContent}`}
            >
                {text}
                <span>{icon}</span>
            </p>
            {formField && formField}
        </>
    );
}
