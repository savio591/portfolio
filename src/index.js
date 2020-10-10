import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/main.css';
import './css/normalize.css';
import './css/react-index.css';
import './main.js';
import './plugins.js';
import grid_svg from './grids/grid.graphicdesign.svg'
import * as serviceWorker from './serviceWorker';

class HeaderPrincipal extends React.Component {

  nome = "SAVIL EXPERIMENTS"
  categoria = "Portfolio";
  line = " "
  header_nome = <h1 className="header_logo">{this.nome}</h1>;
  header_desc = <h1 className="header_desc">{this.categoria}</h1>;
  grid_wireframe_svg = <picture></picture>

    render() {
      return (
        <div>
          {this.header_nome}
          {this.header_desc_line}
          {this.header_desc}
        </div>
        
      )}
  }

class ContainerCategorias extends React.Component {
  grid = <div className="grid">
    <img
    srcSet={grid_svg}
    alt="gridwireframe"
    className="grid-svg"
    src={grid_svg}
    />
  </div>
  render() {
    return(
      <div className="container_categorias">
        {this.grid}
        {this.grid}
        {this.grid}
      </div>
    )
  }
}
//======================================================================

ReactDOM.render(
  <HeaderPrincipal />,
  document.getElementById('HeaderPrincipal')
);

ReactDOM.render(
  <ContainerCategorias />,
  document.getElementById('ContainerCategorias')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();