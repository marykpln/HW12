function myParseInt(numStr, radix = 10) {
  let numStrNormilized = numStr.toString().trim().toLowerCase();
  let result = 0;
  if (radix < 2 || radix > 36) {
    return NaN;
  }

  let sign = 1;

  if (numStrNormilized[0] === "-") {
    sign = -1;
    numStrNormilized = numStrNormilized.slice(1);
  }
  if (numStrNormilized == "") {
    return NaN;
  }

  for (let i = 0; i < numStrNormilized.length; i++) {
    let char = numStrNormilized[i];
    let digit;
    if (char >= "0" && char <= "9") {
      digit = char.charCodeAt(0) - "0".charCodeAt(0);
    } else if (char >= "a" && char <= "z") {
      digit = char.charCodeAt(0) - "a".charCodeAt(0) + 10;
    } else {
      break;
    }
    if (digit >= radix) {
      break;
    }
    result = result * radix + digit;
  }
  return result * sign;
}

console.log(
  `conversion string to number in decimal number system myParseInt("123")=123 ${
    myParseInt(123) == 123
  }`
);
console.log(
  `conversion string to number in binary number system myParseInt("123",2)=1 ${
    myParseInt(123, 2) == 1
  }`
);
console.log(
  `conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${
    myParseInt("z.", 36) == 35
  }`
);
console.log(
  `conversion string to number in decimal number system myParseInt("123.6", 10) = 35 ${
    myParseInt("123.6", 10) == 123
  }`
);
console.log(
  `NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${isNaN(
    myParseInt(".z", 36)
  )}`
);
console.log(
  `NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(
    myParseInt("123", 37)
  )}`
);
console.log(
  `NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(
    myParseInt("123", 1)
  )}`
);
console.log(
  `conversion string with spaces myParseInt(" 123 ")=123 ${
    myParseInt(" 123 ") == 123
  }`
);
console.log(
  `conversion string with spaces myParseInt(" 12 3 ")=12 ${
    myParseInt(" 12 3 ") == 12
  }`
);
console.log(
  `conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`
);
console.log(
  `conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`
);
console.log(
  `conversion string with a negative number myParseInt("-123") = -123 ${
    myParseInt("-123") == -123
  }`
);
console.log(
  `conversion if string is a number myParseInt(123) = 123 ${
    myParseInt(123) == 123
  }`
);

console.log(`conversion string35 ${myParseInt("z.", 36)}`);
