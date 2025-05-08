export class ProductDetailsElements {
  static get buttons() {
    return {
      get addToCartButton() {
        cy.contains("a", "Add to cart");
      },
    };
  }
}
