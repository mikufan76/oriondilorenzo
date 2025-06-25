import './global.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="z-1 overflow-clip flex h-screen w-screen items-center justify-center bg-[url(/header-bg.png)] bg-cover p-[2%]">
          <div className="h-full w-full bg-bg z-10 overflow-visible">{children}</div>
        </div>
      </body>
    </html>
  );
}
