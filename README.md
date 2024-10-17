# Marathon Frontend

The Marathon frontend is a React-based web application designed to improve sales productivity for HealthTech sales teams. It integrates with the Marathon platform to provide real-time insights, automated onboarding, and a centralized AI-powered knowledge database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building the App](#building-the-app)
- [Testing](#testing)
- [Version Control](#version-control)
- [Contributing](#contributing)

## Features

- **Sales Dashboard**: Displays recent sales calls, suggested next steps, and relevant sales metrics.
- **Real-Time Transcription**: Upload and transcribe sales calls.
- **AI-Suggested Next Steps**: Tailored follow-up tasks based on sales call data and CRM integration.
- **Knowledge Database**: Search for strategies and insights from top-performing sales reps.
- **User Authentication**: Secure login and user management.
- **Integration with Salesforce**: Sync call data and action items directly with Salesforce.
  
## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- AWS Cognito User Pool (for user authentication)
- Access to the Marathon API (for backend integration)

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/marathon-frontend.git
cd marathon-frontend


### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```env
REACT_APP_API_URL=https://api.yourmarathonapp.com
REACT_APP_COGNITO_USER_POOL_ID=your-cognito-user-pool-id
REACT_APP_COGNITO_CLIENT_ID=your-cognito-client-id
REACT_APP_COGNITO_REGION=your-cognito-region
REACT_APP_SALESFORCE_API_KEY=your-salesforce-api-key
```

## Usage

### Running the App Locally

```bash
npm start
```

This will start the development server and open the app in your default browser. You can access it at [http://localhost:3000](http://localhost:3000).

### User Authentication

Sign up or log in using AWS Cognito. Once authenticated, you'll have access to the sales dashboard and other features.

## Project Structure

```plaintext
marathon-frontend/
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── SalesCall.js
│   │   └── KnowledgeBase.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Transcriptions.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
├── .env
├── .eslintrc.js
├── README.md
```

- **components/**: Reusable React components such as the dashboard, sales call interface, and knowledge base.
- **pages/**: React components corresponding to different pages in the app (e.g., login, home).
- **services/**: API service layer for making HTTP requests to the backend.
- **styles/**: Global styles for the app, including any custom CSS.
- **App.js**: Main application component.
- **index.js**: Entry point for the app.
- **.env**: Environment variables for API URLs and authentication.

## Development

### Running in Development Mode

```bash
npm run dev
```

This will start the development server with hot reloading, allowing you to see changes in real-time.

### Scripts

- `npm run dev`: Start the app in development mode with hot reloading.
- `npm run build`: Build the app for production.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run lint:fix`: Automatically fix linting issues.

## Building the App

To build the app for production:

```bash
npm run build
```

The output will be in the `build` directory, ready to be deployed to your server or hosting provider.

## Testing

Currently, the project uses Jest and React Testing Library for unit and integration tests.

### Run Tests

```bash
npm run test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

## Version Control

### Git Workflow

We follow the GitFlow branching model:

#### Main Branches

- `main`: Contains production-ready code.
- `develop`: Integration branch for features.

#### Supporting Branches

- `feature/*`: For developing new features.
- `bugfix/*`: For fixing bugs in the develop branch.
- `release/*`: Preparation for a new production release.
- `hotfix/*`: Critical fixes in the main branch.

### Branch Naming Conventions

#### Feature Branches

```bash
git checkout -b feature/short-feature-description
```

#### Bugfix Branches

```bash
git checkout -b bugfix/short-bug-description
```

### Commit Messages

We use the Conventional Commits specification:

#### Format

```plaintext
<type>(optional scope): <description>

[optional body]

[optional footer(s)]
```

#### Types

- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation changes.
- `style`: Code style changes (formatting, missing semi-colons).
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `test`: Adding or updating tests.
- `chore`: Changes to the build process or auxiliary tools.

#### Examples

```plaintext
feat: add AI-powered next step suggestions

fix(dashboard): resolve issue with sales call listing
```

### Pull Requests

- All changes must go through a pull request.
- Code must be reviewed and approved by at least one other team member.
- Ensure all checks pass before merging.

## Contributing

We welcome contributions! Please follow these steps:

### Fork the Repository

Click on the 'Fork' button at the top right of the repository page.

### Clone Your Fork

```bash
git clone https://github.com/yourusername/marathon-frontend.git
cd marathon-frontend
```

### Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### Make Your Changes

### Commit Your Changes

```bash
git commit -m "feat: description of your feature"
```

### Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### Create a Pull Request

1. Go to the original repository on GitHub.
2. Click on 'New Pull Request'.
3. Select your branch and create the pull request.
