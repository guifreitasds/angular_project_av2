import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeareComponent } from './weare/weare.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HomeComponent,
    RouterModule, 
    WeareComponent, 
    AjudaComponent, 
    HttpClientModule
  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'projeto';
}
