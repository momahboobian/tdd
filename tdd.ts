namespace CaesarCipherEncrypt {
  export function encryptString(input: string, offset: number) {
    let charArray: any = stringToCharArray(input);
    let codes: any = CharArrayToString(charArray);
    let codesPlusOffset: any = addCipherOffset(codes, offset);
    let encryptedArray: any = mapCharsToCharCodes(codesPlusOffset);
    return encryptedArray.join("");
  }

  export function stringToCharArray(input: string) {
    return input.split("");
  }

  export function CharArrayToString(input: any) {
    return input.map(function (char: any) {
      return char.charCodeAt(0);
    });
  }

  export function mapCharsToCharCodes(input: any) {
    return input.map((code: any) => String.fromCharCode(code));
  }

  export function addCipherOffset(input: any, offset: number) {
    return input.map((num: any) => num + offset);
  }

  export function mapCharCodesToChars(input: any) {}
}

///////////////////////////////////////
// Do not chhange below this

test("stringToCharArray abc -> ['a', 'b', 'c', 'd']", () => {
  expect(CaesarCipherEncrypt.stringToCharArray("abcd")).toStrictEqual([
    "a",
    "b",
    "c",
    "d",
  ]);
});

test("stringToCharArray abc -> ['a', 'b', 'c']", () => {
  expect(CaesarCipherEncrypt.stringToCharArray("abc")).toStrictEqual([
    "a",
    "b",
    "c",
  ]);
});

test("CharArrayToString I", () => {
  expect(CaesarCipherEncrypt.CharArrayToString(["a"])).toStrictEqual([97]);
});

test("CharArrayToString II", () => {
  expect(CaesarCipherEncrypt.CharArrayToString(["a", "b"])).toStrictEqual([
    97, 98,
  ]);
});

test("CharArrayToString III", () => {
  expect(CaesarCipherEncrypt.CharArrayToString(["a", "b", "c"])).toStrictEqual([
    97, 98, 99,
  ]);
});

test("mapCharsToCharCodes I", () => {
  expect(CaesarCipherEncrypt.mapCharsToCharCodes([97, 98, 99])).toStrictEqual([
    "a",
    "b",
    "c",
  ]);
});

test("addCipherOffset", () => {
  expect(CaesarCipherEncrypt.addCipherOffset([97, 98, 99], 1)).toStrictEqual([
    98, 99, 100,
  ]);
});

test("encryptString", () => {
  expect(CaesarCipherEncrypt.encryptString("abc", 1)).toStrictEqual("bcd");
});
