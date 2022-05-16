(()=> {

    // no aplicando el principio de la responsabilidad unica

    type Gender = 'M'|'F';


    interface PersonProps {
        birthDate: Date;
        gender: Gender;
        name:string;
    }

    class Person {

        public birthDate:Date;
        public gender:Gender;
        public name:string;

        constructor({name, gender, birthDate}: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        };
    }


    interface UserProps {
        birthDate: Date;
        email: string;
        gender: Gender;
        name:string; 
        rol:string;
    }


    class User extends Person {
        public email: string;
        public rol:string;
        public lastAccess: Date;

        constructor({
            birthDate,
            email,
            gender, 
            name, 
            rol, 
        }: UserProps)
        {
            super({name, gender, birthDate});
            this.lastAccess = new Date();
            this.email = email;
            this.rol = rol;
            
        };

        checkCredencials() {
            return true;
        }
    }


    interface UserSettingsProps {
        birthDate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name:string; 
        rol:string;
        workingDirectory: string;
    }

    class UserSettings extends User{

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            {workingDirectory,
            lastOpenFolder,
            email,
            rol,
            name, 
            gender, 
            birthDate} : UserSettingsProps
        ){
            super({email, rol, name, gender, birthDate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        };

    }


    const newPerson = new Person({
        name: 'German', 
        gender: 'M', 
        birthDate: new Date('1987-06-22')});
    console.log(newPerson);

    // const newUser = new User();

    const userSettings = new UserSettings(
        {workingDirectory: '/user/home',
        lastOpenFolder: '/home',
        email: 'german.contreras.f@gmail.com',
        rol: 'Admin',
        name: 'German',
        gender: 'M',
        birthDate: new Date('1987-06-22')}
    );
    console.log(userSettings);

})();