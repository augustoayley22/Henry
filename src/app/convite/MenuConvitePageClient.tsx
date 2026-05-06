"use client";

import Image from "next/image";
import Link from "next/link";
import Bandeirinhas from "@/components/Bandeirinhas/Bandeirinhas";
import EstrelasAnimadas from "@/components/Bandeirinhas/EstrelasAnimadas";
import { Rye } from "next/font/google";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});

type GuestStatus = "pending" | "confirmed" | "declined";

type Guest = {
  id: string;
  name: string;
  status: GuestStatus;
  createdAt: string;
};

const STORAGE_KEY = "arraia_guests";

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function MenuConvitePage() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const searchParams = useSearchParams();
  const guestSlug = searchParams.get("guest");

  const guestName = guestSlug
    ? decodeURIComponent(guestSlug).replaceAll("-", " ")
    : "Convidado";

  function updateGuestStatus(status: GuestStatus) {
    if (!guestSlug) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const guests: Guest[] = JSON.parse(saved);

    const updatedGuests = guests.map((guest) => {
      const currentSlug = slugify(guest.name);

      if (currentSlug === guestSlug) {
        return {
          ...guest,
          status,
        };
      }

      return guest;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGuests));
  }

  function showToast(message: string, type: "success" | "error" = "success") {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 2500);
  }

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

        <section className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-4 pb-6 text-center">
          {/* bandeirinhas */}
          <div className="absolute left-0 top-0 mt-2 h-[95px] w-full px-2 pt-2">
            <Bandeirinhas />
          </div>

          {/* topo */}
          <div className="mt-20 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
              <span className="text-[22px]">🌻</span>
              <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
            </div>

            <h1
              className={`${rye.className} mt-3 text-[43px] leading-none text-[#5a2b13]`}
              style={{
                textShadow:
                  "2px 2px 0 #f1d2a5, 0 4px 6px rgba(0,0,0,.25)",
              }}
            >
              Charraiá do
            </h1>

            <h2
              className={`${rye.className} mt-1 text-[62px] leading-none text-[#7b3516]`}
              style={{
                textShadow:
                  "2px 2px 0 #e8c18b, 0 6px 8px rgba(0,0,0,.25)",
              }}
            >
              Henry
            </h2>

          </div>

          {/* cena */}

          {/* card principal */}
          <div className="mt-4 w-full rounded-[28px] border-2 border-dashed border-[#9b6333]/65 bg-[#fff1cf]/75 p-3 shadow-[0_10px_20px_rgba(80,35,10,.22)]">
            <div className="rounded-[22px] bg-[#f9ddb0]/70 px-4 py-5">
              <p
                className={`${rye.className} text-[22px] leading-tight text-[#4b230f]`}
                style={{
                  textShadow: "1px 1px 0 #f4d7a4",
                }}
              >
                Escolha uma opção abaixo, sô!
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <ActionButton
                  href="/local"
                  label="Local da Festa"
                  emoji="📍"
                  variant="blue"
                />

                <ActionButton
                  href="/presentes"
                  label="Lista de Presentes"
                  emoji="🎁"
                  variant="orange"
                />

                <button
                  onClick={() => setOpen(true)}
                  className={`${rye.className} relative w-full rounded-2xl px-5 py-4 text-[20px] font-black text-[#fff4d8] transition hover:-translate-y-1 active:translate-y-1`}
                  style={{
                    background:
                      "linear-gradient(180deg, #3fa34d 0%, #2f7d38 55%, #1f5c29 100%)",
                    boxShadow:
                      "0 7px 0 #123f1b, 0 13px 18px rgba(60,25,8,.25)",
                    textShadow: "2px 2px 0 #17491f",
                  }}
                >
                  <span className="mr-2">🎉</span>
                  Confirmar Presença

                  <span className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#eaffc7]/65" />
                </button>
              </div>
            </div>
          </div>

          {/* detalhe inferior */}
          <p className={`${rye.className} mt-5 text-[13px] text-[#7a3f1c]`}>
            Vai ser bão demais da conta!
          </p>

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
        </section>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-5">
          <div className="relative w-full max-w-[390px] rounded-[30px] border-2 border-dashed border-[#9b6333]/70 bg-[#f3d9ad] p-4 text-center shadow-2xl">
            <div className="rounded-[24px] bg-[#fff1cf]/80 px-5 py-6">
              <h2
                className={`${rye.className} text-[28px] text-[#5a2b13]`}
                style={{
                  textShadow: "1px 1px 0 #f4d7a4",
                }}
              >
                Você poderá comparecer?
              </h2>

              <p className="mt-3 font-serif text-[18px] font-black text-[#6a3217]">
                {guestName}, você confirma sua presença?
              </p>


              <div className="mt-6 flex flex-col gap-3">

                {/* CONFIRMAR */}
                <button
                  onClick={() => {
                    updateGuestStatus("confirmed");
                    showToast("Presença confirmada! 🎉", "success");
                    setOpen(false);
                  }}
                  className={`${rye.className} rounded-2xl py-4 text-[18px] text-[#fff4d8]`}
                  style={{
                    background: "linear-gradient(180deg, #3fa34d 0%, #1f5c29 100%)",
                    boxShadow: "0 6px 0 #123f1b",
                    textShadow: "1px 1px 0 #17491f",
                  }}
                >
                  Confirmo minha presença
                </button>

                {/* NÃO VOU */}
                <button
                  onClick={() => {
                    updateGuestStatus("declined");
                    showToast("Resposta registrada 😢", "error");
                    setOpen(false);
                  }}
                  className={`${rye.className} rounded-2xl py-4 text-[18px] text-[#fff4d8]`}
                  style={{
                    background: "linear-gradient(180deg, #c0392b 0%, #7a1e16 100%)",
                    boxShadow: "0 6px 0 #4a120d",
                    textShadow: "1px 1px 0 #3a0f0a",
                  }}
                >
                  Não irei
                </button>

                {/* CANCELAR */}
                <button
                  onClick={() => setOpen(false)}
                  className={`${rye.className} rounded-2xl py-4 text-[18px] text-[#fff4d8]`}
                  style={{
                    background: "linear-gradient(180deg, #a94d1c 0%, #61250c 100%)",
                    boxShadow: "0 6px 0 #351406",
                    textShadow: "1px 1px 0 #4a1a08",
                  }}
                >
                  Cancelar
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2">
          <div
            className={`${rye.className} px-6 py-4 rounded-2xl text-[16px] font-black text-white shadow-xl animate-[toastIn_.3s_ease]`}
            style={{
              background:
                toast.type === "success"
                  ? "linear-gradient(180deg, #3fa34d 0%, #1f5c29 100%)"
                  : "linear-gradient(180deg, #c0392b 0%, #7a1e16 100%)",
              boxShadow:
                toast.type === "success"
                  ? "0 6px 0 #123f1b"
                  : "0 6px 0 #4a120d",
            }}
          >
            {toast.message}
          </div>

          <style>{`
            @keyframes toastIn {
              from {
                transform: translate(-50%, 20px);
                opacity: 0;
              }
              to {
                transform: translate(-50%, 0);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </main>
  );
}

function ActionButton({
  href,
  label,
  emoji,
  variant,
}: {
  href: string;
  label: string;
  emoji: string;
  variant: "blue" | "orange";
}) {
  const styles = {
    blue: {
      background:
        "linear-gradient(180deg, #168eb3 0%, #0b628a 55%, #073f5e 100%)",
      boxShadow: "0 7px 0 #063247, 0 13px 18px rgba(60,25,8,.25)",
      textShadow: "2px 2px 0 #063247",
      border: "#bfefff",
    },
    orange: {
      background:
        "linear-gradient(180deg, #d86b1f 0%, #a94d1c 55%, #61250c 100%)",
      boxShadow: "0 7px 0 #351406, 0 13px 18px rgba(60,25,8,.25)",
      textShadow: "2px 2px 0 #4a1a08",
      border: "#f7c779",
    },
  }[variant];

  return (
    <Link
      href={href}
      className="relative flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-[20px] font-black text-[#fff4d8] transition hover:-translate-y-1 active:translate-y-1"
      style={{
        background: styles.background,
        boxShadow: styles.boxShadow,
        textShadow: styles.textShadow,
      }}
    >
      <span className="text-[24px]">{emoji}</span>
      <span>{label}</span>

      <span
        className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed"
        style={{ borderColor: styles.border }}
      />
    </Link>
  );
}