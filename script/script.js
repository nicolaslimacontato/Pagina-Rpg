const classSelect = document.getElementById('classSelect');
const classInfo = document.getElementById('classInfo');
const vidaSpan = document.getElementById('vida');
const proficienciasSpan = document.getElementById('proficiencias');
const primeiraHabilidadeSpan = document.getElementById('primeiraHabilidade');

classSelect.addEventListener('change', function() {
    const selectedClass = classSelect.value;
    if (selectedClass === 'alquimista') {
        vidaSpan.textContent = '1d10';
        proficienciasSpan.textContent = 'Armaduras e Armas';
        primeiraHabilidadeSpan.textContent = 'Ação Segunda Vento: Você pode usar uma ação bônus para recuperar pontos de vida igual a 1d10 + seu nível de guerreiro.';
    } else if (selectedClass === 'artesao') {
        vidaSpan.textContent = '1d6';
        proficienciasSpan.textContent = 'Livros de Magia';
        primeiraHabilidadeSpan.textContent = 'Truque: Você conhece três truques de sua escolha da lista de magias do mago. Você aprende truques adicionais de magia do mago à sua escolha em níveis mais altos.';
    } else if (selectedClass === 'barbaro') {
        vidaSpan.textContent = '1d8';
        proficienciasSpan.textContent = 'Furtividade e Truques';
        primeiraHabilidadeSpan.textContent = 'Ataque Furtivo: Uma vez por turno, você pode causar dano extra a um alvo que você acertou com um ataque com arma, se você tiver vantagem na jogada de ataque.';
    }

});
