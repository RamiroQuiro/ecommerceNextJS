import "../styles/globals.css";
import Cart from "./Cart/page";
import Header from "./components/header";
import ReactQueryWrapper from "./ReactQueryWrapper";

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
      <body className="bg-gray-100 dark:bg-gray-800 w-full mx-auto overflow-x-hidden">
        <Header />
        <div className="flex flex-col w-full items-center justify-center p-0 md:items-start md:flex-row">
              <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </div>
        <Cart />
      </body>
    </html>
  );
}
   