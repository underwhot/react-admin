# React Website Template with PagesCMS

This is a modern React website template using Vite, integrated with PagesCMS (pagescms.org) for content management and hosted on GitHub Pages. It features Tailwind CSS for styling, shadcn/ui components with dark theme support, Tanstack React Query with Axios for data fetching, React Router for routing, and gh-pages for deployment.

## Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- GitHub account
- PagesCMS account (pagescms.org)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/underwhot/react-admin.git
   cd react-admin
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Repository Link**
   Update the `fetch-content` script in `package.json` to point to your GitHub repository:
   ```json
   "fetch-content": "rm -rf tmp_gh_pages && git clone --depth 1 --filter=blob:none --sparse --branch gh-pages https://github.com/your-username/your-repo-name.git tmp_gh_pages && cd tmp_gh_pages && git sparse-checkout set content images && rm -rf ../dist/content ../dist/images && cp -r content ../dist/content && cp -r images ../dist/images && cd .. && rm -rf tmp_gh_pages"
   ```

4. **Configure Environment Variables**
   Update the `.env.development` and `.env.production` files with your repository name:
   - `.env.development`:
     ```
     VITE_API_URL="/your-repo-name/dist/"
     ```
   - `.env.production`:
     ```
     VITE_API_URL="/your-repo-name/"
     ```

5. **Update Vite Configuration**
   Modify `vite.config.ts` to set the `base` property to your repository name:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other configurations
   });
   ```

6. **Setup PagesCMS**
   - Sign up at [pagescms.org](https://pagescms.org).
   - Connect your GitHub repository to PagesCMS.
   - Create a `.pages.yml` configuration file in the `gh-pages` branch of your repository to define content structure (see example below).
   - Manage content (text, images) in PagesCMS, which will be stored in the `gh-pages` branch under `content` and `images` folders.

   **Example `.pages.yml` Configuration**
   Create a `.pages.yml` file in the `gh-pages` branch with the following structure to define your content schema:
   ```yaml
   media: images
   content:
     - name: home
       label: Home Page
       type: file
       path: content/homePage.json
       fields:
         - { name: title, label: Title, type: string, required: true }
         - { name: body, label: Body, type: rich-text, required: true }
     - name: works
       label: Works
       type: file
       path: content/works.json
       fields:
         - { name: title, label: Title, type: string }
         - name: entries
           label: Entries
           type: object
           list: true
           fields:
             - { name: title, label: Title, type: string, required: true }
             - { name: description, label: Description, type: string, required: true }
             - { name: image, label: Image, type: image }
             - { name: body, label: Body, type: rich-text, required: true }
   ```
   This configuration defines:
   - A `home` page with a title and rich-text body.
   - A `works` page with a title and a list of entries, each containing a title, description, optional image, and body.
   - Media uploads (e.g., images) are stored in the `images` folder.

## Development

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Sync Content from PagesCMS**
   After updating or adding content in PagesCMS, ensure the `gh-pages` branch exists in your repository. If not, run:
   ```bash
   npm run build
   npm run pages-deploy
   ```
   Then, sync the content:
   ```bash
   npm run fetch-content
   ```

   Repeat `npm run fetch-content` whenever you update content in PagesCMS to pull the latest `content` and `images` folders.

## Deployment

1. **Build and Deploy**
   To deploy the website to GitHub Pages:
   ```bash
   npm run deploy
   ```
   This script:
   - Builds the project (`npm run build`)
   - Fetches the latest content from the `gh-pages` branch (`npm run fetch-content`)
   - Deploys to GitHub Pages (`npm run pages-deploy`)

2. **Access Your Website**
   After deployment, visit: `https://your-username.github.io/your-repo-name/`

## Features

- **Styling**: Tailwind CSS with `tw-animate-css` for animations.
- **Components**: shadcn/ui components with dark theme support.
- **Data Fetching**: Tanstack React Query and Axios for efficient data management.
- **Routing**: React Router for client-side navigation.
- **Deployment**: gh-pages library for hosting on GitHub Pages.
- **CMS**: PagesCMS for managing content and images.

## Project Structure

```
├── dist/                  # Build output
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── styles/            # Tailwind CSS configurations
├── .env.development       # Development environment variables
├── .env.production        # Production environment variables
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## Dependencies

- **Core**: React, React DOM, React Router
- **Styling**: Tailwind CSS, shadcn/ui, class-variance-authority, clsx, tailwind-merge
- **Data**: Tanstack React Query, Axios
- **Deployment**: gh-pages
- **Development**: Vite, TypeScript, ESLint, Prettier

## Troubleshooting

- **Content not updating?** Ensure you run `npm run fetch-content` after PagesCMS updates and verify the `gh-pages` branch exists.
- **Deployment issues?** Check GitHub Pages settings in your repository to ensure the `gh-pages` branch is selected as the source.
- **404 errors?** Verify the `base` in `vite.config.ts` and `VITE_API_URL` in `.env` files match your repository name.

## Contributing

Feel free to open issues or submit pull requests to improve the template.

## License

MIT License