export const genNextLabel = (l:any="")=>{
  function nextChar(l:string,uppercase){
    if(l==""){return ((uppercase)?"A":"a");}
    if(l.substr(-1).toLowerCase() == "z"){
      l = nextChar(l.substring(l.length-1,0),uppercase)+((uppercase)?"A":"a");
    }else{
      l = l.substring(0,l.length-1)+String.fromCharCode(l.charCodeAt(l.length-1)+1)
    }
    return l;
  }
  if(l.match(/^[0-9]*$/g)){return (parseInt(l)+1).toString();}
  else if(l.match(/^[a-z]*$/g)){
    return nextChar(l,false);
  }else if(l.match(/^[A-Z]*$/g)){
    return nextChar(l,true);
  }
  return l;
}

export const getURLQuery = ():any[]=>{
  function transformToAssocArray( prmstr ){
    var params = [];
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
      var tmparr = prmarr[i].split("=");
      params.push({key:tmparr[0],value:tmparr[1]});
    }
    return params;
  }
  let param = window.location.search.substr(1);
  return param != null && param != "" ? transformToAssocArray(param) : [];
}

export const VALIDATION_MSGS = {
  'username': {
    'required':   'Le pseudo est obligatoire.',
    'minlength':  'Le pseudo doit avoir au moins 2 caractères'
  },
  'email': {
    'required':   'L\'email est obligatoire.',
    'minlength':  'L\'email doit avoir au moins 2 caractères'
  },
  'password': {
    'required':   'Le mot de passe est obligatoire.',
    'minlength':  'Le mot de passe doit avoir au moins 6 caractères.'
  }
};