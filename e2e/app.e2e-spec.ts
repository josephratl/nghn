import { NgHnPage } from './app.po';

describe('ng-hn App', function() {
  let page: NgHnPage;

  beforeEach(() => {
    page = new NgHnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
