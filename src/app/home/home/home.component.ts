import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Constants } from '../../utill/Constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  public name : string = "Rohit Pal"

  public myDetails : string = "Experienced Android developer with a designing and developing scalable APIs using .NET technologies. Currently transitioning to a full-stack .NET developer role, leveraging hands-on experience with ASP.NET Core, REST API development, and robust database management. Skilled in creating efficient, user-friendly applications and collaborating in agile environments to deliver impactful solutions. Proficient in both mobile and web application development with a commitment to continuous learning and growth."


  public icons: string[] = [
    'assets/image/facebook.png',
    'assets/image/instagram.png',
    'assets/image/linkedin.png',
    'assets/image/youtube.png'
  ];

  public urls:string[] = [Constants.faceBookUrl,Constants.instagramUrl,Constants.linkedinUrl,Constants.youtubeUrl];

}
