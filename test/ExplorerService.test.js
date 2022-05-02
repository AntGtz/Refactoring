describe("Unidad de pruebas para service", () => {
    test("1)Verificar que envie el primer filtro", () => {
        const ExplorerService = require("./../app/lib/services/ExplorerService");
        const Reader = require("./../app/lib/utils/Reader"); 
        const info = Reader.readJsonFile("./explorers.json");
        expect(ExplorerService.filterByMission(info, "js")).not.toBe(undefined);//si es igual a undefined, envia un array vacio, lo que significa que si realiza el filtro
        // expect(Reader.hello("papa")).toBe("Hola papa")
    });
    test("2)Verificar cantidad de personas en mision", () =>{
        const ExplorerService = require("./../app/lib/services/ExplorerService");
        const Reader = require("./../app/lib/utils/Reader"); 
        const info = Reader.readJsonFile("./explorers.json");
        expect(ExplorerService.getAmountOfExplorersByMission(info, "node")).toBe(10);
    });
    test("3)Recibir nombres filtrando por mision", () => {
        const ExplorerService = require("./../app/lib/services/ExplorerService");
        const Reader = require("./../app/lib/utils/Reader"); 
        const info = Reader.readJsonFile("./explorers.json");
        expect(ExplorerService.getExplorersUsernameByMission(info, "node")[0]).toBe("ajolonauta1");
    });
    
});