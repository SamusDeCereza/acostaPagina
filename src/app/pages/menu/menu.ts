import { Component } from '@angular/core';
import { Container } from '../../component/structure/container/container';
import { Card } from '../../component/structure/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [Container, Card, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  menus = [
    {
      titulo: 'Menú de navegación principal',
      texto: 'Es el menú más importante del sitio. Contiene las secciones clave y suele ubicarse en la parte superior (header).'
    },
    {
      titulo: 'Menú secundario',
      texto: 'Complementa al menú principal con enlaces adicionales o menos prioritarios. Suele colocarse en la parte superior o inferior del sitio.'
    },
    {
      titulo: 'Menú desplegable (Dropdown)',
      texto: 'Muestra subopciones al pasar el cursor o hacer clic. Permite agrupar contenido sin saturar la interfaz.'
    },
    {
      titulo: 'Menú hamburguesa',
      texto: 'Representado por el ícono ☰. Es muy común en versiones móviles y diseños responsivo.'
    },
    {
      titulo: 'Menú lateral (Sidebar)',
      texto: 'Se coloca a un costado de la página (izquierda o derecha). Ideal para paneles de administración o sitios con muchas secciones.'
    },
    {
      titulo: 'Megamenú',
      texto: 'Menú desplegable de gran tamaño que muestra muchas opciones organizadas en columnas. Muy usado en e-commerce y sitios corporativos grandes.'
    },
    {
      titulo: 'Menú fijo (Sticky menu)',
      texto: 'Permanece visible al hacer scroll. Facilita el acceso constante a la navegación.'
    },
    {
      titulo: 'Menú contextual',
      texto: 'Aparece según la acción del usuario o la sección donde se encuentra. Es común en aplicaciones web.'
    },
    {
      titulo: 'Menú de pie de página (Footer menu)',
      texto: 'Se ubica en la parte inferior del sitio. Incluye enlaces informativos o legales.'
    },
    {
      titulo: 'Menú de migas de pan (Breadcrumbs)',
      texto: 'Muestra la ruta de navegación del usuario dentro del sitio. No es un menú tradicional, pero cumple una función de orientación.'
    },
    {
      titulo: 'Menú acordeón',
      texto: 'Muestra y oculta secciones al hacer clic. Muy usado en móviles y menús verticales.'
    },
  ]

}
