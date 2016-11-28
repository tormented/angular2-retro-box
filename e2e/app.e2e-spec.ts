import { RetroBoxPage } from './app.po';

describe('retro-box App', function() {
  let page: RetroBoxPage;

  beforeEach(() => {
    page = new RetroBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
