// ===================================================================================
// 1. DADOS E CONFIGURAÇÕES GLOBAIS (LISTA INCLUÍDA AQUI)
// ===================================================================================

const listaDePalavras = [
    { palavra: "ALICE", dica: "Garota que foi parar no País das Maravilhas." },
    { palavra: "ASLAM", dica: "Figura simbólica de sabedoria e liderança em Nárnia." },
    { palavra: "BELLA", dica: "Menina que se apaixona por um vampiro." },
    { palavra: "BASILIO", dica: "Príncipe do adultério." },
    { palavra: "DRACULA", dica: "Vampiro da Transilvânia." },
    { palavra: "CARLOS", dica: "Primeiro nome de Drummond, poeta mineiro." },
    { palavra: "ESCOBAR", dica: "Em Dom Casmurro, quem é o melhor amigo de Bentinho, cujas ações contribuem para a dúvida sobre a fidelidade de Capitu?" },
    { palavra: "CONSELHEIRO", dica: "Líder religioso de Os Sertões." },
    { palavra: "CAPITU", dica: "Quem é o responsável por provocar o ciúmes e a obsessão de Bentinho em Dom Casmurro, levando-o a duvidar da fidelidade de sua esposa?" },
    { palavra: "CAROLINA", dica: "Em A Moreninha, quem, apesar de manter um segredo sobre sua identidade, acaba se apaixonando por Augusto, mudando completamente o rumo da história?" },
    { palavra: "FABIANO", dica: "Quem, em Vidas Secas, assume o papel de provedor da família, lutando para garantir a sobrevivência de sua esposa e filhos no árido sertão nordestino?" },
    { palavra: "FRANKENSTEIN", dica: "Criatura criada por um cientista." },
    { palavra: "GANDALF", dica: "Mago de O Senhor dos Anéis." },
    { palavra: "HARRY", dica: "Bruxo famoso de Hogwarts." },
    { palavra: "KATNISS", dica: "Arqueira de Jogos Vorazes." },
    { palavra: "MARCELA", dica: "Mulher de juventude de Brás Cubas." },
    { palavra: "MACABEA", dica: "Quem em A Hora da Estrela se torna um símbolo da invisibilidade social, enquanto vive uma vida marcada pela pobreza e solidão?" },
    { palavra: "MACHADO", dica: "Autor que criticava a sociedade carioca com ironia." },
    { palavra: "PERCY", dica: "Filho de Poseidon em O Ladrão de Raios." },
    { palavra: "MATILDA", dica: "Menina que adorava ler e tinha poderes." },
    { palavra: "NARNIA", dica: "Mundo mágico que se pode ser." },
    { palavra: "QUIXOTE", dica: "Cavaleiro sonhador que luta contra moinhos." },
    { palavra: "RIOBALDO", dica: "Em Grande Sertão: Veredas, quem é o personagem que lidera o bando de jagunços e questiona a própria moralidade, enquanto busca por respostas existenciais?" },
    { palavra: "ROMEU", dica: "Apaixonado por Julieta." },
    { palavra: "SANCHO", dica: "Companheiro fiel de Dom Quixote." },
    { palavra: "SHERLOCK", dica: "Detetive muito inteligente." },
    { palavra: "ZIRALDO", dica: "Autor de literatura infantil, criador do “Menino Maluquinho”." },
    { palavra: "PRIM", dica: "Irmã mais nova de Katniss." }
];

// Variáveis globais para armazenar o estado do jogo.
let palavrasNoJogo = []; 
let celulasDaGrade = []; 
const TAMANHO_MAX = 25; // Tamanho do Grid (25x25)

// Configurações de Dificuldade 
const CONFIGURACOES = {
    "PADRAO": { 
        maxPalavras: 12, 
        maxTentativas: 5, 
        descricao: "Padrão: Mais palavras, mais cruzamentos aleatórios." 
    }
};

let configuracaoAtual = CONFIGURACOES.PADRAO; 
let modoDeJogoAtual = "PADRAO"; 

