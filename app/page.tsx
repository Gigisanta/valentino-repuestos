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
  color: string
}

type Product = {
  name: string
  category: Exclude<CategoryKey, 'todos'>
  image: string
  code: string
  fits: string
  note: string
  tags: string[]
}

const phone = '299 471-9426'
const whatsappBase = 'https://wa.me/5492994719426'
const defaultWhatsapp = `${whatsappBase}?text=${encodeURIComponent('Hola Valentino, necesito consultar stock de un repuesto.')}`

const categories: Category[] = [
  { key: 'todos', label: 'Todo', short: 'Todos los rubros', icon: Icons.Tag, color: 'bg-gray-950 text-white' },
  { key: 'baterias', label: 'Baterías', short: 'Arranque y carga', icon: Icons.Battery, color: 'bg-red-600 text-white' },
  { key: 'frenos', label: 'Frenos', short: 'Pastillas y discos', icon: Icons.Brake, color: 'bg-zinc-900 text-white' },
  { key: 'embragues', label: 'Embragues', short: 'Kits completos', icon: Icons.Clutch, color: 'bg-amber-500 text-zinc-950' },
  { key: 'lubricantes', label: 'Lubricantes', short: 'Aceites y fluidos', icon: Icons.Oil, color: 'bg-blue-950 text-white' },
  { key: 'rodamientos', label: 'Rodamientos', short: 'Rulemanes y retenes', icon: Icons.Bearing, color: 'bg-stone-700 text-white' },
  { key: 'filtros', label: 'Filtros', short: 'Aceite, aire, combustible', icon: Icons.Filter, color: 'bg-emerald-700 text-white' },
]

const products: Product[] = [
  {
    name: 'Batería Moura 60Ah',
    category: 'baterias',
    image: '/images/bateria-moura-60ah.svg',
    code: 'BAT-MOU-60',
    fits: 'Autos chicos y medianos',
    note: 'Ideal para reemplazo rápido con revisión de carga.',
    tags: ['batería', 'moura', 'arranque', '60ah'],
  },
  {
    name: 'Juego de frenos VW Gol',
    category: 'frenos',
    image: '/images/freno-delantero-vw-gol.svg',
    code: 'FRE-GOL-DEL',
    fits: 'Gol / Trend / Power',
    note: 'Pastillas y discos. Consultá por versión y año.',
    tags: ['freno', 'gol', 'pastillas', 'discos'],
  },
  {
    name: 'Kit de embrague Toyota',
    category: 'embragues',
    image: '/images/kit-embrague-toyota.svg',
    code: 'EMB-TOY-KIT',
    fits: 'Toyota, consultar modelo',
    note: 'Kit completo sujeto a modelo, motor y año.',
    tags: ['embrague', 'toyota', 'kit'],
  },
  {
    name: 'Aceite sintético 5W-30',
    category: 'lubricantes',
    image: '/images/aceite-mobil1-5w30.svg',
    code: 'ACE-5W30',
    fits: 'Nafta / diesel según especificación',
    note: 'Te ayudamos a elegir viscosidad y norma correcta.',
    tags: ['aceite', 'lubricante', '5w30', 'sintético'],
  },
  {
    name: 'Rodamiento delantero Focus',
    category: 'rodamientos',
    image: '/images/rodamiento-focus.svg',
    code: 'ROD-FOC-DEL',
    fits: 'Ford Focus, consultar año',
    note: 'Rulemanes y retenes para tren delantero.',
    tags: ['rodamiento', 'focus', 'ruleman', 'retén'],
  },
  {
    name: 'Filtro de aceite WIX',
    category: 'filtros',
    image: '/images/filtro-wix-civic.svg',
    code: 'FIL-WIX-ACE',
    fits: 'Varias marcas y modelos',
    note: 'Consultá por motor y año para confirmar compatibilidad.',
    tags: ['filtro', 'aceite', 'wix'],
  },
]

const quickNeeds = [
  'Batería para arrancar hoy',
  'Pastillas o discos de freno',
  'Aceite y filtro para service',
  'Rulemán / retén / tren delantero',
]

