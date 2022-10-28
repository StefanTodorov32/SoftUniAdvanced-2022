function getArticleGenerator(articles) {
    let resultContent = document.getElementById('content')
    let arrayArticles = Array.from(articles)
    return function (){
        if (!arrayArticles.length) {
            return
        }
        let currArcticle = arrayArticles.shift()
            let arc = document.createElement('article')
            arc.textContent =  currArcticle
            resultContent.appendChild(arc) 
        
    }
}
