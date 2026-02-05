import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
  standalone: true
})
export class SearchForm {

  quickQuery = '';

  constructor(private router: Router) {}

  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    // Navega a /busqueda?q=...
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}
