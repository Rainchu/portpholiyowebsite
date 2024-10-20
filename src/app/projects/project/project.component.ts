import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../utill/utility';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{

  public shortDesc: boolean[] = [];

  ngOnInit(): void {
    this.dataArr.forEach((_,i) => {
      this.shortDesc[i] = true;
      this.readLessMore.push('Read More...');
    });
  }

  public readLessMore: string[] = [];

//public readLessMore:string ='Read More...'

  public openBox : number | null = null

    public dataArr : Project []= [
      {
       projectName : 'Online Job Portal',
       projectDesc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem officiis magnam nesciunt eos. Ullam voluptatum vitae ut sint eum optio, praesentium minus obcaecati fugiat quaerat aliquam culpa nesciunt architecto?',
       projectImg :'../../../assets/image/onlinejobportal.jpg'
      },
      {
        projectName : 'Visitor Management',
        projectDesc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem officiis magnam nesciunt eos. Ullam voluptatum vitae ut sint eum optio, praesentium minus obcaecati fugiat quaerat aliquam culpa nesciunt architecto?',
        projectImg :'../../../assets/image/visitor.png'
       },
       {
        projectName : 'Blog Api',
        projectDesc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem officiis magnam nesciunt eos. Ullam voluptatum vitae ut sint eum optio, praesentium minus obcaecati fugiat quaerat aliquam culpa nesciunt architecto?',
        projectImg :'../../../assets/image/blog1.png'
       },
       {
        projectName : 'Online Job Portal',
        projectDesc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem officiis magnam nesciunt eos. Ullam voluptatum vitae ut sint eum optio, praesentium minus obcaecati fugiat quaerat aliquam culpa nesciunt architecto?',
        projectImg :'../../../assets/image/rp.jpg'
       },
       {
        projectName : 'Online Job Portal',
        projectDesc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem officiis magnam nesciunt eos. Ullam voluptatum vitae ut sint eum optio, praesentium minus obcaecati fugiat quaerat aliquam culpa nesciunt architecto?',
        projectImg :'../../../assets/image/rp.jpg'
       },
    ]


    openDesc(index: number): void {
      if (this.openBox === index) {
        // If the item is already opened, close it and reset the text to 'Read More...'
        this.openBox = null;
        this.shortDesc[index] = true;
        this.readLessMore[index] = 'Read More...';
      } else {
        // If the item is not opened, open it and change the text to 'Read Less...'
        this.openBox = index;
        this.shortDesc[index] = false;
        this.readLessMore[index] = 'Read Less...';
    
        // Reset the other items' text back to 'Read More...'
        this.dataArr.forEach((_, i) => {
          if (i !== index) {
            this.shortDesc[i] = true;
            this.readLessMore[i] = 'Read More...';
          }
        });
      }}
}
