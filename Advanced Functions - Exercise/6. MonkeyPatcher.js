function solution(option){
    let number = 0
    if (option === 'upvote') {
        this.upvotes++
    }else if(option === 'downvote'){
        this.downvotes++
    }

    let upvote = this.upvotes
    let downvote = this.downvotes

    let votes = upvote + downvote
    let balance = upvote - downvote

    function rating(){
        if (votes < 10) {
            return 'new'
        }
        if (upvote > votes * 66/100) {
            return 'hot'
        }
        if (votes > 100 && balance > 0) {
            return 'controversial'
        }
        if (balance < 0) {
            return 'unpopular'
        }
        return 'new'
    }
    if (votes > 50) {
        number = Math.ceil(Math.max(upvote, downvote) * 25/100)
        upvote += number
        downvote +=number
        return [upvote , downvote , balance, rating()];
    }
    return [upvote, downvote, balance, rating.call(this)]
    
}
let post = {
 id: '3',
 author: 'emil',
 content: 'wazaaaaa', 
 upvotes: 100, 
 downvotes: 100 
}; 
solution.call(post, 'upvote'); 
solution.call(post, 'downvote'); 
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial'] 
solution.call(post, 'downvote'); // (executed 50 times) 
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']