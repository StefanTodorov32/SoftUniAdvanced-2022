class ArtGallery{
    constructor(creator){
        this.creator = creator
        this.possibleArticles = { "picture":200,"photo":50,"item":250 }
        this.listOfArticles = []
        this.guests = []
        
    }

    addArticle(articleModel, articleName, quantity){
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error ("This article model is not included in this gallery!")
        }
        let isArticle = this.listOfArticles.find(x => x.articleName === articleName)
        if (isArticle) {
            isArticle.quantity += quantity
        }else{
            this.listOfArticles.push({articleModel, articleName, quantity})
            
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality){
        let guest = this.guests.find(x => x.guestName === guestName)
        if(guest){
            throw new Error(`${guestName} has already been invited.`)
        }

        
        let points = 0
        switch (personality) {
            case 'Vip':
                points = 500
                break;
            case 'Middle':
                points = 250
                break;
            default:
                break;
        }
        this.guests.push({guestName, points: points, purchaseArticle: 0})
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName){
        articleModel = articleModel.toLowerCase()
        let article = this.listOfArticles.find(x => x.articleName === articleName)
        if(!article || articleModel != article.articleModel){
            throw new Error("This article is not found.")
        }
        if (article.quantity === 0) {
            return `The ${articleName} is not available.`
        }
        let guest = this.guests.find(x => x.guestName === guestName)
        if (!guest) {
            return "This guest is not invited."
        }
        if (guest.points >= this.possibleArticles[articleModel]) {
            guest.points -= this.possibleArticles[articleModel]
            article.quantity -= 1
            guest.purchaseArticle += 1
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }else{
            return "You need to more points to purchase the article."
        }
    }
    showGalleryInfo(criteria){
        let res = []
        switch (criteria) {
            case 'article':
                res.push("Articles information:")
                this.listOfArticles.map(x=>res.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`))
                break;
            case 'guest':
                res.push('Guests information:')
                this.guests.map(x=>res.push(`${x.guestName} - ${x.purchaseArticle}`))
                break;
            default:
                break;
        }
        return res.join('\n')
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));




