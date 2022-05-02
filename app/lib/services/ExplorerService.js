class ExplorerService{
    static filterByMission(explorer, mission){
        const filterMission = explorer.filter((explorer) => explorer.mission == mission);
        return filterMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInmission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInmission.length;
    }
    static getExplorersUsernameByMission(explorers, mission){
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInMission;
    }
}

module.exports = ExplorerService;