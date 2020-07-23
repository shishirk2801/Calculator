class  http {

    async get(url){
       const respn = await fetch(url);
       const resdata = await respn.json();
       return resdata;

   }
    async post(url,data){
      
           const respn = await fetch(url,{
               method : "POST",
               headers : {
                   "Content-type" : "application/json"
               },
               body : JSON.stringify(data)
               
           });
       const resdata = await respn.json();
       return resdata;

   }
   async put(url,data){
      
      const respn = await fetch(url,{
           method : "PUT",
           headers : {
               "Content-type" : "application/json"
           },
           body : JSON.stringify(data)
           
       });
   const resdata = await respn.json();
   return resdata; 
   }
   async del(url){
       const respn = await fetch(url,{
           method : "DELETE",
           headers : {
               "Content-type" : "application/json"
           }

       });
   const resdata = await "Deleted";
   
       return resdata;
   }
}

export const httpsFrame = new http();