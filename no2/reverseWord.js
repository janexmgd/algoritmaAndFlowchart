const reverseWord = (kalimat) => {
  const balikKalimat = kalimat.split(" ").reverse().join(" ");
  console.log(balikKalimat);
};

reverseWord("Saya Belajar Javascript");
