import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public openDiv : number = 0

  skills(){
   this.openDiv =0;
  }
  experience(){
  this.openDiv=1;

  }
  education(){
this.openDiv=2
  }

}
