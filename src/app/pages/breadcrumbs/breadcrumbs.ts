import { Component } from '@angular/core';
import { Container } from '../../component/structure/container/container';
import { Card } from "../../component/structure/card/card";

@Component({
  selector: 'app-breadcrumbs',
  imports: [Container, Card],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {

}
