import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from './convert-case.pipe';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe.component';
import { TextColorDirective } from './directives/text-color.directive';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    PipeComponent,
    TextColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,  
    HomeComponent,
  ],
  providers: [
    TitleCasePipe,
  ],
  exports: [],
  bootstrap: [PipeComponent] 
})
export class AppModule { }

