import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'boldSearch'
})
export class BoldSearch implements PipeTransform {
   transform(value: string, boldString: string): string {
      if (boldString === "") {
         return value;
      }

      let aValue = value.split(boldString);
      return aValue.join("<b>" + boldString + "</b>");
   }
}