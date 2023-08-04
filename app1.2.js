class Calendar {
    constructor () {
        this.event = []
    }
    book(start,end) {
        if (!this.event.length) {
            this.event.push(start,end)
            return true
        } else if (start >= this.event[1]) {
            this.nextEvent = [start,end]
            return true
        } else {
            return false
        }
    }
}

const calendar = new Calendar();
// calendar.book();
console.log(calendar.book(5,10));
console.log(calendar.book(7,25));
console.log(calendar.book(1, 30));
console.log(calendar.book(10, 25));
console.log(calendar);