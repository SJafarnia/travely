import EditProfileTemplate from '@/components/templates/EditProfileTemplate';

async function page() {
    const x = await new Promise((resolves, error) =>
        setTimeout(resolves, 2000)
    );
    return <EditProfileTemplate />;
}

export default page;
