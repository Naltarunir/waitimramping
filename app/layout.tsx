import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { SpecProvider } from "@context/SpecContext";
import Theme from "@components/Theme/Theme";
import AppBar from "@components/AppBar/AppBar";
import FooterBar from "@components/AppBar/FooterBar";
import ClientTilingBackground from "@components/Tiling/ClientTilingBackground";
import { PageMetadata } from "@components/PageMetadata/PageMetadata";

export const metadata = PageMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.className} ${GeistSans.variable}`}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `const whTooltips = {colorLinks: true, iconizeLinks: false, renameLinks: false, iconSize: 'medium'};`,
                    }}
                />
                <Script
                    src="/wowheadRestyle.js"
                    strategy="afterInteractive"
                />
            </head>
            <body>
                <a className="skip-link" href="#main">Skip to content</a>
                <Script 
                    src="https://wow.zamimg.com/js/tooltips.js" 
                    strategy="afterInteractive"
                />
                <AppRouterCacheProvider>
                    <Theme>
                        <SpecProvider>
                            <ClientTilingBackground />
                            <AppBar />
                            <main id="main" tabIndex={-1}>{children}</main>
                            <FooterBar />
                        </SpecProvider>
                    </Theme>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
