import { BarMenu } from "@/components/BarMenu";
import { Image } from "@heroui/image";
import { useRef } from "react";
import { useTheme } from "@/hook/useTheme";
import { Outlet } from "react-router-dom";


export default function DefaultLayout() {
  const footerRef = useRef<HTMLElement | null>(null);
  const theme = useTheme(); 

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col h-screen">
      <BarMenu scrollToFooter={scrollToFooter} />

      <main className="flex flex-col items-center justify-center gap-5 flex-grow">
      <Outlet/>
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
          className={`flex items-center justify-center w-14 h-14 rounded-full 
            ${theme === "dark" ? "hover:bg-green-600" : "hover:bg-green-200"}`}
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" />
        </a>
      </footer>
    </div>
  );
}
