export class User {
    id: string;
    profile: Profile;
    performance: Performance;
    contributions: Contributions;
    domain: Domain;
}

export class Profile {
    userId: string;
    businessPhones: string[];
    displayName: string;
    givenName: string;
    jobTitle: string;
    mail: string;
    mobilePhone: string;
    officeLocation: string;
    preferredLanguage: string;
    surname: string;
    userPrincipalName: string;
}

export class Performance {
    training: Training[];
    rating: Rating[];
    skills: Skills[];
}

export class Training {
    courseName: string;
    attempts: string;
    score: string;
    status: string;
}

export class Rating {
    year: string;
    comments: string;
    result: string;
}

export class Skills {
    name: string;
    proficiency: string;
}

export class Contributions {
    hackathon;
    events;
}

export class Domain {
    project: Project[];
}

export class Project {
    domain;
    name;
    role;
    duration;
}
