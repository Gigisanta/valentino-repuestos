# Valentino Repuestos - Sitio Web Demo

Este es un sitio web de demostración para Valentino Repuestos, casa de repuestos automotrices en General Fernández Oro, Río Negro.

## 🚀 Características

- Diseño moderno y responsive con Tailwind CSS
- Catálogo de productos buscable y filtrable
- Integración con WhatsApp para consultas rápidas
- Carrito de compras con pago vía MercadoPago (simulado)
- Sección de local con mapa y horarios
- Testimonios de clientes
- Optimizado para SEO local

## 📋 Estructura del Proyecto

```
/app
  /page.tsx          - Página principal (Home)
  /layout.tsx        - Layout raíz
  /globals.css       - Estilos globales Tailwind
  /catalogo/page.tsx - Página de catálogo (pendiente)
  /producto/[slug]/page.tsx - Página de producto (pendiente)
  /local/page.tsx    - Página de local (pendiente)
  /pedido/page.tsx   - Página de pedido/carrito (pendiente)
/components          - Componentes reutilizables (pendiente)
/lib                 - Utilidades y datos de ejemplo
/public              - Imágenes estáticas y assets
```

## 🛠️ Requisitos Previos

- Node.js 18+ y npm
- Git (opcional, para versionado)
- Cuenta en Vercel (para despliegue)

## 💻 Instalación Local

1. Clonar el repositorio (o copiar los archivos):
```bash
git clone [url-del-repositorio]
cd valentino-repuestos
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador: http://localhost:3000

## 🚀 Despliegue en Vercel (Recomendado)

1. Instalar Vercel CLI (si no lo tenés):
```bash
npm i -g vercel
```

2. Iniciar sesión en Vercel:
```bash
vercel login
```

3. Desplegar desde el directorio del proyecto:
```bash
vercel
```

4. Seguir las instrucciones (elige un nombre de proyecto, confirma el desplegado en producción).

5. Una vez desplegado, Vincular un dominio personalizado (valentinorepuestos.com.ar) desde el dashboard de Vercel.

## 📱 Uso en la Visita a Valentino Repuestos

### Archivos preparados para llevar en la laptop:

1. **one-pager.html** - Propuesta de valor impresa (A4, 2 caras)
2. **competencia.html** - Análisis comparativo vs competencia local
3. **checklist.html** - Lista de qué necesitamos de ellos para comenzar
4. **guion-conversacion.html** - Guión de conversación + respuestas a objeciones
5. **La app Next.js corriendo en localhost:3000** - Para mostrar el MVP en vivo

### Sugerencias para la presentación:

- Abrir el one-pager en el navegador para explicar la propuesta
- Mostrar la app en vivo en localhost:3000 (tener el navegador listo)
- Tener la competencia.html y checklist.html como referencia
- Usar el guion-conversacion.html como apoyo mental (no leer literalmente)

### Flujo sugerido en la reunión:

1. **Romper el hielo** (2 min) - Presentarse y contexto
2. **Mostrar el one-pager** (3 min) - Propuesta de valor y modelo de inversión
3. **Demostrar la app en vivo** (5 min) - Navegar por Home, Catálogo, producto ejemplo
4. **Mostrar la competencia** (2 min) - Qué hacen los otros y qué falta
5. **Revisar el checklist** (2 min) - Qué necesitamos de ellos para comenzar
6. **Cerrar con próximo paso específico** (2 min) - Definir 20 productos estrella hoy

## 🎨 Personalización Futura

Una vez que Valentino apruebe el concepto, se pueden agregar:

- Base de datos real (Supabase, Firebase o MySQL en Vercel)
- Sistema de autenticación para talleres (precios especiales)
- Gestión de inventario sincronizada con stock físico
- Integración completa con MercadoPago (pagos reales)
- Blog de consejos de mantenimiento automotriz
- Galería de trabajos realizados (reparaciones, instalaciones)
- Programa de puntos/fidelidad para clientes recurrentes

## 📞 Contacto

**Giolivo Garcia** - Arquitecto de Soluciones / HerMaat (Principal Agente MaatWork)
- WhatsApp: 299 471-9426
- Email: giolivosantarelli@gmail.com
- GitHub: Gigisanta

*Hecho con ❤️ para ayudar a negocios locales a crecer en la era digital.*