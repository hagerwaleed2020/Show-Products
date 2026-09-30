const showBtn = document.querySelector(".show-btn");
const productsDiv = document.querySelector(".products-div");

showBtn.addEventListener("click", () => {
  productsDiv.innerHTML = `<h3 class="pt-2">Loading...</h3>`;
  setTimeout(() => {
    productsDiv.innerHTML = ``;
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        let products = data.products;
        products.forEach((product) => {
          productsDiv.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100">
                    <img
                        src="${product.images[0]}"
                        class="card-img-top object-fit-contain"
    
                    />
                    <div class="card-body text-start">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text text-dark-emphasis">${product.category}</p>
                        <p class="card-text">${product.description}</p>
                        <h5 class="text-success">${product.price}$</h5>
                        <button class="btn btn-primary w-100">View Product</button>
                    </div>
                </div>
            </div>`;
        });
      })
      .catch((e) => {
        productsDiv.innerHTML = `<h3>${e.message}</h3>`;
      });
  }, 2000);
});
