describe("Unidad de pruebas para reader", () => {
    test("1)Verificar que se lea el json", () => {
        const Reader = require("./../app/lib/utils/Reader")
        expect(Reader.readJsonFile("./explorers.json")).not.toBe(undefined)
       // expect(Reader.hello("papa")).toBe("Hola papa")
    })
})