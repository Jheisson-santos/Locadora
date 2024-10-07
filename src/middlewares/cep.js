import axios from  "axios"

const cep = async (req, res, next)=>{
    let numero_da_casa = parseInt(req.body.numCasa)
    req.body.cep = req.body.cep.replace("-","", ".", "")
    if(req.body.cep != undefined && req.body.cep.length == 8 && !isNaN(req.body.cep) && !isNaN(numero_da_casa)){
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then((response)=>{
            
        
            const {localidade, uf, bairro, logradouro, estado} = response.data
            req.body.endereco = {localidade, uf, bairro, logradouro, estado, numero_da_casa}

            delete req.body.cep
            

            next()
        })
    }
}

export default cep