# CTR Supply Solutions - Website

A modern, fast, and responsive B2B lead-generation website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1.  Navigate to the project directory:
    ```bash
    cd ctr-supply-solutions
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
ctr-supply-solutions/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── services/        # Service detail pages
│   │   ├── wholesale/       # B2B Catalog page
│   │   ├── about/           # About Us page
│   │   └── contact/         # Contact page
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── ui/              # Reusable UI components (Button, Container)
│   │   ├── home/            # Homepage specific components
│   │   └── services/        # Service page components
│   └── lib/                 # Utilities
├── public/                  # Static assets (images, fonts)
└── tailwind.config.ts       # Design system configuration
```

## 🎨 Customization

### Colors & Fonts
The design system is configured in `tailwind.config.ts`.
- **Primary Blue**: `text-ctr-blue` / `bg-ctr-blue`
- **Industrial Slate**: `text-ctr-slate` / `bg-ctr-slate`
- **Fonts**: `Manrope` (Headings) and `Inter` (Body) are loaded via `next/font` in `src/app/layout.tsx`.

### Adding Content
- **Services**: Edit files in `src/app/services/`.
- **Wholesale Categories**: Update the `categories` array in `src/app/wholesale/page.tsx`.
- **Contact Form**: Connect the form in `src/app/contact/page.tsx` to a backend service like Formspree or generic email API.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push code to GitHub.
2.  Import project to Vercel.
3.  Deploy.

## 🔍 SEO & Performance
- **Metadata**: Configured in `src/app/layout.tsx`. Update `title` and `description` as needed.
- **Images**: Ensure to use `next/image` for all bitmaps.
- **Performance**: The site uses static generation by default for maximum speed.
