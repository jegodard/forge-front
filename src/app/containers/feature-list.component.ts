import { Component } from '@angular/core';
import { FeatureService } from '../services';
import { Feature } from '../models';

@Component({
  selector: 'features-container',
  templateUrl: './feature-list.component.html'
})
export class FeatureListComponent {
  
  featuresByFamily : Map<string, Feature[]> = new Map<string, Feature[]>();
  selectedFeatures: Feature[] = []

  constructor(private featureService: FeatureService) {}

  ngOnInit() { 
    this.getFeatures();  
  }

  /**
   * Retrieve features and group them by family name 
   */
  getFeatures() {
    this.featureService.getFeatures().subscribe(
        features => {
          for (let feature of features) {
              let tmpFeatures = this.featuresByFamily.get(feature.featureFamily.name)

              if(tmpFeatures == undefined) 
                tmpFeatures = []
              
              tmpFeatures.push(feature)
              this.featuresByFamily.set(feature.featureFamily.name, tmpFeatures)              
          } 
          
          // sort features to get enabled ones in first
          this.featuresByFamily.forEach((value, key: string) => {
            value.sort(function(a,b) {return (a.enabled === b.enabled)? 0 : a.enabled ? -1 : 1;})
          });
        },
        error => {
            console.log(error);
        }
    ); 
  }
  
  onFeatureStateChange(feature) {
    var index = this.selectedFeatures.indexOf(feature, 0);
    if(index == -1) 
      this.selectedFeatures.push(feature);
    else 
      this.selectedFeatures.splice(index, 1);
  }

}