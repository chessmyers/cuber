export class Person {
  constructor(public name: string,public grade: number,public drives: boolean, public phoneNum: number, public email: string, public address: string) {}

    //interface for a person as retrieved from firebase
    //Requires name, grade, drives, phoneNum, email, address   variables--in that order
}
