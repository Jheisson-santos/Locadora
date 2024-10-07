import Filme from "../models/filme.js"

const store = async (req, res)=>{
    try{
        const content = await Filme.create(req.body)
        res.status(201).json(content)
     }catch(err){
        res.status(400).json('Erro ao cadastrar o filme')
        console.log(err);
    }
}

const index = async (req, res)=>{
    try{
        const content = await Filme.find()
        res.status(200).json(content)
     }catch(err){
        res.status(400).json('Erro ao buscar os filmes')
        console.log(err);
    }
}

const show = async (req, res)=>{
    try{
        const content = await Filme.findById(req.params.id)
        res.status(200).json(content)
     }catch(err){
        res.status(400).json('Erro ao buscar o filme')
        console.log(err);
    }
}

const update = async (req, res)=>{
    try{
        const content = await Filme.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(content)
     }catch(err){
        res.status(400).json('Erro ao atualizar o filme')
        console.log(err);
    }
}

const destroy = async (req, res)=>{
    try{
        const content = await Filme.findByIdAndDelete(req.params.id)
        res.status(200).json(content)
     }catch(err){
        res.status(400).json('Erro ao deletar o filme')
        console.log(err);
    }
}

export default {store, index, show, update, destroy}