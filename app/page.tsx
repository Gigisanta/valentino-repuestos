'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import Icons, { type IconProps } from '@/components/Icons'

type CategoryKey = 'todos' | 'baterias' | 'frenos' | 'embragues' | 'lubricantes' | 'rodamientos'

type Category = {
  key: CategoryKey
  label: string
  description: string
  icon: (props: IconProps) => JSX.Element
}

type CatalogItem = {
  category: Exclude<CategoryKey, 'todos'>
  title: string
  detail: string
  askFor: string
  tags: string[]
  icon: (props: IconProps) => JSX.Element
}

const phone = '299 471-9426'
const rawPhone = '5492994719426'
const whatsappBase = `https://wa.me/${rawPhone}`
const defaultMessage = 'Hola Valentino, quería consultar disponibilidad de un repuesto. Mi vehículo es: '
const defaultWhatsapp = `${whatsappBase}?text=${encodeURIComponent(defaultMessage)}`

const categories: Category[] = [
  { key: 'todos', label: 'Todo', description: 'Rubros principales', icon: Icons.Tag },
  { key: 'baterias', label: 'Baterías', description: 'Venta y consulta de baterías', icon: Icons.Battery },
  { key: 'frenos', label: 'Frenos', description: 'Pastillas, discos y componentes', icon: Icons.Brake },
  { key: 'embragues', label: 'Embragues', description: 'Kits y repuestos asociados', icon: Icons.Clutch },
  { key: 'lubricantes', label: 'Lubricantes', description: 'Aceites y fluidos', icon: Icons.Oil },
  { key: 'rodamientos', label: 'Rulemanes y retenes', description: 'Rodamientos, rulemanes y retenes', icon: Icons.Bearing },
]

const catalog: CatalogItem[] = [
  {
    category: 'baterias',
    title: 'Baterías',
    detail: 'Para arranque y reemplazo. Consultá medida, amperaje y compatibilidad.',
    askFor: 'marca, modelo, año y amperaje si lo tenés',
    tags: ['batería', 'bateria', 'arranque', 'amperaje'],
    icon: Icons.Battery,
  },
  {
    category: 'frenos',
    title: 'Frenos',
    detail: 'Pastillas, discos y repuestos del sistema de freno.',
    askFor: 'marca, modelo, año y si buscás pastilla, disco u otra pieza',
    tags: ['freno', 'pastilla', 'disco', 'discos'],
    icon: Icons.Brake,
  },
  {
    category: 'embragues',
    title: 'Embragues',
    detail: 'Kits y componentes. La versión del motor suele ser clave.',
    askFor: 'marca, modelo, año y motorización',
    tags: ['embrague', 'kit', 'cable'],
    icon: Icons.Clutch,
  },
  {
    category: 'lubricantes',
    title: 'Lubricantes',
    detail: 'Aceites y fluidos para service. Si no sabés la viscosidad, consultá.',
    askFor: 'vehículo, motor y uso que le das',
    tags: ['aceite', 'lubricante', '5w30', '10w40', 'service'],
    icon: Icons.Oil,
  },
  {
    category: 'rodamientos',
    title: 'Rodamientos, rulemanes y retenes',
    detail: 'Para tren delantero, ruedas, motor y otros conjuntos.',
    askFor: 'medida/código si lo tenés, o vehículo completo',
    tags: ['rodamiento', 'ruleman', 'rulemán', 'retén', 'reten'],
    icon: Icons.Bearing,
  },
]

const verifiedFacts = [
  ['Dirección', 'Mariano Moreno 354, General Fernández Oro'],
  ['Teléfono / WhatsApp', phone],
  ['Rubro', 'Repuestos del automotor'],
  ['Contacto', 'alejandro-reinetti@hotmail.com.ar'],
]

const realImages = [
  {
    src: '/photos/post-valentino.jpg',
    alt: 'Frente del local Valentino Repuestos en General Fernández Oro',
    eyebrow: 'Frente del local',
    title: 'Mariano Moreno 354',
  },
  {
    src: '/photos/perfil-valentino.jpg',
    alt: 'Logo real de Valentino Repuestos',
    eyebrow: 'Identidad real',
    title: 'Valentino Repuestos',
  },
  {
    src: '/photos/cartel-valentino.jpg',
    alt: 'Flyer real de Valentino Repuestos con rubros y WhatsApp',
    eyebrow: 'Publicación real',
    title: 'Rubros del automotor',
  },
]

