import { Component, OnInit } from '@angular/core';

import { Template } from '../../models';
import { TemplateService } from '../../services';

@Component({
  selector: 'side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private templates: Template[];

  constructor(private templateService: TemplateService) {}
  
  ngOnInit() {
    this.templateService.getTemplates().subscribe( templates => {
            this.templates = templates
            this.templates.sort()
        });                 
  }

}