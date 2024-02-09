
  
  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    const nameSection = document.createElement("section");
    nameSection.textContent = product.name;

    const priceSection = document.createElement("section");
    priceSection.textContent = `Price: $${product.price}`;

    const image = document.createElement("img");
    image.src = `./img/${product.image}.png`; 
	card.appendChild(image);
    card.appendChild(nameSection);
    card.appendChild(priceSection);
    

    return card;
  }


 let selectedGender = null;
 let selectedBrand = null;

 function updateFilterCounts() {
    const maleCount = data.products.filter((product) => product.gender === 'MALE').length;
    const femaleCount = data.products.filter((product) => product.gender === 'FEMALE').length;

    const leGrandCount = data.products.filter((product) => product.brand === 'LE GRAND BIKES').length;
    const krossCount = data.products.filter((product) => product.brand === 'KROSS').length;
    const explorerCount = data.products.filter((product) => product.brand === 'EXPLORER').length;
    const visitorCount = data.products.filter((product) => product.brand === 'VISITOR').length;
    const ponyCount = data.products.filter((product) => product.brand === 'PONY').length;
    const forceCount = data.products.filter((product) => product.brand === 'FORCE').length;
    const eBikesCount = data.products.filter((product) => product.brand === 'E-BIKES').length;
    const idealCount = data.products.filter((product) => product.brand === 'IDEAL').length;

    document.getElementById('maleCount').textContent = `(${maleCount})`;
    document.getElementById('femaleCount').textContent = `(${femaleCount})`;
    document.getElementById('leGrandCount').textContent = `(${leGrandCount})`;
    document.getElementById('krossCount').textContent = `(${krossCount})`;
    document.getElementById('explorerCount').textContent = `(${explorerCount})`;
    document.getElementById('visitorCount').textContent = `(${visitorCount})`;
    document.getElementById('ponyCount').textContent = `(${ponyCount})`;
    document.getElementById('forceCount').textContent = `(${forceCount})`;
    document.getElementById('eBikesCount').textContent = `(${eBikesCount})`;
    document.getElementById('idealCount').textContent = `(${idealCount})`;
  }

  
  function filterByGender(gender) {
    selectedGender = gender;
    filterProducts();
  }

  
  function filterByBrand(brand) {
    selectedBrand = brand;
    filterProducts();
  }

  
  function showAll() {
    selectedGender = null;
    selectedBrand = null;
    filterProducts();
  }

  
  function filterProducts() {
    let filteredProducts = data.products;

    if (selectedGender) {
      filteredProducts = filteredProducts.filter((product) => product.gender === selectedGender);
    }

    if (selectedBrand) {
      filteredProducts = filteredProducts.filter((product) => product.brand === selectedBrand);
    }

    updateProductList(filteredProducts);
  }
  
   function updateTotalCount() {
    const totalCount = data.products.length;
    document.getElementById('totalCount').textContent = `(${totalCount})`;
  }

  
  function updateProductList(products) {
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = ""; 

    products.forEach((product) => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });

    updateFilterCounts(); 
  }

  
  fetch('https://challenges.brainster.tech/ajax_data/data.json')
    .then(response => response.json())
    .then(data => {
     
      window.data = data;
      
      updateProductList(data.products);
	  updateTotalCount();
    })
    .catch(error => console.error('Error fetching data:', error));