// ===================================================================================
// 2. FUNÇÕES DE GERAÇÃO DA CRUZADINHA
// ===================================================================================

function sortearIndice(max) {
    return Math.floor(Math.random() * max);
}

function tentarCruzarPalavra(palavraSecundaria) {
    const palavraSec = palavraSecundaria.palavra.toUpperCase();

    for (const palavraExistente of palavrasNoJogo) {
        
        const orientacaoNova = palavraExistente.orientacao === 'H' ? 'V' : 'H';

        for (let i = 0; i < palavraSec.length; i++) {
            const letraSec = palavraSec[i];
            const indiceCruzamentoExistente = palavraExistente.palavra.indexOf(letraSec);

            if (indiceCruzamentoExistente !== -1) {
                let linInicio, colInicio;

                if (orientacaoNova === 'V') {
                    colInicio = palavraExistente.coluna + indiceCruzamentoExistente;
                    linInicio = palavraExistente.linha - i;
                } else {
                    linInicio = palavraExistente.linha + indiceCruzamentoExistente;
                    colInicio = palavraExistente.coluna - i;
                }

                const fimLinha = orientacaoNova === 'V' ? (linInicio + palavraSec.length) : (linInicio + 1);
                const fimColuna = orientacaoNova === 'H' ? (colInicio + palavraSec.length) : (colInicio + 1);

                if (linInicio >= 0 && colInicio >= 0 && fimLinha <= TAMANHO_MAX && fimColuna <= TAMANHO_MAX) {
                    const novaPosicao = {
                        ...palavraSecundaria,
                        palavra: palavraSec,
                        orientacao: orientacaoNova,
                        linha: linInicio,
                        coluna: colInicio
                    };

                    if (haColisao(novaPosicao, palavrasNoJogo)) {
                        continue; 
                    }

                    return novaPosicao;
                }
            }
        }
    }

    return null; 
}

function haColisao(novaPalavra, palavrasExistentes) {
    const { palavra, orientacao, linha, coluna } = novaPalavra;

    for (let i = 0; i < palavra.length; i++) {
        let l = (orientacao === 'H') ? linha : (linha + i);
        let c = (orientacao === 'H') ? (coluna + i) : coluna;
        
        for (const existente of palavrasExistentes) {
            for (let j = 0; j < existente.palavra.length; j++) {
                let lE = (existente.orientacao === 'H') ? existente.linha : (existente.linha + j);
                let cE = (existente.orientacao === 'H') ? (existente.coluna + j) : existente.coluna;

                if (l === lE && c === cE) {
                    if (palavra[i] === existente.palavra[j]) {
                        if (orientacao === existente.orientacao) {
                            return true; 
                        }
                        continue; 
                    } 
                    
                    if (palavra[i] !== existente.palavra[j]) {
                        return true; 
                    }
                }
            }
        }
    }
    return false; 
}


/**
 * Função principal para sortear a Palavra Âncora e tentar cruzar as secundárias.
 * USA A LISTA DE PALAVRAS DEFINIDA NESTE ARQUIVO.
 */
