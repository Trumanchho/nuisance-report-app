import { Pipe, PipeTransform } from '@angular/core';
import { Troublemaker } from './troublemaker';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tmList:Troublemaker[], querystring:string ): Troublemaker[] {
    return tmList.filter(tm=>{
      return tm.name.toLowerCase().includes(querystring.toLowerCase())
    });
  }
}
