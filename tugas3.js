function divideAndSort(data) {
  isNumb = cekData(data);
  if (isNumb == true) {
    let dataArray = toArray(data, 0);
    let length = dataArray.length;
    for (let i = 0; i < length; i++) {
      dataArray[i] = toArray(dataArray[i], "");
      lenDatArr = dataArray[i].length;
      dataArray[i] = dataArray[i].sort();
      dataArray[i] = dataArray[i].toString();
      dataArray[i] = trimObject(dataArray[i], ",", lenDatArr);
    }
    data = dataArray.toString();
    data = trimObject(data, ",", length);
    console.log(data);
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
  let dataStr = data.toString();
  let dataArray = dataStr.split(separator);
  return dataArray;
}

function trimObject(str, trim, looping) {
  for (let i = 1; i < looping; i++) {
    str = str.replace(trim, "");
  }
  return str;
}

const numb = 5956560159466056;
divideAndSort(numb);
