# ServiceHub — React Services Catalogue

ServiceHub is a responsive service catalogue built with React. It presents a collection of digital services and lets visitors search and filter them by category.

## Features

- Responsive layout for desktop, tablet and mobile screens
- Reusable navigation, header and service-card components
- Dynamic rendering of service cards from a JavaScript data array
- Instant search across service names, descriptions, categories and technology tags
- Category filters
- Empty state with a reset action when no service matches

## Technologies

- React
- JavaScript (ES6+)
- React Hooks: `useState` and `useMemo`
- React-Bootstrap
- Bootstrap 5
- CSS3

## Getting started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/Raky-gueye/ReactCheckpoint.git
cd ReactCheckpoint
npm install
```

### Run locally

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

## Project structure

```text
src/
├── App.jsx       # Application state, service data and filtering
├── Card.jsx      # Reusable service card
├── Headers.jsx  # Hero section
├── Navbar.jsx   # Responsive navigation
├── index.css    # Application styles and responsive rules
└── index.js     # React entry point
```

## Learning objectives

This project demonstrates foundational React concepts:

- Creating and composing functional components
- Passing data through props
- Rendering collections with `map()` and stable keys
- Managing UI state with `useState`
- Deriving filtered data with `useMemo`
- Handling user input and button events
- Building a responsive interface

## Author

**Raky Gueye**  
Junior Software Developer | Backend & Mobile Development

GitHub: [Raky-gueye](https://github.com/Raky-gueye)

---

This is a portfolio and learning project. The displayed services are sample content.
