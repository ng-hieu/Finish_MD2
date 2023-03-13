import {MyLove} from "./MyLover";
export class ManagerMyLover{
    listMyLover:MyLove[] = [];
    countLover:number = 1;
    constructor() {
    }
    getIdLover() {
        return this.countLover++;
    }
    addLover(myLover): void{
        this.listMyLover.push(myLover);
    }
    showMyLover(): MyLove[] {
        return this.listMyLover;
    }
    searchNameOfLover(nameOfLover){
        let arrList: MyLove[] = this.listMyLover
        let result: MyLove[] = arrList.filter(element => element.nameLover.includes(nameOfLover))
        if (result.length === 0) {
            console.log('Eror - Error! Can not find any lover');
        } else {
            console.table(result);
        }
    }
    findIndexById(id: number): number {
        let i: number = -1;
        this.listMyLover.forEach((value, index, array) => {
            if (value.idLover === id) {
                i = index;
            }
        })
        return i;
    }
    updateLoverById(id:number, name:string, zodiac:string, homeTown:string, yearOfBirth:number, hobby:string){
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            this.listMyLover[idOfUpdate].setNameLover(name);
            this.listMyLover[idOfUpdate].setZodiac(zodiac);
            this.listMyLover[idOfUpdate].setHomeTown(homeTown);
            this.listMyLover[idOfUpdate].setYearOfBirth(yearOfBirth);
            this.listMyLover[idOfUpdate].setHobby(hobby);
            console.log("Update success")
        } else {
            console.log('Eror - Error! Can not find any lover have that id')
        }
    }
    deleteLoverById(id:number){
        let idOfDelete: number = this.findIndexById(id)
        if (idOfDelete != -1) {
            this.listMyLover.splice(idOfDelete, 1);
            console.log('Delete Success')
        } else {
            console.log('Eror - Error! Can not find any lover have that id')
        }
    }
}