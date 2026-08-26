"use strict";

const cars = [
  {
    brand: "Hyundai",
    model: "ix35",
    price: 14500,
    km: 145000,
    topSpeed: 184,
    fuel: 7.5,
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRVrF25awg9rgo2UPqmDGvGnmuUffKFUYhyxJsxU7d3hPE9yCQdj3GOWb5lS7obPvmlgRfIjihspCM3DbRAXUc3uc2S425g7rWG",
    inStock: true
  },
  {
    brand: "BMW",
    model: "M5 Competition",
    price: 89000,
    km: 42000,
    topSpeed: 305,
    fuel: 10.8,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600",
    inStock: true
  },
  {
    brand: "Mercedes-AMG",
    model: "GT 63 S",
    price: 135000,
    km: 18000,
    topSpeed: 315,
    fuel: 12.5,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600",
    inStock: true
  },
  {
    brand: "Ford",
    model: "Expedition",
    price: 48000,
    km: 65000,
    topSpeed: 190,
    fuel: 11.2,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600",
    inStock: true
  },
  {
    brand: "Mercedes-Benz",
    model: "GLE Coupe",
    price: 72000,
    km: 32000,
    topSpeed: 225,
    fuel: 8.9,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600",
    inStock: true
  },
  {
    brand: "Toyota",
    model: "Camry TRD",
    price: 29500,
    km: 48000,
    topSpeed: 215,
    fuel: 8.4,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600",
    inStock: true
  },
  {
    brand: "Volkswagen",
    model: "Polo R-Line",
    price: 19800,
    km: 28000,
    topSpeed: 200,
    fuel: 5.4,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
    inStock: true
  },
  {
    brand: "Chevrolet",
    model: "Camaro SS",
    price: 44000,
    km: 25000,
    topSpeed: 290,
    fuel: 12.0,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600",
    inStock: true
  },
  {
    brand: "Audi",
    model: "RS6 Avant",
    price: 115000,
    km: 15000,
    topSpeed: 305,
    fuel: 12.3,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600",
    inStock: true
  },
  {
    brand: "Porsche",
    model: "911 GT3",
    price: 210000,
    km: 8500,
    topSpeed: 318,
    fuel: 13.0,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600",
    inStock: true
  }
];

const VAT_RATE = 0.19;
let isVatIncluded = false;
let currentLang = "tr";
let selectedCar = null;
const $ = id => document.getElementById(id);
const modal = $("car-modal");
const fallbackImage = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="360" viewBox="0 0 600 360"><rect width="600" height="360" fill="#e2e8f0"/><path d="M120 215v-45l40-15 40-60h180l45 60 55 15v45Z" fill="#64748b"/><path d="m220 110-30 45h200l-30-45Z" fill="#cbd5e1"/><circle cx="190" cy="220" r="30" fill="#334155"/><circle cx="410" cy="220" r="30" fill="#334155"/></svg>'
);

const translations = {
    tr: {
        searchPlaceholder: "Araba markası veya modeli ara (örn: BMW)...",
        searchLabel: "Marka veya model ara",
        sortLabel: "Araçları sırala",
        vatShow: "KDV Dahil Göster (%19)",
        vatHide: "Net Fiyat Göster (KDV'siz)",
        sortDefault: "Varsayılan Sıralama",
        sortPriceAsc: "Fiyat: Düşükten Yükseğe",
        sortPriceDesc: "Fiyat: Yüksekten Düşüğe",
        sortKmAsc: "KM: Düşükten Yükseğe",
        priceNetLabel: "Fiyat (Net)",
        priceVatLabel: "Fiyat (KDV Dahil)",
        kmLabel: "KM",
        speedLabel: "Maks. Hız",
        fuelLabel: "Yakıt",
        buyBtn: "Satın Al",
        outOfStock: "Stokta Yok",
        noResults: "Araba bulunamadı.",
        close: "Kapat",
        details: "Detayları göster",
        missingImage: "Fotoğraf yüklenemedi; temsili araç çizimi",
        count: count => count + " araç bulundu.",
        buyAlert: (name, price) => name + " için gösterilen fiyat: " + price +
            ". Bu bir demo sayfasıdır; gerçek satın alma veya ödeme yapılmadı."
    },
    en: {
        searchPlaceholder: "Search car brand or model (e.g. BMW)...",
        searchLabel: "Search brand or model",
        sortLabel: "Sort cars",
        vatShow: "Show with VAT (19%)",
        vatHide: "Show Net Price (Without VAT)",
        sortDefault: "Default Sorting",
        sortPriceAsc: "Price: Low to High",
        sortPriceDesc: "Price: High to Low",
        sortKmAsc: "KM: Low to High",
        priceNetLabel: "Price (Net)",
        priceVatLabel: "Price (incl. VAT)",
        kmLabel: "KM",
        speedLabel: "Max Speed",
        fuelLabel: "Fuel",
        buyBtn: "Buy",
        outOfStock: "Out of Stock",
        noResults: "No cars found.",
        close: "Close",
        details: "Show details",
        missingImage: "Photo unavailable; generic car illustration",
        count: count => count + (count === 1 ? " car found." : " cars found."),
        buyAlert: (name, price) => "Displayed price for " + name + ": " + price +
            ". This is a demo page; no actual purchase or payment was made."
    }
};

