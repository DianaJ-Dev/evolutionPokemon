import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
@charset "UTF-8";
.pokemon-card {
  background-color: #f9f9f9;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  max-width: 400px; /* Limita el ancho máximo de la tarjeta */
  margin: 20px auto; /* Centra la tarjeta horizontalmente */
}

.pokemon-card:hover {
  transform: scale(1.02);
}

.header-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

img {
  width: 150px;
  height: 150px;
  margin: 10px 0;
}

h2 {
  font-size: 24px;
  color: #333;
}

h3 {
  font-size: 20px;
  color: #555;
  margin-top: 20px;
}

.evolutions {
  list-style: none;
  padding: 0;
}

.evolutions li {
  margin: 5px 0;
  font-size: 18px;
  color: #444;
}
`;
