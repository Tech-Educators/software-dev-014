# Planning

## "Those who fail to plan, plan to fail" – Ashir 2024 / Joe 2024 / Benjamin Franklin sometime

- **Plan your wireframe** --> Ok so, Excalidraw

  - What does my app look like from the user's perspective?

- **Plan your database schema** --> DrawSQL OR Figma UML diagrams
  - What data do I need to store?
  - Based on the data, how many tables do I need to organise my data efficiently?
    - _If you have two or more tables, what's the relationship between them?_
    - _How do I connect the tables? Do I need foreign keys? Do I need junction tables?_
- **Set up your tables in a database in Supabase**
  - Create a project (database), if you don't have one already
  - Use the SQL editor to create your tables and insert seed data (add them to a seed file for us to see them when we mark)
    - _You can also use the seed.js file to create and seed your tables_
- **Set up a server**
  - Check server.js for some comments
- **Set up a client**
  - Check client folder for some comments
  - Once you have finished your app and your deployment is ready, replace your local host urls with the Render urls
- **Upload to GitHub and deploy to Render**
