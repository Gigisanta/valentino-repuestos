import Image from 'next/image'
import Link from 'next/link'
import { Button, WhatsAppFloat } from '@/components/Button'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'
import Icons from '@/components/Icons'

// Sample product data
const products = [
  {
    id: 1,
    name: 'Batería Moura 60Ah',
    slug: 'bateria-moura-60ah',
    category: 'Baterías',
    brand: 'Moura',
    price: 45000,
    stock: 12,
    image: '/images/bateria-moura-60ah.svg',
    description: 'Para autos compactos y medianos. Arranque en frío garantizado.',
  },
  {
    id: 2,
    name: 'Juego de Frenos Delantero VW Gol',
    slug: 'freno-delantero-vw-gol',
    category: 'Frenos',
    brand: 'TRW',
    price: 28500,
    stock: 8,
    image: '/images/freno-delantero-vw-gol.svg',
    description: 'Pastillas + discos + kit de instalación. Para Gol Trend, Power y Sport.',
  },
  {
    id: 3,
    name: 'Kit Embrague Toyota Corolla 2000-2006',
    slug: 'embrague-toyota-corolla',
    category: 'Embragues',
    brand: 'Luk',
    price: 38000,
    stock: 5,
    image: '/images/kit-embrague-toyota.svg',
    description: 'Disco, presión, volante y alineador. Incluye grasa de alta temperatura.',
  },
  {
    id: 4,
    name: 'Aceite Mobil 1 5W-30 5L',
    slug: 'aceite-mobil-1-5w30',
    category: 'Lubricantes',
    brand: 'Mobil',
    price: 31000,
    stock: 30,
    image: '/images/aceite-mobil1-5w30.svg',
    description: 'Lubricante sintético de alto rendimiento. Para motores turbo y NA.',
  },
  {
    id: 5,
    name: 'Rodamiento de Rueda Delantero Ford Focus',
    slug: 'rodamiento-rueda-ford-focus',
    category: 'Rodamientos',
    brand: 'Timken',
    price: 4800,
    stock: 20,
    image: '/images/rodamiento-focus.svg',
    description: 'Para modelo 2004-2011. Incluye sello y grasa.',
  },
  {
    id: 6,
    name: 'Filtro de Aceite Honda Civic WIX',
    slug: 'filtro-aceite-honda-civic',
    category: 'Filtros',
    brand: 'WIX',
    price: 850,
    stock: 50,
    image: '/images/filtro-wix-civic.svg',
    description: 'Compatible con modelos 2001-2020. Cambio cada 10.000 km.',
  },
]

const categories = [
  { name: 'Baterías', icon: Icons.Battery, count: '45+ productos', href: '/catalogo?cat=baterias' },
  { name: 'Frenos', icon: Icons.Brake, count: '60+ productos', href: '/catalogo?cat=frenos' },
  { name: 'Embragues', icon: Icons.Clutch, count: '30+ productos', href: '/catalogo?cat=embragues' },
  { name: 'Lubricantes', icon: Icons.Oil, count: '40+ productos', href: '/catalogo?cat=lubricantes' },
  { name: 'Rodamientos', icon: Icons.Bearing, count: '50+ productos', href: '/catalogo?cat=rodamientos' },
  { name: 'Filtros', icon: Icons.Filter, count: '80+ productos', href: '/catalogo?cat=filtros' },
]

const steps = [
  {
    number: '1',
    title: 'Buscá tu repuesto',
    description: 'Navegá por categorías o usá la búsqueda. Filtrá por marca, modelo o precio.',
  },
  {
    number: '2',
    title: 'Agregá al pedido',
    description: 'Sumá productos al carrito. Verificá stock en tiempo real y precios actualizados.',
  },
  {
    number: '3',
    title: 'Retirá o recibí',
    description: 'Elegí retiro gratis en 1 hora en nuestro local o envío mismo día a Cipolletti y Neuquén.',
  },
]

