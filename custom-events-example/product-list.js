class ProductList extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const template = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        a {
          padding: 20px;
          cursor: pointer;
          border: 1px solid transparent;
        }

        a:hover {
          border-color: red;
        }
      </style>

      <div class="container">
        <a>Produto 1 - R$10</a>
        <a>Produto 2 - R$10</a>
        <a>Produto 3 - R$10</a>
      </div>
    `;

    this.root.innerHTML = template;
    this.container =  this.root.querySelector('.container')

    // Event delegation pattern
    this.container.addEventListener('click', (event) => {
      event.preventDefault();

      // Cria um custom event
      const addProductEvent = new CustomEvent('add_product', {
        bubbles: true,
        composed: true,
        detail: {
          price: 10
        }
      })

      event.target.dispatchEvent(addProductEvent)
    });
  }
}

window.customElements.define('product-list', ProductList);
