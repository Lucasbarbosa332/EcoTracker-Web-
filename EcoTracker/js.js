let userData = {};

function calcularPegadaEcológica() {
  userData.energia = parseFloat(document.getElementById('energia').value);
  // Adicione lógica para calcular outros fatores (transporte, alimentação, resíduos)
  exibirDashboard();
  fornecerSugestoes();
}

function exibirDashboard() {
  const chartsDiv = document.getElementById('charts');
  // Adicione lógica para criar e exibir gráficos com base nos dados do usuário
  chartsDiv.innerHTML = "<p>Gráficos serão exibidos aqui</p>";
}

function fornecerSugestoes() {
  const suggestionsList = document.getElementById('suggestions-list');
  // Adicione lógica para fornecer sugestões de sustentabilidade com base nos dados do usuário
  suggestionsList.innerHTML = "<li>Sugestões serão exibidas aqui</li>";
}
function calcularPegadaEcológica() {
    userData.energia = parseFloat(document.getElementById('energia').value);
    userData.transporte = parseFloat(document.getElementById('transporte').value);
    userData.alimentacao = parseFloat(document.getElementById('alimentacao').value);
    userData.residuos = parseFloat(document.getElementById('residuos').value);
  
    exibirDashboard();
    fornecerSugestoes();
  }
  
  function exibirDashboard() {
    const chartsDiv = document.getElementById('charts');
    // Adicione lógica para criar e exibir gráficos com base nos dados do usuário
    chartsDiv.innerHTML = "<p>Gráficos serão exibidos aqui</p>";
  }
  
  function fornecerSugestoes() {
    const suggestionsList = document.getElementById('suggestions-list');
    // Adicione lógica para fornecer sugestões de sustentabilidade com base nos dados do usuário
    suggestionsList.innerHTML = "<li>Sugestões serão exibidas aqui</li>";
  }
  function calcularPegadaEcológica() {
    userData.energia = parseFloat(document.getElementById('energia').value);
    userData.transporte = parseFloat(document.getElementById('transporte').value);
    userData.alimentacao = parseFloat(document.getElementById('alimentacao').value);
    userData.residuos = parseFloat(document.getElementById('residuos').value);
  
    // Calcular a pegada ecológica total
    let pegadaTotal = userData.energia + userData.transporte + userData.alimentacao + userData.residuos;
  
    exibirDashboard(pegadaTotal);
    fornecerSugestoes(pegadaTotal);
  }
  
  function exibirDashboard(pegadaTotal) {
    const chartsDiv = document.getElementById('charts');
    // Limpar o conteúdo anterior
    chartsDiv.innerHTML = "";
  
    // Criar um gráfico de barra simples para exibir a pegada ecológica total
    const barChart = document.createElement('div');
    barChart.style.width = "300px";
    barChart.style.height = "200px";
    barChart.style.background = "#f0f0f0";
    barChart.style.marginBottom = "20px";
    barChart.innerHTML = `<p style="text-align: center; padding-top: 80px;">Pegada Ecológica: ${pegadaTotal.toFixed(2)} kg/mês</p>`;
    chartsDiv.appendChild(barChart);
  }
  
  function fornecerSugestoes(pegadaTotal) {
    const suggestionsList = document.getElementById('suggestions-list');
    // Limpar o conteúdo anterior
    suggestionsList.innerHTML = "";
  
    // Exibir sugestões com base na pegada total
    if (pegadaTotal > 500) {
      suggestionsList.innerHTML += "<li>Reduza o uso de energia em casa, desligando aparelhos quando não estiverem em uso.</li>";
      suggestionsList.innerHTML += "<li>Opte por transportes mais sustentáveis, como bicicleta ou transporte público.</li>";
      suggestionsList.innerHTML += "<li>Reduza o desperdício de alimentos, comprando apenas o necessário e evitando alimentos embalados em plástico.</li>";
      suggestionsList.innerHTML += "<li>Recicle e reutilize materiais sempre que possível para reduzir a produção de resíduos.</li>";
    } else {
      suggestionsList.innerHTML += "<li>Continue mantendo hábitos sustentáveis!</li>";
    }
  }
  // Função para limpar todos os campos de entrada
