import Nav from "@/components/AppComponents/Nav";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex w-screen flex-col overflow-hidden">
      
        <Nav />
      
      <div className="flex-grow overflow-y-auto  max-h-[calc(100vh-200px)] ">
        <Toaster />
       <div className="container border-2 border-green-400 h-full w-full mx-auto">
       {children}
       </div>
      </div>
    </section>
  );
}
