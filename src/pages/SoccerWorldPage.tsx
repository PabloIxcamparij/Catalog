import { title, subtitle } from "@/components/Themes";

export default function SoccerWorldPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 mt-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "yellow" })}>Fantásticas </span>
          <span className={title()}>camisas de mundiales</span>
          <div className={subtitle({ class: "mt-4" })}>
            Con variedad de naciones y tallas
          </div>
        </div>
      </section>
    </>
  );
}
