# Delta Innovation

![Delta Innovation Banner](./public/Group_25.jpg)

## 🚀 Overview

**Delta Innovation** is a modern, fully responsive software agency website built with React, TypeScript, Tailwind CSS, and Vite. It showcases your services, expertise, and contact information with beautiful animations and a seamless user experience.

---

## ✨ Features

- **Animated Hero Section**: Eye-catching introduction with smooth transitions.
- **Service Highlights**: Detailed cards for each service, animated on scroll.
- **Why Choose Us**: Competitive advantages with interactive cards and stats.
- **Contact Section**: Stylish contact form with validation and feedback.
- **Sticky Navbar**: Responsive navigation with scrollspy and mobile support.
- **Modern Footer**: Social links, quick navigation, and contact info.
- **Custom Backgrounds**: Radial gradients, floating elements, and grid patterns.
- **Mobile Friendly**: Fully responsive design for all devices.
- **Framer Motion Animations**: Smooth entrance and hover effects.

---

## 🛠️ Tech Stack

- **React** & **TypeScript**
- **Vite** (Fast build tool)
- **Tailwind CSS** (Utility-first styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icon library)
- **React Scroll** & **Intersection Observer** (Scrollspy, section navigation)

---

## 📁 Project Structure

```
.eslintrc.cjs
.gitignore
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
  Group_25.jpg
  image.png
src/
  App.tsx
  index.css
  index.tsx
  assets/
    group.svg
    homepic.jpg
  components/
    ContactSection.tsx
    Footer.tsx
    HeroSection.tsx
    Navbar.tsx
    ServicesSection.tsx
    WhyChooseUsSection.tsx
```

---

## ⚡ Getting Started

### 1. **Clone the Repository**

```sh
git clone https://github.com/delta-innovations/DeltaInnovations-Website.git
cd delta-innovation
```

### 2. **Install Dependencies**

```sh
npm install
```

### 3. **Run Locally**

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🧑‍💻 Project Setup Details

- **Tailwind CSS** is imported in [`src/index.css`](src/index.css).
- Main entry point is [`src/index.tsx`](src/index.tsx).
- All main sections are React components in [`src/components`](src/components).
- Images and SVGs are in [`src/assets`](src/assets) and [`public`](public).
- ESLint is configured via [`.eslintrc.cjs`](.eslintrc.cjs) for code quality.
- Vite config is in [`vite.config.ts`](vite.config.ts).
- TypeScript configs: [`tsconfig.json`](tsconfig.json), [`tsconfig.node.json`](tsconfig.node.json).

---

## 🌐 Deploying to Vercel

1. **Push your code to GitHub** (or any git provider).
2. **Go to [Vercel](https://vercel.com/)** and click **New Project**.
3. **Import your repository**.
4. **Configure Build Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Set Environment Variables** (if needed).
6. **Click Deploy**.

Vercel will automatically build and deploy your site.  
You’ll get a live URL like `https://delta-innovation.vercel.app`.

---

## 📝 Customization

- **Branding**: Update images in [`src/assets`](src/assets) and [`public`](public).
- **Content**: Edit text in section components in [`src/components`](src/components).
- **Colors/Styles**: Change Tailwind classes for custom look.

---

## 📦 Scripts

- `npm run dev` – Start local development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Inspiration

Crafted for agencies and startups who want a modern, animated, and professional web presence.

---

## 📬 Contact

For support or business inquiries, email:  
**contact@deltainnovations.net**

---

> Made with ❤️ by Delta Innovation
