ï»¿// Product Database Seeds
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    title: 'Badam Halwa',
    category: 'ghee',
    price: 720.00,
    rating: 5,
    reviewsCount: 113,
    img: 'assets/badam_halwa.png',
    desc: 'Badam Halwa is a rich, decadent, nutty South Indian style melt-in-the-mouth halwa made mainly with 3 ingredients - blanched almonds, ghee (clarified butter) and sugar. This badam halwa recipe will make for one of the best almond halwas. It will surely remind you of the badam halwa that one gets in the South Indian sweets shops.'
  },
  {
    id: 2,
    title: 'Svastha Ananya',
    category: 'dry-fruits',
    price: 720.00,
    rating: 4,
    reviewsCount: 42,
    img: 'assets/hero_sweets.png',
    desc: 'Svastha Ananya is a premium assortment of natural dates, walnuts, figs, and premium almonds compacted into sugar-free nutrient-dense energy bites. Garnished with golden glaze.'
  },
  {
    id: 3,
    title: 'Shringara Malhar',
    category: 'traditional',
    price: 231.00,
    rating: 4,
    reviewsCount: 18,
    img: 'assets/motichoor_laddu.png',
    desc: 'A traditional delicacy crafted with fine gram flour pearls, fried to golden perfection in pure desi ghee, and infused with saffron and green cardamom.'
  },
  {
    id: 4,
    title: 'Sundara Malhar',
    category: 'ghee',
    price: 320.00,
    rating: 5,
    reviewsCount: 29,
    img: 'assets/kaju_katli.png',
    desc: 'Sundara Malhar represents a master-crafted recipe of rich cashews ground to perfection, baked into thin diamonds, and layered with pure edible silver sheets.'
  },
  {
    id: 5,
    title: 'Shubha Malhar',
    category: 'traditional',
    price: 1109.00,
    rating: 5,
    reviewsCount: 84,
    img: 'assets/hero_sweets.png',
    desc: 'Shubha Malhar is an extraordinary collection of milk pedas and saffron malhai sandesh, celebrating the grand tradition of royal celebrations.'
  },
  {
    id: 6,
    title: 'Royal Kaju Katli',
    category: 'dry-fruits',
    price: 650.00,
    rating: 5,
    reviewsCount: 92,
    img: 'assets/kaju_katli.png',
    desc: 'Diamond-shaped cashew fudge sweets layered neatly, decorated with edible silver leaf (varq), made from high-grade Goan cashews.'
  },
  {
    id: 7,
    title: 'Pure Ghee Laddu',
    category: 'ghee',
    price: 450.00,
    rating: 5,
    reviewsCount: 77,
    img: 'assets/motichoor_laddu.png',
    desc: 'Classic golden-orange Motichoor Laddus stacked in a pyramid shape, made with organic gram flour pearls, rich cardamom seeds, and roasted pistachios.'
  },
  {
    id: 8,
    title: 'Royal Sankla Box',
    category: 'boxes',
    price: 1350.00,
    rating: 5,
    reviewsCount: 120,
    img: 'assets/gift_box.png',
    desc: 'An elegantly designed Indian sweets gift box with gold filigree patterns. Contains partitioned rows of our best assorted colourful gourmet sweets.'
  },
  {
    id: 9,
    title: 'Royal Ghee Mysore Pak',
    category: 'ghee',
    price: 680.00,
    rating: 5,
    reviewsCount: 154,
    img: 'assets/mysore_pak.png',
    desc: "Sankla's signature Mysore Pak, inspired by the legendary royal sweet kitchens of South India. Crafted with premium gram flour, pure caramelized desi ghee, and organic sugar, offering a porous, melt-in-the-mouth texture."
  },
  {
    id: 10,
    title: 'Bellam Pootharekulu',
    category: 'traditional',
    price: 540.00,
    rating: 5,
    reviewsCount: 98,
    img: 'assets/pootharekulu.png',
    desc: 'A traditional Andhra delicacy crafted with wafer-thin layers of rice starch resembling translucent paper, generously brushed with pure desi ghee and stuffed with organic jaggery (bellam) and crushed dry fruits.'
  },
  {
    id: 11,
    title: 'Kaju Pista Roll',
    category: 'dry-fruits',
    price: 820.00,
    rating: 4,
    reviewsCount: 67,
    img: 'assets/kaju_pista_roll.png',
    desc: 'A premium dry-fruit sweet layered with rich cashew paste on the outside and a vibrant, nutty pistachio filling on the inside, lightly scented with cardamom.'
  },
  {
    id: 12,
    title: 'Traditional Jaggery Ariselu',
    category: 'traditional',
    price: 420.00,
    rating: 5,
    reviewsCount: 112,
    img: 'assets/ariselu.png',
    desc: 'An authentic South Indian festive sweet made of long-grain rice flour and organic dark jaggery, deep-fried in pure desi ghee to a chewy perfection, finished with sesame seeds.'
  },
  {
    id: 13,
    title: 'Premium Kaju Anjeer Roll',
    category: 'dry-fruits',
    price: 850.00,
    rating: 5,
    reviewsCount: 89,
    img: 'assets/kaju_anjeer_roll.png',
    desc: 'A healthy and luxurious confection featuring a soft casing of pure cashew paste wrapped around a rich, chewy center of premium imported figs (anjeer) and honey.'
  },
  {
    id: 14,
    title: 'Classic Milk Kalakand',
    category: 'traditional',
    price: 520.00,
    rating: 4,
    reviewsCount: 74,
    img: 'assets/kalakand.png',
    desc: 'A timeless milk sweet characterized by its grainy, moist texture and rich dairy aroma. Handcrafted by reducing pure whole milk, sweetened subtly, and garnished with saffron.'
  },
  {
    id: 15,
    title: 'Bellam Sunnundalu',
    category: 'traditional',
    price: 460.00,
    rating: 5,
    reviewsCount: 105,
    img: 'assets/sunnundalu.png',
    desc: 'A highly nutritious and traditional Andhra laddu made from roasted black gram (urad dal) flour, organic jaggery, and warm desi ghee.'
  },
  {
    id: 16,
    title: 'Royal Kesar Badusha',
    category: 'ghee',
    price: 480.00,
    rating: 4,
    reviewsCount: 63,
    img: 'assets/badusha.png',
    desc: 'Flaky, multi-layered sweet pastry made from refined flour, fried in pure ghee and soaked in a fragrant saffron and rose-infused sugar syrup.'
  }
];

