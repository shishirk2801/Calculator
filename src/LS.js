class LS{
    constructor(){
        this.point=Array.from(this.getexpr()).length;
    }
    getexpr()
    {
        let exprs;
        if(localStorage.getItem('exprs') === null ){
            exprs=[];
        }
        else
        {
            exprs = JSON.parse(localStorage.getItem('exprs'));
        }
        return exprs;

    }
     addexpr(expr)
    {
        let exprs = this.getexpr();
        exprs.push(expr);
        localStorage.setItem("exprs",JSON.stringify(exprs));
    }
    downPointer(){

        let expr =Array.from(this.getexpr());
        let yes;
        if(this.point>0){
            this.point-=1;
            yes=true;
        }
        else{
            this.point=-1;
            yes=false;
        }

        if(yes){
            return expr[this.point];
        }
        else{
            return "end";
        }
        
    }
    upPointer(){
        let expr =Array.from(this.getexpr());
        let yes;
        if(this.point<(Array.from(this.getexpr()).length-1)){
            this.point+=1;
            yes=true;
        }
        else{
            this.point=Array.from(this.getexpr()).length;
            yes=false;
        }
        console.log(this.point);
        if(yes){
            return expr[this.point];
        }
        if(yes===false) {
            return "end";
        }
        
    }
    resetLs(){
        this.point=Array.from(this.getexpr()).length;
    }
}

export const store = new LS();