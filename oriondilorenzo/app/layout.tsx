import './global.css';
import 'react-photo-view/dist/react-photo-view.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="z-1 flex h-screen w-screen items-center justify-center overflow-clip bg-[url(/header-bg.webp)] bg-cover p-[2%]">
          <div className="z-10 h-full w-full overflow-visible bg-bg">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
