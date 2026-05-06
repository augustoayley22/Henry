"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Bandeirinhas from "@/components/Bandeirinhas/Bandeirinhas";
import EstrelasAnimadas from "@/components/Bandeirinhas/EstrelasAnimadas";
import { Rye } from "next/font/google";

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

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function getGuestLink(guest: Guest) {
  if (typeof window === "undefined") return "";

  const slug = slugify(guest.name);
  const nome = encodeURIComponent(guest.name);

  return `${window.location.origin}/c/${slug}?nome=${nome}`;
}

const STORAGE_KEY = "arraia_guests";

const statusLabel: Record<GuestStatus, string> = {
  pending: "Aguardando resposta",
  confirmed: "Presença confirmada",
  declined: "Não poderá comparecer",
};

export default function ConvidadosPage() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [name, setName] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth !== "true") {
      window.location.href = "/login";
      return;
    }

    setIsCheckingAuth(false);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setGuests(JSON.parse(saved));
  }, []);

  if (isCheckingAuth) {
    return null;
  }

  function saveGuests(nextGuests: Guest[]) {
    setGuests(nextGuests);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextGuests));
  }

  function addGuest() {
    if (!name.trim()) return;

    const newGuest: Guest = {
      id: crypto.randomUUID(),
      name: name.trim(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    saveGuests([newGuest, ...guests]);
    setName("");
  }

  function removeGuest(id: string) {
    saveGuests(guests.filter((guest) => guest.id !== id));
  }


  async function copyLink(guest: Guest) {
    await navigator.clipboard.writeText(getGuestLink(guest));
  }

  return (
    <main className="min-h-screen w-full bg-[#2b160b]">
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#f3d9ad] shadow-2xl">
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

        <div className="pointer-events-none absolute inset-[10px] z-30 rounded-[26px] border-2 border-dashed border-[#8a4b24]/65" />

        <section className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-4 pb-6 text-center">
          <div className="absolute left-0 top-0 mt-2 h-[95px] w-full px-2 pt-2">
            <Bandeirinhas />
          </div>

          <div className="mt-20 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
              <span className="text-[22px]">🎟️</span>
              <span className="h-[2px] w-12 bg-[#8a4b24]/50" />
            </div>

            <h1
              className={`${rye.className} mt-3 text-[35px] leading-none text-[#5a2b13]`}
              style={{
                textShadow:
                  "2px 2px 0 #f1d2a5, 0 4px 6px rgba(0,0,0,.25)",
              }}
            >
              Lista de
            </h1>

            <h2
              className={`${rye.className} mt-1 text-[45px] leading-none text-[#7b3516]`}
              style={{
                textShadow:
                  "2px 2px 0 #e8c18b, 0 6px 8px rgba(0,0,0,.25)",
              }}
            >
              Convidados
            </h2>
          </div>

          <div className="mt-6 w-full rounded-[28px] border-2 border-dashed border-[#9b6333]/65 bg-[#fff1cf]/80 p-3 shadow-[0_10px_20px_rgba(80,35,10,.22)]">
            <div className="rounded-[22px] bg-[#f9ddb0]/70 px-4 py-5">
              <div className="flex flex-col gap-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome do convidado"
                  className="rounded-full border-2 border-[#d97a28] bg-[#fff2dc] px-5 py-3 font-serif font-bold text-[#4b230f] outline-none placeholder:text-[#9b6333]/70"
                />

                <button
                  onClick={addGuest}
                  className={`${rye.className} relative rounded-2xl px-5 py-4 text-[19px] text-[#fff4d8] transition active:translate-y-1`}
                  style={{
                    background:
                      "linear-gradient(180deg, #3fa34d 0%, #1f5c29 100%)",
                    boxShadow: "0 6px 0 #123f1b",
                    textShadow: "1px 1px 0 #17491f",
                  }}
                >
                  Adicionar convidado
                  <span className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#eaffc7]/65" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 flex w-full flex-col gap-4">
            {guests.length === 0 && (
              <div className="rounded-[22px] border-2 border-dashed border-[#d97a28]/70 bg-[#fff2dc]/85 px-4 py-5 shadow-[0_6px_14px_rgba(80,35,10,.16)]">
                <p className={`${rye.className} text-[17px] text-[#8a3917]`}>
                  Nenhum convidado cadastrado ainda.
                </p>
              </div>
            )}

            {guests.map((guest) => {
              const statusStyle = {
                pending: {
                  label: "Aguardando",
                  bg: "#fff3cd",
                  text: "#8a5a00",
                  icon: "⏳",
                },
                confirmed: {
                  label: "Confirmado",
                  bg: "#d9f7df",
                  text: "#1f6b2d",
                  icon: "✅",
                },
                declined: {
                  label: "Recusado",
                  bg: "#ffe0dc",
                  text: "#9f1d1d",
                  icon: "❌",
                },
              }[guest.status];

              return (
                <div
                  key={guest.id}
                  className="rounded-[20px] border-2 border-dashed border-[#d97a28]/60 bg-[#fff2dc]/90 p-4 shadow-[0_5px_12px_rgba(80,35,10,.15)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 text-left">
                      <h3 className={`${rye.className} truncate text-[22px] text-[#8f3f17]`}>
                        {guest.name}
                      </h3>

                      <span
                        className="mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[12px] font-black"
                        style={{
                          background: statusStyle.bg,
                          color: statusStyle.text,
                        }}
                      >
                        {statusStyle.icon} {statusStyle.label}
                      </span>
                    </div>

                    <div className="flex shrink-0 gap-2">
                      <button
                        onClick={() => copyLink(guest)}
                        className="rounded-xl px-3 py-2 font-serif text-[13px] font-black text-white"
                        style={{
                          background: "#168eb3",
                          boxShadow: "0 4px 0 #063247",
                        }}
                      >
                        Copiar
                      </button>

                      <button
                        onClick={() => removeGuest(guest.id)}
                        className="rounded-xl px-3 py-2 font-serif text-[13px] font-black text-white"
                        style={{
                          background: "#d35400",
                          boxShadow: "0 4px 0 #8f3f17",
                        }}
                      >
                        Remover
                      </button>
                    </div>
                  </div>

                  <p className="mt-3 truncate rounded-xl bg-[#f9ddb0]/80 px-3 py-2 text-[12px] font-semibold text-[#5c2c0c]">
                    {getGuestLink(guest)}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href="/convite"
            className={`${rye.className} relative mt-6 w-full rounded-2xl px-5 py-4 text-[19px] text-[#fff4d8] transition active:translate-y-1`}
            style={{
              background:
                "linear-gradient(180deg, #d86b1f 0%, #61250c 100%)",
              boxShadow: "0 6px 0 #351406",
              textShadow: "1px 1px 0 #4a1a08",
            }}
          >
            Voltar
            <span className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#f7c779]/75" />
          </Link>
        </section>
      </div>
    </main>
  );
}