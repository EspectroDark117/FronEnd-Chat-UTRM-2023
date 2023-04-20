import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketService } from './socket.service';
import { UserService } from "../../services/user.service";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { io } from 'socket.io-client';



interface chatRes {
  ok: boolean;
  cid: number
}

interface messages {
  id: number;
  id_conversacion: number ;
  id_usuario_env: number  ;
  message: string;
  
}

interface messageRes {
  ok: boolean;
  messages: messages[];
}

const socket = io("http://localhost:3000", {
  transports: ['websocket']
});


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})


export class ChatPage implements OnInit {
  public respuesta: any;
  usuarioSeleccionado: any;
  chat: chatRes[] = [];
  dataMessage: messages[] = [];
  messages: messages[] = [];

  id_usuario_env = Number(localStorage.getItem('user_id1'));
  receiver = Number(localStorage.getItem('user_id2'));
  cid: any;
  messageText: string;


 name: string = 'Mensajes';
  //message: string;
  isLoading = false;
  //currentUserId = 1;
  /* chats = [
    {id: 1, sender: 1, message: 'Hey'},
    {id: 2, sender: 2, message: 'Que tal'},
  ];
*/

  constructor(private SocketService: SocketService, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.messageText = '';
  }

  ngOnInit() {
    this.getChatId()

    socket.on('new-message', (data) => {
      console.log('Mensaje recibido', data);
      this.getChatId();
    });

    /*
    socket.on('new-message', (data) => {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.getChatId(paramMap.get('user_id1'), paramMap.get('user_id2'));
      })
    })

    console.log(this.route.paramMap.subscribe((
      paramMap: ParamMap) => {
      this.getChatId(paramMap.get('user_id1'), paramMap.get('user_id2'));
    }))

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.getChatId(paramMap.get('user_id1'), paramMap.get('user_id2'));
    })*/

    //this.usuarioSeleccionado = this.userService.findOneUser(user_id1);
  }

  bringMessages(id: any) {
    socket.emit('join', id);
    this.SocketService.findMessages(id).subscribe(
      (res: messageRes) => {
        this.dataMessage = res.messages;
        this.messages = res.messages;
      }
    );
  }

  async getChatId(){
    const user_id1 = Number(localStorage.getItem('user_id1'));
    const user_id2 = Number(localStorage.getItem('user_id2'));
    const chatId= await this.SocketService.findChat(user_id1, user_id2).toPromise();
    console.log(chatId.data)
    this.respuesta = chatId.data
    //this.bringMessages(chatId.cid);
    //this.cid = chatId;
  }

  async sendMessage(){
    const query = await this.SocketService.findChat(this.id_usuario_env, this.receiver).toPromise();
      this.cid = query.cid;
      const message={
        id_conversacion:  query.id_conversacion,
        id_usuario_env: this.id_usuario_env,
        message:this.messageText
      }
      console.log(message);
      const query1 = await this.SocketService.sendMessage(message).toPromise();
      socket.emit('new-message', message);
    this.messageText='';
  }

  goBack(){
    localStorage.removeItem('user_id2');
    localStorage.removeItem('cid');
    localStorage.removeItem('usuario');
  }
}
