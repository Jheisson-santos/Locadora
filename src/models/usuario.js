import db from "../db.js"
import bcrypt from "bcrypt"
const Schema = db.Schema

const userSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    aniversario:{
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,

    },
    senha:{
        type: String,
        required: true,
        minlength: 8
    },
    tipo:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    telefone:{
        type: [Number],
        required: true
    },
    endereco:{
        type: Object,
        required: true
    },
})

userSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next()
})

userSchema.methods.senhaCorreta = async function(senha){
    return compare = await bcrypt.compare(senha, this.senha)
}

const User = db.model('User', userSchema)
export default User