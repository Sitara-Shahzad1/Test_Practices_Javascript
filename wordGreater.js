const isGreater= (str) => {

  str.split(" ").find(word => {
    if(str.length > word.length ){
      return str ;
    }
  })

}

console.log(isGreater("THis is JAvascript "))
