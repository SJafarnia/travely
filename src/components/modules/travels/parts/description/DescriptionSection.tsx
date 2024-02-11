import { JsonValue } from '@prisma/client/runtime/library';
import Details from './Details';
import Tips from './Tips';

type props = {
    description: string | null | undefined;
    tips: JsonValue | undefined;
};

function DescriptionSection({ description, tips }: props) {
    return (
        <div className='mx-auto mt-16 w-4/6 text-center'>
            <Details
                styles='text-jet font-medium font-poppins p-4'
                description={description}
            />
            <Tips tips={tips} />
        </div>
    );
}

export default DescriptionSection;
