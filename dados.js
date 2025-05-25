
function toggleResposta1() {
    const respostaDiv = document.getElementById('resposta');
    const botao = document.querySelector('button');
    if (respostaDiv.style.display === "none") {
        respostaDiv.style.display = "block";
        botao.textContent = "Esconder Resposta";
    } else {
        respostaDiv.style.display = "none";
        botao.textContent = "Mostrar Resposta";
    }
}


// Alternar Modo Escuro
document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  // Rolar para o Topo da Página
  document.getElementById('scrollTopButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

