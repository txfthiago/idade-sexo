function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')
    
     if (fano.value.length == 0 || fano.value > ano ){
        alert('[ERROR!]Verifique os dados e tente novamente')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano -  Number(fano.value)
       var genero = ''
      
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
           genero= "Homem"
           if(idade>0 && idade<10){
               //criança
               img.src = 'criançahomem.jpg'
              
           }else if (idade >=10 && idade<= 20){
               //adolescente
               img.src ='adolescentehomem.png'
           }else if (idade> 20 && idade<= 55){
               //adulto
               img.src = 'adultohomem.jpg'
           }
           else {
               //idoso
               img.src = 'idosohomem.jpg'
           }
       }else if (fsex[1].checked){
           genero= "Mulher"
           if(idade>0 && idade<=10){
            //criança
            img.src = 'criançamulher.png'
        }else if (idade >10 && idade<= 20){
            //adolescente
            img.src = 'adolescentemulher.png'
        }else if (idade> 20 && idade<= 55){
            //adulto
            img.src = 'adultomulher.png'
        }
        else {
            //idoso
            img.src = 'idosamulher.png'
        }
       
    }res.style.textAlign ='center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
   
}

    function newFunction() {
        return 'criançahomem.png'
    }
}
