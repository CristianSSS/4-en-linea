const d=document;
const btnStart=d.getElementById("btn-start");
const main=d.getElementById("container");


btnStart.addEventListener("click",()=>{

let fragment=document.createDocumentFragment();

let article=document.createElement("article");
article.id="container-card";


let div1=document.createElement("div");
let div2=document.createElement("div");

div1.setAttribute("class","grid");
div2.setAttribute("class","grid");

let label1=document.createElement("label");
let label2=document.createElement("label");
let label3=document.createElement("label");
let label4=document.createElement("label");



label1.setAttribute("for","jugador1");
label1.textContent="Jugador 1";
let txt1=document.createElement("input");
txt1.type="text";
txt1.placeholder="Nombre";
txt1.id="jugador1";

label1.appendChild(txt1);
div1.appendChild(label1);
//fin label 1

label2.setAttribute("for","color1");
label2.style="width:100px;";
label2.textContent="Color ficha";
let br1=document.createElement("br");
label2.appendChild(br1);


let colores1=document.createElement("div");
colores1.setAttribute("class","container-fichas");
let checkRed=document.createElement("input");
checkRed.name="colorP1";
checkRed.id="red";
checkRed.type="radio";
checkRed.value=1;
colores1.appendChild(checkRed);

let circleRed=document.createElement("label");
circleRed.setAttribute("class","circle-red");
circleRed.setAttribute("for","red");
colores1.appendChild(circleRed);




label2.appendChild(txt2);
div1.appendChild(label2);

//fin label 2


label3.setAttribute("for","jugador2");
label3.textContent="Jugador 2";
let txt3=document.createElement("input");
txt3.type="text";
txt3.placeholder="Nombre";
txt3.id="jugador2";

label3.appendChild(txt3);
div2.appendChild(label3);
//fin label 3

label4.setAttribute("for","color2");
label4.style="width:100px;";
label4.textContent="Color fihca";
let br2=document.createElement("br");
label2.appendChild(br2);
let txt4=document.createElement("input");
txt4.type="color";
txt4.placeholder="Color ficha";
txt4.id="color2";
txt4.style="width:100px;";

label4.appendChild(txt4);
div2.appendChild(label4);

//fin label 3


article.appendChild(div1);
let hr=document.createElement("hr");
article.appendChild(hr);
article.appendChild(div2);

fragment.appendChild(article)

console.log(fragment)
main.appendChild(fragment);

////////////////////////////////////////////////////////////////////

container.innerHTML=`


                <div class="grid">
                    <label for="jugador1">
                        Jugador 1
                        <input type="text" placeholder="Nombre" id="jugador1">
                    </label>
                    <label for="color1" style="width:100%;">
                        Color ficha
                        <br>
                        <div class="container-fichas">
                            <input name="colorP1" class="" id="red" type="radio" value="1"> 
                            <label class="circle-red" for="red"></label>

                            <input name="colorP1" class="" id="blue" type="radio" value="2">
                            <label class="circle-blue" for="blue"></label>

                            <input name="colorP1" class="" id="yellow" type="radio" value="3">
                            <label class="circle-yellow" for="yellow"></label>

                            <input name="colorP1" class="" id="orange" type="radio" value="4">
                            <label class="circle-orange" for="orange"></label>
                        </div>
                    </label>
                </div>
               
    
                <hr>
    
                <div class="grid">
                    <label for="jugador2">
                        Jugador 2
                        <input type="text" placeholder="Nombre" id="jugador2">
                    </label>
                    <label for="color2" style="width:100px;">
                        Color ficha
                        <br>
                        <input type="color" placeholder="Color ficha" id="color2" style="width:100px;">
                    </label>
        
                </div>

                <button id="btn-comenzar">Comenzar partida</button>
        
`;
 });


const btnComenzar= document.getElementById("btn-comezar");

btnComenzar.addEventListener("click",(e)=>{
   
    let name1=document.getElementById("jugador1").value;
    let color1=document.getElementById("color1").value

    console.log(name1)
});