let PRODUCTS = [];
if (localStorage.getItem('sankla_products')) {
  PRODUCTS = JSON.parse(localStorage.getItem('sankla_products'));
} else {
  PRODUCTS = DEFAULT_PRODUCTS;
  localStorage.setItem('sankla_products', JSON.stringify(PRODUCTS));
}

// Seed Reviews for detailed drawer views
const DEFAULT_REVIEWS = {
  1: [
    { name: "Suresh K.", rating: 5, comment: "Authentic taste. The rich aroma of pure ghee reminds me of my grandmother's halwa." },
    { name: "Ananya M.", rating: 5, comment: "Incredibly smooth and not overly sweet. The almonds taste freshly ground." }
  ],
  2: [
    { name: "Pooja R.", rating: 4, comment: "A healthy alternative for my sweet tooth. Packing was superb." }
  ],
  3: [
    { name: "Ramesh J.", rating: 4, comment: "Classic Laddu taste. Extremely soft and juicy." }
  ],
  4: [
    { name: "Divya N.", rating: 5, comment: "Best Kaju Katli in town. Thin, smooth, and melts in the mouth instantly." }
  ],
  9: [
    { name: "Satish P.", rating: 5, comment: "The Mysore Pak is incredibly soft and rich in ghee. Easily the best I have ever had!" },
    { name: "Vasudha R.", rating: 5, comment: "Authentic royal taste. Melted in the mouth instantly." }
  ],
  10: [
    { name: "Kalyan C.", rating: 5, comment: "Super thin layers. Traditional bellam flavor is spot on. Extremely fresh!" }
  ],
  11: [
    { name: "Nikhil T.", rating: 4, comment: "Great balance of cashews and pistachios. Beautifully rolled and fresh." }
  ],
  12: [
    { name: "Lakshmi K.", rating: 5, comment: "Crispy outer layer, soft and chewy inside. Sesame coating gives a perfect crunch." }
  ],
  13: [
    { name: "Harish V.", rating: 5, comment: "Outstanding premium quality. Sugar-free and rich fig filling." }
  ],
  14: [
    { name: "Sunitha B.", rating: 4, comment: "Very moist and perfectly grain textured. Cardamom and saffron fragrance is amazing." }
  ],
  15: [
    { name: "Ravi Shankar", rating: 5, comment: "Superb traditional taste. Urad dal is perfectly roasted. Highly recommended for kids." }
  ],
  16: [
    { name: "Manish S.", rating: 4, comment: "Extremely flaky and delicious Badusha. The saffron glaze is delightful." }
  ]
};

