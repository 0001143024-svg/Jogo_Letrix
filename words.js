const words = [
    { word: "A Hora da Estrela", tip: "A protagonista dessa obra tenta sobreviver no Rio de Janeiro, vivendo com os próprios dilemas existenciais e questionamentos sobre a sua identidade." },
    { word: "Alice", tip: "Garota que foi parar no País das Maravilhas." },
    { word: "Antonio Candido", tip: "Crítico literário e sociólogo, autor de “Formação da Literatura Brasileira”." },
    { word: "Aslam", tip: "Figura simbólica de sabedoria e liderança em Nárnia." },
    { word: "Aurélia Camargo", tip: "Em Senhora, quem tenta manipular Aurélia e usa sua beleza e inteligência para conquistar riqueza e poder no jogo do amor e da vingança?" },
    { word: "Bella", tip: "Menina que se apaixona por um vampiro." },
    { word: "Basílio", tip: "Príncipe do adultério."},
    { word: "Drácula", tip: "Vampiro da Transilvânia." },
    { word: "Carlos", tip: "Primeiro nome de Drummond, poeta mineiro." },
    { word: "Escobar", tip: "Em Dom Casmurro, quem é o melhor amigo de Bentinho, cujas ações contribuem para a dúvida sobre a fidelidade de Capitu?" },
    { word: "Conselheiro", tip: "Líder religioso de Os Sertões."},
    { word: "Capitu", tip: "Quem é o responsável por provocar o ciúmes e a obsessão de Bentinho em Dom Casmurro, levando-o a duvidar da fidelidade de sua esposa?" },
    { word: "Carolina", tip: "Em A Moreninha, quem, apesar de manter um segredo sobre sua identidade, acaba se apaixonando por Augusto, mudando completamente o rumo da história?" },
    { word: "Cecília Meireles", tip: "Escritora e poeta, autora do livro “Poemas da Recordação e Estância”." },
    { word: "Clarice Lispector", tip: "Ela escreveu sobre o cotidiano da mulher que busca se entender em meio à confusão da vida urbana." },
    { word: "Di Cavalcanti", tip: "Pintor das paisagens brasileiras, ele traduzia a vida do campo com pinceladas marcadas e cores intensas." },
    { word: "Fabiano", tip: "Quem, em Vidas Secas, assume o papel de provedor da família, lutando para garantir a sobrevivência de sua esposa e filhos no árido sertão nordestino?" },
    { word: "Fernando Pessoa", tip: "Poeta português muito admirado no Brasil, autor de “Mensagem”." },
    { word: "Ferreira Gullar", tip: "Escritor e poeta contemporâneo, conhecido por sua versatilidade." },
    { word: "Frankenstein ", tip: "Criatura criada por um cientista." },
    { word: "Gandalf", tip: "Mago de O Senhor dos Anéis." },
    { word: "Graciliano Ramos", tip: "A vida no sertão contada por um mestre da prosa." },
    { word: "Grande Sertão", tip: "Qual obra de Guimarães Rosa é considerada um dos maiores marcos da literatura brasileira e mistura o regionalismo com um estilo de linguagem inovador?" },
    { word: "Guerra de canudos", tip: "Cenário de guerra no sertão baiano." },
    { word: "Guimarães Rosa", tip: "Ave mítica que renasce das cinzas, símbolo em diversas obras literárias." },
    { word: "Harry", tip: "Bruxo famoso de Hogwarts." },
    { word: "João Cabral de Melo Neto", tip: "Escritor e dramaturgo, autor de “Morte e Vida Severina”." },
    { word: "José de Alencar", tip: "Ele escreveu sobre o amor impossível entre uma índia e um europeu." },
    { word: "Katniss", tip: "Arqueira de Jogos Vorazes." },
    { word: "Marcela", tip: "Mulher de juventude de Brás Cubas."},
    { word: "Macabéa", tip: "Quem em A Hora da Estrela se torna um símbolo da invisibilidade social, enquanto vive uma vida marcada pela pobreza e solidão?" },
    { word: "Machado", tip: "Autor que criticava a sociedade carioca com ironia." },
    { word: "Machado de Assis", tip: "Autor de “Dom Casmurro”, conhecido por sua ironia e sutileza." },
    { word: "Manuel Bandeira", tip: "Poeta modernista, autor de “Libertinagem”." },
    { word: "Percy", tip: "Filho de Poseidon em O Ladrão de Raios." },
    { word: "Mário de Andrade", tip: "Autor de “Macunaíma”." },
    { word: "Matilda", tip: "Menina que adorava ler e tinha poderes." },
    { word: "MemóriasPóstumas", tip: "Obra narrada por um defunto autor." },
    { word: "Modernismo Brasileiro", tip: "A arte virou grito de liberdade, quebrando as regras e olhando para o Brasil como ele realmente era: mestiço, caótico e original." },
    { word: "Monteiro Lobato", tip: "Criador do Sítio do Picapau Amarelo." },
    { word: "Nárnia", tip: "Mundo mágico que se pode ser." },
    { word: "O Cortiço", tip: "O autor descreve o conflito entre o passado e o presente de uma sociedade em transição, marcada pela busca de uma identidade nacional." },
    { word: "O Guarani", tip: "Este livro é um retrato vívido da vida no interior do Brasil, com um forte componente simbólico sobre o conflito entre a vida e a morte." },
    { word: "Oswald de Andrade", tip: "O ‘manifesto’ de um artista que pediu o fim das influências estrangeiras na arte brasileira e gritou: ‘vamos criar a nossa própria identidade’." },
    { word: "Paulo Coelho", tip: "Autor contemporâneo brasileiro, conhecido por suas histórias cativantes." },
    { word: "Paulo Freire", tip: "Filósofo e educador, autor de “Pedagogia do Oprimido”." },
    { word: "Prim", tip: "Irmã mais nova de Katniss." },
    { word: "Quixote", tip: "Cavaleiro sonhador que luta contra moinhos." },
    { word: "Rachel de Queiroz", tip: "Ele escreveu “O Quinze”, retratando a seca do Nordeste brasileiro." },
    { word: "Riobaldo", tip: "Em Grande Sertão: Veredas, quem é o personagem que lidera o bando de jagunços e questiona a própria moralidade, enquanto busca por respostas existenciais?" },
    { word: "Romeu", tip: "Apaixonado por Julieta." },
    { word: "Ruth Rocha", tip: "Escritora de literatura infantil, autora de “Marcelo, Marmelo, Martelo”." },
    { word: "Sancho", tip: "Companheiro fiel de Dom Quixote." },
    { word: "Semana de Arte Moderna", tip: "Em 1922, o Brasil deixou de olhar para o passado e começou a desenhar um novo futuro com cores, sons e palavras." },
    { word: "Sherlock", tip: "Detetive muito inteligente." },
    { word: "Tarsila do Amaral", tip: "Esse pintor e poeta se destacou na semana, utilizando formas geométricas e cores vibrantes para contar a história do Brasil." },
    { word: "Ziraldo", tip: "Autor de literatura infantil, criador do “Menino Maluquinho”." },
];
 














