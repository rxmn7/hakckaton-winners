

const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

minRange.addEventListener("input", () => {
    if (parseInt(minRange.value) > parseInt(maxRange.value)) {
        minRange.value = maxRange.value;
    }
    updatePriceDisplay();
});

maxRange.addEventListener("input", () => {
    if (parseInt(maxRange.value) < parseInt(minRange.value)) {
        maxRange.value = minRange.value;
    }
    updatePriceDisplay();
});

function updatePriceDisplay() {
    console.log(`Price range: $${minRange.value} - $${maxRange.value}`);
}
const products = [
    { id: 1, title: "Dog house", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s", price: 20 },
    { id: 2, title: "Cat bowl", img: "https://i.pinimg.com/736x/ae/e3/4d/aee34ddfd65c21d2696329a3a686a94c.jpg", price: 15 },
    { id: 3, title: "Pet shampoo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ419xeWR6lm9c1sTxrndlM8dymneQHGVOoCw&s", price: 12 },
    { id: 4, title: "Dog food pack", img: "https://allaboutpets.pk/cdn/shop/products/Woof_Pupy_Food_500g_Allaboutpets.pk_b9df6ba0-651f-4120-9fbc-6c1a75c0b59c_1024x1024.jpg?v=1592950886", price: 30 },
    { id: 5, title: "Cat bed", img: "https://images.meesho.com/images/products/322288092/uwpsz_512.webp?width=512", price: 40 },
    { id: 6, title: "Dog toy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvo0zxQmVZVD1hC3jn9MohkXfi7PVGY0OX2w&s", price: 10 },
    { id: 7, title: "Leash", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKPmCkiTK8HmR3HjulvYj0Gy21bpjjH90IQ&s", price: 18 },
    { id: 8, title: "Soft bed", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRSbV9aX3vFMeuwD-r7EiRwEWMsh1GvVDRQ&s", price: 28 },
    { id: 9, title: "Food pack", img: "https://www.shutterstock.com/image-photo/dry-pet-food-natural-ingredients-600nw-2527826927.jpg", price: 22 },
    { id: 10, title: "Cat food", img: "https://www.shutterstock.com/image-photo/dry-pet-food-natural-ingredients-600nw-2527826927.jpg", price: 16 },
    { id: 11, title: "Dog bowl", img: "https://i5.walmartimages.com/seo/Vibrant-Life-Stainless-Steel-Jumbo-Dog-Bowl-Small_f9d4551f-a67d-473d-8211-01bbaeb3b96f.a670536772d890a8c752fd32173ad70d.jpeg", price: 14 },
    { id: 12, title: "Pet combo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnA2Ifoa55jOUiT90s50QK1a8B5HsgF7-GVw&s", price: 25 }
];
const grid = document.getElementById("productGrid");

function renderProducts(list) {
    grid.innerHTML = list.map(product => `
        <div class="product-card">
            <div class="product-img">
                <div class="placeholder-img"><img src="${product.img}" alt=""></div>
            </div>
            <div class="product-info">
                <h4>${product.title}</h4>
                <div class="price">$${product.price}</div>
            </div>
            <div class="card-footer">
                <button class="fav-btn">♡</button>
            </div>
        </div>
    `).join("");
        document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.textContent = this.classList.contains('active') ? '♥' : '♡';
        });
    });
}
const pages = document.querySelectorAll(".page");

pages.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".page.active")?.classList.remove("active");
        btn.classList.add("active");
        
        console.log(`Page ${btn.textContent} selected`);
    });
});

document.querySelector(".next-btn").addEventListener("click", () => {
    const activePage = document.querySelector(".page.active");
    const nextPage = activePage.nextElementSibling;
    
    if (nextPage && nextPage.classList.contains("page")) {
        activePage.classList.remove("active");
        nextPage.classList.add("active");
        console.log(`Page ${nextPage.textContent} selected`);
    }
});
renderProducts(products);
document.querySelector('.sort-select').addEventListener('change', function(e) {
    const sortBy = e.target.value;
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'latest':
            sortedProducts.sort((a, b) => a.id - b.id);
            break;
    }
    
    renderProducts(sortedProducts);
    console.log(`Sorted by: ${sortBy}`);
});