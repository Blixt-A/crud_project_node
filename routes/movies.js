const express = require("express");
const router = express.Router();
const mockData = require("../mockData");
let movies = mockData;

// Function to validate movie fields
function validateMovieFields(movie) {
  const { Title, Year, Released, Genre } = movie;
  if (!Title || !Year || !Released || !Genre) {
    return false;
  }
  const validYear = /^\d{4}$/.test(Year);
  if (!validYear) {
    return false;
  }
  return true;
}

router.get("/", (req, res) => {
  res.json(movies);
});

// FIND MOVIE

router.get("/:imdbID", (req, res) => {
  const imdbID = req.params.imdbID;
  const movie = movies.find((mov) => mov.imdbID === imdbID);

  if (!movie) {
    return res.status(404).json({ message: "This movie does not exist" });
  }
  res.json(movie);
});

// DELETE MOVIE

router.delete("/:imdbID", (req, res) => {
  const imdbID = req.params.imdbID;
  const movie = movies.find((movie) => movie.imdbID === imdbID);

  if (!movie) {
    return res.status(404).json({ message: "No movie with this ID" });
  }

  const newData = movies.filter((movie) => movie.imdbID !== imdbID);
  movies = newData;

  res.json({ message: "Movie is deleted" });
});

// ADD MOVIE

let nextID = 301;
router.post("/", (req, res) => {
  const movie = req.body.movie;

  const isValidMovie = validateMovieFields(movie);
  if (!isValidMovie) {
    return res.status(400).json({ message: "Invalid movie data" });
  }

  const newMovie = {
    ...movie,
    imdbID: nextID.toString(),
  };

  nextID++;

  movies.push(newMovie);
  res.json(newMovie);
});

// EDIT MOVIE

router.put("/:imdbID", (req, res) => {
  const imdbID = req.params.imdbID;
  const movie = req.body.movie;
  const index = movies.findIndex((movie) => movie.imdbID === imdbID);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "Movie does not exist!" });
  };

  const isValidMovie = validateMovieFields(movie);
  if (!isValidMovie) {
    return res.status(400).json({ message: "Invalid movie data" });
  };

  const updatedMovie = {
    ...movies[index],
    ...movie,
  };

  movies[index] = updatedMovie;
  res.json(updatedMovie);
});

module.exports = router;