function limparCampos() {
    document.getElementById('energia').value = "";
    document.getElementById('transporte').value = "";
    document.getElementById('alimentacao').value = "";
    document.getElementById('residuos').value = "";
  }
  
  // Função para validar os campos de entrada
  function validarEntrada() {
    const campos = ['energia', 'transporte', 'alimentacao', 'residuos'];
    for (let campo of campos) {
      if (isNaN(parseFloat(document.getElementById(campo).value))) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return false;
      }
    }
    return true;
  }
  
  // Função para esconder o dashboard e as sugestões quando não houver dados
  function esconderElementos() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('suggestions').style.display = 'none';
  }
  
  // Função para exibir o dashboard e as sugestões quando houver dados
  function mostrarElementos() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('suggestions').style.display = 'block';
  }
  
  function calcularPegadaEcológica() {
    if (!validarEntrada()) {
      return;
    }
  
    userData.energia = parseFloat(document.getElementById('energia').value);
    userData.transporte = parseFloat(document.getElementById('transporte').value);
    userData.alimentacao = parseFloat(document.getElementById('alimentacao').value);
    userData.residuos = parseFloat(document.getElementById('residuos').value);
  
    let pegadaTotal = userData.energia + userData.transporte + userData.alimentacao + userData.residuos;
  
    exibirDashboard(pegadaTotal);
    fornecerSugestoes(pegadaTotal);
    mostrarElementos();
  }
  
  function exibirDashboard(pegadaTotal) {
    const chartsDiv = document.getElementById('charts');
    chartsDiv.innerHTML = "";
  
    const barChart = document.createElement('div');
    barChart.classList.add('bar-chart');
    barChart.innerHTML = `<p>Pegada Ecológica Total:</p><div class="bar" style="width: ${pegadaTotal / 5}px;"></div>`;
    chartsDiv.appendChild(barChart);
  }
  
  function fornecerSugestoes(pegadaTotal) {
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = "";
  
    if (pegadaTotal > 500) {
      suggestionsList.innerHTML += "<li>Reduza o uso de energia em casa, desligando aparelhos quando não estiverem em uso.</li>";
      suggestionsList.innerHTML += "<li>Opte por transportes mais sustentáveis, como bicicleta ou transporte público.</li>";
      suggestionsList.innerHTML += "<li>Reduza o desperdício de alimentos, comprando apenas o necessário e evitando alimentos embalados em plástico.</li>";
      suggestionsList.innerHTML += "<li>Recicle e reutilize materiais sempre que possível para reduzir a produção de resíduos.</li>";
    } else {
      suggestionsList.innerHTML += "<li>Continue mantendo hábitos sustentáveis!</li>";
    }
  }
  
  // Chamada de função para esconder os elementos ao carregar a página
  esconderElementos();
  // Função para criar um novo perfil de usuário
function criarPerfil() {
    localStorage.clear(); // Limpa os perfis existentes para criar um novo perfil
    alert("Perfil criado com sucesso! Por favor, insira seus dados para começar.");
  }
  
  // Função para salvar os dados do usuário
  function salvarDados() {
    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Dados salvos com sucesso!");
  }
  
  // Função para carregar os dados do usuário
  function carregarDados() {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      userData = savedData;
      document.getElementById('energia').value = userData.energia || "";
      document.getElementById('transporte').value = userData.transporte || "";
      document.getElementById('alimentacao').value = userData.alimentacao || "";
      document.getElementById('residuos').value = userData.residuos || "";
      alert("Dados carregados com sucesso!");
    } else {
      alert("Nenhum dado salvo encontrado.");
    }
  }
  
  // Função para visualizar o histórico de pegada ecológica
  function visualizarHistorico() {
    // Lógica para recuperar e exibir o histórico de pegada ecológica (pode ser implementado com gráficos ou uma tabela)
    alert("Histórico de pegada ecológica será exibido aqui.");
  }
  // Função para compartilhar o perfil e os resultados nas redes sociais
function compartilhar() {
    const pegadaTotal = calcularPegadaTotal();
    const textoCompartilhamento = `Minha pegada ecológica total é de ${pegadaTotal.toFixed(2)} kg/mês. Faça sua parte pelo meio ambiente! #EcoTracker #Sustentabilidade`;
  
    // Adicione a lógica para compartilhar nas redes sociais (Facebook, Twitter, etc.)
    // Aqui está um exemplo simples para compartilhar no console:
    console.log("Compartilhando:", textoCompartilhamento);
  }
  
  // Função para calcular a pegada ecológica total
  function calcularPegadaTotal() {
    return userData.energia + userData.transporte + userData.alimentacao + userData.residuos;
  }
  // Objeto contendo as conquistas e seus requisitos
