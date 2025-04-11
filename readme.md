# EasyPet Frontend

Este proyecto es el frontend de EasyPet, una plataforma para gestión veterinaria desarrollada con Next.js v0.

## Requisitos Previos

- Node.js (versión 16.x o superior)
- npm o pnpm (preferentemente pnpm ya que el proyecto usa pnpm-lock.yaml)
- Git

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio**

```bash
git clone https://github.com/Pbtxx/easypet_FRONT.git
cd easypet_FRONT
```

2. **Instala las dependencias**

Si usas npm:
```bash
npm install
```

Si usas pnpm (recomendado según la estructura del proyecto):
```bash
pnpm install
```

## Ejecución del proyecto

Para iniciar el servidor de desarrollo:

```bash
# Con npm
npm run dev

# Con pnpm
pnpm dev
```

El servidor se iniciará en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

```
easypet_FRONT/
├── .next/               # Carpeta generada por Next.js
├── app/                 # Páginas y rutas de la aplicación
│   ├── almacenamiento/  # Módulo de almacenamiento
│   ├── citas/           # Módulo de citas
│   ├── dashboard/       # Dashboard principal
│   ├── estadisticas/    # Módulo de estadísticas
│   ├── mensajes/        # Módulo de mensajes
│   ├── pacientes/       # Módulo de pacientes
│   ├── globals.css      # Estilos globales
│   └── layout.tsx       # Layout principal
├── components/          # Componentes reutilizables
├── hooks/               # Custom hooks
├── lib/                 # Funciones y utilidades
├── public/              # Archivos estáticos
└── styles/              # Estilos CSS/SCSS
```

## Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo
- `build`: Compila la aplicación para producción
- `start`: Inicia el servidor de producción
- `lint`: Ejecuta el linter para revisar el código

```bash
# Ejemplos:
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Despliegue

Para desplegar el proyecto en producción:

1. Construye la aplicación:
```bash
pnpm build
```

2. Para desplegar tu aplicación, asegúrate de seguir las instrucciones de despliegue específicas de la plataforma que elijas utilizar.

## Problemas Comunes

- **Error de dependencias**: Si encuentras errores relacionados con dependencias, intenta borrar la carpeta `node_modules` y el archivo `package-lock.json` o `pnpm-lock.yaml`, luego vuelve a ejecutar `pnpm install`.

- **Problemas con .env**: Asegúrate de tener configuradas las variables de entorno necesarias. Crea un archivo `.env.local` basado en `.env.example` si existe.

## Contacto

Para cualquier consulta o problema, contacta al equipo de desarrollo:

- GitHub: [Pbtxx](https://github.com/Pbtxx)
- Linkedin: [Pablo Martínez Canto](https://www.linkedin.com/in/pmartinezcanto/)
- [Sebastián Gacitúa Caro] (https://www.linkedin.com/in/sebastianogc/)

## Licencia

Derechos reservados.