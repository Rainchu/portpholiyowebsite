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
 

  public icons: string[] = [
    '../../../assets/image/facebook.png',
    '../../../assets/image/instagram.png',
    '../../../assets/image/linkedin.png',
    '../../../assets/image/youtube.png'
  ];

  public urls:string[] = [Constants.faceBookUrl,Constants.instagramUrl,Constants.linkedinUrl,Constants.youtubeUrl];

}
