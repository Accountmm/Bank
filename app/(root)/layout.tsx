import MobileNav from "@/Components/MobileNav";
import Sidebar from "@/Components/Sidebar";
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const logeIn = { firstName: 'Mirobidov', lastName: 'Mirabbos' }

  return (
    <>
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={logeIn} />

        <div className="flex flex-col size-full">
          <div className="root-layout">
            <Image src={'/icons/logo.svg'} alt="logo" width={30} height={30} />

            <div>
              <MobileNav user={logeIn} />
            </div>
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
