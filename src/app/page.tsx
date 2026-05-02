import Bandeirinhas from "@/components/Bandeirinhas/Bandeirinhas";
import Image from "next/image";
import EstrelasAnimadas from "@/components/Bandeirinhas/EstrelasAnimadas";
import { Rye } from "next/font/google";
import Link from "next/link";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});

export default function ConvitePage() {
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
            radial-gradient(circle at 60% 70%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 30% 80%, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,70,35,.10) 50%, transparent 50%),
            linear-gradient(rgba(120,70,35,.10) 50%, transparent 50%)
          `,
          backgroundSize: `
            120px 120px,
            160px 160px,
            140px 140px,
            180px 180px,
            42px 42px,
            42px 42px
          `,
        }}
      />

      <EstrelasAnimadas />

        {/* borda */}
        <div className="pointer-events-none absolute inset-[10px] z-30 rounded-[26px] border-2 border-dashed border-[#8a4b24]/65" />

        <section className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-4 pb-5 text-center">
        {/* bandeirinhas */}
        <div className=" mt-2 absolute top-0 left-0 w-full h-[70px] px-3 pt-2">
          <Bandeirinhas />
        </div>

        {/* topo decorado */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
            <span className="text-[22px]">🌻</span>
            <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
          </div>

          <h1
            className={`${rye.className} mt-2 text-[52px] text-[#5a2b13]`}
            style={{
              textShadow: "2px 2px 0 #f1d2a5, 0 4px 6px rgba(0,0,0,.25)",
            }}
          >
            Chá
          </h1>

          <p
            className={`${rye.className} mt-1 text-[15px] tracking-[0.25em] text-[#7a3f1c]`}
          >
            DO NOSSO PEQUENO CAIPIRINHA
          </p>
        </div>

        {/* placa */}
        <div className="relative mt-3 h-[198px] w-full max-w-[390px]">
          <Image
            src="/placa-madeira.png"
            alt="Placa de madeira"
            fill
            className="object-contain drop-shadow-[0_8px_10px_rgba(80,35,10,.25)]"
          />

          <span
            className={`${rye.className} mb-5 absolute inset-0 flex items-center justify-center text-[36px] text-[#fff3d4]`}
            style={{
              textShadow: "2px 2px 0 #6b3415, 0 4px 6px rgba(0,0,0,.4)",
            }}
          >
            Arraiá do
          </span>
        </div>

        

        {/* mensagem curta */}
        <div className=" mt-2 rounded-full border border-dashed border-[#9b6333]/55 bg-[#f9ddb0]/65 px-5 py-2">
          <p className={`${rye.className}  text-[16px] font-black text-[#6a3217]`}>
            Venha celebrar esse momento especial!
          </p>
        </div>

        {/* nome */}
        <div className="mt-4 w-full rounded-xl border border-[#9a632f]/40 bg-[#c9975b]/40 px-4 py-4 shadow-md">
          <h2
            className={`${rye.className} font-serif text-[78px] font-black leading-none text-[#5a2b13]`}
            style={{
              textShadow: "2px 2px 0 #e8c18b, 0 6px 8px rgba(0,0,0,.25)",
            }}
          >
            Henry
          </h2>
        </div>

        {/* bebê */}
        {/* cena bebê / fogueira / balão */}
        <div className="relative mt-8 h-[310px] w-full overflow-visible">
          {/* brilho quente no fundo */}
          <div className="absolute left-1/2 top-[48%] h-[250px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffcc80]/35 blur-3xl" />

          {/* luz da fogueira */}
          <div className="absolute left-[8px] bottom-[42px] h-[120px] w-[120px] rounded-full bg-orange-400/25 blur-2xl" />

          {/* sombra geral da cena */}
          <div className="absolute bottom-[18px] left-1/2 h-[30px] w-[78%] -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
          
          <div className="absolute left-[120px] bottom-[55px] h-[60px] w-[60px] rotate-[-10deg] opacity-90">
            <Image
              src="/milho.png"
              alt="Milho"
              fill
              className="object-contain"
            />
          </div>

          {/* fogueira */}
          <div className="absolute left-[-6px] bottom-[30px] h-[118px] w-[118px] z-10">
            <Image
              src="/fogueir.png"
              alt="Fogueira"
              fill
              className="object-contain drop-shadow-[0_10px_16px_rgba(80,30,8,.45)]"
            />
          </div>

          {/* bebê */}
          <div className="absolute left-1/2 bottom-[20px] z-20 h-[265px] w-[230px] -translate-x-1/2">
            <Image
              src="/bebe-junino.png"
              alt="Bebê junino"
              fill
              priority
              sizes="230px"
              className="object-contain scale-[1.06] drop-shadow-[0_18px_22px_rgba(70,35,12,.42)]"
            />
          </div>

          {/* balão próximo do bebê */}
          <div className="absolute right-[48px] bottom-[58px] z-30 h-[120px] w-[120px] rotate-[4deg]">
            <Image
              src="/balao.png"
              alt="Balão junino"
              fill
              className="object-contain drop-shadow-[0_10px_14px_rgba(60,25,8,.35)]"
            />
          </div>

          {/* balão suspenso */}
          <div className="absolute right-[-6px] top-[4px] z-10 h-[145px] w-[145px] rotate-[-5deg] animate-[floatLantern_4s_ease-in-out_infinite]">
            <Image
              src="/balao.png"
              alt="Balão junino suspenso"
              fill
              className="object-contain drop-shadow-[0_12px_18px_rgba(60,25,8,.35)]"
            />
          </div>

          {/* partículas de luz */}
          <span className="absolute left-[72px] top-[82px] h-2 w-2 rounded-full bg-[#ffc53d]/80 shadow-[0_0_12px_#ffc53d]" />
          <span className="absolute right-[92px] top-[58px] h-1.5 w-1.5 rounded-full bg-[#ffd86b]/80 shadow-[0_0_10px_#ffd86b]" />
          <span className="absolute right-[36px] top-[156px] h-1.5 w-1.5 rounded-full bg-[#ffc53d]/70 shadow-[0_0_10px_#ffc53d]" />

          <style>{`
            @keyframes floatLantern {
              0%, 100% {
                transform: translateY(0) rotate(-5deg);
              }
              50% {
                transform: translateY(-10px) rotate(2deg);
              }
            }
            `}</style>
          </div>
          {/* data / hora */}
          <div className="mt-5 w-full rounded-2xl border-2 border-dashed border-[#9b6333]/60 bg-[#f9ddb0]/85 p-2 shadow-[0_6px_12px_rgba(80,35,10,.18)]">
            <div className="grid grid-cols-[1fr_1.25fr_1fr] items-center rounded-xl bg-[#fff1cf]/45 px-2 py-4">
              {/* Data */}
              <div className="text-center">
                <p className={`${rye.className}  text-[46px] font-black leading-none text-[#7b3516] drop-shadow-sm`}>
                  13
                </p>
                <p className={`${rye.className} mt-1 font-serif text-[17px] font-black uppercase leading-none tracking-wide text-[#0b628a]`}>
                  Junho
                </p>
              </div>

              {/* Centro */}
              <div className="relative border-x border-dashed border-[#9b6333]/45 px-3 text-center">
                <p className={`${rye.className} text-[18px] leading-none`}>🌽</p>
                <p className={`${rye.className} mt-1 font-serif text-[18px] font-black leading-tight text-[#4b230f]`}>
                  É logo ali,
                  <br />
                  bem pertinho
                  <br />
                  sô!
                </p>
              </div>

              {/* Hora */}
              <div className="text-center">
                <p className={`${rye.className}  text-[46px] font-black leading-none text-[#7b3516] drop-shadow-sm`}>
                  18h
                </p>
                <p className={`${rye.className} mt-1 font-serif text-[13px] font-bold uppercase tracking-[0.18em] text-[#8a4b24]`}>
                  Horário
                </p>
              </div>
            </div>
          </div>

          {/* texto animado */}
          <div className="relative mt-6 max-w-[370px] px-4 text-center animate-[textFloat_3.5s_ease-in-out_infinite]">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-[#fff1cf]/45 blur-sm" />

            <p
              className={`${rye.className} font-serif text-[24px] font-black leading-tight text-[#4b230f]`}
              style={{
                textShadow: "2px 2px 0 #f4d7a4, 0 4px 8px rgba(80,35,10,.18)",
              }}
            >
              O mais novo membro da família
              <br />
              está chegando!
            </p>

            <div className="mx-auto my-2 h-[2px] w-[72%] rounded-full bg-[#9b6333]/35" />

            <p
              className={`${rye.className} font-serif text-[22px] font-black leading-none text-[#7b3516] animate-[pulseText_1.8s_ease-in-out_infinite]`}
              style={{
                textShadow: "1px 1px 0 #f4d7a4",
              }}
            >
              Pro trêm ficá mió
            </p>

            <span className="absolute -left-1 top-3 text-[20px] animate-[spark_2s_ease-in-out_infinite]">
              ✨
            </span>
            <span className="absolute -right-1 bottom-3 text-[18px] animate-[spark_2.4s_ease-in-out_infinite]">
              🌽
            </span>

            <style>{`
              @keyframes textFloat {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-5px);
                }
              }

              @keyframes pulseText {
                0%, 100% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.04);
                  opacity: .92;
                }
              }

              @keyframes spark {
                0%, 100% {
                  transform: translateY(0) rotate(0deg) scale(1);
                  opacity: .7;
                }
                50% {
                  transform: translateY(-6px) rotate(8deg) scale(1.15);
                  opacity: 1;
                }
              }
            `}</style>
          </div>
          {/* botão */}
          <Link
            href="/convite"
            className={`${rye.className} relative mt-6 mb-6 block w-full rounded-2xl px-5 py-4 text-center font-serif text-[25px] font-black text-[#fff4d8] transition active:translate-y-1`}
            style={{
              background: "linear-gradient(180deg, #a94d1c, #61250c)",
              boxShadow: "0 7px 0 #351406",
            }}
          >
            Mais informações!

            <span className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#f7c779]/60" />
          </Link>
        </section>
      </div>
    </main>
  );
}