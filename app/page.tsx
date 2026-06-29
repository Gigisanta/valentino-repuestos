import Image from 'next/image'
import Link from 'next/link'
import Icons, { type IconProps } from '@/components/Icons'

type Category = {
  name: string
  icon: (props: IconProps) => JSX.Element
  description: string
  count: string
}

const categories: Category[] = [
  {
    name: 'Baterías',
    icon: Icons.Battery,
    description: 'Prueba de carga, asesoramiento y garantía directa.',
    count: '45+ referencias',
  },
  {
    name: 'Frenos',
    icon: Icons.Brake,
    description: 'Pastillas, discos, cintas, bombas y kits completos.',
    count: '60+ referencias',
  },
  {
    name: 'Embragues',
    icon: Icons.Clutch,
    description: 'Disco, placa, rulemán y kits para modelos frecuentes.',
    count: '30+ referencias',
  },
  {
    name: 'Lubricantes',
    icon: Icons.Oil,
    description: 'Aceites, líquidos, grasas y mantenimiento preventivo.',
    count: '40+ referencias',
  },
  {
    name: 'Rodamientos',
    icon: Icons.Bearing,
    description: 'Rulemanes, retenes y soluciones para tren delantero.',
    count: '50+ referencias',
  },
  {
    name: 'Filtros',
    icon: Icons.Filter,
    description: 'Aceite, aire, combustible y habitáculo multimarca.',
    count: '80+ referencias',
  },
]

const products = [
  {
    name: 'Batería Moura 60Ah',
    category: 'Baterías',
    image: '/images/bateria-moura-60ah.svg',
    note: 'Stock local · garantía directa',
  },
  {
    name: 'Juego de frenos VW Gol',
    category: 'Frenos',
    image: '/images/freno-delantero-vw-gol.svg',
    note: 'Pastillas + discos',
  },
  {
    name: 'Kit embrague Toyota',
    category: 'Embragues',
    image: '/images/kit-embrague-toyota.svg',
    note: 'Kit completo',
  },
  {
    name: 'Aceite Mobil 1 5W-30',
    category: 'Lubricantes',
    image: '/images/aceite-mobil1-5w30.svg',
    note: 'Sintético · alto rendimiento',
  },
]

const proof = [
  { value: '200+', label: 'referencias para cargar en catálogo' },
  { value: '1 h', label: 'retiro rápido en local' },
  { value: '3 zonas', label: 'Fernández Oro · Cipolletti · Neuquén' },
  { value: 'B2B', label: 'precios para talleres' },
]

const whatsappHref =
  'https://wa.me/5492994719426?text=Hola%20Valentino%20Repuestos%2C%20necesito%20consultar%20stock%20de%20un%20repuesto.'

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 sm:text-base"
    >
      {children}
    </a>
  )
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-valentino-red hover:text-valentino-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-valentino-red focus-visible:ring-offset-2 sm:text-base"
    >
      {children}
    </a>
  )
}

