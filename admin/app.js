// ================================================================
// Sankla Admin Portal - Standalone JavaScript
// Reads/writes data from the same localStorage keys as main app
// ================================================================

// ---- CREDENTIALS ----
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

// ---- STOCK THRESHOLDS ----
const STOCK_LOW_THRESHOLD = 10;   // ≤ 10 = Low Stock (orange)
const STOCK_CRITICAL = 0;          // 0   = Out of Stock (red)

// ---- DEFAULT DATA (mirrors main app defaults) ----
const DEFAULT_PRODUCTS = [
  { id: 1,  title: 'Badam Halwa',                category: 'ghee',        price: 720.00,  rating: 5, reviewsCount: 113, stock: 48, img: '../assets/badam_halwa.png',    desc: 'Badam Halwa is a rich, decadent, nutty South Indian style melt-in-the-mouth halwa made mainly with 3 ingredients - blanched almonds, ghee (clarified butter) and sugar.' },
  { id: 2,  title: 'Svastha Ananya',             category: 'dry-fruits',  price: 720.00,  rating: 4, reviewsCount: 42,  stock: 22, img: '../assets/hero_sweets.png',    desc: 'Premium assortment of natural dates, walnuts, figs, and premium almonds compacted into sugar-free nutrient-dense energy bites.' },
  { id: 3,  title: 'Shringara Malhar',           category: 'traditional', price: 231.00,  rating: 4, reviewsCount: 18,  stock: 60, img: '../assets/motichoor_laddu.png',desc: 'A traditional delicacy crafted with fine gram flour pearls, fried to golden perfection in pure desi ghee, infused with saffron and green cardamom.' },
  { id: 4,  title: 'Sundara Malhar',             category: 'ghee',        price: 320.00,  rating: 5, reviewsCount: 29,  stock:  8, img: '../assets/kaju_katli.png',     desc: 'Master-crafted recipe of rich cashews ground to perfection, baked into thin diamonds, and layered with pure edible silver sheets.' },
  { id: 5,  title: 'Shubha Malhar',              category: 'traditional', price: 1109.00, rating: 5, reviewsCount: 84,  stock: 35, img: '../assets/hero_sweets.png',    desc: 'Extraordinary collection of milk pedas and saffron malhai sandesh, celebrating the grand tradition of royal celebrations.' },
  { id: 6,  title: 'Royal Kaju Katli',           category: 'dry-fruits',  price: 650.00,  rating: 5, reviewsCount: 92,  stock: 55, img: '../assets/kaju_katli.png',     desc: 'Diamond-shaped cashew fudge sweets layered neatly, decorated with edible silver leaf (varq), made from high-grade Goan cashews.' },
  { id: 7,  title: 'Pure Ghee Laddu',            category: 'ghee',        price: 450.00,  rating: 5, reviewsCount: 77,  stock: 42, img: '../assets/motichoor_laddu.png',desc: 'Classic golden-orange Motichoor Laddus made with organic gram flour pearls, rich cardamom seeds, and roasted pistachios.' },
  { id: 8,  title: 'Royal Sankla Box',           category: 'boxes',       price: 1350.00, rating: 5, reviewsCount: 120, stock: 18, img: '../assets/gift_box.png',       desc: 'Elegantly designed Indian sweets gift box with gold filigree patterns containing our best assorted gourmet sweets.' },
  { id: 9,  title: 'Royal Ghee Mysore Pak',      category: 'ghee',        price: 680.00,  rating: 5, reviewsCount: 154, stock: 72, img: '../assets/mysore_pak.png',     desc: "Sankla's signature Mysore Pak crafted with premium gram flour, pure caramelized desi ghee, and organic sugar." },
  { id: 10, title: 'Bellam Pootharekulu',        category: 'traditional', price: 540.00,  rating: 5, reviewsCount: 98,  stock:  5, img: '../assets/pootharekulu.png',   desc: 'Traditional Andhra delicacy with wafer-thin layers of rice starch filled with organic jaggery and crushed dry fruits.' },
  { id: 11, title: 'Kaju Pista Roll',            category: 'dry-fruits',  price: 820.00,  rating: 4, reviewsCount: 67,  stock: 30, img: '../assets/kaju_pista_roll.png',desc: 'Premium dry-fruit sweet layered with rich cashew paste on the outside and a vibrant pistachio filling on the inside.' },
  { id: 12, title: 'Traditional Jaggery Ariselu',category: 'traditional', price: 420.00,  rating: 5, reviewsCount: 112, stock: 90, img: '../assets/ariselu.png',        desc: 'Authentic South Indian festive sweet made of rice flour and organic dark jaggery, deep-fried in pure desi ghee.' },
  { id: 13, title: 'Premium Kaju Anjeer Roll',   category: 'dry-fruits',  price: 850.00,  rating: 5, reviewsCount: 89,  stock:  0, img: '../assets/kaju_anjeer_roll.png',desc: 'Luxurious confection featuring soft cashew paste wrapped around a rich, chewy center of premium imported figs.' },
  { id: 14, title: 'Classic Milk Kalakand',      category: 'traditional', price: 520.00,  rating: 4, reviewsCount: 74,  stock: 25, img: '../assets/kalakand.png',       desc: 'Timeless milk sweet with grainy, moist texture, handcrafted by reducing pure whole milk and garnished with saffron.' },
  { id: 15, title: 'Bellam Sunnundalu',          category: 'traditional', price: 460.00,  rating: 5, reviewsCount: 105, stock: 65, img: '../assets/sunnundalu.png',     desc: 'Highly nutritious Andhra laddu made from roasted black gram flour, organic jaggery, and warm desi ghee.' },
  { id: 16, title: 'Royal Kesar Badusha',        category: 'ghee',        price: 480.00,  rating: 4, reviewsCount: 63,  stock:  9, img: '../assets/badusha.png',        desc: 'Flaky, multi-layered sweet pastry fried in pure ghee and soaked in saffron and rose-infused sugar syrup.' }
];

