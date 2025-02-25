import { Navbar } from "@/components/NavBar";
import { Image } from "@heroui/image";
import { coteinerFooter, subtitle } from "@/components/Themes";
import { useRef } from "react";

export default function DefaultLayout({ children, onSelectTeam }: any) {
  const footerRef = useRef<HTMLElement | null>(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar onSelectTeam={onSelectTeam} scrollToFooter={scrollToFooter} />

      <main className="flex flex-col items-center justify-center gap-5 flex-grow">
        {children}
      </main>

      <footer ref={footerRef} className={coteinerFooter()}>
        <p className={subtitle()}>Para cualquier consulta o compra, dirígete al chat</p>
        <a
          href="https://wa.me/50663439380"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center hover:bg-gray-200 w-20 h-16 rounded-full"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" />
        </a>
      </footer>
    </div>
  );
}
