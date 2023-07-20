
module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            tittle: String,
            artists: [String],
            url: String,
            playCount: Number,
        }, {
        timestamps: true,
    }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;


        return object;
    });

    return mongoose.model("song", schema);
}