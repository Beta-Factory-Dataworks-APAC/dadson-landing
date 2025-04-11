# Dadson Website

This is a Next.js website for Dadson, a provider of premium home solutions.

## Project Overview

This website is built using Next.js with the App Router, TypeScript, and Tailwind CSS. The design is based on Figma designs provided by the client and implemented progressively to ensure complete adherence to the specified UI while maintaining responsiveness.

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Framer Motion**: For animations
- **React Icons**: For icons
- **Headless UI**: For accessible UI components

## Project Structure

```
dadson-website/
├── app/               # Next.js App Router
│   ├── components/    # React components
│   │   ├── layout/    # Layout components (Header, Footer, etc.)
│   │   └── ui/        # UI components (Button, Card, etc.)
│   ├── lib/           # Utility functions
│   └── styles/        # Global styles
├── public/            # Static assets
└── tailwind.config.js # Tailwind configuration
```

## Development Approach

The website is being built with a component-based approach, where the UI is broken down into reusable components. The design is implemented progressively, starting with the core layout and key sections of the homepage.

As we proceed, we will implement more complex features and integrate with the Figma design, component by component.

## Getting Started

### Prerequisites

- Node.js 18.x or later

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Design Integration

The design is being fetched from Figma and implemented page by page or component by component. The contact page implementation is pending client confirmation, as it's currently being designed.

## Deployment

The website can be deployed to various platforms like Vercel, Netlify, or a custom server.

## Architecture Decisions

- **App Router**: Using Next.js App Router for improved routing and layouts
- **Component Library**: Building a custom component library based on the client's design system
- **Responsive Design**: Ensuring all components work well on all device sizes
- **Performance Optimization**: Implementing best practices for performance

## Maintainers

This development is led by Claude agents with user input for core decision-making.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
