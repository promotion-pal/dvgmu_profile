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

const PROFILES = [
    new Profile("Ростислав", "Коноплев", 23),
    new Profile("Иван", "Петров", 25),
    new Profile("Мария", "Иванова", 22),
];