const testimonials = [
  {
    quote: 'Compré una batería Moura para mi Fiat Cronos y la atención fue excelente. Me probaron la carga antes de entregarla y me dieron tips de mantenimiento. Volveré seguro.',
    author: 'Carlos Méndez',
    role: 'Taller Mecánico Méndez - Cipolletti',
    avatar: '/images/testimonial-1.svg',
  },
  {
    quote: 'Necesitaba urgentemente un juego de frenos para mi Chevrolet Corsa. Los llamé por WhatsApp, tenían stock y lo retiré en 20 minutos. Precio justo y repuestos originales.',
    author: 'Laura Gutiérrez',
    role: 'Particular - Fernández Oro',
    avatar: '/images/testimonial-2.svg',
  },
  {
    quote: 'Soy cliente hace 3 años. Siempre tienen lo que necesito y si no lo traen en 24 horas. La garantía post-venta es un plus que pocos ofrecen.',
    author: 'José López',
    role: 'Flota de Transporte López - Neuquén',
    avatar: '/images/testimonial-3.svg',
  },
  {
    quote: 'Los recomiendo a todos mis colegas. Precios competitivos, stock amplio y la mejor atención del Alto Valle. Además tienen lubricantes premium que nadie más tiene.',
    author: 'Andrea Silva',
    role: 'Taller El Rincón del Motor - Cipolletti',
    avatar: '/images/testimonial-4.svg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-center bg-valentino-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-valentino-dark/90 to-valentino-dark/60" />
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-center bg-cover opacity-10" />
        
        <div className="relative section-container pt-16 pb-24">
          <div className="max-w-3xl">
            <Badge variant="featured" className="mb-6 inline-flex items-center gap-2">
              <Icons.Truck className="h-4 w-4" />
              <span>Local · Stock real · Envío mismo día Alto Valle</span>
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white text-balance mb-6 leading-tight">
              Repuestos para tu vehículo en el Alto Valle
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              En Valentino Repuestos encontrarás baterías, frenos, embragues, lubricantes, rodamientos y filtros.
              Atención personalizada, stock garantizado y precios justos. Retiro en 1 hora o envío mismo día a Cipolletti y Neuquén.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="whatsapp" 
                size="lg"
                asChild
              >
                <a href="https://wa.me/5492994719426?text=Hola%2C%20quisiera%20consultar%20por%20repuestos%20en%20Valentino%20Repuestos." target="_blank" rel="noopener noreferrer">
                  <Icons.WhatsApp className="h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/catalogo">Ver catálogo completo</Link>
              </Button>
              <Button variant="primary" size="lg" asChild>
                <Link href="/local">
                  <Icons.MapPin className="h-5 w-5" />
                  Conocer nuestro local
                </Link>
              </Button>
            </div>
            
            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Icons.Check className="h-5 w-5 text-valentino-gold" />
                <span>200+ productos en stock</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Check className="h-5 w-5 text-valentino-gold" />
                <span>Entrega mismo día</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Check className="h-5 w-5 text-valentino-gold" />
                <span>Garantía directa</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Check className="h-5 w-5 text-valentino-gold" />
                <span>Precios mayoristas</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="categories-heading">
        <div className="section-container">
          <header className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="categories-heading" className="text-3xl sm:text-4xl font-display font-bold text-valentino-dark tracking-tight">
              Nuestras especialidades
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Trabajamos con las principales categorías de repuestos para que encuentres exactamente lo que necesitás.
            </p>
          </header>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                href={category.href}
                className="group"
              >
                <Card hover>
                  <div className="p-6 text-center">
                    <div className="w-14 h-14 bg-valentino-red/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-valentino-red group-hover:text-white transition-colors duration-200">
                      <category.icon className="h-7 w-7 text-valentino-red group-hover:text-white transition-colors duration-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-valentino-dark">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="how-heading">
        <div className="section-container">
          <header className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="how-heading" className="text-3xl sm:text-4xl font-display font-bold text-valentino-dark tracking-tight">
              Así de sencillo es comprar en Valentino
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Desde tu celular o computadora, en menos de 2 minutos tenés tu pedido listo para retirar o enviar.
            </p>
          </header>
          
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-valentino-red/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-valentino-red text-3xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-valentino-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="products-heading">
        <div className="section-container">
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 id="products-heading" className="text-3xl sm:text-4xl font-display font-bold text-valentino-dark tracking-tight">
                Productos más solicitados
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Nuestro stock actual con disponibilidad inmediata para retiro o envío.
              </p>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/catalogo">Ver catálogo completo →</Link>
            </Button>
          </header>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="group">
                <Link href={`/producto/${product.slug}`} className="block hover:-translate-y-1">
                  <Card hover>
                    <div className="aspect-video relative overflow-hidden bg-gray-100 rounded-t-xl">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="stock">Stock: {product.stock}</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2 text-valentino-dark line-clamp-2 group-hover:text-valentino-red transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-valentino-red">${product.price.toLocaleString('es-AR')}</span>
                          <span className="text-xs text-gray-500">(contado)</span>
                        </div>
                        <Button variant="primary" size="default" asChild>
                          <Link href={`/producto/${product.slug}`}>Ver detalle →</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="section-container">
          <header className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-display font-bold text-valentino-dark tracking-tight">
              Lo que dicen nuestros clientes
            </h2>
          </header>
          
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover={false}>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-valentino-red/10 flex items-center justify-center overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-valentino-dark">{testimonial.author}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-valentino-dark py-16 sm:py-24" aria-labelledby="cta-heading">
        <div className="section-container text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            ¿Listo para encontrar tus repuestos?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Con nuestro sistema web vas a captar más clientes, reducir las pérdidas por llamadas perdidas 
            y ofrecer una experiencia de compra profesional. Todo sin riesgo inicial.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/5492994719426?text=Hola%2C%20quisiera%20saber%20mas%20sobre%20el%20catalogo%20online%20de%20Valentino%20Repuestos." target="_blank" rel="noopener noreferrer">
                <Icons.WhatsApp className="h-5 w-5" />
                Consultar por WhatsApp Ahora
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/local">Visitar Nuestro Local</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <span>¿Preguntas?</span>
            <span aria-hidden="true">·</span>
            <a href="https://wa.me/5492994719426" className="text-valentino-gold hover:underline">299 471-9426</a>
            <span aria-hidden="true">·</span>
            <span>Dirección: Mariano Moreno 354, Fernández Oro</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-10 border-t" role="contentinfo">
        <div className="section-container grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-valentino-dark">Valentino Repuestos</h3>
            <address className="not-italic text-gray-600 mb-4">
              Mariano Moreno 354<br />
              General Fernández Oro, Río Negro<br />
              CP 8324
            </address>
            <div className="text-gray-600 space-y-1">
              <p>Tel: <a href="tel:02994719426" className="text-valentino-red hover:underline">(0299) 471-9426</a></p>
              <p>WhatsApp: <a href="https://wa.me/5492994719426" className="text-valentino-red hover:underline">299 471-9426</a></p>
              <p>Email: <a href="mailto:alejandro-reinetti@hotmail.com.ar" className="text-valentino-red hover:underline">alejandro-reinetti@hotmail.com.ar</a></p>
            </div>
          </div>
          <nav aria-label="Categorías">
            <h3 className="font-semibold mb-4 text-valentino-dark">Categorías</h3>
            <ul className="space-y-2">
              <li><a href="/catalogo?cat=baterias" className="text-gray-600 hover:text-valentino-red transition-colors">Baterías</a></li>
              <li><a href="/catalogo?cat=frenos" className="text-gray-600 hover:text-valentino-red transition-colors">Frenos</a></li>
              <li><a href="/catalogo?cat=embragues" className="text-gray-600 hover:text-valentino-red transition-colors">Embragues</a></li>
              <li><a href="/catalogo?cat=lubricantes" className="text-gray-600 hover:text-valentino-red transition-colors">Lubricantes</a></li>
              <li><a href="/catalogo?cat=rodamientos" className="text-gray-600 hover:text-valentino-red transition-colors">Rodamientos</a></li>
              <li><a href="/catalogo?cat=filtros" className="text-gray-600 hover:text-valentino-red transition-colors">Filtros</a></li>
            </ul>
          </nav>
          <nav aria-label="Información">
            <h3 className="font-semibold mb-4 text-valentino-dark">Información</h3>
            <ul className="space-y-2">
              <li><a href="/local" className="text-gray-600 hover:text-valentino-red transition-colors">Nuestro Local</a></li>
              <li><a href="/talleres" className="text-gray-600 hover:text-valentino-red transition-colors">Precios para Talleres</a></li>
              <li><a href="/contacto" className="text-gray-600 hover:text-valentino-red transition-colors">Contacto</a></li>
              <li><a href="/politicas" className="text-gray-600 hover:text-valentino-red transition-colors">Políticas y Garantías</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2026 Valentino Repuestos. Todos los derechos reservados.
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  )
}