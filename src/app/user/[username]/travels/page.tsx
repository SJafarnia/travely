import TravelsTemplate from '@/components/templates/TravelsTemplate';

export default function page({
    params: { username },
}: {
        params: { username: string };
}) {
    return <TravelsTemplate user={decodeURIComponent(username)} />;
}
