import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'greetingPipe',
})
export class GreetingPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return `GreetingPipe value: ${value}`;
  }
}
  
export class PipesGreetingPipePipeModule {}
