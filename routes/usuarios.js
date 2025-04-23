import express from 'express'

const router = express.Router();

//Banco de dados Fake (em memória)
const usuarios = [
  {id: 1, nome: 'João', email:"joao@email.com"},
  {id: 2, nome: 'Ana', email:"ana@email.com"},
]


/**
 * Crie uma rota(endpoint) do tipo get que
 * envie uma resposta (mensagem) com todos os
 * usuários cadastrados no "banco de dados fake"
 */

router.get('/usuarios', (req, res) => {
    //res.json(usuarios);
    res.status(200).json(usuarios)
  });
  
  //Rota cria Usuario
  router.post("/criarUsuario", (req, res)=> {
    // adicionar o usuario no banco de dados fake (lista)
    const {nome, email} = req.body
  
    const novoUsuario = {
      id : usuarios[usuarios.length-1].id + 1,
      nome: nome,
      email: email
    };
  
    usuarios.push(novoUsuario)
    
    res.status(201).json(usuarios)
  })
  
  /**
   * Faça uma rota para deletar um usuário de acordo com o id
   * recebido por parâmetro
   * Método: DELETE
   * Endpoint /usuario/:id
   * 
   * Resposta: a lista de usuáriois atualizada
   * (usuário)
   * dica: use o splice() para remover o usuário da lista
   */
  
  router.delete('/usuario/:id', (req, res) => {
    //const id = parseInt(req.params.id); 
    
    const { id } = req.params
  
    const index = usuarios.findIndex((usuario)=>{
      return usuario.id == parseInt(id)
    })
    if (index === -1){
        res.send("Usuário não encontrado!")
    }else{
      usuarios.splice(index, 1)
      res.send(usuarios)
    }
  })
  
  
  
  
  
  //Rota criar usuario
  router.post("/criarUsuario", (req, res)=> {
    const {nome, email} = req.body
  //Adicionar o usuário no banco de dados fake(lista)
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: nome,
    email: email
  };
  //[usuarios.lenght-1].id + 1
  usuarios.push(novoUsuario)
  
    res.send(usuarios)
  })
  

  
  router.put("/usuario/:id", (req, res)=>{
    const { id } = req.params
    const {novoNome, novoEmail} = req.body
    //const usuario = usuarios.find(
      //  usuario => usuario.id === parseInt(id)
    //)
   // usuario.nome = novoNome
    //usuario.email = novoEmail
  
    //res.send(usuario)
  
    const indice = usuarios.findIndex((usuario)=>{
      return usuario.id == id
    })
    //if indice === -1, dê como resposta da requisição
    // o status 404
      if(indice === -1){
         return res.status(404).json(
          {mensagem: "Usuário não encontrado!"})
      }
  
    usuarios[indice].nome = novoNome
    usuarios[indice].email = novoEmail
  
    res.send(usuarios)
    /*res.send(
      `id: ${id}
      novo nome: ${novoNome}
      novo email: ${novoEmail}
      `)*/
  })

export default router 