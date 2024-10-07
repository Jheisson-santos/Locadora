import db from "../db.js"
const Schema = db.Schema

const filmeSchema = new Schema({
    filme:{
        type: String,
        required: true
    },
    lancamento:{
        type: String,
        required: true
    },
    diretor:{
        type: String,
        required: true
    },
    idadeIndc:{
        type: String,
        require: true
    }
})

const Filme = db.model('Filme', filmeSchema)

export default Filme