export default function HomePage() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow"
      >
        Saltar al contenido
      </a>

      <header className="border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="section-container flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Valentino Repuestos inicio">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-valentino-red text-lg font-bold text-white">
              VR
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-valentino-dark">Valentino Repuestos</span>
              <span className="block text-xs font-medium text-gray-500">General Fernández Oro</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex" aria-label="Principal">
            <a href="#catalogo" className="hover:text-valentino-red">Catálogo</a>
            <a href="#talleres" className="hover:text-valentino-red">Talleres</a>
            <a href="#local" className="hover:text-valentino-red">Local</a>
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-valentino-dark px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-valentino-dark-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-valentino-dark focus-visible:ring-offset-2 sm:inline-flex"
          >
            WhatsApp 299 471-9426
          </a>
        </div>
      </header>

      <main id="contenido">
        <section className="relative overflow-hidden bg-[#f7f4ef]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-valentino-red/30 to-transparent" aria-hidden="true" />
          <div className="section-container grid min-h-[720px] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-valentino-red/20 bg-white px-4 py-2 text-sm font-semibold text-valentino-red shadow-sm">
                <Icons.MapPin className="h-4 w-4" />
                Mariano Moreno 354 · Fernández Oro
              </p>

              <h1 className="font-display text-5xl font-bold tracking-tight text-valentino-dark sm:text-6xl lg:text-7xl">
                Repuestos con stock real para el Alto Valle.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
                Baterías, frenos, embragues, lubricantes, rodamientos y filtros con atención directa por WhatsApp,
                retiro en local y coordinación de envío local a Cipolletti y Neuquén.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href={whatsappHref}>
                  <Icons.WhatsApp className="h-5 w-5" />
                  Consultar stock ahora
                </PrimaryLink>
                <SecondaryLink href="#catalogo">
                  Ver productos destacados
                  <Icons.ArrowRight className="h-5 w-5" />
                </SecondaryLink>
              </div>

              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <dt className="text-2xl font-bold text-valentino-red">{item.value}</dt>
                    <dd className="mt-1 text-xs leading-5 text-gray-600">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-valentino-red/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-900/10">
                <div className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-50">
                  <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-[460px] bg-valentino-dark">
                      <Image
                        src="/photos/cartel-valentino.jpg"
                        alt="Material real publicado por Valentino Repuestos con dirección, WhatsApp y rubros ofrecidos"
                        fill
                        priority
                        className="object-cover opacity-95"
                        sizes="(max-width: 1024px) 90vw, 38vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-valentino-gold-light">Material real</p>
                        <p className="mt-1 text-lg font-bold">Valentino Repuestos</p>
                        <p className="text-sm text-gray-200">Mariano Moreno 354 · WhatsApp 299 471-9426</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Catálogo digital</p>
                          <p className="mt-1 font-display text-2xl font-bold text-valentino-dark">Del mostrador al celular</p>
                        </div>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">Propuesta activa</span>
                      </div>

                      <div className="mt-5 space-y-3">
                        {['Aceites y lubricantes', 'Baterías y arranque', 'Frenos y tren delantero', 'Filtros · correas · retenes', 'Kits de distribución', 'Ópticas y accesorios'].map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-valentino-red/10 text-valentino-red">
                              <Icons.Check className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-semibold text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl bg-valentino-dark p-5 text-white">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-valentino-gold-light">Pedido rápido por WhatsApp</p>
                            <p className="mt-1 text-sm text-gray-300">Consulta con producto, vehículo y forma de retiro.</p>
                          </div>
                          <Icons.WhatsApp className="h-7 w-7 text-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalogo" className="bg-white py-16 sm:py-24" aria-labelledby="catalogo-title">
          <div className="section-container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-valentino-red">Catálogo inicial</p>
              <h2 id="catalogo-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-valentino-dark sm:text-5xl">
                Categorías que la gente busca antes de ir al local
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                La primera versión prioriza lo que más rota: productos fáciles de consultar, pedir y retirar.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <article key={category.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-valentino-red/35 hover:shadow-lg hover:shadow-gray-900/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-valentino-red/10 text-valentino-red">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">{category.count}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-valentino-dark">{category.name}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="talleres" className="bg-gray-50 py-16 sm:py-24" aria-labelledby="talleres-title">
          <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-valentino-red">Para talleres</p>
              <h2 id="talleres-title" className="mt-3 font-display text-4xl font-bold tracking-tight text-valentino-dark sm:text-5xl">
                Menos audios, menos vueltas, más pedidos claros.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                La web puede ordenar consultas por producto, vehículo, cantidad y forma de retiro. El mostrador sigue siendo el centro: el catálogo lo alimenta.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Lista para talleres', 'Acceso privado a productos frecuentes y condiciones especiales.'],
                ['Pedidos estructurados', 'WhatsApp prearmado con producto, modelo y cantidad.'],
                ['Retiro coordinado', 'Pedido listo antes de pasar por el local.'],
                ['Seguimiento simple', 'Medir qué se consulta, qué falta y qué conviene stockear.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <Icons.Check className="h-6 w-6 text-valentino-red" />
                  <h3 className="mt-4 text-lg font-bold text-valentino-dark">{title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="local" className="bg-white py-16 sm:py-24" aria-labelledby="local-title">
          <div className="section-container">
            <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-valentino-dark shadow-xl shadow-gray-900/10">
              <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
                <div className="p-8 text-white sm:p-10 lg:p-12">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-valentino-gold-light">Visita el local</p>
                  <h2 id="local-title" className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                    Atención directa en Fernández Oro.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                    Consultá por WhatsApp, coordiná stock y pasá por el local. La propuesta no reemplaza la atención: la hace más rápida.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <Icons.MapPin className="h-6 w-6 text-valentino-gold-light" />
                      <p className="mt-3 font-semibold">Mariano Moreno 354</p>
                      <p className="text-sm text-gray-300">General Fernández Oro, Río Negro</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <Icons.Phone className="h-6 w-6 text-valentino-gold-light" />
                      <p className="mt-3 font-semibold">299 471-9426</p>
                      <p className="text-sm text-gray-300">WhatsApp y consultas</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <PrimaryLink href={whatsappHref}>
                      <Icons.WhatsApp className="h-5 w-5" />
                      Escribir por WhatsApp
                    </PrimaryLink>
                    <a
                      href="https://www.google.com/maps/place/Valentino+Repuestos/@-38.9534639,-67.9266153,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentino-dark sm:text-base"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[#111827] p-8 sm:p-10 lg:border-l lg:border-t-0">
                  <div className="rounded-3xl bg-white p-6 text-gray-900">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-valentino-red">Próximo paso</p>
                    <h3 className="mt-3 font-display text-3xl font-bold text-valentino-dark">Lanzar con 20 productos estrella</h3>
                    <ul className="mt-6 space-y-4 text-gray-700">
                      {[
                        'Fotos reales del local y mostrador.',
                        '20 productos con código, precio y stock.',
                        'WhatsApp Business con respuestas rápidas.',
                        'Lista inicial de talleres frecuentes.',
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <Icons.Check className="mt-0.5 h-5 w-5 shrink-0 text-valentino-red" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-8" role="contentinfo">
        <div className="section-container flex flex-col justify-between gap-4 text-sm text-gray-600 sm:flex-row sm:items-center">
          <p>© 2026 Valentino Repuestos · Mariano Moreno 354 · General Fernández Oro</p>
          <div className="flex gap-4">
            <a className="hover:text-valentino-red" href="mailto:alejandro-reinetti@hotmail.com.ar">Email</a>
            <a className="hover:text-valentino-red" href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="hover:text-valentino-red" href="https://instagram.com/valentinorepuestos_" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-900/25 transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        aria-label="Consultar por WhatsApp"
      >
        <Icons.WhatsApp className="h-7 w-7" />
      </a>
    </>
  )
}