import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,HeaderComponent,FooterComponent, ReactiveFormsModule] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  screenHeight:any;
  screenWidth:any;
  footerMaxHeight!:number;
  title = 'angulareccomerce';

  constructor(){
    this.getScreenSize(event);

  }
  @HostListener('window:resize',['$event'])
    getScreenSize(event:any){
      this.screenHeight=window.innerHeight;
      this.screenWidth=window.innerWidth;
     //console.log(this.screenHeight,this.screenWidth)
     this.footerMaxHeight=this.screenHeight -160;

    }
}

