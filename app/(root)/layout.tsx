import Nav from "@/components/AppComponents/Nav";
import { Toaster } from "@/components/ui/toaster";
import { Toast } from "@radix-ui/react-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background border px-2 items-center lg:px-4 h-14">
        <Nav />
      </nav>

      {/* Content */}
      <main className="flex-grow ">
        <div className="container mx-auto py-8 px-4">
          <Toaster />
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 h-24">
        <div className="container mx-auto flex justify-between items-center"></div>
      </footer>
    </div>
  );
}
