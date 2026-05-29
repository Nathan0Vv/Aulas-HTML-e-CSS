function tarefa() {
    return new Promise(resolve => {
        setTimeout(() => { resolve("Tarefa em segundo plano em JavaScript!");}, 1000);
    });
}

async function executarTarefa() {
    const resultado = await tarefa();
    console.log(resultado);
}

executarTarefa();
