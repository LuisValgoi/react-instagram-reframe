# Origin
Project created during the OmnistackCourse from RocketSeat.

https://rocketseat.com.br/week-7/aulas

# Backend

### Dependencies
- `yarn init -y`: Initialized the project.
- `yarn add express`: Added the express as dependency.
- `yarn add nodemon`: Development dependency used to increase the developer tasks.
- `yarn add mongoose`: Library which helps us to manipulate data and database created using MongoDB.
- `yarn add multer`: Library which handles body of multipartdata and also automatize upload file process.
- `yarn add sharp`: Library which handles the image manipulation mainly by compressing the images.
- `yarn add cors`: Library which exposes app in `reactjs` being accessible by the frontend.
- `yarn add eslint -D`: Library which helps the developer to keep a code pattern. 

### Concepts & Commands
- `express()`: This function kind of creates a server on it.
- `'/users', (req, res) => {}`: Middleware / Routes. Kind of an interceptor for the route `/users`.
- `String ${req.some}`: The command `${}` access variables inside a string.
- `new express.Router()`: Used to manipulate and create routes.
- `new mongoose.Schema({})`: Specify the definition and table structure.
- `mongoose.model(sName, oStructure)`: Creates a representation of the given table.

# FrontEnd

### Dependencies
- `yarn create react-app`: It creates a initial react app folder with its default structure.
- `npx create-react-app`: It creates a initial react app folder with its default structure. [Link](https://github.com/facebook/create-react-app/issues/3614).
- `yarn add react-router-dom`: Used to manage routes and URLs inside browser.
- `yarn add axios`: Used to manage HTTP requests and turn my life eaiser.
- `yarn add socket.io-client`: Client Side Socket lib manager.

### Concepts & Commands
- `<div id="root"></div>`: All the `React` content goes on it.
- `<App />`: JSX Syntax. Mix of JavaScript and XML syntaxes.
- `App.js`: Component. Isolated Piece of Code w/ CSS, HTML and JS.
- `-webkit-font-smoothing: antialiased !important;` : Let the fonts of the browser more detailed.
- `import './something.js'`: Acessing a file within your application called `something.js`.
- `import 'something.js'`: Acessing a `npm` package installed in your application called `something.js`.
- `<BrowserRouter>`: Mandatory router from all the custom components.

# Database

### Link
https://cloud.mongodb.com/v2/5d00725a79358e8b4edec31a#clusters

### User
- type: `ADMIN` | login: `ADMIN` | password: `Initial1`
- type: `READ_WRITE` | login: `SEMANA` | password: `Initial1`
