
// PRODUCTS DATA (30 items)
const PRODUCTS = [
  {
    id: 1,
    title: 'Honda Civic 2022',
    category: 'cars', price: 4500000, img: 'images/civic.jpg', desc: 'Single owner, excellent.'
  },
  { id: 2, title: 'Suzuki Alto 2021', category: 'cars', price: 2150000, img: 'images/suzuki.jpg', desc: 'City friendly, low mileage.' },
  { id: 3, title: 'Yamaha YBR 125', category: 'bikes', price: 380000, img: 'images/yamaha.jpg', desc: 'Low mileage.' },
  { id: 5, title: 'Samsung S24 Ultra', category: 'mobiles', price: 490000, img: 'images/smasung.jpg', desc: 'Box & accessories.' },
  { id: 6, title: 'Dell XPS 13', category: 'laptops', price: 310000, img: 'images/dell.jpg', desc: 'Lightweight, powerful.' },
  { id: 7, title: 'MacBook Air M3', category: 'laptops', price: 370000, img: 'images/mac.jpg', desc: 'M3 chip.' },
  { id: 8, title: 'Wooden Sofa Set', category: 'furniture', price: 95000, img: 'images/sofa.jpg', desc: '3-seater.' },
  { id: 9, title: 'Dining Table 6-Seater', category: 'furniture', price: 85000, img: 'images/dinner.jpg', desc: 'Solid wood.' },
  { id: 10, title: 'Gaming PC RTX 4090', category: 'computers', price: 650000, img: 'images/computer.jpg', desc: 'Ready for 4K.' },
  { id: 11, title: 'Apple Watch Ultra 2', category: 'gadgets', price: 250000, img: 'images/watchapple.jpg', desc: 'Like new.' },
  { id: 12, title: 'Gold Necklace', category: 'jewelry', price: 180000, img: 'images/goldpandent.jpg', desc: '18k plated.' },
  { id: 13, title: "Men's Leather Jacket", category: 'fashion', price: 15000, img: 'images/jacket.jpg', desc: 'Size L.' },
  { id: 14, title: 'Ladies Handbag', category: 'fashion', price: 8500, img: 'images/handbag.jpg', desc: 'Genuine leather.' },
  { id: 15, title: 'German Shepherd Puppy', category: 'pets', price: 60000, img: 'images/shaphered.jpg', desc: 'Vaccinated.' },
  { id: 16, title: 'Macaroni Pasta 5kg', category: 'groceries', price: 2500, img: 'images/pasta.jpg', desc: 'Sealed pack.' },
  { id: 17, title: 'Realme Buds Air 3', category: 'gadgets', price: 17000, img: 'images/air-buds.jpg', desc: 'Wireless earbuds.' },
  { id: 18, title: 'Canon EOS 90D', category: 'cameras', price: 270000, img: 'images/camera.jpg', desc: 'With lens kit.' },
  { id: 19, title: 'Electric Iron', category: 'appliances', price: 7000, img: 'images/iron.jpg', desc: 'Steam iron.' },
  { id: 20, title: 'LG Smart TV 55"', category: 'electronics', price: 165000, img: 'images/lcd.jpg', desc: 'Smart LED TV.' },
  { id: 21, title: 'Nike Air Jordan', category: 'fashion', price: 22000, img: 'images/nike.jpg', desc: 'Size 42.' },
  { id: 22, title: 'Office Chair Ergonomic', category: 'furniture', price: 12500, img: 'images/chair.jpg', desc: 'Lumbar support.' },
  { id: 23, title: 'Projector 4K', category: 'electronics', price: 98000, img: 'images/computer.jpg', desc: 'Home cinema.' },
  { id: 24, title: 'Camping Tent 4P', category: 'outdoors', price: 7200, img: 'images/tent.jpg', desc: 'Water resistant.' },
  { id: 25, title: 'Fitness Treadmill', category: 'fitness', price: 65000, img: 'images/fitness.jpg', desc: 'Foldable.' },
  { id: 26, title: 'Painting (Canvas)', category: 'art', price: 18000, img: 'images/painting.jpg', desc: 'Original art.' },
  { id: 27, title: 'Pet Supplies Bundle', category: 'pets', price: 5200, img: 'images/cat.png', desc: 'Food+toys.' },
  { id: 28, title: 'Drone with Camera', category: 'gadgets', price: 88000, img: 'images/camera.jpg', desc: '4K stabilized.' },
  { id: 29, title: 'Vintage Bicycle', category: 'collectibles', price: 24000, img: 'images/cycle.jpg', desc: 'Fully restored.' },
  { id: 30, title: 'PS5 Console', category: 'gaming', price: 250000, img: 'images/ps5.jpg', desc: 'With 2 controllers.' }
];

// Populate category filter
const catSet = new Set(PRODUCTS.map(p => p.category));
const categoryFilter = document.getElementById('categoryFilter');
catSet.forEach(c => {
  const opt = document.createElement('option');
  opt.value = c;
  opt.textContent = c.charAt(0).toUpperCase() + c.slice(1);
  categoryFilter.appendChild(opt);
});

const grid = document.getElementById('grid');

function formatPrice(n) {
  if (typeof n === 'number') return n.toLocaleString();
  return n;
}

function createCard(p) {
  const col = document.createElement('div'); 
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
  col.innerHTML = `
        <div class="card product">
          <div class="product-media">
            <img src="${p.img}" alt="${p.title}" loading="lazy">
          </div>
          <div class="p-3 product-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="mb-1">${p.title}</h6>
                <div class="meta-muted small">${p.desc}</div>
              </div>
              <div class="text-end">
                <div class="badge-cat">${p.category}</div>
                <div class="price mt-2">PKR ${formatPrice(p.price)}</div>
              </div>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-light flex-grow-1 view-btn">View</button>
              <button class="btn btn-sm" style="background:var(--gold);color:#0b0a1a;border-radius:999px;padding:6px 10px">Buy</button>
            </div>
          </div>
        </div>`;
  return col;
}

function render(list) {
  grid.innerHTML = '';
  list.forEach(p => grid.appendChild(createCard(p)));
}

// initial render
render(PRODUCTS);

// Search & filters
const searchInput = document.getElementById('globalSearch');
const sortSelect = document.getElementById('sortSelect');

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const sort = sortSelect.value;
  let out = PRODUCTS.filter(p => {
    const matchesQ = q === '' || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    const matchesCat = cat === 'all' || p.category === cat;
    return matchesQ && matchesCat;
  });
  if (sort === 'lowtohigh') out.sort((a, b) => a.price - b.price);
  if (sort === 'hightolow') out.sort((a, b) => b.price - a.price);
  render(out);
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
function setLightTheme(on) {
  if (on) { document.body.classList.add('light-theme'); themeToggle.textContent = 'Light'; }
  else { document.body.classList.remove('light-theme'); themeToggle.textContent = 'Dark'; }
}
// initialize to dark (default)
setLightTheme(false);
themeToggle.addEventListener('click', () => setLightTheme(!document.body.classList.contains('light-theme')));

// contact form demo
document.getElementById('contactForm').addEventListener('submit', function (e) { e.preventDefault(); alert('Message sent (demo).'); this.reset(); });

// year
document.getElementById('year').innerText = new Date().getFullYear();
