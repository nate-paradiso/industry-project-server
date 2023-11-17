const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:genre", (req, res) => {
  const videosFile = fs.readFileSync("./data/movies.json");
  const parsedVideos = JSON.parse(videosFile);
  const individualGenre = parsedVideos.find(genre => genre.genre === `${req.params.genre}`);

  if (!individualGenre) {
    res.status(404).send("Genre not found");
  }

  const moviesData = individualGenre.movies.map(movie => {
    return {
      title: movie.title,
      year: movie.year,
      image: movie.image,
      genre: individualGenre.genre,
    };
  });

  //   const movieGenre = individualGenre.movies.map(movie => movie.genre);
  res.json(moviesData);
});

module.exports = router;
