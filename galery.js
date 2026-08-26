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

const carContainer =
    document.getElementById("car-container");

const VAT_RATE = 0.19;

let isVatIncluded = false;
let currentLang = "tr";


/* TRANSLATIONS */

const translations = {
    tr: {
        pageTitle: "Tiger Gallery",
        searchPlaceholder: "Araba markası veya modeli ara (örn: BMW)...",
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
        noResults: "Araba bulunamadı.",
        modalImageAlt: "Araba Resmi",
        buyAlert: (brand, model, price) =>
            `Tebrikler! ${brand} ${model} aracını $${price.toLocaleString()} tutarında satın aldınız.`
    },
    en: {
        pageTitle: "Tiger Gallery",
        searchPlaceholder: "Search car brand or model (e.g. BMW)...",
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
        noResults: "No cars found.",
        modalImageAlt: "Car Image",
        buyAlert: (brand, model, price) =>
            `Congratulations! You purchased the ${brand} ${model} for $${price.toLocaleString()}.`
    }
};


/* BUY CAR */

function buyCar(brand, model, price) {

    const t = translations[currentLang];

    alert(
        t.buyAlert(brand, model, price)
    );
}


/* RENDER CAR LIST */

function displayCars(carList) {

    const t = translations[currentLang];

    carContainer.innerHTML = "";

    if (carList.length === 0) {

        carContainer.innerHTML = `
            <p class="no-results">
                ${t.noResults}
            </p>
        `;

        return;
    }


    const fragment =
        document.createDocumentFragment();


    carList.forEach(car => {

        const carCard =
            document.createElement("div");

        carCard.className = "car-card";


        const finalPrice = isVatIncluded
            ? car.price * (1 + VAT_RATE)
            : car.price;


        const priceLabel = isVatIncluded
            ? t.priceVatLabel
            : t.priceNetLabel;


        carCard.innerHTML = `
            <img
                src="${car.image}"
                alt="${car.brand} ${car.model}"
                class="car-image"
            >

            <h2>
                ${car.brand} ${car.model}
            </h2>

            <p class="price">
                ${priceLabel}: $${Math.round(finalPrice).toLocaleString()}
            </p>

            <div class="car-details">
                <p>📍 ${t.kmLabel}: ${car.km.toLocaleString()} km</p>
                <p>🚀 ${t.speedLabel}: ${car.topSpeed} km/h</p>
                <p>⛽ ${t.fuelLabel}: ${car.fuel} L / 100km</p>
            </div>

            <button class="buy-btn">
                ${t.buyBtn}
            </button>
        `;


        /* IMAGE CLICK HANDLER */

        const carImage =
            carCard.querySelector(".car-image");


        carImage.addEventListener("click", () => {

            openModal(
                car.image,
                car.brand,
                car.model,
                Math.round(finalPrice),
                car.km,
                car.topSpeed,
                car.fuel,
                priceLabel
            );

        });


        /* BUY BUTTON HANDLER */

        const buyButton =
            carCard.querySelector(".buy-btn");


        buyButton.addEventListener("click", () => {

            buyCar(
                car.brand,
                car.model,
                Math.round(finalPrice)
            );

        });


        fragment.appendChild(carCard);

    });


    carContainer.appendChild(fragment);
}


/* SEARCH + SORT */

function filterCars() {

    const searchInputValue =
        document
            .getElementById("search-input")
            .value
            .toLowerCase()
            .trim();


    const sortValue =
        document.getElementById("sort-select").value;


    let result = cars.filter(car => {

        return (
            car.brand
                .toLowerCase()
                .includes(searchInputValue)
            ||
            car.model
                .toLowerCase()
                .includes(searchInputValue)
        );

    });


    if (sortValue === "price-asc") {

        result.sort((a, b) =>
            a.price - b.price
        );

    }

    else if (sortValue === "price-desc") {

        result.sort((a, b) =>
            b.price - a.price
        );

    }

    else if (sortValue === "km-asc") {

        result.sort((a, b) =>
            a.km - b.km
        );

    }


    displayCars(result);
}


