import { TitleCasePipe } from './convert-case.pipe';

describe('titlecase', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });
});
