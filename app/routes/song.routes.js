module.exports = app => {
    const song = require("../controllers/song.controller")
    const r = require("express").Router();

    r.get("/", song.findAll);
    r.get("/mostPlayed", song.sortAll);
    r.get("/:id", song.show);
    r.post("/", song.create);
    r.put("/:id", song.update);
    r.put("/:id/play", song.playSong);
    r.delete("/:id", song.delete);


    app.use("/playlist", r);

}