let PRODUCT_REVIEWS = {};
if (localStorage.getItem('sankla_reviews')) {
  PRODUCT_REVIEWS = JSON.parse(localStorage.getItem('sankla_reviews'));
} else {
  PRODUCT_REVIEWS = DEFAULT_REVIEWS;
  localStorage.setItem('sankla_reviews', JSON.stringify(PRODUCT_REVIEWS));
}

// Global Store State
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let selectedBoxSize = 4;
let boxSweets = []; // Customized box sweets items
let activeDetailProductId = null;
let detailQty = 1;

// Global Site Testimonials Feed
const DEFAULT_TESTIMONIALS = [
  { name: "Meera Bai", rating: 5, comment: "Sankla sweets are an absolute masterpiece. Our family weddings are incomplete without their dry fruit boxes!" },
  { name: "Vikram Malhotra", rating: 5, comment: "The custom box builder is brilliant. I created a tailored box of Badam Halwa and Laddus for Diwali. Highly recommended!" },
  { name: "Aditi Sharma", rating: 4, comment: "Amazing freshness and beautiful box presentation. The Badam Halwa melts like absolute butter." }
];

let testimonials = [];
if (localStorage.getItem('sankla_testimonials')) {
  testimonials = JSON.parse(localStorage.getItem('sankla_testimonials'));
} else {
  testimonials = DEFAULT_TESTIMONIALS;
  localStorage.setItem('sankla_testimonials', JSON.stringify(testimonials));
}

// Orders State
let orders = [];
if (localStorage.getItem('sankla_orders')) {
  orders = JSON.parse(localStorage.getItem('sankla_orders'));
} else {
  orders = [
    { id: "ORD-94812", date: "2026-06-16 11:24:15", items: "Badam Halwa (x1), Pure Ghee Laddu (x2)", total: 1620.00, status: "completed" },
    { id: "ORD-38194", date: "2026-06-17 09:15:30", items: "Bespoke 4-Piece Sankla Box (x1)", total: 540.00, status: "processing" },
    { id: "ORD-73190", date: "2026-06-17 14:02:10", items: "Royal Kaju Katli (x2)", total: 1300.00, status: "pending" }
  ];
  localStorage.setItem('sankla_orders', JSON.stringify(orders));
}


// DOM elements
const productsGridContainer = document.getElementById('products-grid-container');
const categoryFilters = document.getElementById('category-filters');
const searchInput = document.getElementById('search-input');
const cartTrigger = document.getElementById('cart-trigger');
const cartBadge = document.getElementById('cart-badge');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSummaryQty = document.getElementById('cart-summary-qty');
const cartSummaryTotal = document.getElementById('cart-summary-total');
const btnCheckout = document.getElementById('btn-checkout');

// Box Builder elements
const btnSize4 = document.getElementById('btn-size-4');
const btnSize9 = document.getElementById('btn-size-9');
const builderSweetsSelector = document.getElementById('builder-sweets-selector');
const builderBoxGrid = document.getElementById('builder-box-grid');
const builderBoxTotal = document.getElementById('builder-box-total');
const btnAddBoxToCart = document.getElementById('btn-add-box-to-cart');

