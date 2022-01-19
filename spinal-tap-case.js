function spinalCase(str) {
  str=str.trim().split(/[\W_]/g).map(e=>{
    return e.split("").map(element=>{
        if(element.toUpperCase()==element){
          return " "+element;
        }else{
          return element
        }
    }).join("");
  }).join(" ").split(" ").filter(e=>e).join("-").toLowerCase();

  console.log(str);
  return str;
}

spinalCase("The_Andy_Griffith_Show")