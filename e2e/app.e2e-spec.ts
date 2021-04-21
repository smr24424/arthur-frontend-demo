import { ArthurFrontendDemoPage } from './app.po';

describe('arthur-frontend-demo App', function() {
  let page: ArthurFrontendDemoPage;

  beforeEach(() => {
    page = new ArthurFrontendDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