// Detail Modal elements
const productDetailModal = document.getElementById('product-detail-modal');
const detailModalCloseTrigger = document.getElementById('detail-modal-close-trigger');
const detailModalCloseBtn = document.getElementById('detail-modal-close-btn');
const detailBreadcrumbs = document.getElementById('detail-breadcrumbs');
const detailTitle = document.getElementById('detail-title');
const detailPrice = document.getElementById('detail-price');
const detailRatingStars = document.getElementById('detail-rating-stars');
const detailRatingText = document.getElementById('detail-rating-text');
const detailDescContent = document.getElementById('detail-desc-content');
const detailMainImg = document.getElementById('detail-main-img');
const detailRelatedContainer = document.getElementById('detail-related-container');
const detailReviewsList = document.getElementById('detail-reviews-list');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');
const qtyVal = document.getElementById('qty-val');
const detailAddToCartBtn = document.getElementById('detail-add-to-cart-btn');

// Testimonial Form elements
const reviewForm = document.getElementById('review-form');
const reviewName = document.getElementById('review-name');
const reviewComment = document.getElementById('review-comment');
const reviewStarInput = document.getElementById('review-star-input');
const aggregateRatingVal = document.getElementById('aggregate-rating-val');
const aggregateStars = document.getElementById('aggregate-stars');
const aggregateTotalCount = document.getElementById('aggregate-total-count');

// Toast Notification Container
const toastContainer = document.getElementById('toast-container');

// Checkout Overlay elements
const checkoutOverlay = document.getElementById('checkout-overlay');
const checkoutSuccessCloseBtn = document.getElementById('checkout-success-close-btn');

// Newsletter Subscription Form
const newsletterForm = document.getElementById('newsletter-form');

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  renderBuilderSweets();
  updateBuilderBox();
  renderTestimonials();
  setupEventListeners();
});

// Setup sticky header scroll listener
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Setup Event Listeners
function setupEventListeners() {
  // Mobile menu triggers
  const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');

  if (mobileMenuTrigger && navMenu && navOverlay) {
    mobileMenuTrigger.addEventListener('click', () => {
      navMenu.classList.add('active');
      navOverlay.classList.add('active');
    });
  }

  const closeMenu = () => {
    if (navMenu) navMenu.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
  };

  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
  if (navOverlay) navOverlay.addEventListener('click', closeMenu);

  // Close mobile drawer when clicking navigation link
  if (navMenu) {
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        closeMenu();
      }
    });
  }

  // Category tabs clicks
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-tab')) {
      document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-category');
      renderCatalog();
    }
  });

  // Search inputs changes (desktop & mobile)
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderCatalog();
  });

  const mobileSearchInput = document.getElementById('mobile-search-input');
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Cart drawer toggle
  cartTrigger.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Modal close trigger
  detailModalCloseTrigger.addEventListener('click', closeDetailModal);
  detailModalCloseBtn.addEventListener('click', closeDetailModal);

  // Detail Modal Qty Controls
  qtyMinus.addEventListener('click', () => {
    if (detailQty > 1) {
      detailQty--;
      qtyVal.textContent = detailQty;
    }
  });
  qtyPlus.addEventListener('click', () => {
    detailQty++;
    qtyVal.textContent = detailQty;
  });

  // Detail Modal Add To Cart
  detailAddToCartBtn.addEventListener('click', () => {
    if (activeDetailProductId) {
      const product = PRODUCTS.find(p => String(p.id) === String(activeDetailProductId));
      if (product) {
        addToCart(product, detailQty);
        closeDetailModal();
      }
    }
  });

  // Box Builder Size Selection
  btnSize4.addEventListener('click', () => {
    selectedBoxSize = 4;
    btnSize9.classList.remove('active');
    btnSize4.classList.add('active');
    boxSweets = [];
    updateBuilderBox();
  });

  btnSize9.addEventListener('click', () => {
    selectedBoxSize = 9;
    btnSize4.classList.remove('active');
    btnSize9.classList.add('active');
    boxSweets = [];
    updateBuilderBox();
  });

  // Custom Box Add to Cart
  btnAddBoxToCart.addEventListener('click', addCustomBoxToCart);

  // Testimonials Star Rating Selector
  reviewStarInput.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const rating = parseInt(e.target.getAttribute('data-star'));
      document.querySelectorAll('#review-star-input span').forEach(star => {
        const val = parseInt(star.getAttribute('data-star'));
        if (val <= rating) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
      reviewStarInput.setAttribute('data-selected-rating', rating);
    }
  });

  // Testimonials Form Submit
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = reviewName.value.trim();
    const comment = reviewComment.value.trim();
    const rating = parseInt(reviewStarInput.getAttribute('data-selected-rating') || 5);
    
    if (name && comment) {
      testimonials.unshift({ name, rating, comment });
      renderTestimonials();
      reviewForm.reset();
      // Reset stars
      document.querySelectorAll('#review-star-input span').forEach((star, idx) => {
        if (idx < 4) star.classList.add('active'); // set to 5 by default
      });
      reviewStarInput.setAttribute('data-selected-rating', 5);
      showToast("Thank you for your review!");
    }
  });

  // Checkout confirmation
  btnCheckout.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast("Your cart is empty!");
      return;
    }
    
    // Create new order record for Admin Panel
    const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().slice(0, 19).replace('T', ' '),
      items: cart.map(item => `${item.product.title} (x${item.quantity})`).join(', '),
      total: totalAmount,
      status: 'pending'
    };
    orders.unshift(newOrder);
    localStorage.setItem('sankla_orders', JSON.stringify(orders));

    closeCart();
    checkoutOverlay.classList.add('active');
  });

  checkoutSuccessCloseBtn.addEventListener('click', () => {
    checkoutOverlay.classList.remove('active');
    cart = [];
    updateCartUI();
  });

  // Newsletter Submit
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterForm.reset();
    showToast("Subscribed successfully!");
  });
}

