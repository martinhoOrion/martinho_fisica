//duasVariaveis
let duasVariaveis = window.document.getElementById("duasVariaveis")
let btn_quant_var = window.document.getElementById("btn_qua").addEventListener("click",clicar_btn_quant_var)
let qua_variaves = window.document.getElementById("qua_variaves")
//txt_dados_pergunta.style.visibility="hidden"
let intero = window.document.getElementById("intero")
let controlador_quanti_var = true
function clicar_btn_quant_var() {
    if(qua_variaves.value == 2){
        txt_dados_pergunta.style.visibility="hidden"
        intero.style.visibility="hidden"
        controlador_quanti_var = true

    }else if(qua_variaves.value == 3){
        txt_dados_pergunta.style.visibility="visible"
        intero.style.visibility="visible"
        controlador_quanti_var = false
    }
}
//---------------------------------
//
let txt1_dados = window.document.getElementById("var_valor1")
let txt2_dados = window.document.getElementById("var_valor2")
let txt1_dados_texto = window.document.getElementById("var_letra1")
let txt2_dados_texto = window.document.getElementById("var_letra2")
let txt_dados_pergunta = window.document.getElementById("var_letra_pergunta")
let btn_dados = window.document.getElementById("btn_dados").addEventListener("click",clicar_btn_dados)
let controlador_dados = true
function clicar_btn_dados() {
    if(controlador_quanti_var == true){
        if(txt1_dados.value!="" && txt2_dados.value!=""){
            controlador_dados = true
            controla_dados_pre()
            
        }else if(txt1_dados.value=="" && txt2_dados.value==""){
            controlador_dados = false
            controla_dados_pre()
        }else if(txt1_dados.value=="" || txt2_dados.value==""){
            controlador_dados = false
            controla_dados_pre()
        }else if(txt1_dados.value!="" || txt2_dados.value!=""){
            controlador_dados = false
            controla_dados_pre()
            
        }
    }else if(controlador_quanti_var == false){
        if(txt1_dados.value!="" && txt2_dados.value!=""){
            controlador_dados = true
            controla_dados_pre()
            
        }else if(txt1_dados.value=="" && txt2_dados.value==""){
            controlador_dados = false
            controla_dados_pre()
        }else if(txt1_dados.value=="" || txt2_dados.value==""){
            controlador_dados = false
            controla_dados_pre()
        }else if(txt1_dados.value!="" || txt2_dados.value!=""){
            controlador_dados = false
            controla_dados_pre()
            
        }
    }
}
//---------------------------------
//
function quantidade_de_variaveis() {
    
}
//---------------------------------

//
function controla_dados_pre() {
    if(controlador_dados == false){
        //alert("Entrou")
        if(txt1_dados.value=="" && txt2_dados.value==""){
            txt1_dados.style.backgroundColor = "red"
            txt2_dados.style.backgroundColor = "red"
        }else if(txt1_dados.value=="" && txt2_dados.value!=""){
            txt1_dados.style.backgroundColor = "red"
            txt2_dados.style.backgroundColor = "white"
        }else if(txt2_dados.value=="" && txt1_dados.value!=""){
            txt2_dados.style.backgroundColor = "red"
            txt1_dados.style.backgroundColor = "white"
        } 
    }else  if(controlador_dados == true){
        txt1_dados.style.backgroundColor = "white"
        txt2_dados.style.backgroundColor = "white"
        calculo()
    }
}
//---------------------------------
//variavel resultado
let res = window.document.getElementById("res_div")
//variaveis da formula
//1 fase
let txt1_1_fase = window.document.getElementById("txt1_1_fase")
let txt2_1_fase = window.document.getElementById("txt2_1_fase")
//2 fase
let txt1_2_fase = window.document.getElementById("txt1_2_fase")
let txt2_2_fase = window.document.getElementById("txt2_2_fase")
//--------------------------------------------------------
//
function calculo() {
    if(txt1_dados_texto.value=="" && txt2_dados_texto.value==""){
        txt1_dados_texto.value = "x"
        txt2_dados_texto.value = "y"
        fazendoCalculo()
    }else if(txt1_dados_texto.value=="" && txt2_dados_texto.value!=""){
        txt1_dados_texto.value = "x"
        fazendoCalculo()
    }else if(txt1_dados_texto.value!="" && txt2_dados_texto.value==""){
        txt2_dados_texto.value = "x"
        fazendoCalculo()
    }else if(txt1_dados_texto.value!="" && txt2_dados_texto.value!=""){
        fazendoCalculo()
    }
}

