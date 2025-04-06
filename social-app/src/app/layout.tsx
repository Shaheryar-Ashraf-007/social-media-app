import { ClerkProvider } from "@clerk/nextjs";
import "../app/styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Clerk Next.js Quickstart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className="">
          <div className=" fixed w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <Navbar />
          </div>
          <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 overflow-y-hidden scrollbar-hidden">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}