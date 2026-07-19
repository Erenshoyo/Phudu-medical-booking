# Phudu - Medical Appointment Booking Application

> **Dependable Care, Backed by Trusted Professionals.**

**Phudu** is a React-based healthcare platform designed to connect patients with trusted medical professionals. It allows users to browse doctor profiles, check real-time availability, read health blogs, and manage appointments with a persistent local storage system.

---

## 🔗 Links

- **Live Demo:** https://phudu-erenshoyo.netlify.app/
- **Repository:** https://github.com/asif-shahriar-tauhid/Phudu-medical-booking

---

## 📸 Preview

![Phudu Homepage](./public/homepage.png)

*Homepage — hero banner, doctor search, and top doctor listings.*

---

## ✨ Features

### User Experience

- **Doctor Discovery:** Browse a list of verified doctors with key details like experience, specialty, and availability status.
- **Smart Availability System:** Real-time checking of doctor schedules. The system validates if a doctor is currently available based on their working days and hours.
- **Appointment Booking:** Users can book appointments if the doctor is available. Includes duplicate booking prevention.
- **Dashboard & Analytics:** A "My Bookings" page that lists scheduled appointments and visualizes fee distribution using interactive charts.
- **Health Blog:** A dedicated section for reading health-related articles.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS, optimized for mobile and desktop.

### Technical Highlights

- **Data Persistence:** Uses `localStorage` to save appointment data, ensuring bookings remain after a page refresh.
- **Dynamic Routing:** Utilizes `react-router` for seamless navigation between Home, Details, Blogs, and Booking pages.
- **Interactive Charts:** Implements `recharts` to display appointment fee statistics.
- **Toast Notifications:** Provides immediate user feedback (Success/Error/Warning) using `react-toastify`.
- **Custom 404 Handling:** A user-friendly error page with navigation options.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React.js |
| **Routing** | React Router DOM |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Visualization** | Recharts (Bar Charts) |
| **Animations** | React CountUp |
| **Notifications** | React Toastify |

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `react` / `react-dom` | UI runtime |
| `react-router-dom` | Client-side routing, data loaders |
| `tailwindcss` | Utility-first styling |
| `lucide-react` | Icon set |
| `recharts` | Appointment fee distribution chart |
| `react-countup` | Animated number counters |
| `react-toastify` | Success/error/warning toast notifications |

> Run `npm list --depth=0` in the project root and replace this table with the exact output for full accuracy.

---

## 📂 Project Structure

```bash
src/
├── assets/                # Images and logos (Phudu logo, banner images)
├── components/
│   ├── Banner.jsx         # Homepage hero section with search UI
│   ├── Blog.jsx           # Individual blog post card
│   ├── Blogs.jsx          # Grid layout for blog posts
│   ├── Bookings.jsx       # User dashboard with charts and appointment list
│   ├── DoctorCard.jsx     # Card component displaying doctor summary
│   ├── DoctorDetails.jsx  # Full profile view with booking logic
│   ├── Doctors.jsx        # Homepage section listing top doctors
│   ├── Footer.jsx         # Site footer with social links
│   ├── Navbar.jsx         # Responsive navigation bar
├── pages/
│   ├── ErrorPage.jsx      # Custom 404 page
│   ├── Home.jsx           # Landing page combining Banner and Doctors
│   ├── Root.jsx           # Main layout wrapper (Navbar + Outlet + Footer)
├── Utilities/
│   └── dateUtils.js       # Logic for checking doctor availability (Time/Day)
├── Routes/
│   └── Routes.jsx         # Router configuration and data loaders
└── main.jsx                # Application entry point
```

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/phudu-medical.git
cd phudu-medical
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Required Data Files

Ensure the following JSON files exist inside the `public/` folder, as the routers attempt to fetch them:

- **DoctorData.json** — Contains doctor profiles, availability, fees, etc.
- **blogsData.json** — Contains blog titles, authors, and content.

### 4. Run the Development Server

```bash
npm run dev
```

Once the server starts, open your browser and navigate to:

```
http://localhost:5173
```

---

## 📖 Usage Guide

### 1. Booking an Appointment

- Navigate to the **Home** page.
- Click **"View Details"** on any Doctor Card.
- On the **Doctor Details** page, check the status indicator:
  - 🟢 **Available** — You can proceed to book.
  - 🔴 **Not Available** — The booking button will be disabled.
- Click **"Book Appointment Now"**.
- If successful, you will be redirected to the **Bookings** page.

### 2. Managing Bookings

- Go to the **My Bookings** page via the Navbar.
- View the **Appointments Distribution** chart to see your total estimated fees per doctor.
- To remove an appointment, click the **"Cancel Appointment"** button on the specific card.

---

## ⚠️ Known Issues / Todo

- **Availability Logic:** The `checkAvailability` function in `dateUtils.js` currently contains a syntax error — `=>` should be changed to `>=` for correct comparison.
- **Booking Route Loader:** The `/bookings` route in `Routes.jsx` has a loader attached that attempts to read `params.education`, which is undefined on that route. The loader can be safely removed since `Bookings.jsx` already handles data via `localStorage`.
