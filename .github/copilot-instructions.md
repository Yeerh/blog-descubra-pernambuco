# AI Coding Agent Guidelines for Blog Descubra Pernambuco

## Project Overview
This project is a tourism-focused blog built with React, TypeScript, and Tailwind CSS. It uses Vite as the build tool and Supabase for backend services. The application is structured to highlight destinations, posts, and interactive features like carousels and maps.

### Key Directories and Files
- **`src/pages`**: Contains the main pages of the application (e.g., `Home.tsx`, `Blog.tsx`).
- **`src/components`**: Reusable UI components and feature-specific components.
- **`src/lib/supabaseClient.ts`**: Handles Supabase integration.
- **`src/data/posts.ts`**: Mock data for posts.
- **`vite.config.ts`**: Configuration for Vite.
- **`tailwind.config.js`**: Tailwind CSS configuration.

## Development Workflow
1. **Install Dependencies**: Run `npm install` to install required packages.
2. **Start Development Server**: Use `npm run dev` to start the Vite development server.
3. **Build for Production**: Run `npm run build` to create a production build.
4. **Preview Production Build**: Use `npm run preview` to preview the production build locally.

## Project-Specific Conventions
- **Component Organization**: Components are categorized into `ui` (generic UI elements) and feature-specific components.
- **Styling**: Tailwind CSS is used for styling. Utility classes are preferred over custom CSS.
- **Data Fetching**: Supabase is used for fetching data. Refer to `src/lib/supabaseClient.ts` for the client setup.
- **Routing**: React Router is used for navigation. Links are defined using the `Link` component.

## Integration Points
- **Supabase**: Used for fetching posts and other data. Ensure the `.env` file contains the correct Supabase credentials.
- **Google Maps**: An interactive map is embedded in the `Home.tsx` page.
- **Video and Images**: Hosted assets are used for videos and images. Ensure URLs are correct.

## Patterns and Best Practices
- **Error Handling**: Log errors to the console and provide user-friendly messages (e.g., "Erro ao carregar notícias").
- **Responsive Design**: Use Tailwind's responsive utilities to ensure the app works on all screen sizes.
- **Code Splitting**: Keep components small and focused. Use lazy loading for routes if necessary.

## Example: Adding a New Page
1. Create a new file in `src/pages` (e.g., `About.tsx`).
2. Define the component and export it.
3. Add a route in the appropriate navigation component or router configuration.

## Troubleshooting
- **Development Server Fails**: Ensure all dependencies are installed and the `.env` file is correctly configured.
- **Styling Issues**: Check the Tailwind configuration and ensure classes are applied correctly.
- **Data Fetching Errors**: Verify Supabase credentials and network connectivity.

## Additional Notes
- Follow the existing code style and structure.
- Use meaningful commit messages when making changes.
- Refer to the README.md for more details on project setup and usage.