// Render Products Catalog Grid
function renderCatalog() {
  productsGridContainer.innerHTML = '';
  
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No sweets found matching your selection.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= p.rating) {
        starsHtml += '<span class="star">&#9733;</span>';
      } else {
        starsHtml += '<span class="star star-empty">&#9734;</span>';
      }
    }

    card.innerHTML = `
      <div class="product-img-container">
        <img src="${p.img}" alt="${p.title}">
        <span class="product-badge">${p.category}</span>
      </div>
      <div class="product-body">
        <div class="product-rating">
          ${starsHtml}
          <span class="rating-count">(${p.reviewsCount})</span>
        </div>
        <h4 class="product-title" onclick="openProductDetail(${p.id})">${p.title}</h4>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">Rs. ${p.price.toFixed(2)}</span>
          <button class="btn-add-cart" onclick="quickAddToCart(${p.id})" aria-label="Quick add to cart">+</button>
        </div>
      </div>
    `;
    productsGridContainer.appendChild(card);
  });
}

// Render Sweets Selector in custom gift box section
function renderBuilderSweets() {
  builderSweetsSelector.innerHTML = '';
  
  // We allow all sweets except the gift boxes category to be part of the builder
  const list = PRODUCTS.filter(p => p.category !== 'boxes');
  
  list.forEach(p => {
    const item = document.createElement('div');
    item.className = 'builder-sweet-item';
    item.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h5>${p.title}</h5>
      <p>Rs. ${(p.price / 4).toFixed(0)} / pc</p>
    `;
    item.addEventListener('click', () => addSweetToBox(p));
    builderSweetsSelector.appendChild(item);
  });
}

// Handle adding sweet to Custom Box Builder
function addSweetToBox(product) {
  if (boxSweets.length >= selectedBoxSize) {
    showToast(`Your custom box is full! Remove items to make room.`);
    return;
  }
  boxSweets.push(product);
  updateBuilderBox();
  showToast(`Placed ${product.title} in the box compartment.`);
}

// Handle removing sweet from Custom Box Builder
function removeSweetFromBox(idx) {
  boxSweets.splice(idx, 1);
  updateBuilderBox();
}

// Draw/Update Custom Box Visualizer grid
function updateBuilderBox() {
  builderBoxGrid.innerHTML = '';
  
  // Reset grid sizes classes
  builderBoxGrid.className = 'box-grid';
  if (selectedBoxSize === 4) {
    builderBoxGrid.classList.add('grid-4');
  } else {
    builderBoxGrid.classList.add('grid-9');
  }

  // Calculate prices: base box price + individual items priced proportionally
  let basePrice = selectedBoxSize === 4 ? 450.00 : 890.00;
  let sweetsTotal = boxSweets.reduce((total, sweet) => total + (sweet.price / 4), 0);
  let totalPrice = basePrice + sweetsTotal;

  builderBoxTotal.textContent = `Total: Rs. ${totalPrice.toFixed(2)}`;

  // Draw compartments
  for (let i = 0; i < selectedBoxSize; i++) {
    const comp = document.createElement('div');
    comp.className = 'box-compartment';
    
    if (i < boxSweets.length) {
      const sweet = boxSweets[i];
      comp.classList.add('filled');
      comp.innerHTML = `
        <img src="${sweet.img}" alt="${sweet.title}">
        <span class="item-name">${sweet.title}</span>
        <button class="remove-item" onclick="removeSweetFromBox(${i})">Ãƒâ€”</button>
      `;
    } else {
      comp.innerHTML = `
        <span class="compartment-empty">+</span>
      `;
    }
    builderBoxGrid.appendChild(comp);
  }
}

// Add completed Custom Box to main shopping cart
function addCustomBoxToCart() {
  if (boxSweets.length === 0) {
    showToast("Please add at least one sweet to customize your box!");
    return;
  }

  let basePrice = selectedBoxSize === 4 ? 450.00 : 890.00;
  let sweetsTotal = boxSweets.reduce((total, sweet) => total + (sweet.price / 4), 0);
  let totalPrice = basePrice + sweetsTotal;

  const boxProduct = {
    id: `custom-box-${Date.now()}`,
    title: `Bespoke ${selectedBoxSize}-Piece Sankla Box`,
    price: totalPrice,
    img: 'assets/gift_box.png',
    isCustomBox: true,
    contentsDescription: boxSweets.map(s => s.title).join(', ')
  };

  cart.push({
    product: boxProduct,
    quantity: 1
  });

  updateCartUI();
  openCart();
  
  // Reset box builder
  boxSweets = [];
  updateBuilderBox();
  showToast("Added custom gift box to your shopping cart!");
}

// Render Brand Testimonials/Guestbook
function renderTestimonials() {
  const listElement = document.getElementById('aggregate-total-count');
  
  // Calculate average rating
  const totalReviews = testimonials.length;
  const totalScore = testimonials.reduce((acc, t) => acc + t.rating, 0);
  const average = totalReviews > 0 ? (totalScore / totalReviews).toFixed(1) : 5.0;
  
  aggregateRatingVal.textContent = average;
  aggregateTotalCount.textContent = `Based on ${totalReviews} Patron Reviews`;
  
  let starsVal = '';
  const rounded = Math.round(average);
  for (let i = 1; i <= 5; i++) {
    starsVal += i <= rounded ? 'Ã¢Ëœâ€¦' : 'Ã¢Ëœâ€ ';
  }
  aggregateStars.textContent = starsVal;
}

// Detailed product view modal setup
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => String(p.id) === String(productId));
  if (!product) return;

  activeDetailProductId = productId;
  detailQty = 1;
  qtyVal.textContent = detailQty;

  // Breadcrumbs & Texts
  detailBreadcrumbs.textContent = `SANKLA > ${product.category.toUpperCase().replace('-', ' ')} > ${product.title.toUpperCase()}`;
  detailTitle.textContent = product.title;
  detailPrice.textContent = `Rs. ${product.price.toFixed(2)}`;
  detailDescContent.textContent = product.desc;
  detailMainImg.src = product.img;
  detailMainImg.alt = product.title;

  // Fill rating stars
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    starsHtml += i <= product.rating ? '&#9733;' : '&#9734;';
  }
  detailRatingStars.textContent = starsHtml;
  detailRatingText.textContent = `(${product.rating}.0 / 5.0 Rating)`;

  // Inject Compact Reviews list
  const reviews = PRODUCT_REVIEWS[productId] || PRODUCT_REVIEWS[String(productId)] || [
    { name: "Gopal V.", rating: 5, comment: "Excellent flavor, and the sweetness balance is spot on!" },
    { name: "Priya Das", rating: 4, comment: "Freshly made. Beautiful traditional packaging. Recommend completely." }
  ];

  detailReviewsList.innerHTML = '';
  reviews.forEach(r => {
    let revStars = '&#9733;'.repeat(r.rating) + '&#9734;'.repeat(5 - r.rating);
    const revEl = document.createElement('div');
    revEl.className = 'review-item-compact';
    revEl.innerHTML = `
      <div class="header">
        <span class="name">${r.name}</span>
        <span class="stars" style="color: var(--accent);">${revStars}</span>
      </div>
      <div class="body">${r.comment}</div>
    `;
    detailReviewsList.appendChild(revEl);
  });

  // Inject related items - horizontal scroll (excluding current product)
  const related = PRODUCTS.filter(p => String(p.id) !== String(productId)).slice(0, 4);
  detailRelatedContainer.innerHTML = '';
  
  related.forEach(item => {
    const relCard = document.createElement('div');
    relCard.className = 'related-card';
    relCard.style.cursor = 'pointer';
    relCard.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h5>${item.title}</h5>
      <p>Rs. ${item.price.toFixed(0)}</p>
    `;
    // Click on related card switches detail modal to that product!
    relCard.addEventListener('click', () => {
      openProductDetail(item.id);
    });
    detailRelatedContainer.appendChild(relCard);
  });

  productDetailModal.classList.add('active');
}