/* VAT */

function toggleVat() {

    isVatIncluded = !isVatIncluded;

    const t = translations[currentLang];

    const vatBtn =
        document.getElementById("vat-toggle-btn");


    if (isVatIncluded) {

        vatBtn.textContent = t.vatHide;

        vatBtn.classList.add("active");

    }

    else {

        vatBtn.textContent = t.vatShow;

        vatBtn.classList.remove("active");

    }


    filterCars();
}


/* OPEN MODAL */

function openModal(
    image,
    brand,
    model,
    price,
    km,
    topSpeed,
    fuel,
    priceLabel
) {

    const t = translations[currentLang];

    document.getElementById("modal-image").src =
        image;

    document.getElementById("modal-image").alt =
        t.modalImageAlt;


    document.getElementById("modal-title").textContent =
        `${brand} ${model}`;


    document.getElementById("modal-price").textContent =
        `${priceLabel}: $${price.toLocaleString()}`;


    document.getElementById("modal-km").textContent =
        `📍 ${t.kmLabel}: ${km.toLocaleString()} km`;


    document.getElementById("modal-speed").textContent =
        `🚀 ${t.speedLabel}: ${topSpeed} km/h`;


    document.getElementById("modal-fuel").textContent =
        `⛽ ${t.fuelLabel}: ${fuel} L / 100km`;


    const modalBuyButton =
        document.getElementById("modal-buy-btn");

    modalBuyButton.textContent = t.buyBtn;

    modalBuyButton.onclick = () => {

        buyCar(
            brand,
            model,
            price
        );

        closeModal();
    };


    document.getElementById("car-modal").style.display =
        "flex";
}


/* CLOSE MODAL */

function closeModal() {

    document.getElementById("car-modal").style.display =
        "none";
}


/* LANGUAGE SWITCH */

function setLanguage(lang) {

    currentLang = lang;

    const t = translations[lang];

    document.documentElement.lang = lang;

    document.getElementById("page-title").textContent =
        t.pageTitle;

    document.getElementById("search-input").placeholder =
        t.searchPlaceholder;

    document.getElementById("opt-default").textContent =
        t.sortDefault;

    document.getElementById("opt-price-asc").textContent =
        t.sortPriceAsc;

    document.getElementById("opt-price-desc").textContent =
        t.sortPriceDesc;

    document.getElementById("opt-km-asc").textContent =
        t.sortKmAsc;

    const vatBtn =
        document.getElementById("vat-toggle-btn");

    vatBtn.textContent = isVatIncluded ? t.vatHide : t.vatShow;

    document.getElementById("lang-tr-btn").classList.toggle(
        "active", lang === "tr"
    );

    document.getElementById("lang-en-btn").classList.toggle(
        "active", lang === "en"
    );

    filterCars();
}


/* CLOSE BUTTON (X) */

document
    .getElementById("close-modal")
    .addEventListener(
        "click",
        closeModal
    );


/* BACKDROP CLICK */

document
    .getElementById("car-modal")
    .addEventListener("click", event => {

        if (event.target.id === "car-modal") {
            closeModal();
        }

    });


/* ESC KEY */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* SEARCH */

document
    .getElementById("search-input")
    .addEventListener(
        "input",
        filterCars
    );


/* SORT */

document
    .getElementById("sort-select")
    .addEventListener(
        "change",
        filterCars
    );


/* VAT BUTTON */

document
    .getElementById("vat-toggle-btn")
    .addEventListener(
        "click",
        toggleVat
    );


/* LANGUAGE BUTTONS */

document
    .getElementById("lang-tr-btn")
    .addEventListener(
        "click",
        () => setLanguage("tr")
    );

document
    .getElementById("lang-en-btn")
    .addEventListener(
        "click",
        () => setLanguage("en")
    );


/* INITIAL RENDER */

setLanguage(currentLang);