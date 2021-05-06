function divideAndSort(data, func1 = cekData, func2 = toArray) {
  isNumb = cekData(data);
  if (isNumb == true) {
    console.log(toArray(data, 0));
  }
}

function cekData(data) {
  if (typeof data == "number") {
    return true;
  } else {
    return false;
  }
}

function toArray(data, separator) {
  let str = data.toString;
  return str.split(separator);
}

const numb = 100;
// divideAndSort(numb);

// let numbStr = numb.toString(numb);
let numbArray = numb.split(0);
console.log(numb);
