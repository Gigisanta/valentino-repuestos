# Investigación profunda — Valentino Repuestos

Fecha: 2026-06-29
Fuente: 6 subagentes de investigación web en paralelo.

## 1. Referencias de diseño que más sirven

Patrones repetidos en sitios de repuestos/mecánica que funcionan:
- WhatsApp visible desde el primer viewport.
- Dirección visible para confianza local.
- Catálogo con búsqueda simple y filtros por rubro.
- Producto/card con CTA contextual: “Consultar stock”.
- Lenguaje directo, no corporativo.
- Fotos reales del local/productos por encima de flyers o imágenes genéricas.
- Sección “cómo comprar/pedir” en 3 pasos.
- Bloque especial para talleres.

Pitfalls a evitar:
- Flyers pixelados como imagen principal.
- Texto chico en mobile.
- Formularios largos en vez de WhatsApp.
- Claims inventados de stock/precio/testimonios.
- Sitios con mapa roto, footer vacío o secciones a medio hacer.

## 2. Catálogo recomendado

Para el MVP actual:
- Rubros visibles: Baterías, Frenos, Embragues, Lubricantes, Rodamientos, Filtros.
- Buscador con placeholder claro: “Ej: batería, Gol, filtro, 5W30…”
- Filtros tipo chips horizontales.
- Cards con:
  - rubro,
  - nombre,
  - compatibilidad orientativa,
  - código interno,
  - botón “Consultar stock”.
- WhatsApp prellenado por producto.

Evolución futura:
- Filtro por marca/modelo/año.
- Stock real: En stock / Consultar / Últimas unidades.
- Precios visibles solo si Valentino quiere mantenerlos actualizados.
- Productos frecuentes primero, no catálogo enorme de entrada.

## 3. Copy y tono argentino

Tono recomendado:
- Voseo: tenés, buscás, mandanos, pasá.
- Familiar y claro: como mostrador local, no como banco.
- Para particulares y talleres: simple sin sonar ignorante.
- Evitar jerga comercial: “adquirí”, “soluciones integrales”, “óptima calidad”.

Mensajes que sirven:
- “¿Qué repuesto necesitás para seguir andando?”
- “Mandanos marca, modelo, año y una foto si la tenés.”
- “Si no sabés el nombre exacto, no pasa nada.”
- “Te ayudamos a no comprar una pieza que no va.”
- “Para talleres: mandá la lista y la urgencia.”

WhatsApp recomendado:
- Mensaje automático: “¡Buenas! Somos Valentino Repuestos. Decinos qué repuesto necesitás, para qué vehículo y si tenés foto/código.”
- Respuesta rápida de stock: “Ahora te reviso. Dame un toque y te confirmo.”
- Si falta dato: “¿Qué auto tenés? Marca, modelo y año así te paso bien.”

## 4. Animaciones seguras

Usar solamente:
- Fade/slide-up suave en hero.
- Hover leve en cards.
- Transiciones en filtros.
- WhatsApp flotante con hover simple.
- Respeto de `prefers-reduced-motion`.

Evitar:
- Orbes.
- Glassmorphism.
- Parallax.
- Partículas.
- Typewriter.
- Animaciones largas o cargadas.

## 5. Auditoría visual final

Problemas detectados por subagentes en versiones anteriores:
- Hero con imagen/flyer de baja calidad parecía amateur.
- Faltaban fotos reales y productos reales.
- Footer podía parecer incompleto.
- Algunas cards tenían aspecto de placeholder.
- Mobile debía cuidarse mucho por overflow y textos chicos.

Correcciones aplicadas en la versión final:
- Landing reescrita completa.
- Catálogo con búsqueda/filtros/WhatsApp por producto.
- Mockups móviles embebidos.
- Copy familiar y claro.
- CTA de WhatsApp visible.
- Pack de visita actualizado.
- Visual QA de producción: PASS.

## 6. Competencia y posicionamiento

Competidores locales suelen fallar en:
- Sin precios visibles.
- Sin stock visible.
- Sin buscador claro.
- Web rota o básica.
- WhatsApp como botón genérico, no contextual.

Posicionamiento recomendado para Valentino:
> “La repuestera local de Fernández Oro que te ayuda a pedir bien por WhatsApp: rubros claros, consulta ordenada y retiro en local.”

Diferenciadores para venderle al dueño:
- No necesita cargar 500 productos de entrada.
- Arranca con rubros + 20 productos frecuentes.
- WhatsApp recibe mensajes más ordenados.
- La página convierte Instagram/Google en consultas.
- Es cero-costo inicial de herramientas: Vercel + GitHub + WhatsApp.

## 7. Qué pedirle a Valentino

Prioridad para próxima iteración:
1. WhatsApp final.
2. Horarios reales.
3. 20 productos más consultados.
4. Marcas que más trabajan.
5. Fotos reales del frente, mostrador, góndolas y productos.
6. Si publican precios o solo consulta de stock.
7. Si hacen envíos locales o solo retiro.

## 8. Próxima mejora de alto impacto

Si el dueño acepta:
- Reemplazar placeholders por fotos reales.
- Agregar horarios confirmados.
- Agregar 10-20 productos reales.
- Agregar JSON-LD LocalBusiness con teléfono/dirección/horarios.
- Si consigue reseñas reales, agregar bloque de Google Reviews o testimonios verificados.
