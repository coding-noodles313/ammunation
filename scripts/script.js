fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    for (const category in data) {
      const container = document.querySelector(`#${category} .grid`);
      data[category].forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="images/${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p class="price">$${product.price}</p>
        `;
        container.appendChild(card);
      });
    }
  });
