# EventFlowStudio Website

A professional marketplace website connecting DJs with Event Coordinators.

## Tech Stack

- **Frontend:** React 19
- **Styling:** Tailwind CSS + Shadcn UI
- **Fonts:** Space Grotesk (headings) + Inter (body)
- **Icons:** Lucide React

## Features

- Navy blue + Neon cyan professional design
- Fully responsive (mobile + desktop)
- Smooth scroll navigation
- 5 core platform features
- Pricing information ($20/month + $5 convenience fee)
- FAQ section
- App store download badges

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## Deployment

This project is configured for Vercel deployment. See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   ├── index.css        # Design system tokens
│   └── index.js
├── package.json
├── tailwind.config.js
└── vercel.json          # Vercel configuration
```

## Design System

The website uses a custom design system with:
- HSL color tokens for navy blue and neon cyan
- Consistent spacing and typography
- Custom gradients and glow effects
- Smooth transitions

## Contact

support@eventflowstudio.com

## License

© 2024 EventFlowStudio. All rights reserved.
