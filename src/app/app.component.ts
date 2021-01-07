import { Component, ViewChild, ElementRef } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  content:string = 'hello';
  contentTwo:string = 'hello ..';
  contentThree:string = 'hello ...';

  title = 'blackide';
  isFocus:boolean = true; 

  focus = (e) => {
    console.log('focus() e: ', e);
  }

  fChange = (e) =>{
    console.log('fChange(e) : ', e);
  }

  eventIt = (e) => {
    console.log('e: ', e);
  }

  tabChange = (e) => {
    console.log('tabChange() : ', e);
  }

  handleChange($event: Event): void {
    console.log('ngModelChange', $event);
  }
}

