'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import Icons, { type IconProps } from '@/components/Icons'

type CategoryKey = 'todos' | 'baterias' | 'frenos' | 'embragues' | 'lubricantes' | 'rodamientos' | 'filtros'

type Category = {
  key: CategoryKey
  label: string
  short: string
  icon: (props: IconProps) => JSX.Element
  accent: string
}

type CatalogItem = {
  name: string
  category: Exclude<CategoryKey, 'todos'>
  code: string
  fits: string
  note: string
  tags: string[]
  icon: (props: IconProps) => JSX.Element
}

const phone = '299 471-9426'
const whatsappBase = 'https://wa.me/5492994719426'
const defaultWhatsapp = `${whatsappBase}?text=${encodeURIComponent('Hola Valentino, necesito consultar por un repuesto. Mi vehículo es: ')}`

const categories: Category[] = [
  { key: 'todos', label: 'Todo', short: 'Rubros principales', icon: Icons.Tag, accent: 'border-white/20 bg-white/10 text-white' },
  { key: 'baterias', label: 'Baterías', short: 'Arranque y carga', icon: Icons.Battery, accent: 'border-lime-300/40 bg-lime-300/10 text-lime-200' },
  { key: 'frenos', label: 'Frenos', short: 'Pastillas y discos', icon: Icons.Brake, accent: 'border-red-300/40 bg-red-400/10 text-red-100' },
  { key: 'embragues', label: 'Embragues', short: 'Kits y cables', icon: Icons.Clutch, accent: 'border-zinc-300/40 bg-zinc-300/10 text-zinc-100' },
  { key: 'lubricantes', label: 'Lubricantes', short: 'Aceites y fluidos', icon: Icons.Oil, accent: 'border-amber-300/40 bg-amber-300/10 text-amber-100' },
  { key: 'rodamientos', label: 'Rulemanes', short: 'Retenes y rodamientos', icon: Icons.Bearing, accent: 'border-sky-300/40 bg-sky-300/10 text-sky-100' },
  { key: 'filtros', label: 'Filtros', short: 'Aceite, aire, combustible', icon: Icons.Filter, accent: 'border-emerald-300/40 bg-emerald-300/10 text-emerald-100' },
]

const catalog: CatalogItem[] = [
  { name: 'Baterías para auto y utilitario', category: 'baterias', code: 'BAT', fits: 'Arranque, carga y reemplazo rápido', note: 'Consultá medida, amperaje y disponibilidad para tu vehículo.', tags: ['bateria', 'batería', 'arranque', '60ah', 'moura'], icon: Icons.Battery },
  { name: 'Pastillas y discos de freno', category: 'frenos', code: 'FRE', fits: 'Autos nacionales e importados', note: 'Pasá marca, modelo y año para confirmar compatibilidad.', tags: ['freno', 'pastillas', 'discos', 'gol', 'palio'], icon: Icons.Brake },
  { name: 'Kits de embrague', category: 'embragues', code: 'EMB', fits: 'Kits completos y componentes', note: 'Ideal mandar motor/año; cambia mucho entre versiones.', tags: ['embrague', 'kit', 'cable'], icon: Icons.Clutch },
  { name: 'Aceites, fluidos y service', category: 'lubricantes', code: 'LUB', fits: 'Motor, caja, diferencial', note: 'Te orientamos con viscosidad y norma si no estás seguro.', tags: ['aceite', 'lubricante', '5w30', 'service'], icon: Icons.Oil },
  { name: 'Rulemanes, retenes y rodamientos', category: 'rodamientos', code: 'ROD', fits: 'Tren delantero, ruedas y motor', note: 'Si tenés medida o código, mandalo por WhatsApp.', tags: ['ruleman', 'rodamiento', 'retén', 'reten'], icon: Icons.Bearing },
  { name: 'Filtros de aceite, aire y combustible', category: 'filtros', code: 'FIL', fits: 'Service preventivo', note: 'Con modelo, año y motor se confirma más rápido.', tags: ['filtro', 'aceite', 'aire', 'combustible'], icon: Icons.Filter },
]

