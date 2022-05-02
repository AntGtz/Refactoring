describe("Unidad de pruebas para ExplorerController", () => {
    test("1)Verificar que envie el primer filtro", () => {
        const ExplorerController = require("./../app/lib/controllers/ExplorerController");
        expect(ExplorerController.getExplorersByMission("node")).not.toBe(undefined);//si es igual a undefined, envia un array vacio, lo que significa que si realiza el filtro
        // expect(Reader.hello("papa")).toBe("Hola papa")
    });
});