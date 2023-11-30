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