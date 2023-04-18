import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {

    const date:Date  =new Date();
    const age:number = date.getFullYear() - value.getFullYear();

    console.log(age);

    return age;
  }

}
