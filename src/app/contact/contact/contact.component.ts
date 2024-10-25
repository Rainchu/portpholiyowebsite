import { Component } from '@angular/core';
import { ContactDetails } from '../../utill/utility';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  
  public contactDet : ContactDetails[]=[{
    contactImg : "assets/image/calling.jpg",
    contactUrl : '7754076940'
  },{
    contactImg : 'assets/image/gmail.png',
    contactUrl : 'rainchu786420@gmail.com'
  },{
    contactImg : 'assets/image/telegram (1).png',
    contactUrl : 'Telegram'
  },{
    contactImg : 'assets/image/linkedin (1).png',
    contactUrl :'Linkedin'
  }]
  
  constructor() {
    
   }
}
