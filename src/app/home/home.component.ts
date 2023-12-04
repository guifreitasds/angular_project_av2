import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}

