import type { Metadata } from 'next';
import { montserrat, caveat, poppins } from './fonts';
import './globals.css';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`h-auto bg-gradient-to-b from-goldenRod/85 from-55% to-forestGreenShade1/85 bg-no-repeat ${montserrat.className} ${caveat.variable} ${poppins.variable}`}
            >
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
