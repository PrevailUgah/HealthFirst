# HealthFirst 🩺📦

An Offline-First Digital Health & Inventory Management System for Primary Healthcare Centers

## 📌 Project Overview

In many underserved and rural areas across Nigeria, Primary Healthcare Centers (PHCs) still rely entirely on paper registers and manual logbooks. This structural digital divide leads to severe consequences: fragmented or lost patient histories, critical medication stockouts, and a total lack of real-time data for regional health authorities to respond to localized disease trends.

HealthFirst is a lightweight, purpose-built, and offline-first digital prototype designed to bridge this gap. It empowers frontline healthcare workers to register patient check-ins and dispense medications while automatically tracking local pharmacy inventory levels—completely independent of an internet connection.

This project was developed as a technical solution for the AIMS SDGs Innovation Challenge, directly addressing SDG 3: Good Health and Well-Being.

## 🚀 Key Features

- **Offline-First Resilience**: The core application runs entirely in the browser and remains 100% operational during power grids or network failures.
- **Dynamic Inventory Deduplication**: Instantly updates medicine stock numbers on the fly whenever a treatment or medication is administered to a patient.
- **Algorithmic Low-Stock Telemetry**: Automatically triggers highly visible warning flags on screen when essential medication stock levels drop below a critical safety threshold.
- **Persistent Local Database**: Uses browser-level storage (LocalStorage) to preserve patient medical logs and transaction data safely across machine reboots, tab closures, or complete network disconnects.

## 🛠️ Built With

This prototype is engineered to be exceptionally lightweight, fast, and optimized to run on minimal hardware overhead (even legacy computers or basic smartphones found in rural clinics):

- **HTML5**: Semantic structural layout optimized for point-of-care operations.
- **CSS3**: Clean, high-contrast, minimalist, and responsive UI/UX theme suited for busy health workers.
- **Vanilla JavaScript (ES6+)**: Logic engine driving state updates, math logic, event listeners, and offline data mutations.

## 📁 Repository Structure

```plaintext
HealthFirst/
│
├── index.html       # Structural layout and UI components of the dashboard
├── style.css        # Clean, accessible design rules and layout configurations
├── app.js           # JavaScript engine handling local storage and state logic
└── README.md        # Technical project documentation and overview
```

## 📋 How the Prototype Works (The Technical Logic)

- **State Initialization**: When the webpage launches, the JavaScript engine queries the browser's database. If it is a first-time run, it populates a default inventory of 50 Antimalarial doses.
- **Transaction Catching**: When a worker logs a patient and selects an "Antimalarial Dose", the script intercepts the submission, updates the local array, and instantly decrements the inventory balance.
- **Threshold Guardrails**: If the available medication inventory breaks past a safety floor (e.g., $\le$ 10 doses), the interface dynamically strips away hidden states to flag a bold alert, signifying that logistics intervention is necessary.
- **Data Locking**: All modifications write instantly to localStorage as stringified JSON strings, establishing offline persistence.

## 💻 Running the Prototype Locally

Because this prototype is written natively in vanilla web technologies, it requires zero installation packages, compilers, or server configuration setups.

1. Clone or download this repository to your computer:

```bash
git clone https://github.com/yourusername/HealthFirst.git
```

2. Navigate into the project folder.
3. Double-click the `index.html` file to open and run it instantly inside any modern web browser (Chrome, Edge, Firefox, Safari).
4. **Test the Offline Mode**: Turn off your computer's Wi-Fi or unplug your internet link. Register a patient and update the stock. Close the tab, re-open `index.html`, and watch your records remain securely intact.

## 🎯 Future Technical Roadmap (Production Scaling)

While this prototype successfully validates local offline storage and data structures, the production-ready implementation will scale across the following milestones:

- Transitioning storage frameworks from LocalStorage to a more robust browser database system like IndexedDB for larger local data records.
- Implementing a background sync machine via Service Workers to automatically upload local data packets to a centralized cloud database (PostgreSQL/Node.js) the moment internet becomes available.
- Creating a centralized administrative data visualization panel for state health management boards.

## 📝 License

This project is open-source and built for educational and social innovation frameworks under the AIMS SDGs Challenge parameters.

Developed with 💻 and 🧠 by Prevail Bitrus Uga