function sortearEEncaixarPalavras() {
    
    // Usa a lista local
    const listaCompleta = listaDePalavras;

    if (!listaCompleta || listaCompleta.length === 0) {
        console.error("A lista de palavras está vazia.");
        return false;
    }
    
    // --- 1. Sorteio da Palavra Âncora e Seleção do Subconjunto ---
    
    const indiceAncora = sortearIndice(listaCompleta.length);
    const palavraAncora = listaCompleta[indiceAncora];

    const palavrasCandidatas = listaCompleta.filter((_, index) => index !== indiceAncora);

    const limiteSecundarias = Math.min(configuracaoAtual.maxPalavras - 1, palavrasCandidatas.length);

    const palavrasEmbaralhadas = [...palavrasCandidatas].sort(() => Math.random() - 0.5);
    
    let secundariasParaEncaixar = palavrasEmbaralhadas.slice(0, limiteSecundarias);


    // --- 2. Posicionamento da Palavra Âncora (Sempre H no centro) ---

    const posAncoraH = {
        ...palavraAncora,
        palavra: palavraAncora.palavra.toUpperCase(), 
        orientacao: 'H',
        linha: Math.floor(TAMANHO_MAX / 2),
        coluna: Math.floor((TAMANHO_MAX - palavraAncora.palavra.length) / 2) 
    };

    palavrasNoJogo = [posAncoraH]; 

    
    // --- 3. Tentativa de Encaixe das Palavras Secundárias ---
    
    let secundariasRestantes = secundariasParaEncaixar;
    let tentativasDeEncaixe = 0;
    const MAX_TENTATIVAS = secundariasParaEncaixar.length * configuracaoAtual.maxTentativas; 

    while (secundariasRestantes.length > 0 && tentativasDeEncaixe < MAX_TENTATIVAS) {
        const palavraSecundaria = secundariasRestantes.shift(); 
        tentativasDeEncaixe++;

        const encaixada = tentarCruzarPalavra(palavraSecundaria);

        if (encaixada) {
            palavrasNoJogo.push(encaixada);
            tentativasDeEncaixe = 0; 
        } else {
            secundariasRestantes.push(palavraSecundaria);
        }
    }
    
    return palavrasNoJogo.length > 1; 
}


// ===================================================================================
// 3. FUNÇÕES DE MONTAGEM E INTERAÇÃO VISUAL
// ===================================================================================

function montarGrade() {
    const gridContainer = document.getElementById('grade-cruzadinha');
    gridContainer.innerHTML = '';
    celulasDaGrade = Array(TAMANHO_MAX).fill(0).map(() => Array(TAMANHO_MAX).fill(null));

    gridContainer.style.gridTemplateColumns = `repeat(${TAMANHO_MAX}, var(--tamanho-celula))`;
    
    let dicaCounter = 1;
    
    for (let r = 0; r < TAMANHO_MAX; r++) {
        for (let c = 0; c < TAMANHO_MAX; c++) {
            const celula = document.createElement('div');
            celula.classList.add('celula');
            celula.dataset.linha = r;
            celula.dataset.coluna = c;
            celulasDaGrade[r][c] = celula;

            const palavrasNaCelula = palavrasNoJogo.filter(p => {
                const isH = p.orientacao === 'H';
                const start = isH ? p.coluna : p.linha;
                const end = start + p.palavra.length;
                const coord = isH ? c : r;

                return coord >= start && coord < end && (isH ? r === p.linha : c === p.coluna);
            });

            if (palavrasNaCelula.length > 0) {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.dataset.linha = r;
                input.dataset.coluna = c;
                input.addEventListener('input', focarNaProximaCelula);
                
                celula.appendChild(input);

                palavrasNaCelula.forEach(p => {
                    const isInicioH = (p.orientacao === 'H' && c === p.coluna);
                    const isInicioV = (p.orientacao === 'V' && r === p.linha);
                    
                    if (isInicioH || isInicioV) {
                        if (!p.numeroDica) {
                            p.numeroDica = dicaCounter++;
                        }
                        const spanNumero = document.createElement('span');
                        spanNumero.classList.add('numero-dica');
                        spanNumero.textContent = p.numeroDica;
                        celula.appendChild(spanNumero);
                        
                        if (p === palavrasNoJogo[0]) {
                            celula.classList.add('palavra-ancora');
                        }
                    }
                });
            } else {
                celula.classList.add('vazia');
            }

            gridContainer.appendChild(celula);
        }
    }
}

function exibirDicas() {
    const listaDicas = document.getElementById('lista-dicas');
    listaDicas.innerHTML = '';

    const palavrasComDica = palavrasNoJogo
        .filter(p => p.numeroDica)
        .sort((a, b) => a.numeroDica - b.numeroDica);
    
    palavrasComDica.forEach(p => {
        const li = document.createElement('li');
        const orientacaoTexto = p.orientacao === 'H' ? 'Horizontal' : 'Vertical';
        li.innerHTML = `<strong>${p.numeroDica}. (${orientacaoTexto}):</strong> ${p.dica}`;
        li.dataset.linha = p.linha;
        li.dataset.coluna = p.coluna;
        li.dataset.orientacao = p.orientacao;
        li.dataset.palavra = p.palavra;

        li.addEventListener('click', destacarPalavra);
        listaDicas.appendChild(li);
    });
}

