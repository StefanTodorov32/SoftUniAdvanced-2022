class Story{
    constructor(title, creator){
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
    }
    get likes(){
        let likesNumber = this._likes.length
        if (likesNumber <= 0) {
            return `${this.title} has 0 likes`
        }
        if (likesNumber === 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${likesNumber - 1} others like this story!`
    }
    like(username){
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username){
        let foundUserIndex = this._likes.findIndex(e => e == username);
        if(foundUserIndex == -1){
            throw Error(`You can't dislike this story!`);
        };
        this._likes.splice(foundUserIndex, 1);
        return `${username} disliked ${this.title}`;
    }
    comment(username,content,id){
        let foundComment = this._comments.find(x => x.id === id)
        if (id ===undefined || content === undefined) {
            this._comments.push({
                username,
                content,
                id: this._comments.length + 1,
                replies: []
            })
            return `${username} commented on ${this.title}`;
        }
        foundComment.replies.push({
            id: `${foundComment.id}.${foundComment.replies.length + 1}`,
            username,
            content
        })
        return "You replied successfully"        

        
    }
    toString(sortingType){
        let res =[]
        res.push(`Title: ${this.title}`)
        res.push(`Creator: ${this.creator}`)
        res.push(`Likes: ${this._likes.length}`)
        res.push('Comments:')
        if (sortingType === 'asc') {
            let sorted = this._comments.sort((a,b)=> a.id - b.id)

            sorted.forEach(element => {

                res.push(`-- ${element.id}. ${element.username}: ${element.content}`)
                element.replies.sort((a,b)=> a.id - b.id)
                element.replies.forEach(x=>res.push(`-- ${x.id}. ${x.username}: ${x.content}`))
            });
            
        }else if(sortingType === 'desc'){
            let sorted = this._comments.sort((a,b)=> b.id - a.id)
            for (const element of sorted) {
                res.push(`-- ${element.id}. ${element.username}: ${element.content}`)
                element.replies.sort((a,b)=> b.id - a.id)
                element.replies.forEach(x=>res.push(`-- ${x.id}. ${x.username}: ${x.content}`))
            }
        }
        else if (sortingType === 'username'){
            let sorted = this._comments.sort((a,b)=> a.username.localeCompare(b.username))

            sorted.forEach(element => {

                res.push(`-- ${element.id}. ${element.username}: ${element.content}`)
                element.replies.sort((a,b)=> a.username.localeCompare(b.username))
                element.replies.forEach(x=>res.push(`-- ${x.id}. ${x.username}: ${x.content}`))
            });
        }
        return res.join('\n')
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
'Title: My Story\nCreator: Anny\nLikes: 0\nComments:\n-- 2. Ammy: New Content\n-- 3. Jessy: Nice :)\n-- 1. Sammy: Some Content\n-- 1.2. SAmmy: Reply@\n-- 1.1. Zane: Reply'
'Title: My Story\nCreator: Anny\nLikes: 0\nComments:\n-- 2. Ammy: New Content\n-- 3. Jessy: Nice :)\n-- 1. Sammy: Some Content\n--- 1.2. SAmmy: Reply@\n--- 1.1. Zane: Reply'
'John and 2 others like this story'
'John and 2 others like this story!'