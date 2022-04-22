class Cart extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });

    this.totalProducts = 0;
    this.totalPrice = 0;
  }

  async connectedCallback() {
    const template = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 20px;
        }

        p {
          margin: 0;
        }
      </style>

      <div class="container">
        <p>Total de produtos: <span id="total">${this.totalProducts}<span></p>
        <p>Preço: R$<span id="price">${this.totalPrice}</span></p>
      </div>
    `;

    this.root.innerHTML = template;
    this.totalElement =  this.root.querySelector('#total')
    this.priceElement = this.root.querySelector('#price')

    window.addEventListener('add_product', (event) => {
      this.totalProducts++;
      this.totalPrice += event.detail.price;

      this.totalElement.innerHTML = this.totalProducts;
      this.priceElement.innerHTML = this.totalPrice;
    })
  }
}

window.customElements.define('shopping-cart', Cart);
