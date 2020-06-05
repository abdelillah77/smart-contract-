import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from "../models/User";


@Injectable()
export class UserService {

    users: User[];
    data: Observable<any>;

    constructor() {

        this.users = [
            {
                firstName: 'abdelillah',
                lastName: 'abdelillah',
                age: 30,
                email: 'aaaa@yahoo.com ',
                //image:'http://lorempixel.com/600/600/people/3',
                isActive: true,
                role: 'read',
                job: 'medecin',

                registered: new Date('11/02/1998 10:30'),
                hide: true


            },

            {
                firstName: 'abdelillah',
                lastName: 'Guermouche',
                age: 22,
                email: 'aaaazzzz@yahoo.com ',
                //image:'http://lorempixel.com/600/600/people/2',
                isActive: false,
                role: 'read',
                job: 'medecin',
                registered: new Date('02/05/1998 10:30'),
                hide: true

            },

            {
                firstName: 'hichem',
                lastName: 'degdeg',
                age: 11,
                role: 'read',
                job: 'medecin',
                email: 'aaaarrrr@yahoo.com ',
                //image:'https:/&psig=AOvVaw1NvdzwWomqkCRkub_yDKx&ust=1582126002532000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLChy_m02-cCFQAAAAAdAAAAABAD'
                registered: new Date('04/05/1998 10:30'),
                hide: true
            }

        ];


    }
    getUsers(): Observable<User[]> {

        return of(this.users);

    }

    addUser(user: User) {
        this.users.unshift(user);
    }

    getData() {
        this.data = new Observable(observer => {

            setTimeout(() => {
                observer.next(1);
            }, 1000);

            setTimeout(() => {
                observer.next(2);
            }, 2000);

            setTimeout(() => {
                observer.next(4);
            }, 3000);

            setTimeout(() => {
                observer.next(3);;
            }, 4000);



        });

        return this.data;

    }


}

