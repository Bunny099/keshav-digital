

// app/landing/layout.tsx
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-auto w-full  min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
