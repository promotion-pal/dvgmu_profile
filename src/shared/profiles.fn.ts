class Profile {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(): string {
        return `${this.lastName} ${this.firstName}`
    }

    getInitials(): string {
        return this.fullName()
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    }
}
class ProfileSocial {
    email: string;
    phone: string;
    max: string;

    constructor(email: string, phone: string, max: string) {
        this.email = phone;
        this.phone = phone;
        this.max = max;
    }
}

const PROFILES = [
    {
        init: new Profile("Ростислав", "Коноплев", 23),
        social: new ProfileSocial("rostvac@gmail.com", "79941387422", ""),
    }
]