function fazendoCalculo() {
    if(controlador_quanti_var == true){
        if(txt1_dados.value == txt2_dados.value){
            txt1_1_fase.value = txt1_dados_texto.value
            txt2_1_fase.value = txt2_dados_texto.value
            res.innerHTML = txt1_dados_texto.value+" = "+txt2_dados_texto.value+" = Verdadeiro"
        }else if(txt1_dados.value != txt2_dados.value){
            txt1_1_fase.value = txt1_dados_texto.value
            txt2_1_fase.value = txt2_dados_texto.value
            res.innerHTML = txt1_dados_texto.value+" = "+txt2_dados_texto.value+" = Falço"
        }
    }else  if(controlador_quanti_var == false){
        fazendoCalculoduasvariaveis()
    }
}
//---------------------------------
//
let selecionar_sinal = window.document.getElementById("selecionar_sinal")

function fazendoCalculoduasvariaveis() {
    let n1 = Number(txt1_dados.value)
    let n2 = Number(txt2_dados.value)
    let soma = n1 + n2
    let menos = n1 - n2
    let dividir = n1 / n2
    let produto = n1 * n2
    txt1_2_fase.value = txt1_dados_texto.value
    txt2_2_fase.value = txt2_dados_texto.value
    if(selecionar_sinal.value == "mais"){
        if(txt_dados_pergunta.value!=""){
            res.innerHTML = txt_dados_pergunta.value+" = "+soma
        }else if(txt_dados_pergunta.value==""){
            txt_dados_pergunta.value = "?"
            res.innerHTML = txt_dados_pergunta.value+" = "+soma
        }
    }else if(selecionar_sinal.value=="menos"){
        if(txt_dados_pergunta.value!=""){
            res.innerHTML =  txt_dados_pergunta.value+" = "+menos
        }else if(txt_dados_pergunta.value==""){
            txt_dados_pergunta.value = "?"
            res.innerHTML =  txt_dados_pergunta.value+" = "+menos
        }
    }else if(selecionar_sinal.value=="produto"){
        if(txt_dados_pergunta.value!=""){
            res.innerHTML =  txt_dados_pergunta.value+" = "+produto
        }else if(txt_dados_pergunta.value==""){
            txt_dados_pergunta.value = "?"
            res.innerHTML =  txt_dados_pergunta.value+" = "+produto
        }
    }else if(selecionar_sinal.value=="dividir"){
        if(txt_dados_pergunta.value!=""){
            res.innerHTML =  txt_dados_pergunta.value+" = "+dividir
        }else if(txt_dados_pergunta.value==""){
            txt_dados_pergunta.value = "?"
            res.innerHTML =  txt_dados_pergunta.value+" = "+dividir
        } 
    }
}
//---------------------------------

//---------------------------------
//Ainda em desenvolvimento formulas predefinidas
let btb_sele_formu = window.document.getElementById("btb_sele_formu").addEventListener("click",clicar_btb_sele_formu)

function clicar_btb_sele_formu() {
    alert("Ainda em desenvolvimento")
}

//Ainda em desenvolvimento inserir_formula

let inserir_formula = window.document.getElementById("inserir_formula")
/*.addEventListener("click",clicar_inserir_formula)

function clicar_inserir_formula() {
    alert("Ainda em desenvolvimento")
}*/

//Ainda em desenvolvimento inserir_contante

let inserir_contante = window.document.getElementById("inserir_contante").addEventListener("click",clicar_inserir_contante)

function clicar_inserir_contante() {
    alert("Ainda em desenvolvimento")
}