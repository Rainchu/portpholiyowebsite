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


  public expArray :string[]=[' I have 10 months Experience of Android Developement in Orasis Infotech Pvt. Ltd.',
    'I did internship in JAVAEE in Wipro ltd',
    'I have Experience to create api using asp.net in web form',
    'Web App Developement'
  ]

  public educationArr :string[] = ['Chandigarh Engineering College Landran Mohali Punjab','Information Technology','july 2018 to september 2022']

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
