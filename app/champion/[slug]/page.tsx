"use client";

import { useParams } from "next/navigation";

type Champion = {
  name: string;
  role: string;
  splash: string;
  difficulty: "Fácil" | "Média" | "Difícil";
  summary: string;
  runes: string[];
  coreItems: string[];
};

const CHAMPIONS: Record<string, Champion> = {
  zed: {
    name: "Zed",
    role: "Mid",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
    difficulty: "Difícil",
    summary:
      "Assassino focado em burst e picks. Forte em 1v1 e em punir targets sem mobilidade.",
    runes: ["Eletrocutar", "Gosto de Sangue", "Globos Oculares", "Caçador de Tesouros"],
    coreItems: ["Lâmina Fantasma de Youmuu", "Rancor de Serylda", "Hidra Raivosa"],
  },
  jinx: {
    name: "Jinx",
    role: "ADC",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    difficulty: "Média",
    summary: "Hyper carry de late game. Quer lutas longas, reset e muito DPS com range.",
    runes: ["Ritmo Fatal", "Presença de Espírito", "Lenda: Linhagem", "Golpe de Misericórdia"],
    coreItems: ["Gume do Infinito", "Canhão Fumegante", "Furacão de Runaan"],
  },
  "lee-sin": {
    name: "Lee Sin",
    role: "Jungle",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    difficulty: "Difícil",
    summary: "Jungler de early game e playmaking. Forte em ganks e engages com Insec.",
    runes: ["Conquistador", "Triunfo", "Lenda: Tenacidade", "Até a Morte"],
    coreItems: ["Cutelo Negro", "Dança da Morte", "Anjo Guardião"],
  },
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function ChampionPage() {
  const params = useParams();
  const slug = String(params?.slug ?? "").toLowerCase();
  const champ = CHAMPIONS[slug];

  if (!champ) {
    return (
      <main className="min-h-screen bg-[#0b1020] text-white p-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-semibold">Campeão não encontrado</h1>
          <p className="mt-2 text-white/70">
            Slug recebido: <span className="text-white">{slug || "(vazio)"}</span>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <a className="text-sky-400 hover:underline text-sm" href="/">
          ← Voltar
        </a>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={champ.splash} alt={champ.name} className="h-64 w-full object-cover" />

          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-3xl font-semibold">{champ.name}</h1>
              <div className="flex gap-2">
                <Badge>{champ.role}</Badge>
                <Badge>Dificuldade: {champ.difficulty}</Badge>
              </div>
            </div>

            <p className="mt-3 text-white/75">{champ.summary}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <h2 className="font-semibold">Runas (base)</h2>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {champ.runes.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <h2 className="font-semibold">Itens Core</h2>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {champ.coreItems.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="font-semibold">Próximos passos</h2>
              <p className="mt-2 text-sm text-white/70">
                Próximo upgrade: transformar isso em guias completos (matchups, combos, build situacional)
                e depois ligar num banco de dados pra você adicionar campeões sem mexer no código.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}