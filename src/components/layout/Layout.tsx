import Footer from './Footer';
import Navbar from './NavbarComponents/Navbar';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
