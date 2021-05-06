let teks = "Saya adalah seorang kapitan";

function balikan(str) {
  let teksArray = str.split(" ");

  let length = teksArray.length;

  let invers = teksArray[length - 1];

  for (let i = length - 2; i >= 0; i--) {
    invers += ` ${teksArray[i]}`;
  }

  console.log(invers);
}

balikan(teks);