const DEFAULT_ORDERS = [
  { id: "ORD-94812", date: "2026-06-16 11:24:15", items: "Badam Halwa (x1), Pure Ghee Laddu (x2)", total: 1620.00, status: "completed" },
  { id: "ORD-38194", date: "2026-06-17 09:15:30", items: "Bespoke 4-Piece Sankla Box (x1)", total: 540.00, status: "processing" },
  { id: "ORD-73190", date: "2026-06-17 14:02:10", items: "Royal Kaju Katli (x2)", total: 1300.00, status: "pending" }
];

const DEFAULT_TESTIMONIALS = [
  { name: "Meera Bai", rating: 5, comment: "Sankla sweets are an absolute masterpiece. Our family weddings are incomplete without their dry fruit boxes!" },
  { name: "Vikram Malhotra", rating: 5, comment: "The custom box builder is brilliant. Created a tailored box of Badam Halwa and Laddus for Diwali. Highly recommended!" },
  { name: "Aditi Sharma", rating: 4, comment: "Amazing freshness and beautiful box presentation. The Badam Halwa melts like absolute butter." }
];

// ---- LOAD DATA FROM LOCALSTORAGE ----
function loadProducts() {
  const raw = localStorage.getItem('sankla_products');
  if (raw) {
    const prods = JSON.parse(raw).map(p => ({
      ...p,
      img: p.img.startsWith('../') ? p.img : '../' + p.img,
      stock: (p.stock !== undefined && p.stock !== null) ? Number(p.stock) : 50
    }));
    return prods;
  }
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  const forStore = products.map(p => ({
    ...p,
    img: p.img.startsWith('../assets/') ? p.img.replace('../assets/', 'assets/') : p.img
  }));
  localStorage.setItem('sankla_products', JSON.stringify(forStore));
}

function loadOrders() {
  const raw = localStorage.getItem('sankla_orders');
  return raw ? JSON.parse(raw) : DEFAULT_ORDERS;
}

function saveOrders(orders) {
  localStorage.setItem('sankla_orders', JSON.stringify(orders));
}

function loadTestimonials() {
  const raw = localStorage.getItem('sankla_testimonials');
  return raw ? JSON.parse(raw) : DEFAULT_TESTIMONIALS;
}

function saveTestimonials(testimonials) {
  localStorage.setItem('sankla_testimonials', JSON.stringify(testimonials));
}

