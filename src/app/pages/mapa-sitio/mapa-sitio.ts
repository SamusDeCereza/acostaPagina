import { Component } from '@angular/core';
import { Card } from "../../component/structure/card/card";
import { Container } from "../../component/structure/container/container";

@Component({
  selector: 'app-mapa-sitio',
  imports: [Card, Container],
  templateUrl: './mapa-sitio.html',
  styleUrl: './mapa-sitio.css',
})
export class MapaSitio {

}
