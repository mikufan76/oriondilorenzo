import './global.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-screen items-center justify-center overflow-clip bg-[url(/header-bg.png)] bg-cover p-[2%]">
          {children}
        </div>
      </body>
    </html>
  );
}