function formatNumber(value) {
    return value.toLocaleString(currentLang === "tr" ? "tr-TR" : "en-US");
}

function getPrice(car) {
    return Math.round(car.price * (isVatIncluded ? 1 + VAT_RATE : 1) * 100) / 100;
}

function formatPrice(car) {
    return new Intl.NumberFormat(currentLang === "tr" ? "tr-TR" : "en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(getPrice(car));
}

function priceText(car) {
    const t = translations[currentLang];
    return (isVatIncluded ? t.priceVatLabel : t.priceNetLabel) + ": " + formatPrice(car);
}

function normalizeSearch(value) {
    return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase().replace(/ı/g, "i").replace(/\s+/g, " ").trim();
}

function setCarImage(image, car) {
    image.alt = car.brand + " " + car.model;
    image.onerror = () => {
        image.onerror = null;
        image.src = fallbackImage;
        image.alt = car.brand + " " + car.model + " — " + translations[currentLang].missingImage;
    };
    image.src = car.image;
}

function buyCar(car) {
    if (!car.inStock) return;
    alert(translations[currentLang].buyAlert(car.brand + " " + car.model, formatPrice(car)));
}

function detailTexts(car) {
    const t = translations[currentLang];
    return [
        "📍 " + t.kmLabel + ": " + formatNumber(car.km) + " km",
        "🚀 " + t.speedLabel + ": " + formatNumber(car.topSpeed) + " km/h",
        "⛽ " + t.fuelLabel + ": " + formatNumber(car.fuel) + " L / 100 km"
    ];
}

function displayCars(carList) {
    const t = translations[currentLang];
    const fragment = document.createDocumentFragment();
    $("result-count").textContent = t.count(carList.length);
    if (carList.length === 0) {
        const empty = document.createElement("p");
        empty.className = "no-results";
        empty.textContent = t.noResults;
        fragment.appendChild(empty);
    }
    carList.forEach(car => {
        const card = document.createElement("article");
        card.className = "car-card";
        // Only static markup goes into innerHTML; data is inserted as text.
        card.innerHTML = '<button type="button" class="image-button"><img class="car-image" loading="lazy"></button>' +
            '<h2></h2><p class="price"></p><div class="car-details"></div>' +
            '<button type="button" class="buy-btn"></button>';
        const name = car.brand + " " + car.model;
        const imageButton = card.querySelector(".image-button");
        imageButton.setAttribute("aria-label", name + " — " + t.details);
        imageButton.setAttribute("aria-haspopup", "dialog");
        imageButton.addEventListener("click", () => openModal(car));
        setCarImage(card.querySelector("img"), car);
        card.querySelector("h2").textContent = name;
        card.querySelector(".price").textContent = priceText(car);
        detailTexts(car).forEach(text => {
            const paragraph = document.createElement("p");
            paragraph.textContent = text;
            card.querySelector(".car-details").appendChild(paragraph);
        });
        const buyButton = card.querySelector(".buy-btn");
        buyButton.textContent = car.inStock ? t.buyBtn : t.outOfStock;
        buyButton.disabled = !car.inStock;
        buyButton.addEventListener("click", () => buyCar(car));
        fragment.appendChild(card);
    });
    $("car-container").replaceChildren(fragment);
}

function filterCars() {
    const query = normalizeSearch($("search-input").value);
    const result = cars.filter(car =>
        normalizeSearch(car.brand + " " + car.model).includes(query)
    );
    const sorters = {
        "price-asc": (a, b) => a.price - b.price,
        "price-desc": (a, b) => b.price - a.price,
        "km-asc": (a, b) => a.km - b.km
    };
    const sorter = sorters[$("sort-select").value];
    if (sorter) result.sort(sorter);
    displayCars(result);
}

function refreshModal() {
    if (!selectedCar) return;
    const t = translations[currentLang];
    $("modal-title").textContent = selectedCar.brand + " " + selectedCar.model;
    $("modal-price").textContent = priceText(selectedCar);
    const details = detailTexts(selectedCar);
    ["modal-km", "modal-speed", "modal-fuel"].forEach((id, i) => {
        $(id).textContent = details[i];
    });
    $("modal-buy-btn").textContent = selectedCar.inStock ? t.buyBtn : t.outOfStock;
    $("modal-buy-btn").disabled = !selectedCar.inStock;
    $("close-modal").setAttribute("aria-label", t.close);
    if ($("modal-image").getAttribute("src") === fallbackImage) {
        $("modal-image").alt = selectedCar.brand + " " + selectedCar.model + " — " + t.missingImage;
    }
}

function openModal(car) {
    selectedCar = car;
    setCarImage($("modal-image"), car);
    refreshModal();
    if (!modal.open) modal.showModal();
    document.body.classList.add("modal-open");
}

function closeModal() {
    if (modal.open) modal.close();
    document.body.classList.remove("modal-open");
    selectedCar = null;
}

function refreshVatButton() {
    const button = $("vat-toggle-btn");
    const t = translations[currentLang];
    button.textContent = isVatIncluded ? t.vatHide : t.vatShow;
    button.classList.toggle("active", isVatIncluded);
    button.setAttribute("aria-pressed", String(isVatIncluded));
}

function toggleVat() {
    isVatIncluded = !isVatIncluded;
    refreshVatButton();
    filterCars();
    refreshModal();
}

function setLanguage(lang) {
    if (!Object.hasOwn(translations, lang)) return;
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;
    $("search-input").placeholder = t.searchPlaceholder;
    const labels = {
        "search-label": t.searchLabel, "sort-label": t.sortLabel,
        "opt-default": t.sortDefault, "opt-price-asc": t.sortPriceAsc,
        "opt-price-desc": t.sortPriceDesc, "opt-km-asc": t.sortKmAsc
    };
    Object.entries(labels).forEach(([id, text]) => { $(id).textContent = text; });
    ["tr", "en"].forEach(code => {
        const button = $("lang-" + code + "-btn");
        button.classList.toggle("active", lang === code);
        button.setAttribute("aria-pressed", String(lang === code));
    });
    refreshVatButton();
    filterCars();
    refreshModal();
}

$("search-input").addEventListener("input", filterCars);
$("sort-select").addEventListener("change", filterCars);
$("vat-toggle-btn").addEventListener("click", toggleVat);
$("lang-tr-btn").addEventListener("click", () => setLanguage("tr"));
$("lang-en-btn").addEventListener("click", () => setLanguage("en"));
$("close-modal").addEventListener("click", closeModal);
$("modal-buy-btn").addEventListener("click", () => {
    if (selectedCar) buyCar(selectedCar);
    closeModal();
});
// Native dialog provides focus containment, focus restoration and Escape support.
modal.addEventListener("cancel", event => {
    event.preventDefault();
    closeModal();
});
modal.addEventListener("close", () => {
    if (!modal.open) {
        document.body.classList.remove("modal-open");
        selectedCar = null;
    }
});
let pointerStartedOnBackdrop = false;
modal.addEventListener("pointerdown", event => {
    pointerStartedOnBackdrop = event.target === modal;
});
modal.addEventListener("click", event => {
    if (pointerStartedOnBackdrop && event.target === modal) closeModal();
    pointerStartedOnBackdrop = false;
});

setLanguage(currentLang);
