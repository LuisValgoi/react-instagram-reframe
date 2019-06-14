# OmniStack Course
https://rocketseat.com.br/week-7/inscricao

# Dependencies
- `yarn init -y`: Initialized the project.
- `yarn add express`: Added the express as dependency.
- `yarn add nodemon`: Development dependency used to increase the developer tasks.
- `yarn add mongoose`: Library which helps us to manipulate data and database created using MongoDB.
- `yarn add multer`: Library which handles body of multipartdata and also automatize upload file process.
- `yarn add sharp`: Library which handles the image manipulation mainly by compressing the images.

# Executed Commands
- `express()`: This function kind of creates a server on it.
- `'/users', (req, res) => {}`: Middleware / Routes. Kind of an interceptor for the route `/users`.
- `String ${req.some}`: The command `${}` access variables inside a string.
- `new express.Router()`: Used to manipulate and create routes.
- `new mongoose.Schema({})`: Specify the definition and table structure.
- `mongoose.model(sName, oStructure)`: Creates a representation of the given table.


# Database

### Link
https://cloud.mongodb.com/v2/5d00725a79358e8b4edec31a#clusters

### User
- type: `ADMIN` | login: `ADMIN` | password: `Initial1`
- type: `READ_WRITE` | login: `SEMANA` | password: `Initial1`
