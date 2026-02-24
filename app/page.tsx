export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <header className="border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold tracking-wide text-xl text-sky-400">
            LOL GUIDES
          </div>
          <nav className="flex gap-6 text-sm text-white/80">
            <a href="#">Início</a>
            <a href="#">Campeões</a>
            <a href="#">Tier List</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">
          Guias Atualizados do League of Legends
        </h1>
        <p className="mt-2 text-white/70">
          Builds, runas e dicas para subir de elo 🚀
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* ZED */}
          <a
            href="/champion/zed"
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:translate-y-[-2px] transition block"
          >
            <img
              className="h-40 w-full object-cover"
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"
              alt="Zed"
            />
            <div className="p-4">
              <h2 className="font-semibold">Zed Mid</h2>
              <p className="text-sm text-white/70 mt-1">
                Guia assassino meta atual
              </p>
            </div>
          </a>

          {/* JINX */}
          <a
            href="/champion/jinx"
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:translate-y-[-2px] transition block"
          >
            <img
              className="h-40 w-full object-cover"
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
              alt="Jinx"
            />
            <div className="p-4">
              <h2 className="font-semibold">Jinx ADC</h2>
              <p className="text-sm text-white/70 mt-1">
                Escalando para o late game
              </p>
            </div>
          </a>

          {/* LEE SIN */}
          <a
            href="/champion/lee-sin"
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:translate-y-[-2px] transition block"
          >
            <img
              className="h-40 w-full object-cover"
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg"
              alt="Lee Sin"
            />
            <div className="p-4">
              <h2 className="font-semibold">Lee Sin Jungle</h2>
              <p className="text-sm text-white/70 mt-1">
                Guia completo para snowball
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}