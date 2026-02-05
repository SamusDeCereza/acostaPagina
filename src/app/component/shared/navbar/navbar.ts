import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import { SearchForm } from "../search-form/search-form";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, RouterModule, SearchForm],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

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
  
}
