export const required = (value)=>{
   if(value) return undefined;
   return 'field is required!';
}

export const maxlengthCreator = (maxlength) => (value)=>{
   if(value.length > maxlength) return "max length is " + maxlength + " simbols";
   return undefined;
}