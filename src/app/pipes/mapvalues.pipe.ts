import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'mapValues'})
export class MapValuesPipe implements PipeTransform {
    transform(map, args:string[]) : any {    
        let entries = [];    
        map.forEach((value, key) => {
            entries.push({key: key, value: value});
        });
        return entries;
  }
}