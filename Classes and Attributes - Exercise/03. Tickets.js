function tickets(ticketsData, sortString){
    let ticketsArray =[]
    class TicketSystem{
        constructor(destination, price, status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }
    for (const ticket of ticketsData) {
        let [destination, price, status] = ticket.split('|')
        
        ticketsArray.push(new TicketSystem(destination, Number(price), status))
        

    }
    
    let sortFuncs ={
        destination: () => ticketsArray.sort((a, b) => (a.destination).localeCompare(b.destination)),
        price: () => ticketsArray.sort((a, b) => a.price - b.price),
        status: () => ticketsArray.sort((a, b) => (a.status).localeCompare(b.status))
    }
    sortFuncs[sortString]()
    return ticketsArray
    
    
}
tickets(['Philadelphia|94.20|available',
         'New York City|95.99|available',
         'New York City|95.99|sold',
         'Boston|126.20|departed'],
         'price')