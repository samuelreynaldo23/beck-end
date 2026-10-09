// ============================
// NOSSA API DE CACHORROS
// ============================
//
// As fotos NÃO são baixadas automaticamente.
// Elas DEVEM existir manualmente na pasta data/fotos
// ============================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importa o framework Express para criar o servidor
const express = require("express");
// Importa o CORS para permitir requisições de outros domínios (ex: frontend)
const cors = require("cors");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");

// Cria a aplicação Express
const app = express();
// Porta onde o servidor irá rodar
const PORT = 3000;

// Habilita o CORS na aplicação
app.use(cors());

// ============================================
// SERVIR ARQUIVOS ESTÁTICOS
// ============================================
// Tudo o que estiver em data/fotos pode ser acessado pela URL /fotos
// Exemplo: http://localhost:3000/fotos/husky/1.jpg
app.use("/fotos", express.static(path.join(__dirname, "data/fotos")));

// ==========================================
// FUNÇÃO AUXILIAR
// ==========================================

// Recebe um array e retorna um item aleatório dele
function sortear(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

// ===============================================
// ROTAS DA API
// ===============================================

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
    // Pega todas as fotos de todas as raças em um único array
    const todasAsFotos = Object.values(cachorros).flat();

    if (todasAsFotos.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "Nenhuma foto cadastrada"
        });
    }

    // Sorteia uma foto aleatória
    const item = sortear(todasAsFotos);

    // Responde em JSON
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ROTA 2 - Cachorro por raça
// Exemplo: http://localhost:3000/api/cachorros/husky
app.get("/api/cachorros/:raca", (req, res) => {
    // Pega o parâmetro da URL e converte para minúsculas
    const raca = req.params.raca.toLowerCase();

    // Se a raça não existir ou não tiver fotos, retorna 404
    if (!cachorros[raca] || cachorros[raca].length === 0) {
        return res.status(404).json({
            status: "error",
            message: `Raça "${raca}" não encontrada`
        });
    }

    // Sorteia uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    // Retorna a resposta em JSON
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// =================================
// INICIA O SERVIDOR
// =================================

app.listen(PORT, () => {
    console.log(`🌎 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 Coloque as fotos manualmente na pasta data/fotos e atualize o arquivo data/dogs.json com as raças e fotos.`);
});