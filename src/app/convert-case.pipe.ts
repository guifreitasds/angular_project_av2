import { Pipe, PipeTransform } from '@angular/core';

const unicodeWordMatch = /([^\u0000-\u007F]|\w)+/g;

@Pipe({
  name: 'titlecase',
  standalone: true,
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string;
  transform(value: null|undefined): null;
  transform(value: string|null|undefined): string|null;
  transform(value: string|null|undefined): string|null {
    if (value == null) return null;
    if (typeof value !== 'string') {
    }

    return value.replace(
        unicodeWordMatch, (txt => txt[0].toUpperCase() + txt.slice(1).toLowerCase()));
  }
}
