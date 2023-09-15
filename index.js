var express = require("express");
const cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  // https://serpapi.com/search.json?engine=youtube&search_query=star+wars

  const SerpApi = require("google-search-results-nodejs");
  const search = new SerpApi.GoogleSearch(
    "c69da876ceca08c43d786b21cd54dd0f10e0e9fdf252643a34a67d3fcd3ffb38"
  );
  const searchThing = req.body.search1;
  console.log("search thing is: ", searchThing);
  const params = {
    engine: "youtube",
    search_query: searchThing,
  };

  const callback = function (data) {
    console.log("idhar se aaya ye: ", data["movie_results"]);
    res.send(data["video_results"]);
  };

  // Show result as JSON
  search.json(params, callback);
  //   res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
