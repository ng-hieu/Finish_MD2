import {MyLove} from "./MyLover";
import {ManagerMyLover} from "./ManagerMyLover";

let input = require('readline-sync');
let managerLover = new ManagerMyLover();

function mainMenu() {
    let count = 5;
    let choice = -1;
    do {
        console.log(`
    -------Main Menu-------
    1. Show all lover
    2. Find a lover by name
    3. Create a new lover 
    4. Update a lover
    5. Delete a lover 
    0. Exit
    `)
        choice = +input.question('Enter choice: ');
        if (choice <= count) {
            switch (choice) {
                case 1:
                    showAllLover();
                    break;
                case 2:
                    findLover();
                    break;
                case 3:
                    createNewLover();
                    break;
                case 4:
                    updateLover();
                    break;
                case 5:
                    deleteLover();
                    break;
            }
        } else {
            console.log('No choice. Re-enter')
        }
    } while (choice != 0);
}

function showAllLover() {
    let arrManager = managerLover.listMyLover;
    console.log(`----Show all lover----`);
    if (arrManager.length === 0) {
        console.log("Doesn't have any lover!!!")
    } else {
        console.table(managerLover.showMyLover());
    }
}

function findLover() {
    console.log(`----Search lover by name----`);
    let arrManager = managerLover.listMyLover;
    if (arrManager.length === 0) {
        console.log("Doesn't have any lover!!!")
    } else {
        let nameLover = input.question("Enter name of lover you want: ");
        managerLover.searchNameOfLover(nameLover);
    }
}

function createNewLover() {
    let regexShort = /^[a-zA-Z\s]{1,20}$/;
    let regexLength = /^[a-zA-Z0-9\s]{1,1000}$/;
    console.log(`----Create a new lover----`);
    let id = managerLover.getIdLover();
    let nameOfLover = input.question("Enter name of lover: ");
    console.log(`
    -------Choice Zodiac-------
    1. Aries
    2. Taurus
    3. Gemini
    4. Cancer
    5. Leo
    6. Virgo
    7. Libra
    8. Scorpius
    9. Sagittarius
    10.Capricorn
    11.Aquarius
    12.Pisces
    `)
    let numberZodiac = input.question("Enter choice of zodiac: ");
    let zodiac = choiceZodiac(numberZodiac);
    let homeTown = input.question("Enter home town: ");
    let yearOfBirth: number = +input.question("Enter year of birth: ");
    let hobby = input.question("Enter hobby: ");
    let checkName = regexShort.test(nameOfLover);
    let checkHomeTown = regexShort.test(homeTown);
    let checkHobby = regexLength.test(hobby);
    if (checkName === true && checkHomeTown === true && yearOfBirth > 0 && checkHobby === true) {
        let newLover = new MyLove(id, nameOfLover, zodiac, homeTown, yearOfBirth, hobby)
        managerLover.addLover(newLover);
    } else {
        console.log(`
        Re-enter Information. Note:
        - The name and the home town must not be less than or more than 20 characters
        - The year of birth must be a positive number 
        `);
        createNewLover();
    }
}

function choiceZodiac(choice): string {
    let arrZodiac = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpius","Sagittarius","Capricorn","Aquarius","Pisces"];
    return arrZodiac[choice-1];
}

function updateLover() {
    console.log(`----Update lover----`);
    let arrManager = managerLover.listMyLover;
    if (arrManager.length === 0) {
        console.log("Doesn't have any lover!!!")
    } else {
        console.table(managerLover.showMyLover())
        let id = +input.question('Enter id of lover update: ');
        let name = input.question('Enter name: ');
        console.log(`
    -------Choice Zodiac-------
    1. Aries
    2. Taurus
    3. Gemini
    4. Cancer
    5. Leo
    6. Virgo
    7. Libra
    8. Scorpius
    9. Sagittarius
    10.Capricorn
    11.Aquarius
    12.Pisces
    `)
        let numberZodiac = input.question("Enter choice of zodiac: ");
        let zodiac = choiceZodiac(numberZodiac);
        let homeTown = input.question("Enter home town: ");
        let yearOfBirth: number = +input.question("Enter year of birth: ");
        let hobby = input.question("Enter hobby: ");
        managerLover.updateLoverById(id, name, zodiac, homeTown, yearOfBirth, hobby);
    }
}

function deleteLover() {
    console.log(`----Delete lover----`);
    let arrManager = managerLover.listMyLover;
    if (arrManager.length === 0) {
        console.log("Doesn't have any lover!!!")
    } else {
        console.table(managerLover.showMyLover())
        let id = +input.question('Enter id of lover delete: ');
        managerLover.deleteLoverById(id);
    }
}

mainMenu();