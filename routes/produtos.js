import express from 'express'

const router = express.Router()

const produtos = [
    {id: 1, nome: 'Mouse', preco: 50 },
    {id: 2, nome: 'Beijinho', preco: 40}
]
// [GET]
router.get("/", (req, res)=>{
    res.status(201).json(produtos)
})


// [POST] Adicionar um novo produto
router.post("/produto", (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto = {
        id: produtos[produtos.length -1].id + 1,
        nome: nome,
        preco: preco
    };
    produtos.push(novoProduto);
    res.status(201).json(produtos);
});

// [PUT] atualizar um produto pelo id
router.put("/produto/:id", (req, res)=>{
    const { id } = req.params
    const {novoNome, novoPreco} = req.body
  
    const indice = produtos.findIndex((produto)=>{
      return produto.id == parseInt(id)
    })
  
    if (indice === -1) {
      return res.status(404).json(
      { mensagem:"Produto não encontrado!" });
    }  
  
    produtos[indice].nome = novoNome
    produtos[indice].preco= novoPreco
    res.send(produtos)
  })

  // [DELETE] Remover um produto pelo ID
router.delete('/produtos/:id', (req, res) => {
    const {id}= req.params
    
    const index = produtos.findIndex((produto)=>{
      return produto.id == parseInt(id)
    })
    if (index === -1){
        return res.status(404).json(
        { message: 'Produto não encontrado' });
    }else{
      produtos.splice(index, 1)
      res.status(200).json(produtos)
    }
  })

// [GET]
/*
router.get('/produto/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
  
    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
  
    res.json(produto);
  });
*/

router.get("/buscarProduto/:id", (req, res) => {
    const { id } = req.params
    const indice = produtos.findIndex((produtos) => {
        return produtos.id == id
    })
    if(indice === - 1) {
        return res.status(404).json(
            {mensagem: "Usuário não encontrado!"}
        )
    }
    res.status(200).json(produtos[indice ])
})
export default router;
