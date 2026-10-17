import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase:new URL("https://shakaib732.github.io"),title:"Homa Firozi | The Living Journal",description:"The professional portfolio of Homa Firozi — educator, trainer and literary scholar. Quiet dedication. Intentional work. Lasting impact.",openGraph:{title:"Homa Firozi | The Living Journal",description:"Driven by knowledge. Guided by empathy. Defined by dedication.",type:"website",url:"https://shakaib732.github.io/Homa-Portfolio/"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
