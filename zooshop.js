  const products = [
            {
                id: 1,
                name: "Premium Dog Food - Chicken & Rice",
                category: "Dog Food",
                price: 29.99,
                originalPrice: 34.99,
                image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
            },
            {
                id: 2,
                name: "Cat Scratching Post with Toys",
                category: "Cat Furniture",
                price: 39.99,
                originalPrice: 49.99,
                image: "https://images.unsplash.com/photo-1708979346185-5f3235e1becd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 3,
                name: "Aquarium Starter Kit - 10 Gallon",
                category: "Aquarium",
                price: 79.99,
                originalPrice: 99.99,
                image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80"
            },
            {
                id: 4,
                name: "Bird Cage with Playtop",
                category: "Bird Supplies",
                price: 89.99,
                originalPrice: 109.99,
                image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80"
            },
            {
                id: 5,
                name: "Dog Bed - Orthopedic Memory Foam",
                category: "Dog Beds",
                price: 59.99,
                originalPrice: 79.99,
                image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            },
            {
                id: 6,
                name: "Cat Tree with Multiple Levels",
                category: "Cat Furniture",
                price: 129.99,
                originalPrice: 159.99,
                image: "https://plus.unsplash.com/premium_photo-1664371206041-f34c76a26592?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 7,
                name: "Dog Toy Bundle - 5 Pieces",
                category: "Dog Toys",
                price: 24.99,
                originalPrice: 34.99,
                image: "    https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            },
            {
                id: 8,
                name: "Automatic Pet Feeder",
                category: "Pet Tech",
                price: 49.99,
                originalPrice: 69.99,
                image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            }
        ];

        // Cart Data
        let cartItems = [
            {id: 1, name: "Premium Dog Food", price: 29.99, quantity: 1, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"},
            {id: 3, name: "Aquarium Starter Kit", price: 79.99, quantity: 1, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80"},
            {id: 7, name: "Dog Toy Bundle", price: 24.99, quantity: 1, image: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}
        ];

        // DOM Elements
        const cartIcon = document.getElementById('cart-icon');
        const cartSidebar = document.getElementById('cart-sidebar');
        const closeCart = document.getElementById('close-cart');
        const overlay = document.getElementById('overlay');
        const productsGrid = document.getElementById('products-grid');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalPrice = document.getElementById('cart-total-price');
        const cartCounter = document.getElementById('cart-counter');
        const newsletterForm = document.getElementById('newsletter-form');
        const testimonialControls = document.querySelectorAll('.control-btn');
        const testimonials = document.querySelectorAll('.testimonial');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Render products
            renderProducts();
            
            // Render cart items
            renderCartItems();
            
            // Update cart counter
            updateCartCounter();
            
            // Calculate and update cart total
            updateCartTotal();
            
            // Initialize testimonial slider
            initTestimonialSlider();
        });

        // Render products to the page
        function renderProducts() {
            productsGrid.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                const discountPercentage = Math.round((1 - product.price / product.originalPrice) * 100);
                
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">
                            <div>
                                <span class="price">$${product.price.toFixed(2)}</span>
                                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                                <span style="color: var(--secondary); font-weight: 600;">${discountPercentage}% off</span>
                            </div>
                            <button class="add-to-cart" data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Render cart items to the sidebar
        function renderCartItems() {
            cartItemsContainer.innerHTML = '';
            
            if (cartItems.length === 0) {
                cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--gray);">Your cart is empty</p>';
                return;
            }
            
            cartItems.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
                    </div>
                    <div class="cart-item-remove" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product) return;
            
            // Check if product is already in cart
            const existingItem = cartItems.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                });
            }
            
            // Update UI
            renderCartItems();
            updateCartCounter();
            updateCartTotal();
            
            // Show cart sidebar
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            
            // Show notification
            showNotification(`${product.name} added to cart!`);
        }

        // Remove product from cart
        function removeFromCart(productId) {
            cartItems = cartItems.filter(item => item.id !== productId);
            
            // Update UI
            renderCartItems();
            updateCartCounter();
            updateCartTotal();
            
            // Show notification
            showNotification('Item removed from cart');
        }

        // Update cart counter
        function updateCartCounter() {
            const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
            cartCounter.textContent = totalItems;
        }

        // Update cart total
        function updateCartTotal() {
            const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotalPrice.textContent = `$${total.toFixed(2)}`;
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: var(--accent);
                color: white;
                padding: 15px 25px;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow);
                z-index: 1002;
                font-weight: 500;
                transform: translateX(150%);
                transition: transform 0.3s ease;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Show notification
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 10);
            
            // Hide and remove notification after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(150%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Initialize testimonial slider
        function initTestimonialSlider() {
            testimonialControls.forEach(control => {
                control.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    
                    // Update active testimonial
                    testimonials.forEach(testimonial => {
                        testimonial.classList.remove('active');
                    });
                    
                    document.getElementById(`testimonial-${slideIndex + 1}`).classList.add('active');
                    
                    // Update active control
                    testimonialControls.forEach(ctrl => {
                        ctrl.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                });
            });
            
            // Auto-slide testimonials
            let currentSlide = 0;
            setInterval(() => {
                currentSlide = (currentSlide + 1) % testimonials.length;
                
                testimonials.forEach(testimonial => {
                    testimonial.classList.remove('active');
                });
                
                testimonialControls.forEach(ctrl => {
                    ctrl.classList.remove('active');
                });
                
                testimonials[currentSlide].classList.add('active');
                testimonialControls[currentSlide].classList.add('active');
            }, 5000);
        }

        // Cart sidebar functionality
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
        });

        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Newsletter form submission
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            const email = emailInput.value.trim();
            
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            
            if (navLinks.style.display === 'flex') {
                navLinks.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: white;
                    padding: 20px;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    z-index: 100;
                `;
                
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.style.padding = '10px 0';
                });
            }
        });

        // View cart and checkout buttons
        document.getElementById('view-cart-btn').addEventListener('click', () => {
            alert('Cart page would open here in a full implementation');
        });

        document.getElementById('checkout-btn').addEventListener('click', () => {
            alert('Checkout page would open here in a full implementation');
        });
        const BOT_TOKEN = "8318967427:AAEa5oENKf7Ja-c_y2uN1aqe5H1OibqLcHo"; 
const CHAT_ID = "8246219270";
const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.querySelector(".newsletter-input").value.trim();

    // if (!email) {
    //     alert("Iltimos email kiriting!");
    //     return;
    // }

    let message = `📩 Yangi obuna:\nEmail: ${email}`;

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            alert("Email botga yuborildi!");
            document.querySelector(".newsletter-input").value = "";
        } else {
            alert("Bot token yoki chat ID xato!");
            console.log(data);
        }
    })
    .catch(err => {
        alert("Internet yoki API ishlamayapti.");
        console.log(err);
    });
});