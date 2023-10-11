const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

app.get("/produtos",function(req,res){
    res.send("<h1>.Lista de produtos do danilo!</h1>");

})

//app.get("/consulta/:parametro",function(req,res){
//     res.send("retorno consulta:" + req.params.parametro);

//})

app.get("/consulta/",function(req,res){
    var cpf = req.query["cpf"];

    if (cpf){
        res.send("retorno consulta:cpf =" + cpf);
    }else{
        res.send("cpf não fornecido");
    }
})

app.get("/cadastro/:nome?",function(req,res){
  var nome = req.params.nome;
   if(nome){
res.send("<h1>produto" + nome +" criado!</h1>");
   }else{
res.send("produto criado!");

}
   })

app.listen(4000,function(erro){
    if(erro){
        console.log("erro ao iniciar");
    }else{
        console.log("servidor iniciado");
    }
})