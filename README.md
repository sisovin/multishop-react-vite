# MultiShop React Vite

A modern e-commerce platform built with React, Vite, and Firebase.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design for all devices
- Product catalog with filtering and search
- User authentication and profile management
- Shopping cart and checkout process
- Order history and tracking
- Admin dashboard for product management
- Real-time updates with Firebase

## Demo

[Live Demo](https://multishop-react-vite.web.app)

## Tech Stack

- **Frontend**: React, Redux Toolkit, React Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication, Storage)
- **Deployment**: Firebase Hosting

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/multishop-react-vite.git
    cd multishop-react-vite
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn
    ```

3. Set up environment variables:
    - Create a `.env` file based on `.env.example`
    - Add your Firebase configuration

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
multishop-react-vite/
├── README.md
├── package.json
├── pnpm-workspace.yaml
├── .github/                         # GitHub Actions workflows for CI/CD
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── packages/
│   ├── shared/                      # Shared code and types
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── types/               # Shared TypeScript types
│   │   │   ├── utils/               # Common utilities
│   │   │   ├── hooks/               # Shared React hooks
│   │   │   └── services/            # API service layers
│   │   └── dist/                    # Built output
│   │
│   ├── ui/                          # Shared UI components/library
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── styles/
│   │   │   └── index.ts
│   │   └── dist/
│   │
│   └── eslint-config/               # Shared ESLint configuration
│       ├── package.json
│       └── index.js
│
├── apps/
│   ├── frontend-web/                # Web application (Vite)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── .env.development
│   │   ├── .env.staging
│   │   ├── .env.production
│   │   ├── vite.config.ts
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │       ├── main.tsx
│   │       ├── App.tsx
│   │       ├── components/
│   │       ├── pages/
│   │       ├── store/
│   │       ├── assets/
│   │       └── styles/
│   │
│   ├── frontend-lynx/               # Lynx application
│   │   ├── package.json  
│   │   ├── tsconfig.json
│   │   ├── .env.development
│   │   ├── .env.staging
│   │   ├── .env.production
│   │   ├── rsbuild.config.ts
│   │   ├── public/
│   │   └── src/
│   │       ├── main.tsx
│   │       ├── App.tsx
│   │       ├── components/
│   │       ├── pages/
│   │       ├── store/
│   │       ├── assets/
│   │       └── styles/
│   │
│   ├── backend/                # Backend application
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── config/               # Environment and app configurations
│   │   │   │   ├── env.ts            # Load environment variables
│   │   │   │   ├── redis.ts          # Redis connection config
│   │   │   │   └── corsOptions.ts    # CORS configuration
│   │   ├── server.ts             # Main entry point
│   │   ├── routes/               # API routes definitions
│   │   │   ├── auth.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   └── index.ts          # Route aggregator
│   │   ├── controllers/          # Request handlers
│   │   │   ├── auth.controller.ts
│   │   │   └── user.controller.ts
│   │   │   ├── services/             # Business logic
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── user.service.ts
│   │   │   ├── middlewares/          # Custom middleware
│   │   │   │   ├── auth.middleware.ts
│   │   │   │   └── error.middleware.ts
│   │   │   ├── utils/                # Utility functions
│   │   │   │   ├── password.ts       # Argon2 password handling
│   │   │   │   └── token.ts          # JWT token handling
│   │   │   └── types/                # TypeScript type definitions
│   │   │    └── index.ts
│   │   ├── prisma/                   # Prisma ORM
│   │   │   ├── schema.prisma         # Database schema
│   │   │   ├── migrations/           # Database migrations
│   │   │   └── seed.ts               # Seed script for dev data
│   │   └── tests/                    # Test files
│   │       ├── unit/
│   │       └── integration/          # Integration tests
│
└── docker/                          # Docker configuration
    ├── docker-compose.yml           # Development environment
    ├── docker-compose.prod.yml      # Production environment
    └── services/
        ├── postgres/
        └── redis/
```

## Configuration

### Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication, Firestore, and Storage
3. Add your configuration to `.env` file:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Deployment

### Firebase Deployment

1. Install Firebase CLI:
    ```bash
    npm install -g firebase-tools
    ```

2. Login to Firebase:
    ```bash
    firebase login
    ```

3. Initialize Firebase project:
    ```bash
    firebase init
    ```

4. Build the project:
    ```bash
    npm run build
    ```

5. Deploy to Firebase:
    ```bash
    firebase deploy
    ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.