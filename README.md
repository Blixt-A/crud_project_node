This repository contains a Movie API that are using Express.js. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on movie data. It also includes API keys that you can moderate by adding new keys and removing existing ones. 

## Installation

1. Clone the repository:
git clone git@github.com:Blixt-A/crud_project_node.git

2. Install the dependencies:
npm install

## Usage

1. Start the server by running `npm run dev` 
2. The server will be running on `http://localhost:8000`.

## Endpoints movies.js ##

### GET /movies
Returns a list of all movies.

### GET /movies/:imdbID
Returns a movie by IMDb ID.

### DELETE /movies/:imdbID
Deletes a movie by IMDb ID.

### POST /movies
Adds a new movie.

### PUT /movies/:imdbID
Updates an existing movie by IMDb ID.

## Validation
The API performs validation on the incoming data for the POST and PUT endpoints. The following validations are applied:
- The fields `Title`, `Year`, `Released`, and `Genre` must be filled in.
- The `Year` field value must be a valid year (four digits).

## Data Source
The API uses a mock data source to store the movie data. The initial data is provided in the `mockData.js` file. You can modify this file to add, remove, or update movies as needed.

## API key Endpoints ##

### 1. POST /apiKeys
This endpoint is used to add a new API key to the list of valid keys.

- Request:
  - Method: POST
  - URL: `http://localhost:8000/apiKeys`
  - Body: { "apiKey": "YOUR_API_KEY" }

- Response (if succesfully added):   
  - Body: { "message": "API key added successfully." } 

### 2. DELETE /apiKeys
This endpoint is used to remove an existing API key from the list of valid keys.

- Request:
  - Method: DELETE
  - URL: `http://localhost:8000/apiKeys`
  - Body: { "apiKey": "YOUR_API_KEY" }

- Response (if succesfully removed):
  - Body: { "message": "API key removed successfully." }

# Testing with Postman

    1. Installation: 
    First, make sure you have Postman installed on your machine. You can download it from `https://www.postman.com/downloads/` and follow the installation instructions.

    2. Launch Postman: 
    Once installed, launch Postman on your computer.

## Testing CRUD for movies:

To test the CRUD operations for movies.js, you need to set the appropriate request method (GET, POST, PUT, DELETE) and URL for the specific endpoint you want to test.

1. Make sure the server is running by executing npm run dev in the project directory.

2. Open Postman.

- Replace `YOUR_API_KEY` with a valid API key from the list of valid keys.

   ### To retrieve a list of all movies:
    1. Set the request method to GET.
    2. Set the URL to http://localhost:8000/movies?apiKey=YOUR_API_KEY
    3. Click the Send button.

    - The response will contain a list of all movies in the API.
 
    ### To receive one movie by imdbID:
    1. Set the request method to GET.
    2. Set the URL to `http://localhost:8000/movies/:imdbID?apiKey=YOUR_API_KEY`, replacing :imdbID with the actual imdbID of the movie you want to retrieve.
    3. Click the Send button.

    - The response will contain the movie with the specified imdbID.
    
    ### To add a new movie:
    1. Set the request method to POST.
    2. Set the URL to `http://localhost:8000/movies?apiKey=YOUR_API_KEY`.
    3. Add a request body with the movie data in JSON format. 
    
    For example:
    {
    "Title": "Your Movie Title",
    "Year": "2023",
    "Released": "2023-05-17",
    "Genre": "Action"
    }

    4. Set the Content-Type header to application/json.
    5. Click the Send button.

    - The response will contain the newly added movie.

    ### Update an existing movie by imdbID
    1. Set the request method to PUT.
    2. Set the URL to `http://localhost:8000/movies/:imdbID?apiKey=YOUR_API_KEY`, replacing :imdbID with the actual imdbID of the movie you want to update.
    3. Add a request body with the updated movie data in JSON format. 
    
    For example:
    {
    "Title": "Updated Movie Title",
    "Year": "2023",
    "Released": "2023-05-17",
    "Genre": "Drama"
    }

    4. Set the Content-Type header to application/json.
    5. Click the Send button.

    - The response will contain the updated movie.

    ####Delete a movie by imdbID:
    1. Set the request method to DELETE.
    2. Set the URL to `http://localhost:8000/movies/:imdbID?apiKey=YOUR_API_KEY`, replacing :imdbID with the actual IMDb ID of the movie you want to delete.
    3. Click the Send button.

    - The response will confirm whether the movie was successfully deleted.

    ## Testing API Keys Functionality:
    
    ### Add a new API key
    1. Set the request method to POST.
    2. Set the URL to `http://localhost:8000/apiKeys `,
    3. Set the Content-Type header to application/json.
    3. Add a request body with the following format:
    { "apiKey": "YOUR_NEW_API_KEY" } 
    4. Click the Send button

    The response will indicate whether the API key was successfully added.

    ### Remove an existing API key:
    1. Set the request method to DELETE.
    2. Set the URL to `http://localhost:8000/apiKeys`.
    3. Set the Content-Type header to `application/json.
    4. Add a request body with the following format:
      {
        "apiKey": "API_KEY_TO_REMOVE"
      }
    5. Click the Send button.
    
    - The response will indicate whether the API key was successfully removed.