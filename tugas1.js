let teks = "EkaFajhariAdwar";
let teksArray = teks.split("");
let length = teksArray.length;

let invers = teksArray[length - 1];
length -= 2;

for (let i = length; i >= 0; i--) {
  invers += `${teksArray[i]}`;
}

function toLowerCase(str) {
  return str.toLowerCase();
}

let teksLower = toLowerCase(teks);
let inversLower = toLowerCase(invers);

if (teksLower == inversLower) {
  console.log("Palindrom");
} else {
  console.log(`Invers = ${invers}`);
}
