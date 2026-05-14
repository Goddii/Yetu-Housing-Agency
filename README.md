# Yetu Housing Agency 🏠

A modern real estate web application built with React and JSON Server, allowing users to browse property listings, view detailed property information, connect with agents, and submit contact inquiries.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Pages Overview](#pages-overview)
- [Team](#team)

---

## About the Project

Yetu Housing Agency is a full-stack-style real estate platform that connects homebuyers with premium property listings across Nairobi and surrounding areas. The project was built as a collaborative bootcamp project by a team of four developers, each responsible for different parts of the application.

---

## Features

- Browse all property listings with live data from JSON Server
- Filter properties by **location**, **price range**, and **property type**
- Click any property card to view a **full detail page**
- View **featured properties** on the home page
- Browse **agent profiles** and their listings
- Submit a **contact form** that saves to the database
- Responsive layout across desktop, tablet, and mobile

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend UI framework |
| React Router DOM v7 | Client-side routing and navigation |
| JSON Server | Mock REST API / local database |
| CSS (App.css, Properties.css, index.css) | Styling and responsive layout |
| React Icons | Social media and UI icons |
| Font Awesome | Property detail icons (beds, baths, location) |
| Vite | Development build tool |

---

## Project Structure

```
yetu-housing-agency/
├── public/
│   └── images/               # Agent listing images
├── src/
│   ├── assets/               # Logo and house images
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Home.jsx          # Landing page with featured properties
│   │   ├── Properties.jsx    # All listings with filters
│   │   ├── PropertyList.jsx  # Individual property detail page
│   │   ├── Agent.jsx         # Agent profiles and their listings
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Site footer
│   ├── App.jsx               # Root component and route definitions
│   ├── App.css               # Global styles
│   ├── index.css             # Contact and footer styles
│   └── main.jsx              # React entry point
├── db.json                   # JSON Server database
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/yetu-housing-agency.git
cd yetu-housing-agency
```

2. Install project dependencies:

```bash
npm install
```

3. Install JSON Server globally:

```bash
npm install -g json-server
```

---

## Running the App

You need **two terminals** running at the same time — one for the React app and one for JSON Server.

**Terminal 1 — Start JSON Server (the database):**

```bash
json-server --watch db.json --port 3001
```

**Terminal 2 — Start the React app:**

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

> Make sure JSON Server is running on port 3001 before using the app, otherwise property data will not load.

---

## API Endpoints

All data is served by JSON Server from `db.json` at `http://localhost:3001`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/properties` | Fetch all properties |
| GET | `/properties?featured=true` | Fetch featured properties only |
| GET | `/properties/:id` | Fetch a single property by ID |
| GET | `/agents` | Fetch all agents |
| POST | `/contacts` | Submit a contact form message |

### Example property object

```json
{
  "id": "1",
  "title": "Modern Family Home",
  "price": 2850000,
  "location": "Kilimani, Nairobi",
  "beds": 5,
  "baths": 4,
  "sqft": 4200,
  "type": "house",
  "image": "https://images.unsplash.com/...",
  "featured": true,
  "description": "A beautifully designed modern family home..."
}
```

### Example contact submission

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Buy Property",
  "message": "I am interested in properties in Kilimani.",
  "date": "5/15/2026"
}
```

---

## Pages Overview

### Home (`/`)
- Hero section with animated title and Explore Properties button
- Stats row showing listings count, agent quality, experience, and awards
- Featured properties fetched from `/properties?featured=true`
- Call-to-action section linking to the Contact page

### Properties (`/properties`)
- Fetches all properties from `/properties`
- Filter bar for location (text search), price range, and property type
- Filters run in the browser — no extra fetch needed when filtering
- Each card links to the property detail page

### Property Detail (`/properties/:id`)
- Fetches a single property by ID from `/properties/:id`
- Displays full image, title, price, location, beds, baths, sqft, type
- Includes a property description and a Contact Agent button

### Agents (`/agent`)
- Fetches all agents from `/agents`
- Displays agent name, role, description, email, and their listings

### Contact (`/contact`)
- Form with full name, email, subject, and message fields
- Submits via POST to `/contacts` and saves to `db.json`
- Input formatting: names auto-capitalised, email auto-lowercased
- Form resets after successful submission

---

## Team

| Name | Responsibility |
|---|---|
| Person 1 | JSON Server setup, `db.json` creation, endpoint testing |
| Person 2 | `Properties.jsx` — fetch, filter functionality, card linking |
| Person 3 | `Home.jsx` — featured properties fetch, responsive layout |
| Person 4 | `Contact.jsx` — form state, POST submission, validation |

> `Agent.jsx`, `Navbar.jsx`, `Footer.jsx`, and `PropertyList.jsx` were developed collaboratively.

---

## License

This project was built for educational purposes as part of a fullstack web development bootcamp.