function whatsappFor(item: CatalogItem) {
  return `${whatsappBase}?text=${encodeURIComponent(`Hola Valentino, quería consultar por ${item.title}. Tengo estos datos: ${item.askFor}. `)}`
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-lime-300/10 bg-[#070806]/94 backdrop-blur-xl">
      <div className="section-container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Valentino Repuestos inicio">
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-lime-300/35 bg-white shadow-lg shadow-lime-500/10">
            <Image src="/photos/perfil-valentino.jpg" alt="Logo Valentino Repuestos" width={52} height={52} className="h-full w-full object-cover" priority />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-black tracking-tight text-white">Valentino Repuestos</span>
            <span className="block text-xs font-semibold text-lime-200/80">Repuestos del automotor · Fernández Oro</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-300 lg:flex" aria-label="Principal">
          <a href="#catalogo" className="transition hover:text-lime-300">Rubros</a>
          <a href="#local" className="transition hover:text-lime-300">Local</a>
          <a href="#pedido" className="transition hover:text-lime-300">Cómo pedir</a>
          <a href="#datos" className="transition hover:text-lime-300">Datos</a>
        </nav>

        <a href={defaultWhatsapp} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-[#2ee84f] px-5 py-3 text-sm font-black text-zinc-950 shadow-lg shadow-lime-500/20 transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:inline-flex">
          WhatsApp {phone}
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070806] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.18),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(34,197,94,0.10),transparent_28%),linear-gradient(135deg,#050604_0%,#11150f_52%,#050604_100%)]" />
      <div className="section-container grid min-h-[790px] items-center gap-12 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:py-18">
        <div className="animate-slide-up">
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-xs font-black text-lime-200 sm:px-4 sm:text-sm">
            <Icons.MapPin className="h-4 w-4" />
            Mariano Moreno 354 · General Fernández Oro
          </div>

          <h1 className="max-w-3xl text-balance font-display text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            Consultá el repuesto con los datos claros desde el primer mensaje.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
            Valentino Repuestos atiende consultas de repuestos del automotor en Fernández Oro. Mandá marca, modelo, año y una foto si la tenés.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={defaultWhatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#2ee84f] px-5 py-4 text-base font-black text-zinc-950 shadow-xl shadow-lime-500/20 transition hover:-translate-y-1 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto sm:px-6">
              <Icons.WhatsApp className="h-6 w-6" />
              Consultar por WhatsApp
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#catalogo" className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-lime-300/30 bg-white/5 px-5 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto sm:px-6">
              Ver rubros principales
            </a>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ['Local', 'Fernández Oro'],
              ['WhatsApp', phone],
              ['Rubro', 'Automotor'],
              ['Pedido', 'Con datos claros'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-300/10">
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-400">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 animate-fade-in">
          <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full bg-lime-300/18 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/45 backdrop-blur">
            <div className="relative min-h-[520px] overflow-hidden rounded-[1.8rem] bg-zinc-950">
              <Image src="/photos/post-valentino.jpg" alt="Frente real de Valentino Repuestos" fill priority className="object-cover" sizes="(max-width: 1024px) 90vw, 52vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/10" />
              <div className="absolute left-0 right-0 top-0 flex items-center justify-between gap-3 p-5">
                <span className="rounded-full border border-lime-300/30 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-lime-200 backdrop-blur">Foto real</span>
                <span className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black text-white backdrop-blur">Gral. Fernández Oro</span>
              </div>
              <div className="absolute bottom-0 max-w-xl p-6 sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Valentino Repuestos</p>
                <h2 className="mt-2 font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Mostrador local. Consulta directa.</h2>
                <p className="mt-4 text-base leading-7 text-zinc-300">La landing apunta a convertir búsquedas, redes y visitas en consultas ordenadas por WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RealIdentity() {
  return (
    <section id="local" className="bg-[#10130d] py-16 text-white sm:py-24" aria-labelledby="local-title">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-300">Local e identidad</p>
            <h2 id="local-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] sm:text-5xl">Que se vea Valentino, no una plantilla genérica.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">Usamos el frente del local, el logo y las publicaciones reales disponibles. Los datos públicos coinciden en dirección y teléfono.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {realImages.map((image) => (
              <article key={image.src} className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20">
                <div className="relative aspect-[4/5] bg-zinc-950">
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 90vw, 27vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-300">{image.eyebrow}</p>
                    <h3 className="mt-1 font-display text-xl font-black text-white">{image.title}</h3>
                  </div>
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
      const haystack = [item.title, item.detail, item.askFor, ...item.tags].join(' ').toLowerCase()
      return byCategory && (!q || haystack.includes(q))
    })
  }, [active, query])

  return (
    <section id="catalogo" className="bg-[#070806] py-16 text-white sm:py-24" aria-labelledby="catalogo-title">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-300">Rubros principales</p>
          <h2 id="catalogo-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] sm:text-5xl">Catálogo simple para pedir sin confundirse.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">No mostramos precios ni stock inventado. Cada rubro abre WhatsApp con el pedido mejor armado.</p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <label htmlFor="catalog-search" className="sr-only">Buscar rubro</label>
            <input id="catalog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej: batería, pastilla, aceite, rulemán..." className="h-14 flex-1 rounded-2xl border border-white/10 bg-black/35 px-5 text-base font-semibold text-white outline-none transition placeholder:text-zinc-500 focus:border-lime-300 focus:ring-4 focus:ring-lime-300/15" autoComplete="off" />
            <a href={`${whatsappBase}?text=${encodeURIComponent(`Hola Valentino, estoy buscando: ${query || 'un repuesto'}. Mi vehículo es: `)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#2ee84f] px-5 text-base font-black text-zinc-950 shadow-sm transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Preguntar por WhatsApp</a>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {categories.map((category) => {
              const Icon = category.icon
              const selected = active === category.key
              return (
                <button key={category.key} type="button" onClick={() => setActive(category.key)} className={`inline-flex min-h-12 shrink-0 items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${selected ? 'border-lime-300 bg-lime-300 text-zinc-950 shadow-lg shadow-lime-500/15' : 'border-white/10 bg-white/8 text-zinc-200 hover:border-lime-300/50 hover:text-lime-200'}`} aria-pressed={selected}>
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
              <article key={item.title} className="group rounded-[1.7rem] border border-white/10 bg-[#11150f] p-6 shadow-xl shadow-black/18 transition duration-300 hover:-translate-y-1 hover:border-lime-300/50 hover:bg-[#151a12]">
                <div className="flex items-start gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-lime-300/30 bg-lime-300/10 text-lime-300 transition group-hover:scale-105 group-hover:bg-lime-300 group-hover:text-zinc-950">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-zinc-300">{category.label}</span>
                    <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-4 min-h-[72px] text-base leading-7 text-zinc-300">{item.detail}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-300">Para consultar mejor</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Mandá {item.askFor}.</p>
                </div>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <a href={whatsappFor(item)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#2ee84f] px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Consultar disponibilidad</a>
                  <a href="#pedido" className="inline-flex items-center justify-center rounded-xl border border-white/12 px-4 py-3 text-sm font-black text-zinc-200 transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Qué datos mando</a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function OrderFlow() {
  const steps = [
    ['1', 'Decí qué buscás', 'Ej: batería, pastilla de freno, aceite, rulemán, retén o embrague.'],
    ['2', 'Mandá datos del vehículo', 'Marca, modelo, año, motor y una foto si la tenés.'],
    ['3', 'Valentino responde', 'Te confirman disponibilidad y cómo seguir por WhatsApp.'],
  ]

  return (
    <section id="pedido" className="bg-[#f3f5ed] py-16 text-zinc-950 sm:py-24" aria-labelledby="pedido-title">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#315c12]">Pedido ordenado</p>
            <h2 id="pedido-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] sm:text-5xl">La página baja el ida y vuelta.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">Sirve para particulares y para talleres: el mensaje llega con contexto y no queda todo perdido en audios sueltos.</p>
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

function VerifiedData() {
  return (
    <section id="datos" className="bg-[#070806] py-16 text-white sm:py-24" aria-labelledby="datos-title">
      <div className="section-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-xl shadow-black/20 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Datos públicos confirmados</p>
          <h2 id="datos-title" className="mt-3 font-display text-4xl font-black tracking-[-0.035em] text-white">Información limpia, sin mezclar datos dudosos.</h2>
          <div className="mt-8 grid gap-3">
            {verifiedFacts.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                <p className="mt-1 text-lg font-black text-white">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-zinc-500">Fuente pública consultada: Guía Cores, Guía de Oro/Facebook. Horarios, precios, stock y envíos se confirman con Valentino antes de publicarlos como promesa comercial.</p>
        </div>

        <div className="rounded-[2rem] bg-[#1d2a12] p-8 text-white shadow-xl shadow-black/20 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-300">Para talleres</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.035em]">Mandá la lista, no diez audios sueltos.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">La landing ayuda a que el pedido llegue con vehículo, pieza y urgencia. Menos confusión, mejor atención.</p>
          <ul className="mt-8 space-y-4">
            {['Lista por WhatsApp', 'Datos del vehículo', 'Foto o código de pieza', 'Consulta de disponibilidad'].map((item) => (
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
    email: 'alejandro-reinetti@hotmail.com.ar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mariano Moreno 354',
      addressLocality: 'General Fernández Oro',
      addressRegion: 'Río Negro',
      postalCode: '8325',
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
        <RealIdentity />
        <Catalog />
        <OrderFlow />
        <VerifiedData />
      </main>
      <footer className="border-t border-white/10 bg-[#050604] py-8 text-white" role="contentinfo">
        <div className="section-container flex flex-col justify-between gap-4 text-sm font-semibold text-zinc-400 sm:flex-row sm:items-center">
          <p>© 2026 Valentino Repuestos · Mariano Moreno 354 · General Fernández Oro</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-lime-300" href="mailto:alejandro-reinetti@hotmail.com.ar">Email</a>
            <a className="hover:text-lime-300" href={defaultWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="hover:text-lime-300" href="https://instagram.com/valentinorepuestos_" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="hover:text-lime-300" href="https://www.google.com/maps/place/Valentino+Repuestos/@-38.9534639,-67.9266153,17z" target="_blank" rel="noopener noreferrer">Maps</a>
          </div>
        </div>
      </footer>
      <a href={defaultWhatsapp} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#2ee84f] text-zinc-950 shadow-2xl shadow-lime-500/30 transition hover:scale-105 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950" aria-label="Consultar por WhatsApp">
        <Icons.WhatsApp className="h-7 w-7" />
      </a>
    </>
  )
}
