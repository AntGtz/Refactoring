const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        let read = Reader.readJsonFile("./../../explorers.json")
        let filter = ExplorerService.filterByMission(read, mission)
        return filter;

    }
}

module.exports = ExplorerController;