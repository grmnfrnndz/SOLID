(()=> {

    // aplicando el principio de la responsabilidad unica
    // priorizar la composicion frente a la herencia

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
        email: string;
        rol:string;
    }


    class User {
        public email: string;
        public rol:string;
        public lastAccess: Date;

        constructor({
            rol,
            email
        }: UserProps)
        {
            this.lastAccess = new Date();
            this.email = email;
            this.rol = rol;
        };

        checkCredencials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings{

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({workingDirectory, 
            lastOpenFolder} : SettingsProps
        ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        };

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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            rol,
            name, 
            gender, 
            birthDate} : UserSettingsProps){
                this.person= new Person({name, gender, birthDate});
                this.user = new User({email, rol});
                this.settings = new Settings({lastOpenFolder, workingDirectory});
            };

    }

    // const newPerson = new Person({
    //     name: 'German', 
    //     gender: 'M', 
    //     birthDate: new Date('1987-06-22')});
    // console.log(newPerson); 

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