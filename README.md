# Arquitectura de Estilos - Cabañas Santa Camila

## 📁 Estructura Modular de SCSS

La carpeta `scss/` está organizada de forma modular para facilitar el mantenimiento y escalabilidad del código.

```
scss/
├── utilities/
│   ├── _variables.scss    # Variables globales (colores, tamaños, etc.)
│   ├── _mixins.scss        # Mixins reutilizables
│   └── _extends.scss       # Placeholders y extends
├── components/
│   ├── _navigation.scss    # Navbar y menú móvil
│   ├── _hero.scss          # Sección hero con video
│   ├── _buttons.scss       # Botones CTA y flotantes
│   ├── _sections.scss      # Secciones comunes reutilizables
│   ├── _about.scss         # Sección "Quiénes Somos"
│   ├── _amenities.scss     # Sección Comodidades
│   ├── _attractions.scss   # Sección Atractivos Naturales
│   ├── _social-proof.scss  # Testimonios y métricas
│   ├── _pricing.scss       # Tablas de precios
│   ├── _forms.scss         # Formularios de contacto
│   ├── _location.scss      # Mapas y ubicación
│   └── _footer.scss        # Pie de página
└── styles.scss             # Archivo principal (importa todos los módulos)
```

## 🎯 Beneficios de esta Estructura

### 1. **Mantenibilidad**
- Cada componente está en su propio archivo
- Fácil de encontrar y modificar estilos específicos
- Reducción de conflictos al trabajar en equipo

### 2. **Escalabilidad**
- Agregar nuevos componentes es simple: crear nuevo archivo en `components/`
- Los estilos están desacoplados y no se afectan entre sí

### 3. **Reutilización**
- Utilidades globales centralizadas en `utilities/`
- Componentes independientes que pueden reutilizarse

### 4. **Rendimiento**
- Código más organizado permite optimizaciones específicas
- Fácil identificar estilos no utilizados para eliminarlos

## 📝 Guía de Uso

### Editar un Componente Existente

Para modificar estilos de una sección específica:

1. Identifica el componente en la carpeta `scss/components/`
2. Edita el archivo correspondiente
3. Los cambios se compilarán automáticamente

**Ejemplo:** Para cambiar el color del hero, edita `_hero.scss`:
```scss
// scss/components/_hero.scss
.hero-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
}
```

### Agregar un Nuevo Componente

1. Crea un nuevo archivo en `scss/components/` (ejemplo: `_gallery.scss`)
2. Escribe tus estilos en el archivo
3. Importa el archivo en `styles.scss`:

```scss
// scss/styles.scss
@use "./components/gallery";
```

### Modificar Variables Globales

Para cambiar colores, fuentes o tamaños globales:

```scss
// scss/utilities/_variables.scss
$color-principal: #70866b;
$color-secundario: #f3e3c4;
$fuente-principal: "Outfit", sans-serif;
```

## 🔧 Comandos de Compilación

### Compilación Única
```bash
sass scss/styles.scss css/styles.css
```

### Modo Watch (Compilación Automática)
```bash
sass --watch scss:css
```

### Compilación Minificada para Producción
```bash
sass scss/styles.scss css/styles.css --style compressed
```

## 📦 Componentes Disponibles

| Componente | Archivo | Descripción |
|------------|---------|-------------|
| Navegación | `_navigation.scss` | Navbar, logo, menú móvil |
| Hero | `_hero.scss` | Sección principal con video |
| Botones | `_buttons.scss` | Todos los botones CTA |
| Secciones | `_sections.scss` | Contenedores base reutilizables |
| About | `_about.scss` | "Quiénes Somos" con cards |
| Comodidades | `_amenities.scss` | Grid de amenities |
| Atractivos | `_attractions.scss` | Cards de atractivos naturales |
| Social Proof | `_social-proof.scss` | Testimonios y métricas |
| Precios | `_pricing.scss` | Tablas y promociones |
| Formularios | `_forms.scss` | Forms de contacto |
| Ubicación | `_location.scss` | Mapas y direcciones |
| Footer | `_footer.scss` | Pie de página |

## 🎨 Nomenclatura de Clases

### Convenciones Utilizadas

- **BEM Modificado**: `.component-element--modifier`
- **Componentes**: `.hero`, `.amenities-section`, `.testimonios-grid`
- **Estados**: `.active`, `.featured`, `.highlight`
- **Responsive**: Mobile-first approach

### Ejemplos
```scss
.amenity-card { }              // Componente
.amenity-card.highlight { }    // Modificador
.amenity-icon-wrapper { }      // Elemento del componente
.amenity-card:hover { }        // Estado
```

## 🚀 Mejores Prácticas

1. **No edites el CSS compilado** (`css/styles.css`) directamente
2. **Usa variables** para colores y tamaños repetidos
3. **Agrupa media queries** al final de cada componente
4. **Comenta secciones complejas** para facilitar comprensión
5. **Mantén archivos pequeños** (< 300 líneas por componente)

## 🐛 Solución de Problemas

### Los cambios no se aplican
- Verifica que Sass esté compilando (`sass --watch scss:css`)
- Limpia la caché del navegador (Ctrl + Shift + R)
- Revisa la consola por errores de compilación

### Error de importación
- Asegúrate que los archivos inicien con `_` (underscore)
- Verifica la ruta en el `@use` statement
- No incluyas el `_` ni la extensión `.scss` en los imports

### Conflictos de estilos
- Revisa la especificidad de selectores
- Usa herencia (`@extend`) con cuidado
- Considera usar `!important` solo como último recurso

## 📚 Recursos Adicionales

- [Documentación oficial de Sass](https://sass-lang.com/documentation)
- [Guía de arquitectura Sass 7-1](https://sass-guidelin.es/#the-7-1-pattern)
- [BEM Methodology](http://getbem.com/)

---

**Última actualización:** Octubre 29, 2025  
**Mantenido por:** Equipo de Desarrollo Cabañas Santa Camila
