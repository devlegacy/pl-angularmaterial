# Angular

## Install angular CLI

```bash
  npm install -g @angular/cli
```

## Test CLI version

```bash
  ng --version
```

## Create a new project with CLI

```bash
  # Simple way
  ng new project-name
  # Recomend:
  # Prefijo para los módulos
  # Estilos en la aplicación
  # Módulo de ruteo
  ng new project-name --prefix pm
                      --style scss
                      --routing
  # To test - Descripción de lo que hará el comando, sin crear algo con --dry-run
  ng new project-name --prefix pm --style scss --routing --dry-run
```

## Commands for develop process

### Develop server

```bash
  ng serve
  ng serve -o
  # Recomend
  ng serve --host 0.0.0.0
```

### Build

```bash
  ng build
  ng build --prod
  # Recommend wit aot
  ng build --prod --aot --base-href /ed-angular/ --output-path dist
```

### Deploy to github pages

```bash
  # Install
  npm install -g angular-cli-ghpages
  # Create repo
  git remote add origin https://github.com/username/project-name
  # Run command
  ngh -no-silent
```

### Test unitarios - Karma

```bash
  ng test
```

### Test de integración - end to end

```bash
  ng e2e
```

### Local test

```bash
  # "server:local": "http-server ./dist/ed-angular -a localhost -p 9010 -e -g -o -c-1"
  ng build --prod && npm run server:local
```

### Angular material

#### Install guide

* [Install](https://material.angular.io/guide/getting-started)

#### With schematics - recommend

```bash
  ng add @angular/material
  # Add menu
  ng generate @angular/material:material-nav --name=material/main-nav --module material
```

### Angular flexlayout

```bash
  npm install @angular/flex-layout --save
  # see: https://tburleson-layouts-demos.firebaseapp.com/#/docs
```

#### Actualizar proyecto de angular

```bash
  ng update
  # Esto retorna todas las dependencias desactualizados con su comando de actualización

  # We analyzed your package.json, there are some packages to update:

    # Name                               Version                  Command to update
    #--------------------------------------------------------------------------------
    #@angular/cdk                       6.4.7 -> 7.0.0-rc.0      ng update @angular/cdk --next
    #@angular/cli                       6.2.3 -> 7.0.0-rc.1      ng update @angular/cli --next
    #@angular/core                      6.1.8 -> 7.0.0-rc.0      ng update @angular/core --next
    #@angular/material                  6.4.7 -> 7.0.0-rc.0      ng update @angular/material --next
    #rxjs                               6.2.2 -> 6.3.3           ng update rxjs
  ### Ejecutar cada comando por separado
  ng update @angular/cdk --next
  ng update @angular/cli --next
  ng update @angular/core --next
  ng update @angular/material --next
  ng update rxjs
```

## Buenas practicas

### Crear módulos

Un módulo se utiliza para agrupar componentes/servicios/funciones/valores
Nota: Un módulo no puede existir de manera aislada, siempre se referencia a otro

```bash
  ng generate module material
  # Recommend
  # --module default to app
  ng generate module material --module app
  ng generate module shared/material --module app
  ng generate module shared/material --module app --flat ## test with dry run (material folder is removed) (recommend**)
  ng generate module demo/demo --flat --routing
  ng generate module mars --module app
```

### Crear componentes

```bash
  ng generate component <name>
  ng generate component material-demo
  # In a folder - group
  # Recommend
  ng generate component material/material-demo --module material
  ng generate component home --module app
  ng generate component material/material-list/student-item --module material

  ng generate component demo/buttons
```

#### Botones

```bash
  ng generate component material/material-button --module material
```

#### Inputs

```bash
  ng generate component material/material-input --module material
```

#### Listas

```bash
  ng generate component material/material-list --module material
```

#### Listas hijas

```bash
  ng generate component material/material-list/item-student --module material
```

#### Para el módulo mars

```bash
    ng generate component mars --module mars
```

### Crear interfaces

Para definir modelos de datos sin comportamiento / Estructura

```bash
  ng generate interface shared/model/student
  # Astronomy Picture of the day
  ng generate interface shared/model/apod
  ng generate interface shared/model/mars-image
  ng generate interface shared/model/rover

```

### Crear clases

Modelo de datos + comportamiento

```bash
  ng generate class shared/model/class-student
```

### Crear servicios

```bash
  # Needs providers: [NasaApiService],
  ng generate service shared/services/nasa-api --module app
```

#### Observables

Stream de datos

#### Send headers

Read: Interceptors
  - Adding headers to all request
  - Logging
  - Reporting progress events
  - Client side caching
Los interceptos funcionan en cascada
```json
  {
    "Accept": "application/json",
    "Content-type": "application/json",
    "Authorization": "TOKEN-XSDREWWG"
  }
```

#### HTTP CODES

- POST
  - Success `create`: 201 - Created
- GET
  - Success `read`: 200 - Ok
- PUT
  - Success `update`: 204 - No content
- DELETE
  - Success `delete`: 204 - No content

### Crear pipes

```bash
  ng generate pipe shared/pipes/lower-case --module app
```

## Property binding

- Permite comunicar eventos del componente al template/vista
- Conceptos
  - Atributos en corchetes [att]="var" == [value]="user.name"
  - String por default [value]="'Samuel R."
  - More info: ![Architecture](https://angular.io/generated/images/guide/architecture/overview2.png)

## Event binding

- Permite comunicar eventos del template/vista al componente
- Conceptos
  - Atributos en parentesis (event)="mnyFunction" == (click)="onClick()"
  - Variable de angular ($event) == (click)="onClick($event)"
  - More info: ![Architecture](https://angular.io/generated/images/guide/architecture/overview2.png)

## Two way data binding

- Comunicar la vista al modelo y modelo a la vista
- Conceptos:
  - [(ngmodel)] -> banana in a box

## Inputs dinamicos

- Decoradores @input
- Permite hacer un bind de un componete externo
- Hace que una propiedad esté disponible para un componente externo
- Decorador que marca un campo de clase como una propiedad de entrada y proporciona metadatos de configuración. Declara una propiedad de entrada enlazada a datos, que Angular actualiza automáticamente durante la detección de cambios.

## Errors

- If see: Module is not part of any NgModule or the module has not been imported into your module.
- You need restart the ng-server

## Notas

- Para crear los modelos e interfaces en una app pequeña
es posible crear una estructura de directorios compartida:
`shared/<models|services>/<class|interfaces>`
- En aplicaciones más grandes dentro de cada componente se puede asociar su modelo o servicio, etc.
`home/shared/<models|services>/<class|interfaces>`


## Advanced, road to pwa

```bash
  # Averiguar como cambiar el favicon
  ng add @angular/pwa
```
