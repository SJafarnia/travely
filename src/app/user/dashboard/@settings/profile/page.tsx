import ProfileEditTemplate from '@/components/templates/ProfileEditTemplate';

async function page() {
    const x = await new Promise((resolves, error) =>
        setTimeout(resolves, 2000)
    );
    return <ProfileEditTemplate />;
}

export default page;
