import { Component, Input } from '@angular/core';
import { FrameworkService } from '../../services';
import { Dependency } from '../../models';

@Component({
  selector: 'dependency-list',
  templateUrl: './dependency-list.component.html'
})
export class DependencyListComponent {
  
  @Input()
  private dependencies: Dependency[];
  
  dependenciesByFamily : Map<string, Dependency[]> = new Map<string, Dependency[]>();
  selectedDependencies: Dependency[] = []

  constructor(private frameworkService: FrameworkService) {
    this.dependencies = [];
  }

  ngOnInit() { 
    this.getFeatures();  
  }

  /**
   * Retrieve features and group them by family name 
   */
  getFeatures() {
    /*this.frameworkService.getFeatures().subscribe(
        dependencies => {
          for (let dependency of dependencies) {
              let tmpFeatures = this.dependenciesByFamily.get(dependency.featureFamily.name)

              if(tmpFeatures == undefined) 
                tmpFeatures = []
              
              tmpFeatures.push(dependency)
              this.dependenciesByFamily.set(dependency.featureFamily.name, tmpFeatures)              
          } 
          
          // sort features to get enabled ones in first
          this.dependenciesByFamily.forEach((value, key: string) => {
            value.sort(function(a,b) {return (a.enabled === b.enabled)? 0 : a.enabled ? -1 : 1;})
          });
        },
        error => {
            console.log(error);
        }
    ); */
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