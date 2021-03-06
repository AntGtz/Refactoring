describe("Unidad de pruebas para FizzbuzzService", () => {
    test("1)Agregar trick a explorer FIZZBUZZ", () => {
        const FizzbuzzService = require("./../app/lib/services/FizzbuzzService");
        const explorer1 = {name: "Explorer1", score: 1};
        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
        const explorer3 = {name: "Explorer3", score: 3};
        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
        const explorer5 = {name: "Explorer5", score: 5};
        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
        const explorer15 = {name: "Explorer15", score: 15};
        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });
    test("2)Filtrar por score", () => {
        const FizzbuzzService = require("./../app/lib/services/FizzbuzzService");
        expect(FizzbuzzService.applyValidationInNumber(1)).toBe(1);
        expect(FizzbuzzService.applyValidationInNumber(3)).toStrictEqual("FIZZ");
        expect(FizzbuzzService.applyValidationInNumber(5)).toStrictEqual("BUZZ");
        expect(FizzbuzzService.applyValidationInNumber(15)).toStrictEqual("FIZZBUZZ");
    });
});