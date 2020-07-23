class UI {
  constructor(){
    this.displayCal = document.querySelector(".displayCal");
    this.calci = document.querySelector(".calci");
  }
  initState(){
    document.querySelector(".calc-typed").innerText="OFF";
    setTimeout(()=>{
      document.querySelector(".displayCal").style.display="inline";
      document.querySelector(".calc-body").style.display="none";
    },2000)
  }
  manaulState(){
    let output=`
<div class="man">

<form>
<h1 class="mt-5">Enter your problem!</h1>
  <select name="type" class="custom-select-lg">
    <option value="simplify">simplify</option>
  <option value="factor">factor</option>
  <option value="derive">derive</option>
  <option value="integrate">integrate</option>
  </select>

  <input type="text" class="form-control-lg mt-5 manText" >
  <input type="submit" class="btn-lg btn-outline-dark manualcal" value="calculate">
  <input type="submit" class="btn-lg btn-outline-dark mantocal" value="Return">
  <input type="submit" class="btn-lg btn-outline-danger closeManual" value="close">
  <form>
</div>
 
    `;
    document.querySelector(".calci").style.display="none";
    document.querySelector(".Mancal").innerHTML=output;
    document.querySelector(".closeManual").addEventListener("click",()=>{
      document.querySelector(".displayCal").style.display="inline";
      document.querySelector(".man").style.display="none";
      document.querySelector(".calApp").remove();
    });
    document.querySelector(".mantocal").addEventListener("click",()=>{
      document.querySelector(".calci").style.display="inline";
      document.querySelector(".man").style.display="none";
    });
  }
display(){
  document.querySelector(".calci").style.display="inline";
  let output=`
  <div class="container mt-3 calApp">
  <div class="calc-body">
    <div class="calc-screen">
      <div class="calc-operation" id="expr"></div>
      <div class="calc-typed"></div>
    </div>
    <div class="keys">
    <div class="calc-button-row">
      <div class="button c">C</div>
      <div class="button l backspace"><i class="fas fa-backspace"></i></div>
      <div class="button l sym">/</div>
      <div class="button l equal">=</div>
    </div>
    <div class="calc-button-row">
      <div class="button num">7</div>
      <div class="button num">8</div>
      <div class="button num">9</div>
      <div class="button l sym">*</div>
    </div>
    <div class="calc-button-row">
      <div class="button num">4</div>
      <div class="button num">5</div>
      <div class="button num">6</div>
      <div class="button l sym">-</div>
    </div>
    <div class="calc-button-row">
      <div class="button num">1</div>
      <div class="button num">2</div>
      <div class="button num">3</div>
      <div class="button l sym">+</div>
    </div>
    <div class="calc-button-row">
      <div class="button l num">.</div>
      <div class="button num">0</div>
      <div class="button l sym">(</div>
        <div class="button l sym">)</div>
      </div>
      <div class="calc-button-row">
          <div class="button l sym">%</div>
          <div class="button l manaul" style="font-size:20px">manaul</div>
          <div class="button l up"><i class="fas fa-sort-up"></i></div>
          <div class="button l down"><i class="fas fa-sort-down down"></i></div>

      </div>
    </div>
    </div>
  </div>`
  this.displayCal.style.display="none";
  this.calci.innerHTML=output;
  document.querySelector(".calc-typed").innerText="Hello User";
  setTimeout(()=>document.querySelector(".calc-typed").innerText="0",2000)

 
  
  }
  addToDisplay(num){
    let calcTyped=document.querySelector(".calc-typed").innerText;
    if(calcTyped[0]==="0"){
      calcTyped="";
    }
    calcTyped+=num;
    document.querySelector(".calc-typed").innerText=calcTyped;

  }
  clearScreen(){
    document.querySelector(".calc-operation").innerText="";
    document.querySelector(".calc-typed").innerText="Screen Cleared";
    setTimeout(()=>document.querySelector(".calc-typed").innerText="0",2000);
  }
  backspace(){
    let calcTyped=document.querySelector(".calc-typed").innerText;
    calcTyped=calcTyped.slice(0,-1);
    document.querySelector(".calc-typed").innerText=calcTyped;
  }
  addToExp(symb){
    let calcTyped=document.querySelector(".calc-typed").innerText;
    let expr = document.querySelector(".calc-operation").innerText;
    console.log(calcTyped.split(":")[0]==="ANS");
    if(symb==="="){
      if(calcTyped==="0"){
        expr=expr;
      }
      else{
        expr=expr+calcTyped;
      }
      
    }else{
      if(calcTyped.split(":")[0]==="ANS"){
        expr=calcTyped.split(":")[1]+symb;
        
      }
      else{
        expr=expr+calcTyped+symb;
      }
    }
    
    document.querySelector(".calc-operation").innerText=expr;
    document.querySelector(".calc-typed").innerText="";
}
ansdisplay(ans){
  if(ans.result!=null){
    document.querySelector(".calc-typed").innerText=`ANS: ${ans.result}`;
  }
}
errorDisplay(){
    document.querySelector(".calc-typed").innerText=`ERROR`;
    document.getElementById("expr").style.backgroundColor="red";
    setTimeout(()=>{
      let expr = document.getElementById("expr").innerText;
      document.getElementById("expr").style.backgroundColor="#3A4655";
      document.querySelector(".calc-typed").innerText=``;
      document.getElementById("expr").innerHTML=`<input type="text" class="form-control exprChange">
      <input type="submit"  value="change" class="btn btn-dark  mt-1 changeValue">`;
      document.querySelector(".exprChange").value=expr;
      document.querySelector(".changeValue").addEventListener("click",()=>{
        let changeexpr =document.querySelector(".exprChange").value;
        document.getElementById("expr").innerHTML="";
        document.getElementById("expr").innerText= changeexpr;

      });
    },2000);
    
  }

manualOutput(data){
  console.log(data.result.split(":")[1]);


  if(data.result.split(":")[1]===" syntax error"){
    alert("Check your Syntax");
  }
  else{
    document.querySelector(".mantocal").style.display="inline";
    let output = `
    <div class="row">
    <div class="col-4 mx-auto mt-5">
    <div class="card mx-auto">
    <div class="card-body" style="font-size:40px;"><strong >${data.expression}</strong> =<em >${data.result}</em></div>
  </div>
  </div>
  </div>
    `;
  document.querySelector(".manOutput").innerHTML=output;
  }
}
}
export const ui = new UI();