# Set-up instructions

1. npm init -y
2. npm i express cors dotenv pg
3. Added "type": "module" and "dev": "node server" to package.json
4. Create a .env file
5. Create a .gitignore and add node_modules and .env in it
6. Create a server.js file to write our server --> see more instructions in the server.js file
   ...
   Once your server is set up, you can do npm run dev in the terminal to check if your root route is working correctly.
   You can check your root endpoint in the browser or Thunder Client.
   You can only check GET endpoints in the browser.

- Extras:

1. You can have a seed.js file to store your sql queries creating new tables and inserting seed data. You run this file with "node seed"
