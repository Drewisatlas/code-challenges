// create a seating planner application

//should accept a list of tables
//a table has a name and a max capacity

//should accept a list of guest parties.
// a party has a name, a number of guests, dislikes.

let allTables = [];
class Table {
  constructor (name, maxCap) {
    this.name = name;
    this.maxCap = maxCap;
    this.parties = [];
    this.full = false;
    allTables.push(this);
  }
}

let allParties = [];
class Party {
  constructor (name, guests, dislike) {
    this.name = name;
    this.guests = guests;
    this.dislike = dislike || "none";
    allParties.push(this);
  }
}

function sortPartySize (allParties){
  return allParties.sort(function (a, b) {
    return b.guests - a.guests;
  })
}

function generateTables (allParties, allTables) {

}

new Table ('A', 8);
new Table ('B', 4);
new Table ('C', 10);

new Party ("Rivera", 4);
new Party ("Smith", 4, "Johnson");
new Party ("Robertson", 5, "Smith");
new Party ("Johnson", 2);
console.log(allTables);
console.log(sortPartySize(allParties));
