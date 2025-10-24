/* Variáveis para facilitar a manutenção */
:root {
    /* Define o tamanho da célula do novo estilo (40px) */
    --tamanho-celula: 35px; 
    /* Cor principal do tema (Roxo) */
    --cor-principal: #9032bb;
    /* Um amarelo/creme suave para destacar a âncora */
    --cor-ancora: #fff9c4;
    --cor-fundo-body: #f5f7fa; /* Cor clara do gradiente do body */
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    /* Novo Gradiente de Fundo */
    background: linear-gradient(135deg, #f5f7fa 0%, var(--cor-principal) 100%);
    color: #333;
    min-height: 100vh;
    margin: 0; /* Removido o margin de 20px para melhor visualização */
    padding: 20px;
}

h1 {
    color: var(--cor-principal);
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

/* Estilo para o container principal que contém a grade e as dicas (Novo layout) */
.jogo-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    margin-top: 30px;
    flex-wrap: wrap;
}

/* -------------------------------------- */
/* ESTILOS DA GRADE CRUZADINHA (DIV GRID) */
/* -------------------------------------- */

/* Estilo para o container principal da grade */
#grade-cruzadinha {
    display: grid;
    /* Adaptado para CSS Grid */
    border-collapse: collapse; 
   border: none; /* Agora sem borda */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: none;
    /* Mantido o fundo transparente para funcionar com células vazias */
   background-color: var(--cor-fundo-body); 
    margin: 0 auto;
}

/* Estilo para cada célula (quadrado de letra) da cruzadinha */
.celula {
    width: var(--tamanho-celula);
    height: var(--tamanho-celula);
    
    border: 1px solid var(--cor-principal); /* Borda da célula */
    
    /* Centraliza o conteúdo (input e número) */
    display: flex;
    align-items: center;
    justify-content: center
    overflow: hidden;
    background-color: #fff; /* Fundo branco da célula ocupada */
    position: relative; /* ESSENCIAL: Permite posicionar o número da dica ABSOLUTAMENTE */
   background-color: var(--cor-fundo-body);
   background-color: var(--cor-fundo-body); 
}


/* Células que não contêm palavras (Novo visual: Fundo roxo escuro) */
.celula.vazia {
   background-color: transparent !important; 
    border: 1px solid transparent !important;
}

/* Estilo para o campo de input dentro da célula */
.celula input {
    width: 100%;
    height: 100%;
    
    box-sizing: border-box; 
    
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    
    /* Estilo do Texto digitado (Novo visual: Roxo principal) */
    color: var(--cor-principal); 
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    
    background-color: transparent; 
}

/* Destaque visual do input focado (Novo visual: Sombra azul) */
.celula input:focus {
    background-color: #e3f2fd;
    box-shadow: 0 0 0 2px #3498db;
}

/* Destaque visual da Palavra Âncora */
.celula.palavra-ancora {
    background-color: var(--cor-ancora) !important; 
    border: 2px solid #A08D00 !important; 
}

/**
 * Estilo para a numeração discreta no canto superior esquerdo (adaptado para .numero-dica)
 */
.numero-dica {
    /* Posicionamento ABSOLUTO em relação à célula pai (.celula) */
    position: absolute; 
    font-size: 10px;
    font-weight: bold;
    top: 2px; 
    left: 2px; 
    color: #7f8c8d; /* Cor discreta para o número */
    z-index: 2; /* Garante que fique acima do input */
    pointer-events: none; /* Garante que o número não atrapalhe o clique/foco no input */
}

/* -------------------------------------- */
/* ESTILOS DE FEEDBACK (CORRETO/INCORRETO)*/
/* -------------------------------------- */

/* Feedback Visual na Célula - Correto */
.celula.correta {
    background-color: #d4edda !important;
    border: 2px solid #28a745 !important;
}

/* Feedback Visual na Célula - Incorreto */
.celula.incorreta {
    background-color: #f8d7da !important;
    border: 2px solid #dc3545 !important;
}

/* Destaque para a palavra ATIVA ao clicar na dica ou navegar */
.celula.destacado {
    border: 3px solid #3498db !important; /* Borda azul */
    background-color: #e6f2ff !important; /* Fundo azul claro para visualização */
    z-index: 1; 
}

/* -------------------------------------- */
/* ESTILOS DA ÁREA DE DICAS (NOVO VISUAL) */
/* -------------------------------------- */

.dicas-container {
    width: 350px;
    padding: 25px;
    background-color: #fff;
    border: 1px solid #bdc3c7;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    /* Novo Gradiente de Fundo */
    background: linear-gradient(to bottom, #f8f9fa, #e9ecef); 
}

.dicas-container h2 {
    margin-top: 0;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: center;
}

/* Estilo para a lista de dicas */
#lista-dicas {
    list-style: none;
    padding: 0;
}

/* Estilo para cada item da dica */
#lista-dicas li {
    margin-bottom: 15px;
    line-height: 1.5;
    padding: 10px;
    background-color: #f1f8ff;
    border-radius: 5px;
    border-left: 4px solid #3498db;
    cursor: pointer; /* Indica que é clicável */
    transition: background-color 0.2s;
}

#lista-dicas li:hover {
    background-color: #dbe9f7;
}

/* Estilo para o forte (número/orientação) */
#lista-dicas li strong {
    color: #2c3e50;
    font-weight: bold;
}

/* -------------------------------------- */
/* ESTILOS DO BOTÃO E FEEDBACK GERAL */
/* -------------------------------------- */

#verificar-btn {
    padding: 14px 30px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    margin-top: 30px;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    /* Novo Gradiente do Botão (Verde) */
    background: linear-gradient(to right, #27ae60, #2ecc71);
    color: white;
}

#verificar-btn:hover {
    background: linear-gradient(to right, #219653, #27ae60);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

/* Estilo para a mensagem de feedback */
#feedback {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    border-radius: 8px;
    margin: 20px auto;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    min-height: 1.5em;
}

.feedback.certo {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #28a745;
}

.feedback.errado {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #dc3545;
}
