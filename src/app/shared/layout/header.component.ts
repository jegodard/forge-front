import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: [`.material-icons {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              vertical-align: middle;
              margin-right: 10px;
              font-size: 20px;
          }`]
})
export class HeaderComponent {
  constructor() {}
}