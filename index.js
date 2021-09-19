subjects = ['lang', 'human', 'nat', 'math', 'essay'];

notas = []
pesos = []
parciais = []

setInterval(() => {
    for(var i=0; i<=4; i++){
        notas[i] = document.getElementById(`${subjects[i]}_nota`)
        pesos[i] = document.getElementById(`${subjects[i]}_peso`)
        parciais[i] = document.getElementById(`${subjects[i]}_parcial`)

        console.log(notas[0].value)
    }

    total_weight = 0

    for(var i=0; i <= 4; i++){
        total_weight += Number(pesos[i].value);
    }

    for(var i=0; i <= 4; i++){
        parciais[i].textContent = Number(notas[i].value)*Number(pesos[i].value)/total_weight;
    }
    
    
    total_score = 0;
    for(var i=0; i <= 4; i++){
        total_score += Number(parciais[i].textContent)
    }
    document.querySelector('h2').textContent = total_score
}, 250);