const realPhotos = [
  { src: '/photos/post-valentino.jpg', title: 'Frente real del local', note: 'Mariano Moreno 354 · Fernández Oro' },
  { src: '/photos/perfil-valentino.jpg', title: 'Identidad real Valentino', note: 'Logo y colores publicados por el negocio' },
  { src: '/photos/cartel-valentino.jpg', title: 'Flyer real de consultas', note: 'WhatsApp, horario y rubros del automotor' },
]

const vehicleBrands = ['Toyota', 'Chevrolet', 'Renault', 'Ford', 'Fiat', 'Peugeot', 'Volkswagen', 'Audi', 'SKF', 'YPF']

function productWhatsapp(item: CatalogItem) {
  return `${whatsappBase}?text=${encodeURIComponent(`Hola Valentino, necesito consultar ${item.name} (${item.code}). Mi vehículo es: `)}`
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-lime-300/10 bg-[#070806]/92 backdrop-blur-xl">
      <div className="section-container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Valentino Repuestos inicio">
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-lime-300/30 bg-white">
            <Image src="/photos/perfil-valentino.jpg" alt="Logo Valentino Repuestos" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-black tracking-tight text-white">Valentino Repuestos</span>
            <span className="block text-xs font-semibold text-lime-200/80">Mariano Moreno 354 · Fernández Oro</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-300 lg:flex" aria-label="Principal">
          <a href="#catalogo" className="transition hover:text-lime-300">Catálogo</a>
          <a href="#fotos" className="transition hover:text-lime-300">Fotos reales</a>
          <a href="#como-pedir" className="transition hover:text-lime-300">Cómo pedir</a>
          <a href="#local" className="transition hover:text-lime-300">Local</a>
        </nav>

        <a href={defaultWhatsapp} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-[#28d146] px-5 py-3 text-sm font-black text-zinc-950 shadow-lg shadow-lime-500/20 transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:inline-flex">
          WhatsApp {phone}
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#090a08] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.20),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(196,30,58,0.15),transparent_28%),linear-gradient(135deg,#050604_0%,#10130d_48%,#050604_100%)]" />
      <div className="section-container grid min-h-[780px] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-18">
        <div className="animate-slide-up">
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-xs font-black text-lime-200 shadow-sm sm:px-4 sm:text-sm">
            <Icons.MapPin className="h-4 w-4" />
            Repuestos del automotor · General Fernández Oro
          </div>

          <h1 className="max-w-3xl text-balance font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            Repuestos reales, mostrador real, consulta directa.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
            Mandá marca, modelo, año y una foto si la tenés. Valentino te ayuda a encontrar la pieza correcta sin vueltas raras.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={defaultWhatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#28d146] px-5 py-4 text-base font-black text-zinc-950 shadow-xl shadow-lime-500/20 transition hover:-translate-y-1 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto sm:px-6">
              <Icons.WhatsApp className="h-6 w-6" />
              Consultar stock ahora
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#catalogo" className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-lime-300/30 bg-white/5 px-5 py-4 text-base font-black text-white shadow-sm transition hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto sm:px-6">
              Ver rubros del catálogo
            </a>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ['Local', 'Mariano Moreno 354'],
              ['WhatsApp', phone],
              ['Horario', '16:00 a 20:00'],
              ['Zona', 'Alto Valle'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-300/10">
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-400">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 animate-fade-in">
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-lime-300/20 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[430px] overflow-hidden rounded-[1.8rem] bg-zinc-900">
                <Image src="/photos/post-valentino.jpg" alt="Frente real de Valentino Repuestos en Fernández Oro" fill priority className="object-cover" sizes="(max-width: 1024px) 90vw, 46vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-300">Foto real del local</p>
                  <h2 className="mt-2 font-display text-3xl font-black">Valentino Repuestos</h2>
                  <p className="mt-2 text-sm font-semibold text-zinc-300">Mariano Moreno 354 · Gral. Fernández Oro</p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[1.5rem] border border-lime-300/20 bg-lime-300/10 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-200">Identidad real</p>
                  <div className="relative mt-4 aspect-square overflow-hidden rounded-2xl bg-white p-3">
                    <Image src="/photos/perfil-valentino.jpg" alt="Logo real Valentino Repuestos" fill className="object-contain p-3" sizes="220px" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                  <p className="text-sm font-black text-lime-300">Marcas y líneas</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {vehicleBrands.slice(0, 8).map((brand) => (
                      <span key={brand} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-zinc-200">{brand}</span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">Baterías, frenos, embragues, lubricantes, rulemanes, retenes y más.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RealPhotos() {
  return (
    <section id="fotos" className="bg-[#10130d] py-16 text-white sm:py-24" aria-labelledby="fotos-title">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-300">Más real, menos maqueta</p>
            <h2 id="fotos-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] sm:text-5xl">La página muestra el local y la identidad que Valentino ya usa.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">Las imágenes disponibles son reales. Cuando el dueño pase mejores fotos de mostrador, góndolas y productos, se reemplazan sin cambiar la estructura.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {realPhotos.map((photo) => (
              <article key={photo.src} className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20">
                <div className="relative aspect-[4/5] bg-zinc-900">
                  <Image src={photo.src} alt={photo.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 90vw, 28vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-black">{photo.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{photo.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Catalog() {
  const [active, setActive] = useState<CategoryKey>('todos')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return catalog.filter((item) => {
      const byCategory = active === 'todos' || item.category === active
      const haystack = [item.name, item.code, item.fits, item.note, ...item.tags].join(' ').toLowerCase()
      return byCategory && (!q || haystack.includes(q))
    })
  }, [active, query])

  return (
    <section id="catalogo" className="bg-[#070806] py-16 text-white sm:py-24" aria-labelledby="catalogo-title">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-300">Catálogo inicial</p>
          <h2 id="catalogo-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] sm:text-5xl">Rubros claros para pedir mejor por WhatsApp.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">Todavía no inventamos stock ni precios. Ordenamos la consulta para que Valentino confirme rápido y sin confusión.</p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <label htmlFor="catalog-search" className="sr-only">Buscar repuesto</label>
            <input id="catalog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej: batería, Gol, filtro, 5W30..." className="h-14 flex-1 rounded-2xl border border-white/10 bg-black/35 px-5 text-base font-semibold text-white outline-none transition placeholder:text-zinc-500 focus:border-lime-300 focus:ring-4 focus:ring-lime-300/15" autoComplete="off" />
            <a href={`${whatsappBase}?text=${encodeURIComponent(`Hola Valentino, estoy buscando: ${query || 'un repuesto'}. Mi vehículo es: `)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#28d146] px-5 text-base font-black text-zinc-950 shadow-sm transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Preguntar por WhatsApp</a>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {categories.map((category) => {
              const Icon = category.icon
              const selected = active === category.key
              return (
                <button key={category.key} type="button" onClick={() => setActive(category.key)} className={`inline-flex min-h-12 shrink-0 items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${selected ? 'border-lime-300 bg-lime-300 text-zinc-950 shadow-lg shadow-lime-500/15' : category.accent}`} aria-pressed={selected}>
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => {
            const category = categories.find((entry) => entry.key === item.category)!
            const Icon = item.icon
            return (
              <article key={item.code} className="group rounded-[1.7rem] border border-white/10 bg-[#11150f] p-5 shadow-xl shadow-black/18 transition duration-300 hover:-translate-y-1 hover:border-lime-300/50 hover:bg-[#151a12]">
                <div className="flex items-start gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-lime-300/30 bg-lime-300/10 text-lime-300 transition group-hover:scale-105 group-hover:bg-lime-300 group-hover:text-zinc-950">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-zinc-300">{category.label} · {item.code}</span>
                    <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">{item.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm font-bold text-lime-200/85">{item.fits}</p>
                <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-400">{item.note}</p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <a href={productWhatsapp(item)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#28d146] px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Consultar stock</a>
                  <a href="#como-pedir" className="inline-flex items-center justify-center rounded-xl border border-white/12 px-4 py-3 text-sm font-black text-zinc-200 transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Qué datos mando</a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function HowToOrder() {
  const steps = [
    ['1', 'Mandá datos del vehículo', 'Marca, modelo, año, motor y una foto de la pieza si la tenés.'],
    ['2', 'Valentino revisa compatibilidad', 'La idea es evitar que compres algo que no va.'],
    ['3', 'Retirás o coordinás', 'Pasás por Mariano Moreno 354 o arreglás por WhatsApp.'],
  ]

  return (
    <section id="como-pedir" className="bg-[#f2f4ec] py-16 text-zinc-950 sm:py-24" aria-labelledby="pedir-title">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#315c12]">Sin vueltas</p>
            <h2 id="pedir-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] sm:text-5xl">Si no sabés el nombre exacto, no pasa nada.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">La página está pensada para que cualquiera pueda pedir: particular, taller, o alguien que solo tiene una foto del repuesto roto.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="rounded-[1.7rem] border border-zinc-200 bg-white p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-xl font-black text-lime-300">{number}</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LocalAndWorkshops() {
  return (
    <section id="local" className="bg-[#070806] py-16 text-white sm:py-24" aria-labelledby="local-title">
      <div className="section-container grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20">
          <div className="grid md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[390px] bg-zinc-950">
              <Image src="/photos/post-valentino.jpg" alt="Frente real de Valentino Repuestos" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 38vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Mostrador local</p>
              <h2 id="local-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] text-white">Un negocio real, en una dirección real.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Mariano Moreno 354, General Fernández Oro. Consultá por WhatsApp antes de ir y llegá con el pedido más claro.</p>
              <div className="mt-6 grid gap-3">
                <a className="flex items-center gap-3 rounded-2xl bg-lime-300 p-4 font-black text-zinc-950 transition hover:bg-[#28d146]" href={defaultWhatsapp} target="_blank" rel="noopener noreferrer"><Icons.WhatsApp className="h-5 w-5" /> WhatsApp {phone}</a>
                <a className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 p-4 font-black text-zinc-100 transition hover:border-lime-300 hover:text-lime-300" href="https://www.google.com/maps/place/Valentino+Repuestos/@-38.9534639,-67.9266153,17z" target="_blank" rel="noopener noreferrer"><Icons.MapPin className="h-5 w-5" /> Abrir ubicación en Google Maps</a>
              </div>
            </div>
          </div>
        </div>

        <div id="talleres" className="rounded-[2rem] bg-[#1d2a12] p-8 text-white shadow-xl shadow-black/20 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Para talleres</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.035em]">Listas de repuestos sin armar un caos por audio.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">Mandá vehículo, cantidad y urgencia. Queda todo escrito y Valentino puede confirmar mejor.</p>
          <ul className="mt-8 space-y-4">
            {['Pedido por lista', 'Compatibilidad por modelo/año', 'Retiro en local', 'Consulta de stock sin vueltas'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold"><span className="grid h-8 w-8 place-items-center rounded-full bg-lime-300 text-zinc-950"><Icons.Check className="h-4 w-4" /></span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    name: 'Valentino Repuestos',
    url: 'https://repuestosvalentino.maat.work',
    telephone: '+54 9 299 471-9426',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mariano Moreno 354',
      addressLocality: 'General Fernández Oro',
      addressRegion: 'Río Negro',
      addressCountry: 'AR',
    },
    areaServed: ['General Fernández Oro', 'Cipolletti', 'Neuquén', 'Alto Valle'],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-black focus:text-zinc-950 focus:shadow-xl">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <RealPhotos />
        <Catalog />
        <HowToOrder />
        <LocalAndWorkshops />
      </main>
      <footer className="border-t border-white/10 bg-[#050604] py-8 text-white" role="contentinfo">
        <div className="section-container flex flex-col justify-between gap-4 text-sm font-semibold text-zinc-400 sm:flex-row sm:items-center">
          <p>© 2026 Valentino Repuestos · Mariano Moreno 354 · General Fernández Oro</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-lime-300" href="mailto:alejandro-reinetti@hotmail.com.ar">Email</a>
            <a className="hover:text-lime-300" href={defaultWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="hover:text-lime-300" href="https://instagram.com/valentinorepuestos_" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
      <a href={defaultWhatsapp} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#28d146] text-zinc-950 shadow-2xl shadow-lime-500/30 transition hover:scale-105 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950" aria-label="Consultar por WhatsApp">
        <Icons.WhatsApp className="h-7 w-7" />
      </a>
    </>
  )
}
