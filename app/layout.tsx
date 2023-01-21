import "../styles/globals.css";
import Header from "./components/header";
import Menu from "./components/menu";

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
      <body className="bg-gray-200 dark:bg-gray-800 w-full mx-auto ">
        <Header />
    <div class="flex flex-col items-center justify-center md:items-start md:flex-row">
        {children}
        </div>
      </body>
    </html>
  );
}