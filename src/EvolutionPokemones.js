import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { bbvaChat, bbvaBack } from '@bbva-web-components/bbva-foundations-icons'; 
import styles from './evolution-pokemones.css.js';

import '@bbva-web-components/bbva-core-heading/bbva-core-heading.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js';
import '@pokemons/evolution-pokemones-dm/evolution-pokemones-dm.js';

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

  firstUpdated() {
    this.evolutionPoke();
  }

  async evolutionPoke() {
    const evolutionComponent = this.shadowRoot.querySelector('evolution-pokemones-dm');
    if (evolutionComponent) {
        this.pokemon = await evolutionComponent.fetchPokemonWithEvolutions();
    }
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
              </div>
              <h2>${this.pokemon.name}</h2>
              <img src="${this.pokemon.image}" alt="${this.pokemon.name}" />
              <h3>Evoluciones:</h3>
              <ul class="evolutions">
                ${this.pokemon.evolutions.map(evo => html`
                  <li class ="cardEvolution"> 
                    <h4> ${evo.name} <h4/>
                    <img src="${evo.image}" alt="${evo.name}" />
                    <bbva-button-default>Ver más</bbva-button-default>
                  </li>
                `)}
              </ul>
            </div>
          ` : html`<p>Cargando...</p>`}
        </div>
      </bbva-core-app-drawer>
      <evolution-pokemones-dm></evolution-pokemones-dm>
    `;
  }
}