function loadReviews() {
  const raw = localStorage.getItem('sankla_reviews');
  return raw ? JSON.parse(raw) : {};
}

function saveReviews(reviews) {
  localStorage.setItem('sankla_reviews', JSON.stringify(reviews));
}

// ---- STOCK HELPERS ----
function getStockStatus(stock) {
  if (stock <= STOCK_CRITICAL) return 'out-of-stock';
  if (stock <= STOCK_LOW_THRESHOLD) return 'low-stock';
  return 'in-stock';
}

function getStockBadgeHtml(stock) {
  const status = getStockStatus(stock);
  const labels = { 'in-stock': 'In Stock', 'low-stock': 'Low Stock', 'out-of-stock': 'Out of Stock' };
  return `
    <div class="stock-cell">
      <span class="stock-badge ${status}">${labels[status]}</span>
      <span class="stock-number">${stock} units</span>
    </div>`;
}

function getStockBarHtml(stock, maxStock = 100) {
  const status = getStockStatus(stock);
  const pct = Math.min(100, Math.round((stock / maxStock) * 100));
  return `
    <div class="stock-bar-wrapper">
      <div class="stock-bar">
        <div class="stock-bar-fill ${status}" style="width:${pct}%"></div>
      </div>
      <span class="stock-bar-label">${stock} / ${maxStock}</span>
    </div>`;
}

function getLowStockProducts() {
  return PRODUCTS.filter(p => p.stock <= STOCK_LOW_THRESHOLD);
}

function updateLowStockIndicators() {
  const lowItems = getLowStockProducts();
  const count = lowItems.length;

  // Dashboard stat
  const statEl = document.getElementById('stat-low-stock');
  if (statEl) {
    statEl.textContent = count;
    statEl.style.color = count > 0 ? '#fa5252' : 'var(--primary)';
  }

  // Alert banner
  const alertEl = document.getElementById('low-stock-alert');
  if (alertEl) {
    if (count > 0) {
      alertEl.style.display = 'flex';
      const outOfStock = lowItems.filter(p => p.stock === 0).length;
      const names = lowItems.slice(0, 3).map(p => p.title).join(', ');
      document.getElementById('low-stock-alert-text').textContent =
        `${count} item(s) low/out of stock: ${names}${lowItems.length > 3 ? '...' : ''}`;
    } else {
      alertEl.style.display = 'none';
    }
  }

  // Sidebar badge
  const badge = document.getElementById('nav-low-stock-badge');
  if (badge) {
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
    badge.textContent = count > 9 ? '9+' : count;
  }
}

// ---- STATE ----
let PRODUCTS = [];
let orders = [];
let testimonials = [];
let PRODUCT_REVIEWS = {};
let currentTab = 'dashboard';
let invSearchQuery = '';

// ---- DOM REFS ----
const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const btnLogout = document.getElementById('btn-logout');
const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');
const sidebar = document.getElementById('dash-sidebar');
const toastContainer = document.getElementById('toast-container');

const tabPanes = document.querySelectorAll('.tab-pane');
const navItems = document.querySelectorAll('.nav-item');

const productModal = document.getElementById('product-modal');
const productForm = document.getElementById('product-form');
const btnAddProduct = document.getElementById('btn-add-product');
const btnCloseProductModal = document.getElementById('btn-close-product-modal');
const productModalTitle = document.getElementById('product-modal-title');

// ---- INIT ----
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('admin_logged_in') === 'true') {
    showDashboard();
  } else {
    showLogin();
  }
  setupEvents();
});

function setupEvents() {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      localStorage.setItem('admin_logged_in', 'true');
      loginError.style.display = 'none';
      showDashboard();
      showToast('✦ Welcome back, Admin!');
    } else {
      loginError.style.display = 'block';
    }
  });

  btnLogout.addEventListener('click', () => {
    localStorage.removeItem('admin_logged_in');
    showLogin();
    showToast('Logged out successfully.');
  });

  btnSidebarToggle.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.toggle('mobile-open');
    } else {
      sidebar.classList.toggle('collapsed');
    }
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  btnAddProduct.addEventListener('click', () => openProductModal(null));

  btnCloseProductModal.addEventListener('click', closeProductModal);
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
  });

  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleProductSubmit();
  });
}

