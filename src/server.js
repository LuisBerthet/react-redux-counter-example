import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config";

//Initializing package
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

//Routes
app.get("/api", (req, res) => {
    res.json({api: "it works"});
});

//Start the server
app.listen(app.get("port"), () => {
    console.log("server on port ", app.get("port"))
});



