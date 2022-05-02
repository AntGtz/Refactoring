const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
let read = Reader.readJsonFile("./../../explorers.json")

class ExplorerController{
    static getExplorersByMission(mission){
        let filter = ExplorerService.filterByMission(read, mission)
        return filter;
    }
    static getExplorersUsernamesByMission(mission){
        let usernames = ExplorerService.getExplorersUsernameByMission(read, mission)
        return usernames
    }
    static getExplorersAmonutByMission(mission){
        let amount = ExplorerService.getAmountOfExplorersByMission(read, mission)
        return amount

    }
}

module.exports = ExplorerController;