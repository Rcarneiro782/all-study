function verificar(){
    var  data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if( fano.value == 0 || fano.value> ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero ='homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'homembebe.png')
            }else if ( idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade >=21 && idade < 50){
                //adulto
                img.setAttribute('src', 'homemnormal.png')
            }else{
                // idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        }else if (fsex[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade < 10){
             //criança
             img.setAttribute('src', 'mulherbebe.png')
             
             
            }else if(idade >=10 && idade< 21){
                //jovem
                img.setAttribute('src, mulherjovem.png')
            
            }else if(idade>= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'mulhernormal.png')
            }else{
                //idoso
                img.setAttribute('src','mulhervelha.png')
            }
        }
        res.style.textALign ='center'
        res.innerHTML =  `Detectamos  ${gênero} com ${idade} anos`
        res.appendChild (img)
    }
}
        
    