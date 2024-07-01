class Notification { 
    constructor(notificationId ,createdTime ,content ,receiver ){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver; 
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification {
    constructor(notificationId ,createdTime ,content ,receiver){
        super(notificationId ,createdTime ,content ,receiver );
    }
 }

class SMSNotification extends Notification {
    constructor(notificationId ,createdTime ,content ,receiver){
        super(notificationId ,createdTime ,content ,receiver );
    }
 }

 const email = new EmailNotification("email","18.50","EmailTest","Bura");
 email.send();
 const sms = new SMSNotification("sms",19.30,"smsTest","Saza");
 sms.send();