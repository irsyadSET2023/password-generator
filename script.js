function generatePassword() {
  const smallLetterCheck = document.querySelector("#smallLetterCheck").checked;
  const capitalLetterCheck = document.querySelector(
    "#capitalLetterCheck"
  ).checked;
  const numbersCheck = document.querySelector("#numbersCheck").checked;
  const symbolsCheck = document.querySelector("#symbolCheck").checked;
  const passwordLength = Number(
    document.querySelector("#passwordLength").value
  );

  if (!passwordLength) {
    alert("Password Length Cannot be 0");
  }

  if (
    !smallLetterCheck &&
    !capitalLetterCheck &&
    !numbersCheck &&
    !symbolsCheck
  ) {
    alert("At least 1 criteria");
  }

  const smallLetter = "abcdefghijklmnopqrstuvwxyz";
  const capitalLetter = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!#$%&()*+@^";

  const passwordType = [];
  if (smallLetterCheck) {
    passwordType.push(smallLetter);
  }
  if (capitalLetterCheck) {
    passwordType.push(capitalLetter);
  }
  if (numbersCheck) {
    passwordType.push(numbers);
  }
  if (symbolsCheck) {
    passwordType.push(symbols);
  }

  let i = 0;
  let num;
  let generatedPassword = "";
  while (i < passwordLength) {
    let randomPasswordTypeNumber = Math.floor(
      Math.random() * passwordType.length
    );
    let passwordTypeLength = passwordType[randomPasswordTypeNumber].length;
    let randomPasswordIndex = Math.floor(Math.random() * passwordTypeLength);
    generatedPassword +=
      passwordType[randomPasswordTypeNumber][randomPasswordIndex];
    i++;
  }

  document.querySelector("#generatedPassword").innerText = generatedPassword;
}
