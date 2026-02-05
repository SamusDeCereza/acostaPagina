import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { Navbar } from "../component/shared/navbar/navbar";
import { Footer } from "../component/shared/footer/footer";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FormsModule, Breadcrumb, CommonModule, Navbar, Footer],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})



export class Layout {   

}