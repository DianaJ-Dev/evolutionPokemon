import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { bbvaChat, bbvaBack } from '@bbva-web-components/bbva-foundations-icons'; // Solo esta línea
import styles from './evolution-pokemones.css.js';

import '@bbva-web-components/bbva-core-heading/bbva-core-heading.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js';

const icon = bbvaChat();
const iconBack = bbvaBack();

export class EvolutionPokemones extends LitElement {
  static get properties() {
    return {
      pokemon: { type: Object },
      mainIcon: { type: String }
    };
  }

  constructor() {
    super();
    this.pokemon = null;
    this.mainIcon = icon;
    this.mainIconBack = iconBack;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchPokemonWithEvolutions();
  }

  async fetchPokemonWithEvolutions() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1'); // Obtener un Pokémon específico (Bulbasaur)
    const pokemonData = await response.json();
    const speciesData = await fetch(pokemonData.species.url).then(res => res.json());

    if (speciesData.evolution_chain) {
      const evolutionData = await fetch(speciesData.evolution_chain.url).then(res => res.json());
      const evolutions = this.getEvolutionsFromChain(evolutionData.chain);

      this.pokemon = {
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        evolutions,
      };
    }
  }

  getEvolutionsFromChain(chain) {
    let evolutions = [];
    let currentStage = chain;

    while (currentStage) {
      evolutions.push({
        name: currentStage.species.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonIdByName(currentStage.species.name)}.png`,
      });
      currentStage = currentStage.evolves_to[0] || null; 
    }

    return evolutions;
  }

  getPokemonIdByName(name) {
    const id = name.toLowerCase() === 'bulbasaur' ? 1 : ''; 
    return id;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('all-pokemon-shared-styles'),
    ];
  }

  render() {
    return html`
      <bbva-core-app-drawer label="Main menu">
        <div slot="drawer">
          ${this.pokemon ? html`
            <div class="pokemon-card">
              <div class="header-icons">
                <bbva-core-icon icon="${this.mainIconBack}"></bbva-core-icon>
                <bbva-core-icon icon="${this.mainIcon}"></bbva-core-icon>
                <bbva-foundations-spinner></bbva-foundations-spinner>
              </div>
              <h2>${this.pokemon.name}</h2>
              <img src="${this.pokemon.image}" alt="${this.pokemon.name}" />
              <h3>Evoluciones:</h3>
              <ul class="evolutions">
                ${this.pokemon.evolutions.map(evo => html`
                  <li>
                    <bbva-core-heading level="3">${evo.name}</bbva-core-heading>
                  </li>
                `)}
              </ul>
              <bbva-button-default>Ver más</bbva-button-default>
            </div>
          ` : html`<p>Cargando...</p>`}
        </div>
      </bbva-core-app-drawer>
    `;
  }
}
