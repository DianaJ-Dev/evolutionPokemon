# Evolution Pokémon UI

## Descripción

**Evolution Pokémon UI** es un componente de interfaz de usuario que permite visualizar las evoluciones de un Pokémon. Este componente consume el componente **evolution-pokemones-dm** para obtener datos de Pokémon desde la API de [PokeAPI](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/id.png) y mostrar sus evoluciones de manera atractiva.

> Nota: Reemplaza `id` en la URL de la imagen con el ID del Pokémon correspondiente.

## Características

- Muestra el nombre y la imagen del Pokémon seleccionado.
- Presenta una lista de evoluciones con imágenes.
- Botón para obtener más información sobre cada evolución.

## Requisitos

- Node.js
- cells-cli

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/DianaJ-Dev/evolutionPokemon
   cd evolutionPokemon
   ```

2. Instala las dependencias:
    ```bash
   npm install
   ```

3. Instala cells-cli globalmente si no lo tienes instalado:
    ```bash
    npm install -g cells-cli
    ```
4. Inicia la aplicación localmente:
    ```bash
    cells lit-component:serve
    ```
### Uso

1. Añade la dependencia del componente en tu package.json:
    ```bash
    @semillero/evolution-pokemones": "git+https://github.com/DianaJ-Dev/evolutionPokemon.git#main
    ```

2. Instala la dependencia:
   ```bash
    npm install
    ```
3. Importa el componente en tu aplicación:
    ```bash
    import '@semillero/evolution-pokemones/evolution-pokemones.js'
    ```
4. Añade el componente a tu HTML:
   ```bash
    <evolution-pokemones></evolution-pokemones>
    ```
#### Estilos
Puedes personalizar los estilos del componente modificando el archivo CSS correspondiente. Asegúrate de incluir el archivo de estilos en tu proyecto.    