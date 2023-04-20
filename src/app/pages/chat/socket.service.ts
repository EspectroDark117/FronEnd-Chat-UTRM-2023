import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiUrl
const user1 = localStorage.getItem('user_id1');
const httpOptions = {headers: new HttpHeaders({ ' Content-Type':'application/json'})}

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    public onLineUsers$: BehaviorSubject<any> = new BehaviorSubject('');
    private socket: any;
    public message: any;
    

    constructor(private http: HttpClient) {
        //this.socket = io('http://localhost:3000');
    }

    findChat(user_id1:number, user_id2:number): Observable<any>{
        return this.http.get(`${API_URL}/findChat/${user_id1}/${user_id2}`);
    }

    findMessages(id:number): Observable<any>{
        return this.http.get(`${API_URL}/findMessages/${id}`);
    }

    sendMessage(message: any): Observable<any>{
        return this.http.post(`${API_URL}/create_message`, message);
    }

    public getOnlineUser() {
        this.socket.on('new-user-onLine', (users: any) => {
            this.onLineUsers$.next(users);
        });
        return this.onLineUsers$.asObservable()
    }

}
