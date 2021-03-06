import { Component, Input, SimpleChange } from '@angular/core';
import { FrameworkService } from '../../services';
import { Dependency } from '../../models';

@Component({
  selector: 'dependency-list',
  templateUrl: './dependency-list.component.html',
  styles: [`.input-card {
      margin: 0;
      padding-left: 15px;
      border-bottom: none !important;
      box-shadow: none !important;
    }
    .input-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    a {
      cursor: pointer;
    }
    .row {
      margin-bottom: 0px
    }`
    ],
})
export class DependencyListComponent {
  
  @Input()
  private allDependencies: Dependency[] = [];

  @Input()
  private searchBox: boolean = true ;

  @Input()
  private sortBox: boolean = true;
  
  @Input()
  private selectable: boolean = true;

  private searchDependencies: Dependency[] = [];
  private pagedDependencies: Dependency[] = [];

  private static PAGE_SIZE=12;
  private pages: number[];
  private currentPage: number = 0;

  // Dependencies currently selected by user
  selectedDependencies: Dependency[] = []

  constructor(private frameworkService: FrameworkService) {}

  ngOnInit() { 
  }

  /**
   * Detect changes on attributes
   */
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
      // When allDependencies are modified
      if (changes['allDependencies'] && this.allDependencies) {
          this.selectedDependencies = []
          this.searchDependencies = this.allDependencies
          this.setPage(1); 
      }
  }

  /**
   * 
   */
  onSearchDependency(name) { 
    var regex = new RegExp(name,"i");   
    this.searchDependencies = this.allDependencies.filter(function(dependency) {
      return (dependency.name.search(regex) != -1) 
    });

    this.setPage(1)
  }

  /**
   * 
   */
  setPage(page: number) {
    let totalPages = Math.ceil(this.searchDependencies.length / DependencyListComponent.PAGE_SIZE); 
    let startIndex = (page - 1) * DependencyListComponent.PAGE_SIZE;
    let endIndex = Math.min(startIndex + DependencyListComponent.PAGE_SIZE - 1, this.searchDependencies.length - 1);

    // get current page of dependencies
    this.pagedDependencies = this.searchDependencies.slice(startIndex, endIndex + 1);
    this.currentPage = page

    // hack to have a for loop (not foreach) in template
    this.pages = []
    for(let i = 1;i<=totalPages;i++) {
      this.pages.push(i)
    }
  }

  /**
   * Check if a dependency has been selected by the user 
   */
  isDependencySelected(dependency: Dependency) : boolean {
    if(dependency == null)
      return false
      
    let res = this.selectedDependencies.find(function(d) { 
      return d.id == dependency.id
    })
    return res != null
  }
  
  
  onDependencyStateChange(dependency) {
    var index = this.selectedDependencies.indexOf(dependency, 0);
    if(index == -1) 
      this.selectedDependencies.push(dependency);
    else 
      this.selectedDependencies.splice(index, 1);
    console.log(this.selectedDependencies)
  }
}