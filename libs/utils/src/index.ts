function removeSpaces(str: string): string {
  return str.replace(/\s/g, "");
}

function isAlphaNumeric(str?: string) {
  const reg = /^[a-zA-Z0-9]+$/;

  return (typeof str !== "undefined" && reg.test(str));
}

export {
  removeSpaces,
  isAlphaNumeric
};