// ---- AUTH ----
function showLogin() {
  loginScreen.style.display = 'flex';
  dashboard.style.display = 'none';
}

function showDashboard() {
  loginScreen.style.display = 'none';
  dashboard.style.display = 'flex';
  loadAllData();
  switchTab('dashboard');
}

function loadAllData() {
  PRODUCTS = loadProducts();
  orders = loadOrders();
  testimonials = loadTestimonials();
  PRODUCT_REVIEWS = loadReviews();
}

// ---- TAB SWITCHING ----
window.switchTab = function(tab) {
  currentTab = tab;

  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-tab') === tab);
  });
  tabPanes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tab}`);
  });

  if (tab === 'dashboard')  renderDashboard();
  else if (tab === 'products')   renderProductsTable();
  else if (tab === 'orders')     renderOrdersTable();
  else if (tab === 'reviews')    renderReviewsTable();
  else if (tab === 'inventory')  renderInventoryTab();

  if (window.innerWidth <= 900) sidebar.classList.remove('mobile-open');
};

// ---- DASHBOARD ----
function renderDashboard() {
  const completedOrders = orders.filter(o => o.status === 'completed');
  const revenue = completedOrders.reduce((sum, o) => sum + o.total, 0);
  document.getElementById('stat-revenue').textContent = `Rs. ${revenue.toFixed(2)}`;
  document.getElementById('stat-orders').textContent = orders.length;
  document.getElementById('stat-products').textContent = PRODUCTS.length;

  const avgScore = testimonials.length > 0
    ? (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)
    : '5.0';
  document.getElementById('stat-rating').textContent = `${avgScore} ★`;

  updateLowStockIndicators();

  // Recent orders
  const recentTbody = document.getElementById('recent-orders-tbody');
  recentTbody.innerHTML = '';
  const recent = orders.slice(0, 5);
  if (recent.length === 0) {
    recentTbody.innerHTML = `<tr><td colspan="5" class="empty-state">No orders yet.</td></tr>`;
  } else {
    recent.forEach(o => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:700; font-family:monospace;">${o.id}</td>
        <td>${o.date}</td>
        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${o.items}">${o.items}</td>
        <td style="font-weight:700; color:var(--primary)">Rs. ${o.total.toFixed(2)}</td>
        <td><span class="status-badge ${o.status}">${o.status}</span></td>
      `;
      recentTbody.appendChild(tr);
    });
  }
}

