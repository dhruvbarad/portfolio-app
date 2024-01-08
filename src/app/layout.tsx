import "./global.css";
import {Inter} from "next/font/google";
import LocalFont from "next/font/local";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = LocalFont({
    src: "../../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Your page description goes here"/>
            <meta name="author" content="Your Name"/>
            <meta property="og:title" content="Portfolio"/>
            <meta property="og:description" content="A portfolio website"/>
            <title>Portfolio</title>
            <link rel="icon" href="/images/favicon.png" type="image/x-icon"/>
            <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/>
        </head>
        <body className={`bg-black`}>
        {children}
        </body>
        </html>
    );
}
