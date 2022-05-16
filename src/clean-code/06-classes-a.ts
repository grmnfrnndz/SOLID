(()=> {

    // no aplicando el principio de la responsabilidad unica

    type Gender = 'M'|'F';

    class Person {

        constructor(
            public name:string, 
            public gender: Gender, 
            public birthDate: Date){};

    }


    class User extends Person {


        public lastAccess: Date;

        constructor(
            public email: string,
            public rol:string,
            name:string, 
            gender: Gender, 
            birthDate: Date
        ){
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        };

        checkCredencials() {
            return true;
        }
    }


    class UserSettings extends User{

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            rol:string,
            name:string, 
            gender: Gender, 
            birthDate: Date
        ){
            super(email, rol, name, gender, birthDate)
        };

    }






    const newPerson = new Person('German', 'M', new Date('1987-06-22'));
    console.log(newPerson);

    // const newUser = new User();

    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'german.contreras.f@gmail.com',
        'Admin',
        'German',
        'M',
        new Date('1987-06-22')
    );
    console.log(userSettings);

})();