function closeDetailModal() {
  productDetailModal.classList.remove('active');
  activeDetailProductId = null;
}

// Shopping Cart Actions
function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => String(p.id) === String(productId));
  if (product) {
    addToCart(product, 1);
  }
}

function addToCart(product, qty) {
  const existingItemIndex = cart.findIndex(item => String(item.product.id) === String(product.id));
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += qty;
  } else {
    cart.push({ product, quantity: qty });
  }

  updateCartUI();
  showToast(`Added ${qty} Ãƒâ€” ${product.title} to shopping cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => String(item.product.id) !== String(productId));
  updateCartUI();
  showToast("Removed sweet from shopping cart.");
}

function changeCartQty(productId, delta) {
  const item = cart.find(i => String(i.product.id) === String(productId));
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartUI();
    }
  }
}

function updateCartUI() {
  cartItemsContainer.innerHTML = '';
  
  let totalCount = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg viewBox="0 0 24 24"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.44-.83-.44-.32 0-.64.16-.83.44L6.79 9H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h.08l1.71 6.83c.27.91 1.1 1.57 2.06 1.57h12.28c.95 0 1.78-.66 2.05-1.57L21.92 13h.08c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-4.79zM9 9l3-4.5L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
        <p>Your cart is empty.</p>
      </div>
    `;
    cartBadge.style.display = 'none';
  } else {
    cart.forEach(item => {
      totalCount += item.quantity;
      totalPrice += item.product.price * item.quantity;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      
      const contentsDesc = item.product.isCustomBox 
        ? `<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Contents: ${item.product.contentsDescription}</div>`
        : '';

      itemEl.innerHTML = `
        <img src="${item.product.img}" alt="${item.product.title}">
        <div class="cart-item-details">
          <div>
            <div class="cart-item-name">${item.product.title}</div>
            ${contentsDesc}
          </div>
          <div class="cart-item-price">Rs. ${item.product.price.toFixed(2)}</div>
          <div class="cart-item-qty">
            <button class="cart-item-qty-btn" onclick="changeCartQty('${item.product.id}', -1)">-</button>
            <span class="cart-item-qty-val">${item.quantity}</span>
            <button class="cart-item-qty-btn" onclick="changeCartQty('${item.product.id}', 1)">+</button>
          </div>
        </div>
        <button class="btn-remove-cart-item" onclick="removeFromCart('${item.product.id}')" aria-label="Remove item">Ãƒâ€”</button>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    cartBadge.textContent = totalCount;
    cartBadge.style.display = 'flex';
  }

  cartSummaryQty.textContent = `${totalCount} item${totalCount !== 1 ? 's' : ''}`;
  cartSummaryTotal.textContent = `Rs. ${totalPrice.toFixed(2)}`;
}

function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
}

// Toast Notifications Helper
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>Ã¢Å“Â¨</span> ${message}`;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}
