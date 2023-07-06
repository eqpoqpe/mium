function generateRandomString(): string {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));

  const numbers = "0123456789";
  let randomNumbers = "";

  for (let i = 0; i < 7; i++) {
    randomNumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  const randomString = randomNumbers + randomLetter;
  const shuffledString = randomString.split("").sort(() => Math.random() - 0.5).join("");

  return shuffledString;
}

/**
 * like 'n4790303', '46L77567', '1037W853', '615H6727'
 * 
 * @param count 
 * @returns 
 */
function generateUniqueRandomStrings(count: number): string[] {
  const uniqueStrings: Set<string> = new Set();

  while (uniqueStrings.size < count) {
    const randomString = generateRandomString();
    uniqueStrings.add(randomString);
  }

  return Array.from(uniqueStrings);
}

export {
  generateUniqueRandomStrings
};