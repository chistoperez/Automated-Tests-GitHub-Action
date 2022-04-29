const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test para FizzbuzzService", () => {
  test("Requerimiento 1: validar buzz", () => {
    const explorer = { score: 3 };
    FizzbuzzService.applyValidationInExplorer(explorer);
    expect(explorer.trick).toBe("FIZZ");
  });

  test("Requerimiento 2: validar fizz", () => {
    const explorer = { score: 5 };
    FizzbuzzService.applyValidationInExplorer(explorer);
    expect(explorer.trick).toBe("BUZZ");
  });

  test("Requerimiento 3: validar fizzbuzz", () => {
    const explorer = { score: 15 };
    FizzbuzzService.applyValidationInExplorer(explorer);
    expect(explorer.trick).toBe("FIZZBUZZ");
  });

  test("Requerimiento 4: validar fizzbuzz", () => {
    const explorer = { score: 7 };
    FizzbuzzService.applyValidationInExplorer(explorer);
    expect(explorer.trick).toBe(7);
  });
});

describe("Test para FizzbuzzService numero", () => {
  test("Requerimiento: validar buzz", () => {
    const number = 5;
    const fizzbuzz = FizzbuzzService.applyValidationInNumber(number);
    expect(fizzbuzz).toBe("BUZZ");
  });

  test("Requerimiento: validar fizz", () => {
    const number = 3;
    const fizzbuzz = FizzbuzzService.applyValidationInNumber(number);
    expect(fizzbuzz).toBe("FIZZ");
  });

  test("Requerimiento: validar fizzbuzz", () => {
    const number = 15;
    const fizzbuzz = FizzbuzzService.applyValidationInNumber(number);
    expect(fizzbuzz).toBe("FIZZBUZZ");
  });

  test("Requerimiento: validar number", () => {
    const number = 7;
    const fizzbuzz = FizzbuzzService.applyValidationInNumber(number);
    expect(fizzbuzz).toBe(7);
  });

  test("Requerimiento: validar number", () => {
    const number = "s";
    const fizzbuzz = FizzbuzzService.applyValidationInNumber(number);
    expect(fizzbuzz).toBe("Favor de introducir un número positivo");
  });
});
