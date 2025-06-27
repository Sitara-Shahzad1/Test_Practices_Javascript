const findOcc =(hyndrack, needle) =>{

  let str = hyndrack.toLowerCase();
  let str2 = needle.toLowerCase();
  console.log(str);
  console.log(str2);
  

  let check = str.includes(str2);
 if(check ===true){
  return str.indexOf(str2);
 }
}

console.log(findOcc("needlestr", "need"));
