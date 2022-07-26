const palindrom = (teks) => {
  let hasil = "";
  for (let x = teks.length - 1; x >= 0; x--) {
    hasil = hasil + teks[x];
  }
  if (hasil.toLowerCase() == teks.toLowerCase()) {
    console.log("its palindrom");
  } else {
    console.log("its not palindrom");
  }
};
palindrom("malaM");
