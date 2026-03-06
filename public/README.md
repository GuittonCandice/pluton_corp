# Public Assets

This directory contains static assets that are served by Next.js.

## Structure

- `/images/` - Images and photos for the website
- `/icons/` - Icon files (SVG, PNG, etc.)

## Usage in Next.js

You can reference files in this directory using paths starting with `/`:

```tsx
// Image example
<Image src="/images/logo.png" alt="Logo" width={100} height={100} />

// Icon example
<img src="/icons/favicon.svg" alt="Icon" />
```

## Notes

- Files in the `public` directory are served from the root URL (`/`)
- The directory name `public` should not be included in the URL path
- Use Next.js `Image` component for optimized images when possible
