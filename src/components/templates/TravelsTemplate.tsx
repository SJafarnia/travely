import TravelsMain from '../modules/travels/TravelsMain';

function TravelsTemplate({ user }: { user: string }) {
    return <TravelsMain user={user} />;
}
export default TravelsTemplate;
