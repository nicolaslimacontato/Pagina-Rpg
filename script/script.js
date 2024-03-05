const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const habilidades = {
    alquimista: [
        'Filósofo Natural: Você aprendeu muitas coisas sobre alquimia durante seus estudos. A partir do 1º nível, você pode adicionar metade do seu bônus de proficiência, arredondado para cima, a qualquer teste de habilidade que você fizer para identificar ervas, poções, venenos ou outras substâncias alquímicas. Se o teste de habilidade já incluir seu bônus de proficiência, você poderá adicionar esse bônus além do seu bônus de proficiência normal.',
        'Bombas: No 1º nível, você pode criar bombas alquímicas voláteis usando os suprimentos do seu alquimista. Sempre que terminar um descanso curto ou longo, você poderá criar um número de bombas igual a 10 + o dobro do seu nível de alquimista. Para você, o custo dos materiais necessários para criar essas bombas é insignificante. Após 24 horas, uma bomba não utilizada torna-se inerte. As estatísticas de uma bomba são mostradas abaixo.'
    ],
    artesao: [
        'Truque: Você conhece três truques de sua escolha da lista de magias do mago. Você aprende truques adicionais de magia do mago à sua escolha em níveis mais altos.'
    ],
    barbaro: [
        'Ataque Furtivo: Uma vez por turno, você pode causar dano extra a um alvo que você acertou com um ataque com arma, se você tiver vantagem na jogada de ataque.'
    ]
};

const classSelect = document.getElementById('classSelect');
const habilidadeContainer = document.querySelector('.habilidadeContainer');

classSelect.addEventListener('change', function () {
    const selectedClass = classSelect.value;
    habilidadeContainer.innerHTML = ''; // Limpa as habilidades anteriores
    habilidades[selectedClass].forEach((habilidade, index) => {
        const habilidadeElement = document.createElement('p');
        habilidadeElement.textContent = `Habilidade ${index + 1}: ${habilidade}`;
        habilidadeContainer.appendChild(habilidadeElement);
    });
});