function destacarPalavra(event) {
    document.querySelectorAll('.celula').forEach(c => c.classList.remove('destacado'));

    const target = event.currentTarget;
    const linha = parseInt(target.dataset.linha);
    const coluna = parseInt(target.dataset.coluna);
    const orientacao = target.dataset.orientacao;
    const palavra = target.dataset.palavra;

    for (let i = 0; i < palavra.length; i++) {
        let l = (orientacao === 'H') ? linha : (linha + i);
        let c = (orientacao === 'H') ? (coluna + i) : coluna;
        
        const celula = celulasDaGrade[l][c];
        if (celula) {
            celula.classList.add('destacado');
        }
    }
    
    const celulaInicial = celulasDaGrade[linha][coluna];
    const inputInicial = celulaInicial.querySelector('input');
    if (inputInicial) {
        inputInicial.focus();
    }
}

function focarNaProximaCelula(event) {
    const inputAtual = event.target;
    let linha = parseInt(inputAtual.dataset.linha);
    let coluna = parseInt(inputAtual.dataset.coluna);
    
    if (inputAtual.value) {
        const orientacao = encontrarOrientacaoDaCelula(linha, coluna);
        
        let proximaLinha = linha;
        let proximaColuna = coluna;
        
        if (orientacao.includes('H')) {
            proximaColuna++;
        } else if (orientacao.includes('V')) {
            proximaLinha++;
        }
        
        if (proximaLinha < TAMANHO_MAX && proximaColuna < TAMANHO_MAX) {
            const celulaDiv = celulasDaGrade[proximaLinha] && celulasDaGrade[proximaLinha][proximaColuna];
            const proximoInput = celulaDiv ? celulaDiv.querySelector('input') : null;
            
            if (proximoInput) {
                proximoInput.focus();
            }
        }
    }
}

function encontrarOrientacaoDaCelula(linha, coluna) {
    let orientacoes = [];
    
    palavrasNoJogo.forEach(p => {
        const isH = p.orientacao === 'H';
        const start = isH ? p.coluna : p.linha;
        const end = start + p.palavra.length;
        const coord = isH ? coluna : linha;

        if (coord >= start && coord < end && (isH ? linha === p.linha : coluna === p.coluna)) {
            orientacoes.push(p.orientacao);
        }
    });
    return orientacoes; 
}


// ===================================================================================
// 4. FUNÇÕES DE VERIFICAÇÃO E FEEDBACK
// ===================================================================================

function verificarTudo() {
    let acertos = 0;
    let totalPalavras = palavrasNoJogo.length;
    let feedbackGlobal = true; 

    palavrasNoJogo.forEach(p => {
        let palavraCorreta = p.palavra;
        let palavraCorretaGlobal = true; 

        for (let i = 0; i < palavraCorreta.length; i++) {
            let l = (p.orientacao === 'H') ? p.linha : (p.linha + i);
            let c = (p.orientacao === 'H') ? (p.coluna + i) : p.coluna;

            const celula = celulasDaGrade[l][c];
            const input = celula.querySelector('input');
            const valor = input.value.toUpperCase();
            
            celula.classList.remove('correta', 'incorreta');
            
            if (valor === palavraCorreta[i]) {
                celula.classList.add('correta');
            } else if (valor) {
                celula.classList.add('incorreta');
                palavraCorretaGlobal = false;
                feedbackGlobal = false;
            } else {
                palavraCorretaGlobal = false;
                feedbackGlobal = false;
            }
        }

        if (palavraCorretaGlobal) {
            acertos++;
        }
    });

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.classList.remove('feedback', 'certo', 'errado');

    if (feedbackGlobal) {
        feedbackElement.textContent = 'Parabéns! Você resolveu a cruzadinha inteira!';
        feedbackElement.classList.add('feedback', 'certo');
    } else {
        feedbackElement.textContent = `Você acertou ${acertos} de ${totalPalavras} palavras. Continue tentando!`;
        feedbackElement.classList.add('feedback', 'errado');
    }
}


