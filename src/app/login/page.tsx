"use client";

import { useState } from "react";
import Image from "next/image";
import Bandeirinhas from "@/components/Bandeirinhas/Bandeirinhas";
import EstrelasAnimadas from "@/components/Bandeirinhas/EstrelasAnimadas";
import { Rye } from "next/font/google";
import Link from "next/link";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (
      email.trim().toLowerCase() === "lilian" &&
      senha === "abc123"
    ) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", "lilian");

      window.location.href = "/convidados";
    } else {
      alert("Usuário ou senha inválidos");
    }
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
              linear-gradient(90deg, rgba(120,70,35,.10) 50%, transparent 50%),
              linear-gradient(rgba(120,70,35,.10) 50%, transparent 50%)
            `,
            backgroundSize: "120px 120px,160px 160px,42px 42px,42px 42px",
          }}
        />

        <EstrelasAnimadas />

        {/* borda */}
        <div className="pointer-events-none absolute inset-[10px] z-30 rounded-[26px] border-2 border-dashed border-[#8a4b24]/65" />

        <section className="relative z-10 flex min-h-screen flex-col items-center px-5 pt-4 pb-6 text-center">
          
          {/* bandeirinhas */}
          <div className="absolute left-0 top-0 mt-2 h-[95px] w-full px-2 pt-2">
            <Bandeirinhas />
          </div>

          {/* topo */}
          <div className="mt-20 flex flex-col items-center">
            <div className="relative h-[90px] w-[150px]">
              <Image
                src="/chapeu.png"
                alt="Chapéu"
                fill
                className="object-contain"
              />
            </div>

            <h1
              className={`${rye.className} mt-2 text-[34px] text-[#5a2b13]`}
              style={{
                textShadow: "2px 2px 0 #f1d2a5, 0 4px 6px rgba(0,0,0,.25)",
              }}
            >
              Entrar no Arraiá 🎉
            </h1>
          </div>

          {/* card */}
          <div className="mt-6 w-full rounded-[28px] border-2 border-dashed border-[#9b6333]/65 bg-[#fff1cf]/80 p-3 shadow-[0_10px_20px_rgba(80,35,10,.22)]">
            <div className="rounded-[22px] bg-[#f9ddb0]/70 px-5 py-6">

              <form onSubmit={handleLogin} className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full px-4 py-3 outline-none border-2 border-[#d97a28]"
                  style={{ background: "#fff2dc" }}
                  required
                />

                <input
                  type="password"
                  placeholder="Sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="rounded-full px-4 py-3 outline-none border-2 border-[#d97a28]"
                  style={{ background: "#fff2dc" }}
                  required
                />

                <button
                  type="submit"
                  className={`${rye.className} relative mt-3 rounded-2xl py-4 text-[20px] font-black text-[#fff4d8] transition active:translate-y-1`}
                  style={{
                    background:
                      "linear-gradient(180deg, #3fa34d 0%, #1f5c29 100%)",
                    boxShadow: "0 6px 0 #123f1b",
                    textShadow: "1px 1px 0 #17491f",
                  }}
                >
                  Entrar

                  <span className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#eaffc7]/65" />
                </button>
              </form>

              {/* voltar */}
              <div className="mt-5">
                <Link
                  href="/"
                  className={`${rye.className} text-[14px] text-[#7a3f1c]`}
                >
                  ← Voltar ao convite
                </Link>
              </div>

            </div>
          </div>

          {/* detalhe */}
          <p className={`${rye.className} mt-5 text-[13px] text-[#7a3f1c]`}>
            Vai ser bão demais da conta!
          </p>
        </section>
      </div>
    </main>
  );
}