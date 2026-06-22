
![Ultra-fast Deployment](/online.png)
![Typace Stats](/Typace-Inkwire.png)

# <div align="center">🚀 Typace Inkwire 杰奏·墨线 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/typace-team/typace-inkwire&project-name=typace-inkwire&repository-name=typace-inkwire)</div>





<div align="center">


[🌐 Visit Website](https://inkwire.mrche.top) • [📖 Documentation](https://github.com/typace-team/typace-inkwire/blob/main/README.md) • [🔍 Issues](https://github.com/typace-team/typace-inkwire/issues) • [📧 Email](mailto:liyin_iup4wfsweb@aka.yeah.net)</div>
Typace Inkwire, developed by @typace-team (only by Che, @che-ui), is a lightweight, no-fuss blogging platform designed for developers and minimalists, reworked to deploy seamlessly on platforms like **Vercel** using **Serverless Functions**. Our goal is to enable even beginners to have their own blog.

It’s a markdown-powered, minimal blogging platform that compiles content on-the-fly without any backend server, database, or complex setup.

</div>

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

## ✍️ Daily Writing Workflow (Zero-Config)

Typace Inkwire is built for pure, distraction-free writing. We intentionally strip away the complexities of modern static site generators—there are no build steps, no complex configurations, and **no Front Matter** required.

### How to Write and Publish
1. **Create a new file**: Simply navigate to the `/public/blogs/` directory and create a new Markdown file (e.g., `my-new-thought.md`). The filename will typically act as your URL slug.
2. **Just start writing**: Open the file and write your content using standard Markdown syntax. You don't need to add any YAML metadata or tags at the top.
3. **The H1 Rule**: The very first Level 1 Heading (`# Your Title Here`) in your Markdown file will automatically be extracted by the system. It will be used as both the main article heading on the page and the browser tab title (`<title>`).
4. **Embrace Minimalism**: We believe the content is what matters. Typace Inkwire is so lightweight that we don't even bother configuring a favicon (tab icon) by default. It’s just you and your words.

---

## 🏠 Customizing the Home Page

The Home page is split into two distinct layers: the **textual content** and the **UI structure**. Depending on how deep you want to customize, you will edit different files.

### 1. Updating the Content (`/public/md/index.md`)
If you just want to update the welcome message, change the introductory text, or modify the list of links displayed on the home page:
- Open `/public/md/index.md`.
- Edit the Markdown text directly. This is the safest and fastest way to update your homepage copy without touching any HTML.

### 2. Highly Personalized Layouts (`/public/views/home.html`)
If you want to completely restructure the page, add a custom Hero section, embed specific widgets, or create a highly personalized UI layout:
- Open `/public/views/home.html`.
- Modify the HTML structure directly to build your custom layout.
- **⚠️ Dark Mode Reminder**: When adding custom HTML/CSS to this file, **do not hardcode colors** (like `background: white;`). Always use the global CSS variables (e.g., `var(--color-surface)`) to ensure your custom home page looks perfect in both Light and Dark modes.

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


<div align="center">

### Made with ❤️ by the Typace Team
