import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReduxWrapper from "./ReduxWrapper";  // <-- ADD THIS

export const metadata = {
  title: "Clothing Brand",
  description: "Fashion clothing brand website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxWrapper>
          <Navbar />
          {children}
          <Footer />
        </ReduxWrapper>
      </body>
    </html>
  );
}
