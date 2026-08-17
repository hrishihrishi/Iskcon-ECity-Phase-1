# ISKCON Electronic City - BHAKTI Outreach Platform

A modern web application for ISKCON Electronic City (Bengaluru) to facilitate temple information, outreach events, blog management, Vaishnava calendar tracking, and online donations (Seva).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: TypeScript
- **Styling**: TailwindCSS & Custom CSS
- **Icons**: `react-icons`, `lucide-react`
- **Database**: MongoDB (via Mongoose)
- **Payments**: Razorpay Integration

---

## 📦 Key Modules

- **Home (`/`)**: Hero banner slider, quick navigation, and live upcoming event countdowns.
- **Seva & Donations (`/donate`)**: Interactive donation options with Razorpay checkout integration.
- **Vaishnava Calendar (`/vaishnava-calendar`)**: Festival and Ekadashi event schedules with countdowns.
- **Blog (`/blog`)**: Article listing & management dashboard (`/blog/admin`).
- **Contact & Outreach (`/contact`)**: Temple location map, support channels, and contact information.

---

## 🚀 Run Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hrishihrishi/BHAKTI.git
   cd BHAKTI
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```
