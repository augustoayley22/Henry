import Link from "next/link";
import Bandeirinhas from "@/components/Bandeirinhas/Bandeirinhas";
import EstrelasAnimadas from "@/components/Bandeirinhas/EstrelasAnimadas";
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});

export default function LocalPage() {
  return (
    <main className="min-h-screen w-full bg-[#2b160b]">
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#f3d9ad] shadow-2xl">
        {/* fundo xadrez */}
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
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
              <span className="text-[22px]">📍</span>
              <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
            </div>

            <h1
              className={`${rye.className} mt-3 text-[38px] leading-none text-[#5a2b13]`}
              style={{
                textShadow:
                  "2px 2px 0 #f1d2a5, 0 4px 6px rgba(0,0,0,.25)",
              }}
            >
              Local do
            </h1>

            <h2
              className={`${rye.className} mt-1 text-[48px] leading-none text-[#7b3516]`}
              style={{
                textShadow:
                  "2px 2px 0 #e8c18b, 0 6px 8px rgba(0,0,0,.25)",
              }}
            >
              Arraiá
            </h2>
          </div>

          {/* card infos */}
          <div className="mt-6 w-full rounded-[28px] border-2 border-dashed border-[#9b6333]/65 bg-[#fff1cf]/80 p-3 shadow-[0_10px_20px_rgba(80,35,10,.22)]">
            <div className="rounded-[22px] bg-[#f9ddb0]/70 px-4 py-5">
              <p
                className={`${rye.className} text-[23px] leading-tight text-[#4b230f]`}
                style={{ textShadow: "1px 1px 0 #f4d7a4" }}
              >
                Sítio Recanto das Palmeiras
              </p>

              <p className="mt-3 font-serif text-[17px] font-black leading-tight text-[#6a3217]">
                <br />
                Itaúna/MG
              </p>

              <div className="mx-auto my-4 h-[2px] w-[70%] rounded-full bg-[#9b6333]/35" />

              <p className={`${rye.className} text-[18px] text-[#0b628a]`}>
                13 de Junho às 18h
              </p>
            </div>
          </div>

          {/* mapa */}
          <div className="mt-5 w-full overflow-hidden rounded-[26px] border-2 border-dashed border-[#9b6333]/65 bg-[#fff1cf]/80 p-2 shadow-[0_10px_20px_rgba(80,35,10,.22)]">
            <div className="h-[300px] overflow-hidden rounded-[20px] border border-[#9b6333]/35">
              <iframe
                src="https://www.google.com/maps?q=-20.115147936384496,-44.57631962289041&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* botões */}
          <div className="mt-6 flex w-full flex-col gap-4">
            <a
              href="https://www.google.com/maps?q=-20.115147936384496,-44.57631962289041"
              target="_blank"
              rel="noopener noreferrer"
              className={`${rye.className} relative rounded-2xl px-5 py-4 text-[19px] text-[#fff4d8] transition hover:-translate-y-1 active:translate-y-1`}
              style={{
                background:
                  "linear-gradient(180deg, #168eb3 0%, #0b628a 55%, #073f5e 100%)",
                boxShadow:
                  "0 7px 0 #063247, 0 13px 18px rgba(60,25,8,.25)",
                textShadow: "2px 2px 0 #063247",
              }}
            >
              Abrir no Google Maps

              <span className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#bfefff]/75" />
            </a>

            <Link
              href="/convite"
              className={`${rye.className} relative rounded-2xl px-5 py-4 text-[19px] text-[#fff4d8] transition hover:-translate-y-1 active:translate-y-1`}
              style={{
                background:
                  "linear-gradient(180deg, #d86b1f 0%, #a94d1c 55%, #61250c 100%)",
                boxShadow:
                  "0 7px 0 #351406, 0 13px 18px rgba(60,25,8,.25)",
                textShadow: "2px 2px 0 #4a1a08",
              }}
            >
              Voltar

              <span className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#f7c779]/75" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}