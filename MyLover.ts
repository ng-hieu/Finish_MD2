export class MyLove{
    private _idLover: number;
    private _nameLover: string;
    private _zodiac: string;
    private _homeTown: string;
    private _yearOfBirth: number;
    private _hobby: string;

    constructor(idLover: number, nameLover: string, zodiac: string, homeTown: string, yearOfBirth: number, hobby: string) {
        this._idLover = idLover;
        this._nameLover = nameLover;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._hobby = hobby;
    }

    get idLover(): number {
        return this._idLover;
    }

    setidLover(value: number) {
        this._idLover = value;
    }

    get nameLover(): string {
        return this._nameLover;
    }

    setNameLover(value: string) {
        this._nameLover = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    setZodiac(value: string) {
        this._zodiac = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    setHomeTown(value: string) {
        this._homeTown = value;
    }

    get yearOfBirth(): number {
        return this._yearOfBirth;
    }

    setYearOfBirth(value: number) {
        this._yearOfBirth = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    setHobby(value: string) {
        this._hobby = value;
    }
}