function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res  = document.getElementById('res')

    if(ini.Value == 0 || fim.Value == 0 || passo.value == 0){
        //window.alert('[ERRO] faltam dados')
        res.innerHTML = 'Impossivel contar'

    } else{
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p .value <= 0) {
            window.alert ('passo inválido! considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
                
            }
           
        }else{
            for(let c = i; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f6cc}`
    }

}