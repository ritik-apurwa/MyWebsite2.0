import Nav from "@/components/AppComponents/Nav";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col">
      <div className="w-full h-auto">
        <Nav />
      </div>
      <div className="flex flex-col container max-w-6xl md:py-10 px-3 py-6">
        <Toaster />
        {children}
      </div>
    </section>
  );
}
