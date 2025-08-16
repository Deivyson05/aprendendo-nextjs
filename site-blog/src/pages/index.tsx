import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div
      className={
        `
          grid grid-rows-[20px_1fr_20px]
          items-center justify-items-center min-h-screen p-8
          pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
        `
      }
    >
      <h2 className="text-4xl text-blue-200">Início</h2>

    </div>
  );
}
