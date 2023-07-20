const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOptions = {
    origin: "*"
}

//register corps middleware
app.use(cors(corsOptions));
app.use(express.json());

//konek database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log(`gagal konek ${err.message}`);
        process.exit();
    })

//memanggil route mahasiswa

require("./app/routes/song.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));