// ===================================================================================
// 5. FUNÇÕES DE NAVEGAÇÃO POR TECLADO
// ===================================================================================

function moverFocoComSeta(event) {
    const inputAtual = event.target;
    if (inputAtual.tagName !== 'INPUT') return;

    let linha = parseInt(inputAtual.dataset.linha);
    let coluna = parseInt(inputAtual.dataset.coluna);
    let proximaLinha = linha;
    let proximaColuna = coluna;
    let inputProximo = null;

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Backspace'].includes(event.key)) {
        event.preventDefault();
    }
    
    switch (event.key) {
        case 'ArrowRight':
            proximaColuna = coluna + 1;
            break;
        case 'ArrowLeft':
            proximaColuna = coluna - 1;
            break;
        case 'ArrowDown':
        case 'Enter': 
            proximaLinha = linha + 1;
            break;
        case 'ArrowUp':
            proximaLinha = linha - 1;
            break;
        case 'Backspace': 
            if (!inputAtual.value) {
                const orientacao = encontrarOrientacaoDaCelula(linha, coluna);
                if (orientacao.includes('H')) {
                    proximaColuna = coluna - 1; 
                } else if (orientacao.includes('V')) {
                    proximaLinha = linha - 1; 
                }
            }
            break;
        default:
            return; 
    }

    if (proximaLinha >= 0 && proximaLinha < TAMANHO_MAX && 
        proximaColuna >= 0 && proximaColuna < TAMANHO_MAX) {
        
        const celulaDiv = celulasDaGrade[proximaLinha] && celulasDaGrade[proximaLinha][proximaColuna];

        if (celulaDiv) {
            inputProximo = celulaDiv.querySelector('input');
        }
    }

    if (inputProximo) {
        inputProximo.focus();
        inputProximo.selectionStart = inputProximo.selectionEnd = inputProximo.value.length; 
    }
}

function adicionarListenerDeTeclado() {
    document.addEventListener('keydown', moverFocoComSeta);
}


// ===================================================================================
// 6. FUNÇÃO DE INICIALIZAÇÃO (PADRÃO)
// ===================================================================================

function iniciarJogo() {
    // 1. Limpa o estado anterior
    palavrasNoJogo = [];
    celulasDaGrade = [];
    
    const gradeContainer = document.getElementById('grade-cruzadinha');
    const dicasContainer = document.getElementById('lista-dicas');
    const feedbackElement = document.getElementById('feedback');
    
    if (gradeContainer) gradeContainer.innerHTML = '';
    if (dicasContainer) dicasContainer.innerHTML = '';
    if (feedbackElement) feedbackElement.textContent = '';


    // 2. Tenta gerar a cruzadinha
    const sucesso = sortearEEncaixarPalavras();

    // 3. Se o sorteio foi bem-sucedido:
    if (sucesso && palavrasNoJogo.length > 1) { 
        montarGrade();
        exibirDicas();
        
        adicionarListenerDeTeclado(); 
        
        const primeiroInput = document.querySelector('#grade-cruzadinha input');
        if(primeiroInput) primeiroInput.focus();
    } else {
        // Se a geração falhar (por não conseguir cruzar o mínimo de palavras), tenta novamente
        console.warn("Falha ao gerar cruzadinha. Tentando novamente...");
        setTimeout(iniciarJogo, 10); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const verificarBtn = document.getElementById('verificar-btn');
    if(verificarBtn) verificarBtn.addEventListener('click', verificarTudo);
    
    const resetBtn = document.getElementById('reset-btn');
    if(resetBtn) resetBtn.addEventListener('click', iniciarJogo);
    
    iniciarJogo();
});
