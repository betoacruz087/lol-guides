"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type ChampionCard = {
  slug: string;
  name: string;
  role: "Mid" | "ADC" | "Jungle";
  tagline: string;
  splash: string;
  popularLine: string;
};

const CHAMPIONS: ChampionCard[] = [
  {
    slug: "zed",
    name: "Zed",
    role: "Mid",
    tagline: "Burst • pickoff • snowball",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
    popularLine: "Mid • Eletrocutar • Core: Youmuu + Serylda",
  },
  {
    slug: "jinx",
    name: "Jinx",
    role: "ADC",
    tagline: "late game • DPS • reset",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    popularLine: "ADC • Ritmo Fatal • Core: IE + Runaan",
  },
  {
    slug: "lee-sin",
    name: "Lee Sin",
    role: "Jungle",
    tagline: "early • gank • playmaking",
    splash: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    popularLine: "Jungle • Conquistador • Core: Cutelo + DD",
  },
  // depois você adiciona mais aqui
];

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function Home() {
  const router = useRouter();

  // busca + dropdown
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];

    return CHAMPIONS.filter((c) => {
      const hay = normalize(`${c.name} ${c.slug} ${c.role} ${c.tagline}`);
      return hay.includes(q);
    }).slice(0, 7); // limite do dropdown
  }, [query]);

  // fecha dropdown clicando fora
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // ao digitar, abre o dropdown (se tiver texto)
  useEffect(() => {
    if (query.trim()) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }, [query]);

  function goToChampion(slug: string) {
    setOpen(false);
    router.push(`/champion/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, Math.max(results.length - 1, 0)));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const pick = results[activeIndex] || results[0];
      if (pick) goToChampion(pick.slug);
    }

    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const featured = CHAMPIONS.find((c) => c.slug === "zed")!;
  const popular = CHAMPIONS.filter((c) => c.slug === "jinx" || c.slug === "lee-sin");

  return (
    <main className="min-h-screen bg-[#070b18] text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-sky-500/15 border border-sky-400/20 grid place-items-center">
              <span className="text-sky-300 font-bold">LG</span>
            </div>
            <div>
              <div className="font-bold leading-4">LOL GUIDES</div>
              <div className="text-xs text-white/60">builds • runas • matchups</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white" href="#featured">Guides</a>
            <a className="hover:text-white" href="#champions">Champions</a>
            <a className="hover:text-white" href="#popular">Tier Lists</a>
            <a className="hover:text-white" href="#">Community</a>
          </nav>

          {/* BUSCA COM DROPDOWN (flutuante) */}
          <div className="flex items-center gap-3">
            <div ref={wrapperRef} className="hidden sm:block relative">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 w-[340px]">
                <span className="text-white/40 text-sm">⌕</span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => query.trim() && setOpen(true)}
                  onKeyDown={onKeyDown}
                  className="w-full bg-transparent outline-none text-sm placeholder:text-white/40"
                  placeholder="Buscar campeão… (ex: nidalee)"
                />
                {query.trim() ? (
                  <button
                    onClick={() => {
                      setQuery("");
                      setOpen(false);
                      inputRef.current?.focus();
                    }}
                    className="text-white/50 hover:text-white/80 text-sm"
                    aria-label="Limpar busca"
                    title="Limpar"
                  >
                    ✕
                  </button>
                ) : null}
              </div>

              {/* Dropdown flutuante */}
              {open && (
                <div className="absolute right-0 mt-2 w-[420px] rounded-2xl border border-white/10 bg-[#0b1020]/95 backdrop-blur shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/10 text-xs text-white/60">
                    {results.length > 0 ? (
                      <>Sugestões ({results.length}) • Enter abre • ↑ ↓ navega</>
                    ) : (
                      <>Nenhum resultado</>
                    )}
                  </div>

                  {results.length > 0 ? (
                    <div className="py-2">
                      {results.map((c, idx) => (
                        <button
                          key={c.slug}
                          onClick={() => goToChampion(c.slug)}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={[
                            "w-full text-left px-4 py-3 flex items-center gap-3 transition",
                            idx === activeIndex ? "bg-white/10" : "hover:bg-white/5",
                          ].join(" ")}
                        >
                          <img
                            src={c.splash}
                            alt={c.name}
                            className="h-10 w-10 rounded-xl object-cover"
                          />
                          <div className="min-w-0">
                            <div className="font-semibold leading-4">
                              {c.name} <span className="text-white/50 text-xs">• {c.role}</span>
                            </div>
                            <div className="text-xs text-white/60 truncate">{c.tagline}</div>
                          </div>
                          <span className="ml-auto text-xs text-white/40">↵</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-4 text-sm text-white/70">
                      Tente: <span className="text-white">zed</span>,{" "}
                      <span className="text-white">jinx</span>,{" "}
                      <span className="text-white">lee</span>
                    </div>
                  )}

                  <div className="px-4 py-3 border-t border-white/10 text-xs text-white/50">
                    Dica: digite o nome do campeão (ex: “nidalee”) e clique na sugestão.
                  </div>
                </div>
              )}
            </div>

            <a
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              href="#"
            >
              Entrar
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-10 fade-in-up">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Atualizado • Patch atual
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
                Guias de LoL com visual profissional — rápidos pra consultar e fáceis de manter.
              </h1>
              <p className="mt-3 text-white/70 max-w-2xl">
                Use a busca no topo: ela mostra sugestões flutuantes (estilo LoLalytics) e abre o guia.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#featured"
                  className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium hover:bg-sky-400"
                >
                  Ver Destaques
                </a>
                <a
                  href="#popular"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  Guias populares
                </a>
              </div>
            </div>

            {/* Side banner */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur shadow-lg shadow-black/30">
                <div className="text-sm font-semibold">Dica rápida</div>
                <p className="mt-2 text-sm text-white/70">
                  Próximo upgrade: conectar um banco (Supabase) pra você cadastrar campeões sem mexer no código.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-white/60">Role</div>
                    <div className="mt-1 font-semibold">Mid</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-white/60">Dano</div>
                    <div className="mt-1 font-semibold">Burst</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-white/60">Meta</div>
                    <div className="mt-1 font-semibold">S+*</div>
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-white/40">
                  *Exemplo visual.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
      </section>

      {/* Content (mantive o resto simples) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Featured */}
          <div id="featured" className="lg:col-span-7">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Destaques</h2>
              <a className="text-sm text-sky-300 hover:underline" href="#champions">
                Ver todos
              </a>
            </div>

            <div className="mt-4 grid gap-4">
              <a
                href={`/champion/${featured.slug}`}
                className="card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition backdrop-blur shadow-lg shadow-black/30 hover:bg-white/10"
              >
                <div className="absolute inset-0 opacity-40">
                  <img
                    className="h-full w-full object-cover scale-105 group-hover:scale-110 transition"
                    src={featured.splash}
                    alt={featured.name}
                  />
                </div>

                <div className="relative p-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Featured • {featured.role}
                  </div>
                  <div className="mt-3 text-xl font-semibold">{featured.name} — Guia completo</div>
                  <p className="mt-1 text-sm text-white/70 max-w-md">
                    Burst, runas e itens core. Ideal para quem quer pickoffs e snowball.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Popular */}
          <div id="popular" className="lg:col-span-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Populares da semana</h2>
              <a className="text-sm text-sky-300 hover:underline" href="#champions">
                Ver ranking
              </a>
            </div>

            <div className="mt-4 space-y-3">
              {popular.map((c) => (
                <a
                  key={c.slug}
                  href={`/champion/${c.slug}`}
                  className="card-glow flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 backdrop-blur shadow-lg shadow-black/30"
                >
                  <img className="h-14 w-14 rounded-xl object-cover" src={c.splash} alt={c.name} />
                  <div className="min-w-0">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-white/60 truncate">{c.popularLine}</div>
                  </div>
                  <span className="ml-auto text-xs text-white/50">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div id="champions" className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Campeões</h2>
              <p className="text-sm text-white/60">Clique para abrir o guia.</p>
            </div>
            <div className="text-xs text-white/40">v0.4</div>
          </div>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHAMPIONS.map((c) => (
              <a
                key={c.slug}
                href={`/champion/${c.slug}`}
                className="card-glow group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition backdrop-blur shadow-lg shadow-black/30 hover:bg-white/10"
              >
                <img className="h-40 w-full object-cover group-hover:scale-[1.03] transition" src={c.splash} alt={c.name} />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{c.name}</div>
                    <span className="text-xs rounded-full bg-white/10 px-2 py-1">{c.role}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{c.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          © 2026 LOL Guides BR • Fan project
        </footer>
      </section>
    </main>
  );
}