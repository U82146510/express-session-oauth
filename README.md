# Express Authentication with GitHub OAuth

This project demonstrates user authentication using GitHub OAuth in an Express.js application.

## Features
- GitHub OAuth authentication using Passport.js
- User authorization middleware
- Session-based authentication
- Protected routes for authorized users
- Logout functionality

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2.Install dependencies:

npm install
3.Create a .env file and configure your GitHub OAuth credentials:

GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret
SESSION_SECRET=your-session-secret
4.Run the application:

npm run dev

How It Works

    User clicks the GitHub login button, which redirects to GitHub's OAuth page.
    GitHub authenticates the user and redirects back to /auth/github/callback.
    Passport.js processes the authentication and creates a session.
    Users can access the /dashboard route only if authenticated.
    /logout route clears the session.

Dependencies

    Express.js - Web framework for Node.js
    Passport.js - Authentication middleware
    express-session - Manages user sessions
    dotenv - Loads environment variables
