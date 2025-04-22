import express from 'express'

import usuariosRoutes from './routes/usuarios.js'

import fornecedoresRoutes from "./routes/fornecedores.js"

const app = express()

//Permitir ler JSON no corpo da requisição
app.use(express.json())
// Adiciona o roteador de usuários
app.use("/usuarios", usuariosRoutes)

// Adiciona o roteador de fornecedores
app.use("/fornecedores", fornecedoresRoutes)

const port = 3000


app.get("/", (req, res) => {  
  res.send('Bem vindo a minha API!')
})
// Rota inicio
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log("Example app listening on port ${port}")
})