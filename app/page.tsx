export default function Home() {
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

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-white/40 text-sm">⌕</span>
              <input
                className="w-56 bg-transparent outline-none text-sm placeholder:text-white/40"
                placeholder="Buscar campeão… (ex: zed)"
              />
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
                Builds, runas e dicas por campeão. Clique nos cards para ver a página completa.
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
                  Próximo upgrade: busca funcionando + filtro por rota (Mid/JG/ADC…) + páginas com seções
                  (combos, matchups, build situacional).
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
                  *Exemplo visual — você pode criar uma tier list real depois.
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

      {/* Content */}
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
                href="/champion/zed"
                className="card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition backdrop-blur shadow-lg shadow-black/30 hover:bg-white/10"
              >
                <div className="absolute inset-0 opacity-40">
                  <img
                    className="h-full w-full object-cover scale-105 group-hover:scale-110 transition"
                    src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"
                    alt="Zed"
                  />
                </div>

                <div className="relative p-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Featured • Mid
                  </div>
                  <div className="mt-3 text-xl font-semibold">Zed — Guia completo</div>
                  <p className="mt-1 text-sm text-white/70 max-w-md">
                    Burst, runas e itens core. Ideal para quem quer pickoffs e snowball.
                  </p>
                  <div className="mt-4 flex gap-2 text-xs text-white/70 flex-wrap">
                    <span className="rounded-full bg-black/30 border border-white/10 px-3 py-1">Eletrocutar</span>
                    <span className="rounded-full bg-black/30 border border-white/10 px-3 py-1">Youmuu</span>
                    <span className="rounded-full bg-black/30 border border-white/10 px-3 py-1">Serylda</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Popular this week */}
          <div id="popular" className="lg:col-span-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Populares da semana</h2>
              <a className="text-sm text-sky-300 hover:underline" href="#champions">
                Ver ranking
              </a>
            </div>

            <div className="mt-4 space-y-3">
              <a
                href="/champion/jinx"
                className="card-glow flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 backdrop-blur shadow-lg shadow-black/30"
              >
                <img
                  className="h-14 w-14 rounded-xl object-cover"
                  src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
                  alt="Jinx"
                />
                <div className="min-w-0">
                  <div className="font-semibold">Jinx</div>
                  <div className="text-xs text-white/60 truncate">
                    ADC • Ritmo Fatal • Core: IE + Runaan
                  </div>
                </div>
                <span className="ml-auto text-xs text-white/50">→</span>
              </a>

              <a
                href="/champion/lee-sin"
                className="card-glow flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 backdrop-blur shadow-lg shadow-black/30"
              >
                <img
                  className="h-14 w-14 rounded-xl object-cover"
                  src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg"
                  alt="Lee Sin"
                />
                <div className="min-w-0">
                  <div className="font-semibold">Lee Sin</div>
                  <div className="text-xs text-white/60 truncate">
                    Jungle • Conquistador • Core: Cutelo + DD
                  </div>
                </div>
                <span className="ml-auto text-xs text-white/50">→</span>
              </a>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur">
                <div className="text-sm font-semibold">Quer mais campeões?</div>
                <p className="mt-1 text-sm text-white/70">
                  Próximo passo: lista automática + busca. Aí você adiciona campeões num lugar só.
                </p>
              </div>
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
            <div className="text-xs text-white/40">v0.2</div>
          </div>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/champion/zed"
              className="card-glow group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition backdrop-blur shadow-lg shadow-black/30 hover:bg-white/10"
            >
              <img
                className="h-40 w-full object-cover group-hover:scale-[1.03] transition"
                src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"
                alt="Zed"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Zed</div>
                  <span className="text-xs rounded-full bg-white/10 px-2 py-1">Mid</span>
                </div>
                <p className="mt-1 text-sm text-white/70">Burst • pickoff • snowball</p>
              </div>
            </a>

            <a
              href="/champion/jinx"
              className="card-glow group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition backdrop-blur shadow-lg shadow-black/30 hover:bg-white/10"
            >
              <img
                className="h-40 w-full object-cover group-hover:scale-[1.03] transition"
                src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
                alt="Jinx"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Jinx</div>
                  <span className="text-xs rounded-full bg-white/10 px-2 py-1">ADC</span>
                </div>
                <p className="mt-1 text-sm text-white/70">late game • DPS • reset</p>
              </div>
            </a>

            <a
              href="/champion/lee-sin"
              className="card-glow group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition backdrop-blur shadow-lg shadow-black/30 hover:bg-white/10"
            >
              <img
                className="h-40 w-full object-cover group-hover:scale-[1.03] transition"
                src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg"
                alt="Lee Sin"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Lee Sin</div>
                  <span className="text-xs rounded-full bg-white/10 px-2 py-1">Jungle</span>
                </div>
                <p className="mt-1 text-sm text-white/70">early • gank • playmaking</p>
              </div>
            </a>
          </div>
        </div>

        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          © 2026 LOL Guides BR • Fan project
        </footer>
      </section>
    </main>
  );
}