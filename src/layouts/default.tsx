import { Navbar } from "@/components/navbar";
import { Image } from "@heroui/image";

export default function DefaultLayout({ children, onSelectTeam } : any) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar onSelectTeam={onSelectTeam} /> {/* Pasamos la función */}
      <main className="flex flex-col items-center justify-center gap-5">{children}</main>
      
      <footer className="w-full bg-gray-500 text-white flex items-center justify-center py-5 mt-10 gap-5">
        <p className="text-lg">Para cualquier consulta o compra, dirígete al chat </p>
        <a
          href="https://wa.me/50663439380"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center hover:bg-gray-400 h-full w-16 rounded-lg"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" />
        </a>
      </footer>
    </div>
  );
}
