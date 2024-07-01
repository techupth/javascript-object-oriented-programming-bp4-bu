//  Start coding here
class User{
    constructor(id ,name ,email ){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class postList {
    constructor(posts){
        this.posts = posts;
    }
    addPost(Post){
        this.posts = Post;
    }
    sharePost(){
        console.log(`You've shared post ${this.title} to your friend`)
    }
}
class Post{
    constructor(id ,title ,content,comment ){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }
    addComment(comment){
        this.comment += comment;
    }
    
}
class Comment {
    constructor(id ,content ,createdBy ,like ){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = like;
    }
    addLike(){
        this.like += 1;
    }
}
class Facebook {
    constructor(groupList ,pageList ){
        this.groupList = groupList;
        this.pageList = pageList;
    }
    addGroup(){
        this.groupList += 1 ;
    }
    addPage(){
        this.pageList += 1 ;
    }
}
class FacebookPage {
    constructor(name ){
        this.name = name;
    }
}
class FacebookGroup {
    constructor(name){
        this.name = name;
    }
}
class Notification {
    constructor(id){
        this.id = id;
    }
    send(createdBy,postTitle){
        console.log(`Notification: ${createdBy} has just commented on this post—"${postTitle}”`);
    }
}
