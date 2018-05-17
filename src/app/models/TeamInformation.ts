export class TeamInformation {
    constructor(_teamid, _teamname, _description, _owner) {
        this.teamId = _teamid;
        this.teamname = _teamname;
        this.description = _description;
        this.owner = _owner;
    }
    teamId: string;
    teamname: string;
    description: string;
    owner: string;
}
