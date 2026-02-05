import { Component } from '@angular/core';
import { Container } from '../../component/structure/container/container';
import { Card } from '../../component/structure/card/card';
import { SearchForm } from '../../component/shared/search-form/search-form';

@Component({
  selector: 'app-elementos-sitio',
  imports: [Container, Card, SearchForm],
  templateUrl: './elementos-sitio.html',
  styleUrl: './elementos-sitio.css',
})
export class ElementosSitio {

}
