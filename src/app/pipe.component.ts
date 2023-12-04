import { Component } from '@angular/core';
 
@Component({
  selector: 'AppPipeComponent',
  template: `
  <h1>
    <span>{{ 'cuidado,' | titlecase }} </span>
    <span>{{ 'orientação,' | titlecase }} </span>
    <span>{{ 'respeito,' | titlecase }} </span>
    <span>{{ 'organização' | titlecase }} </span>
    e
    <span>{{ 'amor:' | titlecase }} </span>
  </h1>
`
})
export class PipeComponent { }
