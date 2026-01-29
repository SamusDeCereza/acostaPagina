import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FormsModule, Breadcrumb, CommonModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})



export class Layout { 

  links = [
    {
      name: "Breadcrumbs",
      route: "breadcrumbs", 
    },
    {
      name: "Elementos",
      route: "elementos", 
    },
    {
      name: "Menu",
      route: "menu", 
    },
    {
      name: "Mapa-sitio",
      route: "mapa-sitio", 
    }            
  ];

  quickQuery = '';

  constructor(private router: Router) {}

  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    // Navega a /busqueda?q=...
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }

}