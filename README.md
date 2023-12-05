# <<<< TypeScript >>>>

<!-- --------------------- -->

Cours

<!-- --------------------- -->

### Installation

> Initialiser le projet pour avoir le package.json

```bash
npm init -y
```

> Installer la dépendance TypeScript et préciser que c'est un dépendance de dévéloppement

```bash
npm install typescript --save - dev
```

> Créer un fichier .ts

```bash
type nul > app.ts
```

> Convertir le fichier .ts en .js

```bash
npx tsc app.ts
```

> Créer un dossier scr

```bash
mkdir src
```

> Déplacer le fichier .ts dans le dossier src puis faire ce commande et nommer le dossier de destination "dist"

```bash
npx tsc src/app.ts --outDir dist
```

> Créer un fichier de configuration pour éviter de répéter ce commande ci-dessus et contient les informations pour compiler le projet

```bash
type nul > tsconfig.json
```

> dans le fichier "tsconfig.json"

```bash
{
   "compilerOptions": {
       "outDir": "dist"
   },
   "files": [
       "src/app.ts"
   ]
}
```

> pour compiler, il suffit de taper ce code:

```bash
npx tsc
```

> ou

```bash
npx tsc --watch
```
