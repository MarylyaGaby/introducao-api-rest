import express from 'express'
const app = express()

//Permitir ler JSON no corpo da requisição
app.use(express.json())

const port = 3000
//Banco de dados Fake (em memória)
const usuarios = [
  {id: 1, nome: 'João', email:"joao@email.com"},
  {id: 2, nome: 'Ana', email:"ana@email.com"},
]


app.get("/", (req, res) => {  
  res.send('Bem vindo a minha API!')
})
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
/*s
/**
 * Crie uma rota(endpoint) do tipo get que
 * envie uma resposta (mensagem) com todos os
 * usuários cadastrados no "banco de dados fake"
 */

app.get('/usuarios', (req, res) => {
  res.send(usuarios);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*app.post("/criarUsuario", (req, res)=> {
  const {nome, sobrenome} = req.body
  res.send(`Nome: ${nome} | Sobrenome: ${sobrenome}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