const conquistas = {
    "EcoIniciante": {
      descricao: "Iniciante Eco",
      requisito: 300 // Pegada total abaixo de 300 kg/mês
    },
    "EcoConsciente": {
      descricao: "Consciente Eco",
      requisito: 200 // Pegada total abaixo de 200 kg/mês
    },
    "EcoHeroi": {
      descricao: "Herói Eco",
      requisito: 100 // Pegada total abaixo de 100 kg/mês
    }
  };
  
  // Função para verificar e conceder conquistas ao usuário
  function verificarConquistas() {
    const pegadaTotal = calcularPegadaTotal();
  
    for (let conquista in conquistas) {
      if (pegadaTotal <= conquistas[conquista].requisito) {
        if (!localStorage.getItem(conquista)) {
          localStorage.setItem(conquista, true);
          alert(`Conquista desbloqueada: ${conquistas[conquista].descricao}!`);
        }
      }
    }
  }
  
  // Função para exibir as conquistas desbloqueadas
  function exibirConquistas() {
    const conquistasDesbloqueadas = [];
  
    for (let conquista in conquistas) {
      if (localStorage.getItem(conquista)) {
        conquistasDesbloqueadas.push(conquistas[conquista].descricao);
      }
    }
  
    if (conquistasDesbloqueadas.length > 0) {
      alert("Conquistas desbloqueadas:\n" + conquistasDesbloqueadas.join("\n"));
    } else {
      alert("Nenhuma conquista desbloqueada ainda.");
    }
  }
  // Dicionário de dicas ecológicas
const dicasEcológicas = {
    energia: [
      "Desligue as luzes quando sair de um cômodo.",
      "Troque lâmpadas incandescentes por lâmpadas LED de baixo consumo.",
      "Utilize aparelhos eletrônicos com selo de eficiência energética."
    ],
    transporte: [
      "Opte por caminhar, pedalar ou usar transporte público sempre que possível.",
      "Reduza a frequência de viagens de carro, combine trajetos e caronas.",
      "Considere veículos elétricos ou híbridos como alternativa mais sustentável."
    ],
    alimentacao: [
      "Prefira alimentos orgânicos e de produção local sempre que possível.",
      "Reduza o consumo de carne e experimente substituí-la por opções vegetarianas ou veganas algumas vezes por semana.",
      "Planeje suas refeições para evitar desperdício de alimentos."
    ],
    residuos: [
      "Recicle papel, plástico, vidro e metal sempre que possível.",
      "Utilize sacolas reutilizáveis e evite o uso excessivo de embalagens descartáveis.",
      "Compre produtos duráveis e de qualidade para reduzir a quantidade de resíduos."
    ]
  };
  
  // Função para fornecer dicas ecológicas com base na pegada ecológica do usuário
  function fornecerDicas() {
    const pegadaEcológica = calcularPegadaTotal();
    const dicas = [];
  
    for (let fator in userData) {
      if (userData.hasOwnProperty(fator)) {
        const categoria = dicasEcológicas[fator];
        const valor = userData[fator];
  
        // Escolhe uma dica aleatória da categoria se o valor do fator estiver acima da média
        if (valor > categoria.length) {
          const dicaAleatoria = categoria[Math.floor(Math.random() * categoria.length)];
          dicas.push(dicaAleatoria);
        }
      }
    }
  
    // Exibe as dicas na interface do usuário
    exibirDicas(dicas);
  }
  
  // Função para exibir as dicas na interface do usuário
  function exibirDicas(dicas) {
    const dicasList = document.getElementById('dicas-list');
    dicasList.innerHTML = "";
  
    if (dicas.length > 0) {
      dicas.forEach(dica => {
        const listItem = document.createElement('li');
        listItem.textContent = dica;
        dicasList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement('li');
      listItem.textContent = "Parabéns! Você está fazendo um ótimo trabalho na redução de sua pegada ecológica.";
      dicasList.appendChild(listItem);
    }
  }
  