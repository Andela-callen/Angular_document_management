import { AngularDMSPage } from './app.po';

describe('angular-dms App', () => {
  let page: AngularDMSPage;

  beforeEach(() => {
    page = new AngularDMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
