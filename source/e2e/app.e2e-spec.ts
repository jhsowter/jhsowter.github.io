import { Jhsowter.Github.IoPage } from './app.po';

describe('jhsowter.github.io App', () => {
  let page: Jhsowter.Github.IoPage;

  beforeEach(() => {
    page = new Jhsowter.Github.IoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
