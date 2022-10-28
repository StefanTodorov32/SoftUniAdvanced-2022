function words(string){
    let a = string.match(/\w+/g).join(", ").toUpperCase();
    console.log(a);
}
words('Hi, how are you?')