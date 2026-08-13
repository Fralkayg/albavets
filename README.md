# AlbaVets 🐾

Sitio web de **AlbaVets**, veterinaria a domicilio en el Valle del Aconcagua, Chile.

Construido con **React + TypeScript + Vite**, **Tailwind CSS** y **Material UI**, y desplegado
automáticamente en **GitHub Pages** mediante GitHub Actions.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue

El sitio se despliega automáticamente en GitHub Pages con cada push a `main`, mediante el
workflow definido en [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Para que el despliegue funcione, en el repositorio de GitHub debes habilitar:

`Settings → Pages → Build and deployment → Source: GitHub Actions`

### Dominio propio

El sitio se sirve en la raíz del dominio [www.albavets.cl](https://www.albavets.cl) (no en un
subpath de GitHub Pages), por lo que `vite.config.ts` usa `base: '/'`. El archivo
[public/CNAME](public/CNAME) fija el dominio personalizado; al usar GitHub Actions para
desplegar (en vez de "Deploy from a branch"), este archivo debe existir en el código fuente,
ya que GitHub no lo genera automáticamente y sin él el despliegue podría desactivar el dominio
personalizado configurado en `Settings → Pages`.
