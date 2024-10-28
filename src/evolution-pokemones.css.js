import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
.pokemon-card {
  background-color: #f9f9f9;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  max-width: 400px;
  margin: 20px auto;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}

.cardEvolution {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin: 10px;
  width: 150px;
}

.cardEvolution:hover {
  transform: scale(1.05);
}

.cardEvolution img {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}
`;
