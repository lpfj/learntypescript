## Compilador TS

# Compilar archivos unicos:

Para compilar archivos unicos debemos indicar a typescript mediante el comando el path del archivo que deseamos que compile a travez de la terminal

Si la estructura del proyecto se encuentra distribuida de la siguiente manera

root
-/node_modules
-/src
--index.html
--app.ts

y la terminal se encuentra ubicada en la carpeta /src, para compilar deberiamos ejecutar el siguiente comando

$ tsc app.ts

El cual generara (o actualizara en caso de ya existir) un archivo con el mismo nombre pero la extension .js, dejandonos una estructura como esta

root
-/node_modules
-/src
--index.html
--app.ts
--app.js

# Compilar multiples archivos:

En orden de compilar multiples archivos una buena practica seria inicializar typescript dentro del repositorio para establecer pautas al compilador.

Esto lo podemos hacer ejecutando el comando

$ tsc --init

El cual generara un archivo dentro de nuestra carpeta llamado tsconfig.json el cual generado tendra una serie de parametros los cuales podemos modificar.

Dejando la estructura de la siguinte forma:

root
-/node_modules
-/src
--index.html
--app.ts
--app.js
tsconfig.json

Idealmente el primero que deberiamos agregar seria exclusiones.

Al final del documento personalmente agrego:

"exclude": [
"node_modules"
]

Ya que esto le dice al compilador "no toques las librerias de terceros" evitandonos modificar data sensible que no hemos generado nosotros.

En este tambien podemos agregar archivos especificos que no deseamos que toque el compilador, digamos que tenemos un script (llamemoslo analytics.ts) que se esta modificando en esta instancia y este puede afectar el funcionamiento de nuestro codigo por lo que debemos ignorarlo

la estructura que tenemos es la siguiente

root
-/node_modules
-/src
--index.html
--app.ts
--app.js
--analytics.ts
tsconfig.json

a nuestro exclude incorporamos:

"exclude": [
"node_modules",
"src/analytics.ts"
]

Y esto evitara que el compilador lo considere a la hora de generar o modificar archivos, si estamos ubicados en la carpeta root y hacemos el siguiente comando en la terminal

$ tsc

El compilador buscara todo archivo .ts en la carpeta que no hayan sido excluidos y generara o actualizara lso archivos que tiene permiso de leer.

Ahora si deseamos solamente dirigir el controlador a archivos especificos podemos obviar la exclusion y solo incluir especificamente los archivos que deseamos que el compilador considere de la siguiente forma

"include": [
"src/app.ts"
]

# Mantener el compilador en watchmode

Para mantener el compilador de typescript corriendo y que este este atento a los cambios que hacemos en los archivos .ts de la carpeta mientras trabajamos es ideal tener este en watchmode asi pode actualizar estos solo en el guardado, el cual indicara al compilador que un archivo ha sido modificado y actualizara los script que sean afectados

eso lo podemos lograr a traves del siguiente comando en la terminal:

$ tsc -w

o

$ tsc --watch
