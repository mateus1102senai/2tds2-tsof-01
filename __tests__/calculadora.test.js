 import { somar, subtrair, multiplicar, dividir   } from "../src/calculadora.js";

 describe("Calculadora", () => {
   test("Deve somar dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
     const a = 2;
     const b = 3;

    // Act (Executar)
    const resultado = somar(a, b);

    // Assert (Verificar)
     expect(resultado).toBe(5);
   });

   test("Deve subtrair dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
     const a = 2;
     const b = 3;

    // Act (Executar)
    const resultado = subtrair(a, b);

    // Assert (Verificar)
     expect(resultado).toBe(-1);
   });

   test("Deve multiplicar dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
     const a = 2;
     const b = 3;

    // Act (Executar)
    const resultado = multiplicar(a, b);

    // Assert (Verificar)
     expect(resultado).toBe(6);
   });

   test("Deve dividir dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
     const a = 10;
     const b = 5;

    // Act (Executar)
    const resultado = dividir(a, b);

    // Assert (Verificar)
     expect(resultado).toBe(2);
   });

   test("Deve lançar um erro ao dividir por zero", () => {
   expect(() => {
    dividir(10, 0);
   }).toThrow("Não é possível dividir por zero");
 });
 });
