HOTFIX DE SUBPÁGINAS — NO CAMBIA EL NUEVO HOME

El problema ocurrió porque el nuevo styles.css de la portada reemplazó el CSS que usaban las páginas antiguas de Recursos y Diagnóstico.

SUBE ESTOS 4 ELEMENTOS A LA RAÍZ DEL REPOSITORIO:

1. legacy-pages.css
2. legacy-pages.js
3. diagnostico-de-conversion/  (reemplaza su index.html)
4. recursos/                   (reemplaza el index.html del artículo)

NO reemplaces:
- index.html de la raíz
- styles.css
- script.js
- assets/

En GitHub:
Add file > Upload files
Arrastra los cuatro elementos de esta carpeta.
Commit message: Fix estilos de diagnóstico y recursos

Después espera 1–3 minutos y recarga con Ctrl+F5 o en incógnito.
