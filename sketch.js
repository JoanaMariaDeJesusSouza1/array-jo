// array e matrizes é uma variiavel que permite armazenar varios valores
//  array      [0]        [1]        [2]            [3]             
var bolo=   ["morango","cenoura","chocolate","formigueiro"]
//para inserir um novo valor no array usamos push.

console.log(bolo);
console.log(bolo[1]);

bolo.push("fuba");
bolo.push("limão");
bolo.push("laranja");
console.log(bolo);
//para remover o ultimo valor no array usamos o pop.
bolo.pop();
console.log(bolo);

// para remover, deletar um valor especifico.
//remove mas mantem o espaço no array
delete bolo[4];
//remove do array
bolo.splice(0,1);
console.log(bolo);
//acrescenta um elemento espesifico ou troca ele dentro do array
bolo[3]="suiço";
console.log(bolo);
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  dawSprites();
}