function productWhatsapp(product: Product) {
  return `${whatsappBase}?text=${encodeURIComponent(`Hola Valentino, quería consultar stock de ${product.name} (${product.code}). Mi vehículo es: `)}`
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#fffaf2]/92 backdrop-blur-xl">
      <div className="section-container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Valentino Repuestos inicio">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-valentino-red text-lg font-black text-white shadow-lg shadow-red-900/15">VR</span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-black tracking-tight text-zinc-950">Valentino Repuestos</span>
            <span className="block text-xs font-semibold text-zinc-500">Mariano Moreno 354 · Fernández Oro</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-700 lg:flex" aria-label="Principal">
          <a href="#catalogo" className="transition hover:text-valentino-red">Catálogo</a>
          <a href="#como-pedir" className="transition hover:text-valentino-red">Cómo pedir</a>
          <a href="#talleres" className="transition hover:text-valentino-red">Talleres</a>
          <a href="#local" className="transition hover:text-valentino-red">Local</a>
        </nav>

        <a
          href={defaultWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-zinc-950 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-valentino-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-valentino-red focus-visible:ring-offset-2 sm:inline-flex"
        >
          WhatsApp {phone}
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff4e2]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(196,30,58,0.12),transparent_34%),linear-gradient(135deg,#fffaf2_0%,#fff3df_52%,#f8ead2_100%)]" />
      <div className="section-container grid min-h-[760px] min-w-0 items-center gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <div className="min-w-0 animate-slide-up">
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-red-200 bg-white/85 px-3 py-2 text-xs font-black text-valentino-red shadow-sm sm:px-4 sm:text-sm">
            <Icons.MapPin className="h-4 w-4" />
            General Fernández Oro · Cipolletti · Neuquén
          </div>

          <h1 className="max-w-3xl text-balance font-display text-3xl font-black leading-[1.05] tracking-[-0.025em] text-zinc-950 sm:text-6xl sm:tracking-[-0.04em] lg:text-7xl">
            ¿Qué repuesto necesitás para seguir andando?
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:mt-6 sm:text-xl sm:leading-9">
            Escribinos por WhatsApp, pasanos modelo y año del vehículo, y te ayudamos a encontrar la pieza correcta. Simple, directo y con atención de mostrador.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={defaultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-5 py-4 text-base font-black text-white shadow-xl shadow-green-900/15 transition hover:-translate-y-1 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 sm:w-auto sm:px-6"
            >
              <Icons.WhatsApp className="h-6 w-6" />
              Consultar stock ahora
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#catalogo"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 py-4 text-base font-black text-zinc-950 shadow-sm transition hover:-translate-y-1 hover:border-valentino-red hover:text-valentino-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-valentino-red focus-visible:ring-offset-2 sm:w-auto sm:px-6"
            >
              Ver catálogo ordenado
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ['Retiro', 'en local'],
              ['WhatsApp', 'respuesta directa'],
              ['Talleres', 'pedidos claros'],
              ['Zona', 'Alto Valle'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-3xl border border-white bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-lg font-black text-zinc-950">{title}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-500">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 animate-fade-in">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-valentino-red/15 blur-3xl" aria-hidden="true" />
        <div className="relative rounded-[2.2rem] border border-white bg-white/75 p-3 shadow-2xl shadow-zinc-900/12 backdrop-blur">
        <div className="rounded-[1.7rem] border border-stone-200 bg-white p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Consulta rápida</p>
              <p className="mt-1 font-display text-3xl font-black tracking-tight text-zinc-950">Pedí por WhatsApp sin complicarte</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-800">Atendemos consultas</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.85fr]">
            <div className="space-y-3">
              {quickNeeds.map((need) => (
                <a
                  key={need}
                  href={`${whatsappBase}?text=${encodeURIComponent(`Hola Valentino, necesito consultar: ${need}. Mi vehículo es: `)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-[#fffaf2] p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-valentino-red hover:bg-white"
                >
                  <span className="font-bold text-zinc-900">{need}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-valentino-red text-white transition group-hover:scale-105">→</span>
                </a>
              ))}
            </div>

            <div className="hidden rounded-3xl bg-zinc-950 p-4 text-white sm:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
                <Image
                  src="/photos/cartel-valentino.jpg"
                  alt="Material real de Valentino Repuestos con dirección y WhatsApp"
                  fill
                  priority
                  className="object-cover opacity-80"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Material real</p>
                  <p className="mt-1 font-black">Mariano Moreno 354</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-3xl bg-zinc-950 p-5 text-white">
            <p className="text-sm font-black text-amber-300">Tip para cotizar más rápido</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">Mandanos marca, modelo, año y una foto de la pieza si la tenés.</p>
          </div>
        </div>
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
    return products.filter((product) => {
      const byCategory = active === 'todos' || product.category === active
      const haystack = [product.name, product.code, product.fits, product.note, ...product.tags].join(' ').toLowerCase()
      return byCategory && (!q || haystack.includes(q))
    })
  }, [active, query])

  return (
    <section id="catalogo" className="bg-white py-16 sm:py-24" aria-labelledby="catalogo-title">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-valentino-red">Catálogo simple</p>
          <h2 id="catalogo-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] text-zinc-950 sm:text-5xl">
            Buscá por rubro y escribinos con el producto listo.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            No hace falta que sepas el código perfecto. Filtrá, mirá ejemplos y mandanos tu consulta por WhatsApp.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-stone-200 bg-[#fffaf2] p-4 shadow-sm sm:p-5">
          <label htmlFor="catalog-search" className="sr-only">Buscar repuesto</label>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <input
                id="catalog-search"
                name="catalog-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ej: batería, Gol, filtro, 5W30..."
                className="h-14 w-full rounded-2xl border border-stone-300 bg-white px-5 text-base font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-valentino-red focus:ring-4 focus:ring-red-100"
                autoComplete="off"
              />
            </div>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent(`Hola Valentino, estoy buscando: ${query || 'un repuesto'}. Mi vehículo es: `)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-green-600 px-5 text-base font-black text-white shadow-sm transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              Preguntar por WhatsApp
            </a>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {categories.map((category) => {
              const Icon = category.icon
              const selected = active === category.key
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActive(category.key)}
                  className={`inline-flex min-h-12 shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-valentino-red focus-visible:ring-offset-2 ${selected ? 'bg-valentino-red text-white shadow-lg shadow-red-900/15' : 'bg-white text-zinc-700 hover:bg-zinc-950 hover:text-white'}`}
                  aria-pressed={selected}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => {
            const category = categories.find((item) => item.key === product.category)!
            const Icon = category.icon
            return (
              <article key={product.code} className="group overflow-hidden rounded-[1.7rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/8">
                <div className="grid grid-cols-[132px_1fr] gap-0 sm:grid-cols-[160px_1fr]">
                  <div className="relative min-h-full bg-[#f6efe3]">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-5 transition duration-300 group-hover:scale-105" sizes="180px" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-black text-valentino-red">
                        <Icon className="h-3.5 w-3.5" />
                        {category.label}
                      </span>
                      <span className="text-xs font-black text-zinc-400">{product.code}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-black leading-tight text-zinc-950">{product.name}</h3>
                    <p className="mt-2 text-sm font-bold text-zinc-600">{product.fits}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{product.note}</p>
                    <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                      <a
                        href={productWhatsapp(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-black text-white transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        Consultar stock
                      </a>
                      <a
                        href="#como-pedir"
                        className="inline-flex items-center justify-center rounded-xl border border-stone-300 px-4 py-3 text-sm font-black text-zinc-800 transition hover:border-valentino-red hover:text-valentino-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-valentino-red focus-visible:ring-offset-2"
                      >
                        ¿Qué datos mando?
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-8 text-center">
            <p className="font-display text-2xl font-black text-zinc-950">No aparece en la lista, pero puede estar en mostrador.</p>
            <p className="mt-2 text-zinc-600">Mandanos el nombre o una foto por WhatsApp y lo revisamos.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function HowToOrder() {
  const steps = [
    ['1', 'Mandá los datos del auto', 'Marca, modelo, año, motor y si tenés una foto del repuesto.'],
    ['2', 'Confirmamos compatibilidad', 'Te ayudamos a no comprar de más ni llevar una pieza que no va.'],
    ['3', 'Coordinás retiro o envío', 'Pasás por Mariano Moreno 354 o coordinamos zona local.'],
  ]

  return (
    <section id="como-pedir" className="bg-zinc-950 py-16 text-white sm:py-24" aria-labelledby="pedir-title">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">Bien simple</p>
            <h2 id="pedir-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Te hablamos claro, sin vueltas raras.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Si no sabés el nombre exacto de la pieza, no pasa nada. Con algunos datos podemos orientarte mejor.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-valentino-red text-xl font-black">{number}</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileMockups() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="mockups-title">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-valentino-red">Así se vería en el celu</p>
            <h2 id="mockups-title" className="mt-3 font-display text-3xl font-black tracking-[-0.025em] text-zinc-950 sm:text-5xl sm:tracking-[-0.035em]">
              La gente consulta desde el teléfono. La página tiene que vender ahí primero.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Botones grandes, búsqueda simple, rubros claros y mensajes de WhatsApp ya armados para que no se pierda ninguna consulta.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="mx-auto w-full max-w-[310px] rounded-[2.2rem] border-[10px] border-zinc-950 bg-[#fffaf2] p-4 shadow-2xl shadow-zinc-900/15">
              <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-zinc-800" />
              <p className="rounded-full bg-red-50 px-3 py-2 text-xs font-black text-valentino-red">Fernández Oro · Cipolletti · Neuquén</p>
              <h3 className="mt-5 font-display text-3xl font-black leading-tight text-zinc-950">¿Qué repuesto necesitás?</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Mandá modelo, año y foto. Te ayudamos a encontrar la pieza correcta.</p>
              <div className="mt-5 rounded-2xl bg-green-600 px-4 py-3 text-center text-sm font-black text-white">Consultar stock ahora</div>
              <div className="mt-3 rounded-2xl border border-stone-300 bg-white px-4 py-3 text-center text-sm font-black text-zinc-900">Ver catálogo</div>
            </div>

            <div className="mx-auto w-full max-w-[310px] rounded-[2.2rem] border-[10px] border-zinc-950 bg-white p-4 shadow-2xl shadow-zinc-900/15">
              <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-zinc-800" />
              <div className="rounded-2xl border border-stone-200 bg-[#fffaf2] px-4 py-3 text-sm font-bold text-zinc-500">Buscar: batería, Gol, filtro...</div>
              <div className="mt-4 flex gap-2 overflow-hidden">
                {['Todo', 'Baterías', 'Frenos'].map((item, index) => (
                  <span key={item} className={`shrink-0 rounded-full px-3 py-2 text-xs font-black ${index === 1 ? 'bg-valentino-red text-white' : 'bg-zinc-100 text-zinc-700'}`}>{item}</span>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-stone-200 p-4 shadow-sm">
                <p className="text-xs font-black text-valentino-red">Baterías</p>
                <h3 className="mt-2 font-display text-xl font-black text-zinc-950">Batería Moura 60Ah</h3>
                <p className="mt-2 text-sm text-zinc-600">Autos chicos y medianos</p>
                <div className="mt-4 rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-black text-white">Consultar stock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocalAndWorkshops() {
  return (
    <section id="local" className="bg-[#fffaf2] py-16 sm:py-24" aria-labelledby="local-title">
      <div className="section-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-xl shadow-zinc-900/8">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[360px] bg-white p-6">
              <Image src="/photos/perfil-valentino.jpg" alt="Imagen de Valentino Repuestos" fill className="object-contain p-6" sizes="(max-width: 1024px) 90vw, 36vw" />
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-valentino-red">Mostrador local</p>
              <h2 id="local-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] text-zinc-950">
                Pasá por el local o dejá la consulta lista.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Estamos en Mariano Moreno 354, General Fernández Oro. Atendemos consultas por WhatsApp para que llegues con el pedido más ordenado.
              </p>
              <div className="mt-6 grid gap-3">
                <a className="flex items-center gap-3 rounded-2xl bg-[#fffaf2] p-4 font-black text-zinc-900 transition hover:bg-red-50" href={defaultWhatsapp} target="_blank" rel="noopener noreferrer">
                  <Icons.WhatsApp className="h-5 w-5 text-green-600" /> WhatsApp {phone}
                </a>
                <a className="flex items-center gap-3 rounded-2xl bg-[#fffaf2] p-4 font-black text-zinc-900 transition hover:bg-red-50" href="https://www.google.com/maps/place/Valentino+Repuestos/@-38.9534639,-67.9266153,17z" target="_blank" rel="noopener noreferrer">
                  <Icons.MapPin className="h-5 w-5 text-valentino-red" /> Abrir ubicación en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="talleres" className="rounded-[2rem] bg-valentino-red p-8 text-white shadow-xl shadow-red-900/15 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-100">Para talleres</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.035em]">Pedí varias cosas sin armar un caos por audio.</h2>
          <p className="mt-5 text-lg leading-8 text-red-50">
            Mandá una lista con vehículo, cantidad y urgencia. Te respondemos más ordenado y queda todo escrito.
          </p>
          <ul className="mt-8 space-y-4">
            {['Lista por WhatsApp', 'Retiro coordinado', 'Consulta por rubro', 'Pedidos frecuentes más rápidos'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-valentino-red"><Icons.Check className="h-4 w-4" /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-black focus:text-zinc-950 focus:shadow-xl">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Catalog />
        <HowToOrder />
        <MobileMockups />
        <LocalAndWorkshops />
      </main>
      <footer className="border-t border-stone-200 bg-white py-8" role="contentinfo">
        <div className="section-container flex flex-col justify-between gap-4 text-sm font-semibold text-zinc-600 sm:flex-row sm:items-center">
          <p>© 2026 Valentino Repuestos · Mariano Moreno 354 · General Fernández Oro</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-valentino-red" href="mailto:alejandro-reinetti@hotmail.com.ar">Email</a>
            <a className="hover:text-valentino-red" href={defaultWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="hover:text-valentino-red" href="https://instagram.com/valentinorepuestos_" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
      <a
        href={defaultWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-600 text-white shadow-2xl shadow-green-900/30 transition hover:scale-105 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        aria-label="Consultar por WhatsApp"
      >
        <Icons.WhatsApp className="h-7 w-7" />
      </a>
    </>
  )
}
