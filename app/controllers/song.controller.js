const db = require("../models")
const Song = db.song


exports.create = (req, res) => {

    req.body.playCount = 0;

    Song.create(req.body)
        .then(() => res.send({ message: "Lagu berhasil disimpan" }))
        .catch((err => res.status(500).send({ message: err.message })));
}

exports.findAll = (req, res) => {
    Song.find()
        .then(data => {

            res.send(data.sort((a, b) => b.playCount - a.playCount))


        })
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.show = (req, res) => {
    const id = req.params.id;

    Song.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.playSong = (req, res) => {
    const id = req.params.id;

    Song.findByIdAndUpdate(id, { $inc: { 'playCount': 1 } })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Lagu tidak ada" })
            }
            res.send({
                message: `Lagu diputar `,
                url: `${data.url}`,
                playCount: `${data.playCount}`,
            })


        })
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.update = (req, res) => {
    const id = req.params.id;

    Song.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Lagu tidak ada" })
            }
            res.send({ message: "Lagu berhasil diupdate" })
        })
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Song.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Tidak dapat menghapus lagu" })
            }

            res.send({ message: "Data berhasil dihapus" })
        })

        .catch(err => res.status(500).send({ message: err.message }));

}

