# STEP 1: Install clerk package (npm i @clerk/nextjs)

# STEP 2: Configure your .env.local file with the clerk keys

- You can find your clerk keys in the API Keys section in the clerk website
- Your .env.local file goes in the root

# STEP 3: Configure your middleware file

- Save your middleware.js file in **src**
- Copy the middleware template from the docs --> https://clerk.com/docs/references/nextjs/clerk-middleware

# STEP 4: Add the clerk provider to our app

- The ClerkProvider goes in the app layout.js so our whole app has access to clerk
- Wrap all your app DOM elements with the ClerkProvider component

# STEP 5: Set up protected and public routes

- If a route is protected, we need to be authenticated to see the content
- If a route is public, you can access the content without authentication
- To decide:

  - What content do I want to protect?
  - What is the user experience like?
    - _Example_: if I protect the home page and the posts page, then I need a sign-up/login page to greet the user
    - _Example_: you an have your home page public and add a login element for users to authenticate themselves
    - _Example_: both home and posts can be public, so the user is authorise to read all data; however, they might need to authenticate to be authorised to create new data

- To set up your protected routes, you need to configure your middleware

# STEP 6: Create sign-in and sign-up pages

- We need new route folders and catch-all dynamic routes
  [[...sign-in]] [[...sign-up]]
- The pages are nested into the dynamic folder
- Import the SignIn and SignUp components and add them to your respective pages

# STEP 7: Set up a redirect to the home page once the user signs-in or signs-up

- Set up a redirect in the .env.local file

# STEP 8: Add more Clerk components

- UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut
- auth --> to collect userId
