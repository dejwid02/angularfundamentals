import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName=firstName;
    this.currentUser.lastName=lastName;
  }
currentUser: IUser
loginUser(userName: string, password: string){
    this.currentUser= {
        id: 1,
        firstName: 'Dawid',
        lastName: 'Fojtuch',
        userName: "dejwid02"    
    }
}

isAuthenticated() {
    return !!this.currentUser;
}
}