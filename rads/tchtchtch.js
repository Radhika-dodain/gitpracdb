// let make an app that let you enter your name and turn words to num=> a is 1, z is 26

let name="Rads";
for(let i=0;i<name.length;i++){
  let num=name[i].toLowerCase().charCodeAt(0) -'a'.charCodeAt(0)+1;
   console.log(num + " ");
}