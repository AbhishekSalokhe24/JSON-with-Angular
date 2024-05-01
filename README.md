Importing JSON file Error Solved:
- ERROR: import * as data from '../assets/users.json';

##  Solved:
-- editing tsconfig.json file add this: 

 {
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true,
    // Other compiler options...
  }
}


Step 1. Create JSON Data File

Step 2. Create User Interface

Step 3. Create Bootstrap Table

Step 4. Update tsconfig J50N

Step 5. Run Angular App

Step 6. Add Bootstrap CDN in index.html to make a responsive design
