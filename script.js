document.getElementById("palavra").textContent = words[1].word;
document.getElementById("dica").textContent = words[1].tip;

function generateCrosswordBlocks(word, direction, startRow, startCol) {
    const blocks = [];
    const wordLength = word.length;

    for (let i = 0; i < wordLength; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = '1';
        input.setAttribute('data-word', word);
        input.setAttribute('data-pos', i);
        input.setAttribute('data-direction', direction);
        input.setAttribute('data-row', startRow);
        input.setAttribute('data-col', direction === 'horizontal' ? startCol + i : startCol);

        blocks.push(input);
    }

    return blocks;
}

function addFixedWordToCrossword(word, row, col, direction) {
    const tableRows = document.querySelectorAll('#crosswordTable tr');
    const wordLength = word.length;
    
    for (let i = 0; i < wordLength; i++) {
        const rowIdx = direction === 'horizontal' ? row : row + i;
        const colIdx = direction === 'horizontal' ? col + i : col;
        
        if (rowIdx < tableRows.length && colIdx < tableRows[rowIdx].children.length) {
            const td = tableRows[rowIdx].children[colIdx];
            td.classList.remove('vazio');
            
            const fixedWordSpan = document.createElement('span');
            fixedWordSpan.className = 'fixed-word';
            fixedWordSpan.textContent = word[i].toUpperCase();
            td.appendChild(fixedWordSpan);
        }
    }
}

// Dados da cruzadinha
const crosswordData = [
    { word: "domcasmurro", direction: "horizontal", number: 1, row: 0, col: 2 },
    { word: "capitu", direction: "horizontal", number: 2, row: 1, col: 2 },
    { word: "machado", direction: "vertical", number: 3, row: 2, col: 0 },
    { word: "iracema", direction: "horizontal", number: 4, row: 3, col: 2 }
];

// Cria a cruzadinha
function createCrossword() {
    const table = document.getElementById('crosswordTable');
    const gridSize = 13; // Tamanho da grade (13x13)
    
    // Cria a grade
    for (let row = 0; row < gridSize; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < gridSize; col++) {
            const td = document.createElement('td');
            td.className = 'vazio'; // Por padrão, todas as células são vazias
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    // Preenche com os blocos e números
    crosswordData.forEach(item => {
        const blocks = generateCrosswordBlocks(item.word, item.direction, item.row, item.col);
        const tableRows = table.querySelectorAll('tr');
        
        blocks.forEach((input, index) => {
            const row = item.direction === 'horizontal' ? item.row : item.row + index;
            const col = item.direction === 'horizontal' ? item.col + index : item.col;
            
            if (row < gridSize && col < gridSize) {
                const td = tableRows[row].children[col];
                td.className = ''; // Remove a classe vazio
                
                // Adiciona o número se for a primeira posição
                if (index === 0) {
                    const numberSpan = document.createElement('span');
                    numberSpan.className = 'numero';
                    numberSpan.textContent = item.number;
                    td.appendChild(numberSpan);
                }
                
                td.appendChild(input);
            }
        });
    });
}

// Inicializa a cruzadinha
createCrossword();

// Foco automático no primeiro input
const inputs = document.querySelectorAll('.cruzadinha input[type="text"]');
if (inputs.length > 0) {
    inputs[0].focus();
}

// Navegação dos inputs
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        const value = input.value.toUpperCase();
        input.value = value;
        
        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// Respostas corretas
const respostas = {
    "domcasmurro": ["D", "O", "M", "C", "A", "S", "M", "U", "R", "R", "O"],
    "iracema": ["I", "R", "A", "C", "E", "M", "A"],
    "capitu": ["C", "A", "P", "I", "T", "U"],
    "machado": ["M", "A", "C", "H", "A", "D", "O"]
};

// Verificar respostas
document.getElementById('checkButton').addEventListener('click', () => {
    let todasCorretas = true;
    
    inputs.forEach(input => {
        const word = input.getAttribute('data-word');
        const pos = input.getAttribute('data-pos');
        const valor = input.value.toUpperCase();
        
        if (respostas[word] && respostas[word][pos] && valor === respostas[word][pos]) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else if (valor !== '') {
            input.classList.add('incorrect');
            input.classList.remove('correct');
            todasCorretas = false;
        } else {
            input.classList.remove('correct', 'incorrect');
        }
    });
    
    const messageDiv = document.getElementById('message');
    if (todasCorretas) {
        messageDiv.textContent = "Parabéns! Todas as respostas estão corretas!";
        messageDiv.className = "success";
    } else {
        messageDiv.textContent = "Algumas respostas estão incorretas. Tente novamente!";
        messageDiv.className = "error";
    }
});

// Reiniciar cruzadinha
document.getElementById('resetButton').addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'incorrect');
    });
    document.getElementById('message').textContent = '';
});
