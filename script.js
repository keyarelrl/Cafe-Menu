// ==========================================
// MENU DATA
// ==========================================

const menuItems = {

    1: {
        name: "Spanish Latte",
        category: "COFFEE",
        price: 160,
        description:
            "Rich espresso blended with creamy milk and condensed milk. Smooth, sweet, and perfectly balanced.",
        image:
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85"
    },

    2: {
        name: "Iced Caramel Macchiato",
        category: "COFFEE",
        price: 175,
        description:
            "Bold espresso layered with vanilla, fresh milk, and caramel for a refreshing coffee experience.",
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"
    },

    3: {
        name: "Butter Croissant",
        category: "PASTRY",
        price: 120,
        description:
            "Golden, flaky, and buttery. Freshly baked every morning for the perfect coffee companion.",
        image:
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85"
    },

    4: {
        name: "Creamy Truffle Pasta",
        category: "FOOD",
        price: 295,
        description:
            "Silky cream sauce, parmesan, and fragrant truffle oil tossed with perfectly cooked pasta.",
        image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"
    },

    5: {
        name: "Harvest Breakfast Bowl",
        category: "FOOD",
        price: 260,
        description:
            "A wholesome plate of eggs, creamy avocado, fresh greens, and toasted sourdough.",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
    },

    6: {
        name: "Dark Chocolate Cake",
        category: "DESSERT",
        price: 185,
        description:
            "Decadent Belgian chocolate cake layered with silky chocolate cream.",
        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
    }

};


// ==========================================
// CART
// ==========================================

let cart = [];

let selectedItem = null;


// ==========================================
// FILTER MENU
// ==========================================

function filterMenu(category, button) {

    const cards =
        document.querySelectorAll(".menu-card");

    const buttons =
        document.querySelectorAll(".category");


    // Remove active from all buttons

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    // Activate selected button

    button.classList.add("active");


    // Show / hide cards

    cards.forEach(function(card) {

        const cardCategory =
            card.dataset.category;


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ==========================================
// SHOW ITEM
// ==========================================

function showItem(id) {

    const item = menuItems[id];

    selectedItem = item;


    document.getElementById("modalImage").src =
        item.image;


    document.getElementById("modalName").textContent =
        item.name;


    document.getElementById("modalCategory").textContent =
        item.category;


    document.getElementById("modalPrice").textContent =
        "₱" + item.price;


    document.getElementById("modalDescription").textContent =
        item.description;


    document
        .getElementById("itemModal")
        .classList.add("show");

}


// ==========================================
// CLOSE ITEM
// ==========================================

function closeItem() {

    document
        .getElementById("itemModal")
        .classList.remove("show");

}


function closeModal(event) {

    if (event.target.id === "itemModal") {

        closeItem();

    }

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart() {

    if (!selectedItem) {
        return;
    }


    cart.push(selectedItem);


    updateCart();


    closeItem();


    openCart();

}


// ==========================================
// UPDATE CART
// ==========================================

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartCount.textContent =
        cart.length;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your order is empty.</p>';

        cartTotal.textContent = "₱0";

        return;
    }


    let total = 0;


    cart.forEach(function(item, index) {

        total += item.price;


        const div =
            document.createElement("div");


        div.className = "cart-item";


        div.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ${item.category}
                </p>

            </div>

            <strong>
                ₱${item.price}
            </strong>

        `;


        cartItems.appendChild(div);

    });


    cartTotal.textContent =
        "₱" + total;

}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("show");

    document
        .getElementById("cartOverlay")
        .classList.add("show");

}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("show");

    document
        .getElementById("cartOverlay")
        .classList.remove("show");

}


// ==========================================
// ESC KEY
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeItem();

            closeCart();

        }

    }
);