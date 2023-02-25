import "../styles/globals.css";
import Header from "./components/header";
import Foteer from "./Footer/Foteer";
import Cart from "./cart/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
      cz-shortcut-listen="true"
       className="bg-gray-100  w-full mx-auto overflow-x-hidden">
        <Header />
        <div className="flex flex-col w-full items-center justify-center p-0 md:items-start md:flex-row">
              {children}
        </div>
        <Foteer/>
        <Cart/>
      </body>
    </html>
  );
}
   