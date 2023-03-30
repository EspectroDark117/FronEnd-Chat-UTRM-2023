import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  posts = [
    {
      name: 'Black Hanging Bridge Surrounded By Green Forest Trees',
      img: 'assets/imgs/nature1.jpg',
      user: 'assets/imgs/users/user20.jpg',
      username: 'Mausam Chavda'
    },
    {
      name: 'Bright Countryside Dawn Daylight',
      img: 'assets/imgs/nature2.jpg',
      user: 'assets/imgs/users/user3.jpg',
      username: 'Jonh Doe'
    },
    {
      name: 'Clouds Dawn Nature Ocean',
      img: 'assets/imgs/nature3.jpg',
      user: 'assets/imgs/users/user19.jpg',
      username: 'Mausam Chavda'
    },
    {
      name: 'Green Trees Under Blue and Orange Sky During Sunset',
      img: 'assets/imgs/nature4.jpg',
      user: 'assets/imgs/users/user17.jpg',
      username: 'Rahul Jograna'
    },
    {
      name: 'Trees in Park',
      img: 'assets/imgs/nature5.jpg',
      user: 'assets/imgs/users/user13.jpg',
      username: 'Mausam Chavda'
    },
  ];

  profile = [
    {
      img: 'assets/imgs/at.png',
      name: 'Hello ID',
      name2: '@jonh1233',
    },
    {
      img: 'assets/imgs/phone.png',
      name: 'Phone Number',
      name2: '919876543212',
    },
    {
      img: 'assets/imgs/add-user.png',
      name: 'Add Friends',
      // nam2 : 'Account',
    },
    {
      img: 'assets/imgs/rss.png',
      name: 'My Post',
      // nam2 : 'Account',
    },
  ];

  pref = [
    {
      name: 'Account',
      img: 'assets/imgs/settings.png',
    },
    {
      name: 'Privacy',
      img: 'assets/imgs/lock.png',
    },
  ];

  messages = [
    {
      side: 'left',
      msg: 'Hello'
    },
    {
      side: 'right',
      msg: 'Hii'
    },
    {
      side: 'left',
      msg: 'Are you nearby ?'
    },
    {
      side: 'right',
      msg: 'I will be there in few mins'
    },
    {
      side: 'left',
      msg: 'Ok, I am waiting at vinmark Store'
    },
    {
      side: 'right',
      msg: 'Sorry I am stuck in traffic. Please give me a moment.'
    },
    {
      side: 'left',
      msg: 'Hello'
    },
    {
      side: 'right',
      msg: 'Hii'
    },
    {
      side: 'left',
      msg: 'Are you nearby ?'
    },
    {
      side: 'right',
      msg: 'I will be there in few mins'
    },
    {
      side: 'left',
      msg: 'Ok, I am waiting at vinmark Store'
    },
    {
      side: 'right',
      msg: 'Sorry I am stuck in traffic. Please give me a moment.'
    },
    {
      side: 'left',
      msg: 'Hello'
    },
    {
      side: 'right',
      msg: 'Hii'
    },
    {
      side: 'left',
      msg: 'Are you nearby ?'
    },
    {
      side: 'right',
      msg: 'I will be there in few mins'
    },
    {
      side: 'left',
      msg: 'Ok, I am waiting at vinmark Store'
    },
    {
      side: 'right',
      msg: 'Sorry I am stuck in traffic. Please give me a moment.'
    }
  ];

  reports = [
    'My Reported Issue',
    'Free Recharge',
    'Notifications',
    'Hidden Mode',
    'Chats',
    'Messaging is slow/not working',
    'Last Seen & Online status',
    'Backup and Restore',
    'Media',
    'HelloMoji',
    'Hello Calling',
    'Moment & Stories',
    'Stickers',
    'I have a different issue',
  ];

  stickers = [
    {
      img: 'assets/imgs/stickers/stick1.png',
      name: 'Happy Easter'
    },
    {
      img: 'assets/imgs/stickers/stick2.png',
      name: 'Friends'
    },
    {
      img: 'assets/imgs/stickers/stick3.png',
      name: 'Memes'
    },
    {
      img: 'assets/imgs/stickers/gif1.gif',
      name: 'Say What !'
    },
    {
      img: 'assets/imgs/stickers/gif2.gif',
      name: 'Party'
    },
    {
      img: 'assets/imgs/stickers/gif3.gif',
      name: 'Love'
    },
    {
      img: 'assets/imgs/stickers/gif4.gif',
      name: 'Girl swag'
    },
    {
      img: 'assets/imgs/stickers/gif5.gif',
      name: 'Happy Easter'
    },
    {
      img: 'assets/imgs/stickers/gif6.gif',
      name: 'Friends'
    },
    {
      img: 'assets/imgs/stickers/gif7.gif',
      name: 'Memes'
    },
    {
      img: 'assets/imgs/stickers/gif8.gif',
      name: 'Say What !'
    },
    {
      img: 'assets/imgs/stickers/gif9.gif',
      name: 'Party'
    },
    {
      img: 'assets/imgs/stickers/gif10.gif',
      name: 'Love'
    },
    {
      img: 'assets/imgs/stickers/gif11.gif',
      name: 'Girl swag'
    },
    {
      img: 'assets/imgs/stickers/gif12.gif',
      name: 'Say What !'
    },
    {
      img: 'assets/imgs/stickers/gif13.gif',
      name: 'Party'
    },
    {
      img: 'assets/imgs/stickers/gif14.gif',
      name: 'Love'
    },
    {
      img: 'assets/imgs/stickers/gif15.gif',
      name: 'Girl swag'
    },
    {
      img: 'assets/imgs/stickers/gif16.gif',
      name: 'Say What !'
    },
    {
      img: 'assets/imgs/stickers/gif17.gif',
      name: 'Party'
    },
    {
      img: 'assets/imgs/stickers/gif18.gif',
      name: 'Love'
    },
    {
      img: 'assets/imgs/stickers/gif19.gif',
      name: 'Girl swag'
    },
    {
      img: 'assets/imgs/stickers/gif20.gif',
      name: 'Love'
    },
    {
      img: 'assets/imgs/stickers/gif21.gif',
      name: 'Girl swag'
    },
    {
      img: 'assets/imgs/stickers/gif22.gif',
      name: 'Happy Easter'
    },
    {
      img: 'assets/imgs/stickers/gif24.gif',
      name: 'Memes'
    },
    {
      img: 'assets/imgs/stickers/gif25.gif',
      name: 'Say What !'
    },
    {
      img: 'assets/imgs/stickers/gif26.gif',
      name: 'Party'
    },
    {
      img: 'assets/imgs/stickers/gif27.gif',
      name: 'Love'
    },
    {
      img: 'assets/imgs/stickers/gif28.gif',
      name: 'Girl swag'
    },
    {
      img: 'assets/imgs/stickers/gif29.gif',
      name: 'Say What !'
    },
    {
      img: 'assets/imgs/stickers/gif30.gif',
      name: 'Party'
    },
    {
      img: 'assets/imgs/stickers/gif31.gif',
      name: 'Love'
    },
    {
      img: 'assets/imgs/stickers/gif32.gif',
      name: 'Girl swag'
    },
    {
      img: 'assets/imgs/stickers/gif33.gif',
      name: 'Say What !'
    },
    {
      img: 'assets/imgs/stickers/gif34.gif',
      name: 'Party'
    },
    {
      img: 'assets/imgs/stickers/gif35.gif',
      name: 'Love'
    },
  ];

  background = [
    'assets/imgs/back/back1.jpg',
    'assets/imgs/back/back2.jpg',
    'assets/imgs/back/back3.jpg',
    'assets/imgs/back/back4.jpg',
    'assets/imgs/back/back5.jpg',
    'assets/imgs/back/back6.jpg',
    'assets/imgs/back/back7.jpg',
    'assets/imgs/back/back8.jpg',
    'assets/imgs/back/back9.jpg',
    'assets/imgs/back/back10.jpg',
    'assets/imgs/back/back11.jpg',
    'assets/imgs/back/back12.jpg',
  ];

  constructor() { }
}
