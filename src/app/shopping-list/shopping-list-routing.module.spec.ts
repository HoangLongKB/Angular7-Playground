import { ShoppingListRoutingModule } from './shopping-list-routing.module';

describe('ShoppingListRoutingModule', () => {
  let shoppingListRoutingModule: ShoppingListRoutingModule;

  beforeEach(() => {
    shoppingListRoutingModule = new ShoppingListRoutingModule();
  });

  it('should create an instance', () => {
    expect(shoppingListRoutingModule).toBeTruthy();
  });
});
