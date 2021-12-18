//function alerta(){
  //  alert("hello world!");
  //}

  /*!function(){
     alert("hello world!");
    }();*/
    //function alerta(){
      //alert('olá mundo');
      //}

      var dados =(function(){
        var contador = 0;
       return{
          incrementar: function(){
           contador = contador + 1;
            return contador;
          }
        }
      }());
      
      console.log(dados.incrementar());
      console.log(dados.incrementar());
      console.log(dados.incrementar());
