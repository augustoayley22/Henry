import Image from "next/image";
import Link from "next/link";
import Bandeirinhas from "@/components/Bandeirinhas/Bandeirinhas";
import EstrelasAnimadas from "@/components/Bandeirinhas/EstrelasAnimadas";
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});

export default function PresentesPage() {
  return (
    <main className="min-h-screen w-full bg-[#2b160b]">
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#f3d9ad] shadow-2xl">
        
        {/* fundo */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,70,35,.10) 50%, transparent 50%),
              linear-gradient(rgba(120,70,35,.10) 50%, transparent 50%)
            `,
            backgroundSize: "120px 120px,160px 160px,42px 42px,42px 42px",
          }}
        />

        <EstrelasAnimadas />

        {/* borda */}
        <div className="pointer-events-none absolute inset-[10px] z-30 rounded-[26px] border-2 border-dashed border-[#8a4b24]/65" />

        <section className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-4 pb-6 text-center">
          
          {/* bandeirinhas */}
          <div className="absolute left-0 top-0 mt-2 h-[95px] w-full px-2 pt-2">
            <Bandeirinhas />
          </div>

          {/* topo */}
          <div className="mt-20 flex flex-col items-center">
            <div className="relative h-[150px] w-[180px]">
              <Image src="/presente.png" alt="Presente" fill className="object-contain" />
            </div>

            <h1
              className={`${rye.className} mt-3 text-[38px] text-[#5a2b13]`}
              style={{ textShadow: "2px 2px 0 #f1d2a5, 0 4px 6px rgba(0,0,0,.25)" }}
            >
              Lista de Presentes
            </h1>

            <p className={`${rye.className} mt-3 text-[18px] text-[#0b628a]`}>
              Se quiser mimar o Henry, sô!
            </p>
          </div>

          {/* card */}
          <div className="mt-6 w-full rounded-[28px] border-2 border-dashed border-[#9b6333]/65 bg-[#fff1cf]/80 p-3 shadow-[0_10px_20px_rgba(80,35,10,.22)]">
            <div className="rounded-[22px] bg-[#f9ddb0]/70 px-4 py-5 space-y-4">
            
              <GiftBlock
                title="Fraldas 🍼"
                description="P, M, G, GG já ajudam demais!"
                examples={["Pampers", "Huggies", "Cremer"]}
              />

              <GiftBlock
                title="Mimos 🎁"
                description="Um carinho pro Henry"
                examples={[
                  "Body ou roupinha",
                  "Toalha ou kit banho",
                  "Brinquedinho",
                ]}
              />

            </div>
          </div>

          {/* botões */}
          <div className="mt-6 flex w-full flex-col gap-4">

            <Link
              href="/convite"
              className={`${rye.className} relative rounded-2xl px-5 py-4 text-[19px] text-[#fff4d8]`}
              style={{
                background: "linear-gradient(180deg, #d86b1f 0%, #61250c 100%)",
                boxShadow: "0 6px 0 #351406",
                textShadow: "1px 1px 0 #4a1a08",
              }}
            >
              Voltar
              <span className="absolute inset-2 rounded-xl border-2 border-dashed border-[#f7c779]/75" />
            </Link>

          </div>
        </section>
      </div>
    </main>
  );
}

function GiftBlock({
  title,
  description,
  examples,
}: {
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <div className="relative rounded-[22px] border-2 border-dashed border-[#d97a28]/70 bg-[#fff2dc] px-5 py-5 shadow-[0_6px_14px_rgba(80,35,10,.18)]">

      {/* brilho interno */}
      <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_60%)] pointer-events-none" />

      {/* título */}
      <div className="flex items-center gap-2">
        <span className="text-[22px]">{title.split(" ")[1]}</span>
        <h3 className="text-[20px] font-black text-[#8a3917]">
          {title.split(" ")[0]}
        </h3>
      </div>

      {/* descrição */}
      <p className="mt-2 text-[14px] font-semibold text-[#6a3217]">
        {description}
      </p>

      {/* divisor */}
      <div className="my-3 h-[2px] w-full rounded-full bg-[#d97a28]/30" />

      {/* lista */}
      <ul className="space-y-2">
        {examples.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-[15px] font-bold text-[#4b230f]"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[#d97a28]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}