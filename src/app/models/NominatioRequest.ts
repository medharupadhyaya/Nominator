export class Nominationrequest {

    constructor(upn, teamid, teamname) {
        this.nominatedUpn = upn;
        this.teamId = teamid;
        this.teamName = teamname;
    }

    nominatedUpn;
    teamId;
    teamName;
}