// ---- PRODUCTS TABLE ----
function renderProductsTable() {
  const tbody = document.getElementById('products-tbody');
  tbody.innerHTML = '';

  if (PRODUCTS.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-state">No products found.</td></tr>`;
    return;
  }

  PRODUCTS.forEach(p => {
    const stock = p.stock !== undefined ? p.stock : 50;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${p.img}" alt="${p.title}" onerror="this.src='../assets/hero_sweets.png'"></td>
      <td style="font-weight:600;">${p.title}</td>
      <td><span class="cat-badge">${p.category}</span></td>
      <td style="font-weight:700; color:var(--primary)">Rs. ${p.price.toFixed(2)}</td>
      <td>${getStockBadgeHtml(stock)}</td>
      <td style="color:var(--accent)">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)}</td>
      <td>
        <button class="btn-action edit" onclick="adminEditProduct(${p.id})">Edit</button>
        <button class="btn-action delete" onclick="adminDeleteProduct(${p.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ---- INVENTORY TAB ----
function renderInventoryTab() {
  renderInventorySummary();
  renderInventoryTable(invSearchQuery);

  // Live search
  const invSearch = document.getElementById('inv-search');
  if (invSearch) {
    invSearch.value = invSearchQuery;
    invSearch.oninput = (e) => {
      invSearchQuery = e.target.value.toLowerCase().trim();
      renderInventoryTable(invSearchQuery);
    };
  }
}

function renderInventorySummary() {
  const summaryEl = document.getElementById('inv-summary-row');
  if (!summaryEl) return;

  const inStock  = PRODUCTS.filter(p => (p.stock || 0) > STOCK_LOW_THRESHOLD).length;
  const lowStock = PRODUCTS.filter(p => (p.stock || 0) > 0 && (p.stock || 0) <= STOCK_LOW_THRESHOLD).length;
  const outStock = PRODUCTS.filter(p => (p.stock || 0) === 0).length;
  const totalUnits = PRODUCTS.reduce((sum, p) => sum + (p.stock || 0), 0);

  summaryEl.innerHTML = `
    <div class="inv-summary-card">
      <div class="inv-sum-icon" style="background:#e6f9ee; color:#2b8a3e;">✅</div>
      <div class="inv-sum-body">
        <div class="inv-sum-val">${inStock}</div>
        <div class="inv-sum-label">In Stock Products</div>
      </div>
    </div>
    <div class="inv-summary-card">
      <div class="inv-sum-icon" style="background:#fff3bf; color:#a47225;">⚠️</div>
      <div class="inv-sum-body">
        <div class="inv-sum-val" style="color:#a47225;">${lowStock}</div>
        <div class="inv-sum-label">Low Stock</div>
      </div>
    </div>
    <div class="inv-summary-card">
      <div class="inv-sum-icon" style="background:#ffe3e3; color:#c92a2a;">🚫</div>
      <div class="inv-sum-body">
        <div class="inv-sum-val" style="color:#c92a2a;">${outStock}</div>
        <div class="inv-sum-label">Out of Stock</div>
      </div>
    </div>
    <div class="inv-summary-card">
      <div class="inv-sum-icon" style="background:#e8f0ff; color:#3b5bdb;">📦</div>
      <div class="inv-sum-body">
        <div class="inv-sum-val" style="color:#3b5bdb;">${totalUnits}</div>
        <div class="inv-sum-label">Total Units</div>
      </div>
    </div>
  `;
}

function renderInventoryTable(filter = '') {
  const tbody = document.getElementById('inventory-tbody');
  if (!tbody) return;

  const maxStock = Math.max(...PRODUCTS.map(p => p.stock || 0), 100);

  const filtered = filter
    ? PRODUCTS.filter(p => p.title.toLowerCase().includes(filter) || p.category.toLowerCase().includes(filter))
    : PRODUCTS;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-state">No products match your search.</td></tr>`;
    return;
  }

  // Sort: out of stock first, then low stock, then in stock
  const sorted = [...filtered].sort((a, b) => {
    const sa = getStockStatus(a.stock || 0);
    const sb = getStockStatus(b.stock || 0);
    const order = { 'out-of-stock': 0, 'low-stock': 1, 'in-stock': 2 };
    return order[sa] - order[sb];
  });

  tbody.innerHTML = '';
  sorted.forEach(p => {
    const stock = p.stock !== undefined ? p.stock : 50;
    const status = getStockStatus(stock);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${p.img}" alt="${p.title}" style="width:36px;height:36px;object-fit:cover;border-radius:6px;border:1px solid var(--border-gold);" onerror="this.src='../assets/hero_sweets.png'">
          <span style="font-weight:600;">${p.title}</span>
        </div>
      </td>
      <td><span class="cat-badge">${p.category}</span></td>
      <td style="font-weight:700; color:var(--primary)">Rs. ${p.price.toFixed(2)}</td>
      <td>${getStockBarHtml(stock, maxStock)}</td>
      <td>
        <div class="stock-qty-control">
          <button class="stock-qty-btn" onclick="adjustStock(${p.id}, -5)">−5</button>
          <button class="stock-qty-btn" onclick="adjustStock(${p.id}, -1)">−1</button>
          <input type="number" class="stock-qty-input" id="stock-input-${p.id}"
            value="${stock}" min="0" max="9999"
            onchange="setStock(${p.id}, this.value)">
          <button class="stock-qty-btn" onclick="adjustStock(${p.id}, 1)">+1</button>
          <button class="stock-qty-btn" onclick="adjustStock(${p.id}, 10)">+10</button>
        </div>
      </td>
      <td>
        <button class="btn-action edit" onclick="saveStockFromInput(${p.id})" title="Save quantity">💾 Save</button>
        ${stock <= STOCK_LOW_THRESHOLD ? `<button class="btn-action status" onclick="restockProduct(${p.id})" title="Restock to 50 units" style="margin-top:4px;">Restock</button>` : ''}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.adjustStock = function(id, delta) {
  const idx = PRODUCTS.findIndex(p => String(p.id) === String(id));
  if (idx === -1) return;
  const newVal = Math.max(0, (PRODUCTS[idx].stock || 0) + delta);
  PRODUCTS[idx].stock = newVal;

  // Live update input
  const input = document.getElementById(`stock-input-${id}`);
  if (input) input.value = newVal;

  saveAndRefreshInventory(`Stock updated for ${PRODUCTS[idx].title}.`);
};

window.setStock = function(id, value) {
  const idx = PRODUCTS.findIndex(p => String(p.id) === String(id));
  if (idx === -1) return;
  PRODUCTS[idx].stock = Math.max(0, parseInt(value) || 0);
  saveAndRefreshInventory();
};

window.saveStockFromInput = function(id) {
  const input = document.getElementById(`stock-input-${id}`);
  if (!input) return;
  const idx = PRODUCTS.findIndex(p => String(p.id) === String(id));
  if (idx === -1) return;
  PRODUCTS[idx].stock = Math.max(0, parseInt(input.value) || 0);
  saveAndRefreshInventory(`✦ Stock saved: ${PRODUCTS[idx].title} → ${PRODUCTS[idx].stock} units`);
};

window.restockProduct = function(id) {
  const idx = PRODUCTS.findIndex(p => String(p.id) === String(id));
  if (idx === -1) return;
  PRODUCTS[idx].stock = 50;
  const input = document.getElementById(`stock-input-${id}`);
  if (input) input.value = 50;
  saveAndRefreshInventory(`✦ Restocked: ${PRODUCTS[idx].title} → 50 units`);
};

function saveAndRefreshInventory(toastMsg = null) {
  saveProducts(PRODUCTS);
  updateLowStockIndicators();
  renderInventorySummary();
  renderInventoryTable(invSearchQuery);
  if (toastMsg) showToast(toastMsg);
}

// ---- ORDERS TABLE ----
function renderOrdersTable() {
  const tbody = document.getElementById('orders-tbody');
  tbody.innerHTML = '';

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-state">No orders recorded yet.</td></tr>`;
    return;
  }

  orders.forEach(o => {
    const labels = { pending: 'Process', processing: 'Complete', completed: 'Re-open' };
    const nextLabel = labels[o.status] || 'Process';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight:700; font-family:monospace;">${o.id}</td>
      <td>${o.date}</td>
      <td style="max-width:250px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${o.items}">${o.items}</td>
      <td style="font-weight:700; color:var(--primary)">Rs. ${o.total.toFixed(2)}</td>
      <td><span class="status-badge ${o.status}">${o.status}</span></td>
      <td><button class="btn-action status" onclick="adminChangeOrderStatus('${o.id}')">${nextLabel}</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// ---- REVIEWS TABLE ----
function renderReviewsTable() {
  const tbody = document.getElementById('reviews-tbody');
  tbody.innerHTML = '';

  let list = [];
  testimonials.forEach((t, idx) => {
    list.push({ type: 'Testimonial', author: t.name, rating: t.rating, comment: t.comment, deleteAction: `adminDeleteReview('testimonial', ${idx})` });
  });
  Object.keys(PRODUCT_REVIEWS).forEach(prodId => {
    const prod = PRODUCTS.find(p => String(p.id) === String(prodId));
    const prodName = prod ? prod.title : `Product #${prodId}`;
    (PRODUCT_REVIEWS[prodId] || []).forEach((r, idx) => {
      list.push({ type: `Product: ${prodName}`, author: r.name, rating: r.rating, comment: r.comment, deleteAction: `adminDeleteReview('product', ${idx}, ${prodId})` });
    });
  });

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="empty-state">No reviews posted yet.</td></tr>`;
    return;
  }
  list.forEach(r => {
    const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span style="font-size:0.78rem;font-weight:700;text-transform:uppercase;color:var(--accent-dark)">${r.type}</span></td>
      <td style="font-weight:600">${r.author}</td>
      <td style="color:var(--accent)">${stars}</td>
      <td style="max-width:300px; word-wrap:break-word;">${r.comment}</td>
      <td><button class="btn-action delete" onclick="${r.deleteAction}">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// ---- PRODUCT MODAL ----
function openProductModal(product) {
  productModal.style.display = 'flex';
  productForm.reset();
  document.getElementById('product-id').value = '';
  document.getElementById('product-img-custom').value = '';
  document.getElementById('product-stock').value = 50;

  if (product) {
    productModalTitle.textContent = 'Edit Sweet';
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-title').value = product.title;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-stock').value = product.stock !== undefined ? product.stock : 50;
    document.getElementById('product-desc').value = product.desc;

    const imgVal = product.img;
    const selectEl = document.getElementById('product-img-select');
    const isStandard = Array.from(selectEl.options).some(opt => opt.value === imgVal);
    if (isStandard) {
      selectEl.value = imgVal;
    } else {
      document.getElementById('product-img-custom').value = imgVal;
    }
  } else {
    productModalTitle.textContent = 'Add New Sweet';
  }
}

function closeProductModal() {
  productModal.style.display = 'none';
}

function handleProductSubmit() {
  const id = document.getElementById('product-id').value;
  const title = document.getElementById('product-title').value.trim();
  const category = document.getElementById('product-category').value;
  const price = parseFloat(document.getElementById('product-price').value);
  const stock = Math.max(0, parseInt(document.getElementById('product-stock').value) || 0);
  const desc = document.getElementById('product-desc').value.trim();
  const customImg = document.getElementById('product-img-custom').value.trim();
  const selectImg = document.getElementById('product-img-select').value;
  const img = customImg || selectImg;

  if (id) {
    const idx = PRODUCTS.findIndex(p => String(p.id) === String(id));
    if (idx > -1) {
      PRODUCTS[idx] = { ...PRODUCTS[idx], title, category, price, stock, desc, img };
      showToast(`✦ Updated: ${title} (Stock: ${stock})`);
    }
  } else {
    const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;
    PRODUCTS.push({ id: newId, title, category, price, rating: 5, reviewsCount: 0, stock, img, desc });
    PRODUCT_REVIEWS[newId] = [];
    saveReviews(PRODUCT_REVIEWS);
    showToast(`✦ Added: ${title} (Stock: ${stock})`);
  }

  saveProducts(PRODUCTS);
  updateLowStockIndicators();
  closeProductModal();
  renderProductsTable();
}

window.adminEditProduct = function(id) {
  const product = PRODUCTS.find(p => String(p.id) === String(id));
  if (product) openProductModal(product);
};

window.adminDeleteProduct = function(id) {
  const product = PRODUCTS.find(p => String(p.id) === String(id));
  if (!product) return;
  if (confirm(`Delete "${product.title}" from the catalog?`)) {
    PRODUCTS = PRODUCTS.filter(p => String(p.id) !== String(id));
    delete PRODUCT_REVIEWS[id];
    saveProducts(PRODUCTS);
    saveReviews(PRODUCT_REVIEWS);
    updateLowStockIndicators();
    showToast(`Removed: ${product.title}`);
    renderProductsTable();
  }
};

window.adminChangeOrderStatus = function(orderId) {
  const idx = orders.findIndex(o => String(o.id) === String(orderId));
  if (idx > -1) {
    const cycle = { pending: 'processing', processing: 'completed', completed: 'pending' };
    orders[idx].status = cycle[orders[idx].status] || 'pending';
    saveOrders(orders);
    showToast(`Order ${orderId} → ${orders[idx].status}`);
    renderOrdersTable();
    if (currentTab === 'dashboard') renderDashboard();
  }
};

window.adminDeleteReview = function(type, index, productId) {
  if (!confirm('Delete this review permanently?')) return;
  if (type === 'testimonial') {
    testimonials.splice(index, 1);
    saveTestimonials(testimonials);
    showToast('Testimonial deleted.');
  } else if (type === 'product') {
    const revs = PRODUCT_REVIEWS[productId] || [];
    revs.splice(index, 1);
    PRODUCT_REVIEWS[productId] = revs;
    saveReviews(PRODUCT_REVIEWS);
    showToast('Product review deleted.');
  }
  renderReviewsTable();
};

// ---- TOAST ----
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s, transform 0.4s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
