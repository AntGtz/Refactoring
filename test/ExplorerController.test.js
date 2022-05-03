describe("Unidad de pruebas para ExplorerController", () => {
    test("1)Filtrado por misión", () => {
        const ExplorerController = require("./../app/lib/controllers/ExplorerController");
        expect(ExplorerController.getExplorersByMission("node")).not.toBe(undefined);//devuelve el objeto con los users que estan en node
    });
    test("2)Lista de usernames", () => {
        const ExplorerController = require("./../app/lib/controllers/ExplorerController");
        expect(ExplorerController.getExplorersUsernamesByMission("node")).not.toBe(undefined);//Devuelve un arreglo con los nombres de usuario que estan en node
    });
    test("3)Cantidad de usuarios", () => {
        const ExplorerController = require("./../app/lib/controllers/ExplorerController");
        expect(ExplorerController.getExplorersAmonutByMission("node")).toBe(10);//Devuelve un arreglo con los nombres de usuario que estan en node
    });
    test("4)Score/FIZZBUZZ", () => {
        const ExplorerController = require("./../app/lib/controllers/ExplorerController");
        expect(ExplorerController.fizzbuzz(5)).toBe("BUZZ");
    });
});