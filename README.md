Aquí tienes una versión mejorada y enriquecida del archivo `README.md` que combina la información del curso con el proyecto de Next.js, PostgreSQL, Docker y Prisma:

````markdown
![](thumbnail.png)

![](https://img.shields.io/github/license/alura-cursos/android-com-kotlin-personalizando-ui)

# Curso: Next.js - Estrategias de Componentes Server-Side

Este curso práctico de Next.js está enfocado en **Server-Side Rendering (SSR)** y en el desarrollo de aplicaciones web modernas y escalables.

## 📖 Descripción del Proyecto

El proyecto del curso implementa un blog dinámico que incluye las siguientes características:

- **Listagem de posts** con soporte de **paginación**.
- **Exhibición detallada** de cada post utilizando SSR.
- **Renderización del lado del servidor** para mejorar la performance y SEO.
- **Roteamento con App Router** para gestionar rutas y transiciones de página.
- **Integración con APIs** mediante `fetch`.

## 🛠️ Funcionalidades Adicionales

Además de los temas centrales del curso, el proyecto incluye:

- Consumo de una API de posts para listar y mostrar posts.
- Renderización de contenido **Markdown** utilizando componentes de React.
- Gestión de logs y errores mediante `winston`.
- **Navegación del lado del cliente** para transiciones fluidas entre páginas.

## ✔️ Tecnologías Utilizadas

El proyecto hace uso de tecnologías modernas como:

- **Next.js**: Framework de React que facilita SSR y SSG.
- **Fetch API**: Para realizar llamadas HTTP y consumir datos de la API.
- **remark**: Librería para procesar Markdown y renderizarlo como HTML.
- **winston**: Para logging avanzado con múltiples niveles y destinos.
- **CSS Modules**: Para gestionar estilos de forma modular.
- **React Components**: Componentización y reutilización de código en la interfaz.

## 🚀 Instrucciones para Desplegar el Proyecto

Sigue estos pasos para desplegar el proyecto en tu máquina local:

### 1. Clonar el Repositorio

Clona el repositorio en tu entorno local:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```
````

### 2. Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
# o
yarn install
```

### 3. Configurar la Base de Datos con Docker

Este proyecto utiliza PostgreSQL con Docker. Asegúrate de que Docker esté corriendo en tu máquina y levanta el contenedor de PostgreSQL:

```bash
docker-compose up -d
```

Esto levantará el contenedor de PostgreSQL en el puerto `5446`.

### 4. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable de entorno para conectar a la base de datos:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5446/codeconnect_dev"
```

### 5. Inicializar Prisma

Ejecuta la migración inicial de Prisma para configurar la base de datos:

```bash
npx prisma migrate dev --name init
```

### 6. Ejecutar el Servidor de Desarrollo

Una vez que todo esté configurado, ejecuta el servidor de desarrollo de Next.js:

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`.

### 7. Servidor Fake con json-server (opcional)

Si deseas usar una API de prueba, puedes usar `json-server`. Instala `json-server` globalmente si no lo tienes:

```bash
npm install -g json-server
```

Luego, ejecuta el siguiente comando para iniciar el servidor en el puerto `3042`:

```bash
json-server post.json -p 3042
```

## 🛠️ Comandos Útiles

- **Levantar el contenedor de Docker:**

  ```bash
  docker-compose up -d
  ```

- **Detener y eliminar contenedores de Docker:**

  ```bash
  docker-compose down
  ```

- **Ejecutar migraciones de Prisma:**

  ```bash
  npx prisma migrate dev --name init
  ```

- **Acceder a Prisma Studio (gestión de la base de datos):**
  ```bash
  npx prisma studio
  ```

## 📝 Problemas Comunes

### Error de Permisos con Docker

Si encuentras problemas de permisos al ejecutar Docker, asegúrate de agregar tu usuario al grupo `docker`:

```bash
sudo usermod -aG docker $USER
```

Luego, reinicia tu sesión o el sistema.

## 📚 Más Información del Curso

Si deseas profundizar en SSR y desarrollo web con Next.js, [haz clic aquí](#) para acceder al curso completo.

## 🔗 Licencia

Este proyecto está licenciado bajo la MIT License. Consulta el archivo [LICENSE](LICENSE) para más detalles.
