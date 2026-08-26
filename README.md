# 🐯 Tiger Car Gallery

A responsive, interactive car showroom web app built with vanilla JavaScript. Browse, search, filter, and "purchase" a curated collection of cars — with live VAT calculation and full Turkish/English language support.

## Features

- 🔍 **Real-time search** by brand or model
- ↕️ **Sorting** by price (low↔high) or mileage
- 💰 **VAT toggle** — switch between net price and price incl. 19% VAT
- 🖼️ **Detail modal** — click any car image for full specs
- 🌐 **Bilingual UI** — instantly switch between Turkish and English
- 📱 **Fully responsive** — mobile-friendly grid layout
- 🛒 **Simulated purchase flow** — one-click "Buy" with confirmation

## Tech Stack

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript (ES6+)

No frameworks, no build tools, no dependencies — just open and run.

## Project Structure

```
tiger-car-gallery/
├── index.html      # Markup & structure
├── car.css         # Styling & responsive layout
├── galery.js       # App logic, car data, and language switching
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/tiger-car-gallery.git
   ```
2. Open `index.html` in your browser. That's it — no build step, no dependencies.

## Live Demo

🔗[https://tiger-galery.netlify.app/]
## Roadmap

The app currently runs entirely on the frontend with hardcoded car data. Planned next steps:

- [ ] Node.js + Express backend
- [ ] SQLite database for persistent storage
- [ ] Real purchase transactions saved to the database
- [ ] User authentication

## Author

Built by **[Enes]** as a hands-on learning project while studying JavaScript and backend development.

## License

This project is open source and available under the [MIT License](LICENSE).
