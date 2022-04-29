class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
      explorer.trick = "FIZZBUZZ";
      return explorer;
    } else if (explorer.score % 3 === 0) {
      explorer.trick = "FIZZ";
      return explorer;
    } else if (explorer.score % 5 === 0) {
      explorer.trick = "BUZZ";
      return explorer;
    } else {
      explorer.trick = explorer.score;
      return explorer;
    }
  }
  static applyValidationInNumber(number) {
    if (number > 0 && number % 3 === 0 && number % 5 === 0) {
      return "FIZZBUZZ";
    } else if (number > 0 && number % 3 === 0) {
      return "FIZZ";
    } else if (number > 0 && number % 5 === 0) {
      return "BUZZ";
    } else if (number >= 0) {
      return number;
    } else {
      return "Favor de introducir un número positivo";
    }
  }
}
module.exports = FizzbuzzService;
