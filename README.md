# 🚀 Typace Inkwire
Typace Inkwire, developed by @typace-team, is a lightweight, no-fuss blogging platform designed for developers and minimalists, reworked to deploy seamlessly on platforms like **Vercel** using **Serverless Functions**. Our goal is to enable even beginners to have their own blog.

It’s a markdown-powered, minimal blogging platform that compiles content on-the-fly without any backend server, database, or complex setup.

---

## ✨ What's New in Inkwire?

- ✅ **Serverless Architecture**: Powered by Vercel Serverless Functions.
- 🪄 **Vercel-Ready**: No `server.js`, works natively with `vercel dev` and on production deploys.
- 📁 **/api Directory Support**: Each route is handled through functions inside the `/api/` folder.
- ⚙️ **Markdown Compilation**: Still powered by `marked`, now running serverlessly.
- 💅 **Same UI, Better Delivery**: No compromises on theming, dark mode, or user experience.

---

## 📁 Project Structure

```
mdxpress-blog-cnp/
├── api/                 # Serverless function handlers
│   ├── index.js         # Homepage rendering
│   ├── blog.js          # Blog listing route
│   └── blog/[slug].js   # Dynamic blog rendering
│   └── about.js
├── public/
│   ├── blogs/           # Markdown files for each blog post
│   ├── styles/          # CSS with dark mode support
│   └── views/           # HTML templates
├── vercel.json          # Vercel routing and config
├── package.json         # Metadata and dependencies
└── README.md            # This file
```

---

## 🧪 How to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/typace-team/typace-inkwire
   cd inkwire
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Locally with Vercel**
   ```bash
   vercel dev
   ```

4. **Visit the App**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 How It Works on Vercel

- All backend logic is handled via Serverless Functions in `/api`.
- Static assets (styles, markdown files) are served from `/public`.
- HTML templates are combined with rendered Markdown and returned as HTML.

---

## 📝 How to Customize the About Page

The About page in Typace Inkwire follows a standard "separation of concerns" design (Structure, Style, and Logic). If you want to modify the content or appearance of the About page, please update the corresponding dedicated files based on your needs:

### 1. Modifying Page Content & Structure (`About.html`)
If you want to update your personal introduction, project experience, add images, or change the layout structure:
- Open the `About.html` file.
- Locate the main content area of the page (usually wrapped inside `<main>`, `<section>`, or specific container `div`s).
- Directly modify the inner HTML tags and text.
- **Typography Tip**: To maintain the elegant typography consistent with blog posts, it is recommended to wrap large blocks of text content inside a `<div class="markdown-body"> ... </div>` container.

### 2. Adjusting Dedicated Styles & Layout (`About.css`)
If you want to modify the layout, spacing, or visual effects specific to the About page:
- Open the `About.css` file.
- This file contains styles that only apply to the About page and will not affect the home page or blog listing page.
- **⚠️ Dark Mode Warning**: When writing CSS in this file, **never hardcode color values** (e.g., `background: white;` or `color: #333;`). Always use the CSS variables defined in the project's `variables.css` (e.g., `background: var(--color-surface);` and `color: var(--color-text-primary);`) to ensure the page displays perfectly in both light and dark modes.

### 3. Modifying Interaction Logic (`About.js`)
If you need to add special animations, form validations, or dynamic data fetching to the About page:
- Open the `About.js` file.
- This file handles the dedicated JavaScript logic for this specific page.
- **Note**: Global theme toggling (Dark Mode Toggle) and top navigation bar logic are usually handled by global scripts or built into the HTML templates. Unless absolutely necessary, do not re-bind global events in `About.js` to avoid conflicts.

### 💡 Quick Modification Checklist
- Change text / images / layout ➡️ Edit `About.html`
- Change colors / fonts / spacing ➡️ Edit `About.css` (Remember to use CSS variables!)
- Change animations / click events ➡️ Edit `About.js`

---

## 🙋‍♂️ About the Creator

Crafted by [@typace-team](https://github.com/typace-team/), Junior High School Students (Grade 9) based in Shanghai, China.

---

> Looking to contribute, request features, or report issues? Feel free to open a PR or issue!
