import {httpsFrame } from "./http";
import {ui} from "./UI";
import {store} from "./LS"
document.querySelector(".dot").addEventListener("click",CalciState);
function CalciState(e){
 ui.display();
 document.querySelector(".keys").addEventListener("click",calculate);
 document.querySelector(".keys").addEventListener("dblclick",offState);
}

function calculate(e){
  if(e.target.classList.contains("num")){
    let num=e.target.innerText;
    ui.addToDisplay(num);
  }
  else 
  if(e.target.classList.contains("c")){
    ui.clearScreen();
    store.resetLs();
  }
  else
  if(e.target.classList.contains("backspace")||e.target.classList.contains("fa-backspace")){
    ui.backspace();
  }
  if(e.target.classList.contains("equal")){
    let symb="=";
    ui.addToExp(symb);
    document.querySelector(".calc-typed").innerText="Calculating...";
    let expr = document.querySelector(".calc-operation").innerText;
    let post={
    
        "expr": expr,
        "precision": 14
      }

    httpsFrame.post("http://api.mathjs.org/v4/",post).
    then((data)=>{
      if(data.result!=null){
       ui.ansdisplay(data);
       let expr = document.querySelector(".calc-operation").innerText;
       store.addexpr(expr);

      }
      else{
        ui.errorDisplay();
      }
    })
    .catch((err)=>console.log(err))

  }
  else 
  if(e.target.classList.contains("up")){
    let expr= store.upPointer();
    document.querySelector(".calc-operation").innerText=expr;
  }
  else
  if(e.target.classList.contains("down")){
    let expr= store.downPointer();
    document.querySelector(".calc-operation").innerText=expr;
  }
  else
  if(e.target.classList.contains("sym"))
  {
    let symb= e.target.innerText;
    ui.addToExp(symb);

  }  else
  if(e.target.classList.contains("manaul"))
  {

    ui.manaulState();
    document.querySelector(".manualcal").addEventListener("click",manCal);

  }


}
function offState(e){
  if(e.target.classList.contains("c")){
      ui.initState();
       }

}
function manCal(e){
  document.querySelector(".manOutput").innerHTML=`<div class="spinner-border text-dark mt-3"></div>`;
  let type = document.querySelector(".custom-select-lg").value;
  let qstn= document.querySelector(".manText").value;
  httpsFrame.get(`https://newton.now.sh/${type}/${qstn}`)
  .then((data)=>ui.manualOutput(data))
  .catch((err)=>console.log(err))
  e.preventDefault()
}

