import { BarMenu } from "@/components/BarMenu";
import { Image } from "@heroui/image";
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
      <BarMenu onSelectTeam={onSelectTeam} scrollToFooter={scrollToFooter} />

      <main className="flex flex-col items-center justify-center gap-5 flex-grow">
        {children}
      </main>

      <footer
        ref={footerRef}
        className="flex items-center justify-center w-full mt-10 p-5 gap-5"
      >
        <p className="text-lg lg:text-xl text-default-600">
          Para cualquier consulta o compra, dirígete al chat
        </p>

        <a
            href="https://wa.me/50663439380"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:bg-green-200 w-20 h-16 rounded-full"
          >
            <Image src="/whatsapp.svg" alt="WhatsApp" />
          </a>
      </footer>
    </div>
  );
}
