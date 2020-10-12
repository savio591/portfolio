import React from 'react';
import img_wireframe from './grids/grid.imgWireframe.svg';
//================================================================

// Descrição das categorias
var categoria_1_texto = "Graphic Design";
var categoria_2_texto = "Photography";
var categoria_3_texto = "WebDesign";

// Variáveis dos containers
var wireframe = <img alt="wireframe" className="wireframe" src={img_wireframe}></img>;

var grid_1_texto = 
    <div class="overlay">
        <div class="texto">{categoria_1_texto}</div>
    </div>;
var grid_1 = <div className="grid_1">
{wireframe}
{grid_1_texto}
</div>;

var grid_2_texto = 
    <div class="overlay">
        <div class="texto">{categoria_2_texto}</div>
    </div>;
var grid_2 = <div className="grid_1">
{wireframe}
{grid_2_texto}
</div>;

var grid_3_texto = 
    <div class="overlay">
        <div class="texto">{categoria_3_texto}</div>
    </div>;
var grid_3 = <div className="grid_1">
{wireframe}
{grid_3_texto}
</div>;
//Criação dos containers
var ct_categorias;
ct_categorias = 
    <div className="ct_categorias">
        {grid_1}
        {grid_2}
        {grid_3}
    </div>


export default ct_categorias;