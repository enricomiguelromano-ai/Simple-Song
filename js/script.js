// Seleciona APENAS os botões que têm a classe 'play-audio'
const botoesValidos = document.querySelectorAll('.sound-btn');

botoesValidos.forEach(botao => {
  botao.addEventListener('click', () => {
    const som = botao.getAttribute('data-sound');
    new Audio(som).play();
  });
});