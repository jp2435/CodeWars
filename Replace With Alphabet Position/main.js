function alphabetPosition(text) {
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const arr = []
    for(let i = 0; i < text.length; i++){
      const char = text[i].toLowerCase()
      if(abc.indexOf(char) !== -1){
        //arr[i]= abc.indexOf(char)+1
        arr.push(abc.indexOf(char)+1)
      }/*else if(abc.indexOf(char) == -1){
        arr[i]= ''
      }*/
    }
    text = arr.join(' ')
    return text;
  }
  const str = 'The sunset sets at twelve o\' clock.'
  alphabetPosition(str)