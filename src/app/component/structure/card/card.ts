import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, ɵEmptyOutletComponent],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

}
