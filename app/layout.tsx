import "./global.scss";
import "../app/comp/nav";
import Nav from "../app/comp/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
