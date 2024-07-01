class EmailNotification {
    constructor(notificationId ,createdTime ,content ,receiver ){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(email){
        console.log(`Notification has been sent to ${email}`)
    }
 }

class SMSNotification  {
    constructor(notificationId ,createdTime ,content , phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    send(){
       console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
 }

const email = new EmailNotification("12345","18.00","testest","test");
email.send("test@gmail.com");

const sms = new SMSNotification("12345","18.00","testest","0955555555");
sms.send();

