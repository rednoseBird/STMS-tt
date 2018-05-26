import { RoutingsModule } from './routings.module';

describe('RoutingsModule', () => {
  let routingsModule: RoutingsModule;

  beforeEach(() => {
    routingsModule = new RoutingsModule();
  });

  it('should create an instance', () => {
    expect(routingsModule).toBeTruthy();
  });
});
