const TABLES = []
const seatCapacities = "A-8 B-8 C-7 D-7"
const PARTIES = []
const reservations = 'Thornton, party of 3; Garcia, party of 2; Owens, party of 6 dislikes Thornton, Taylor; Smith, party of 1 dislikes Garcia; Taylor, party of 5; Reese, party of 7'

const createTables =(str) => {
  str.split(' ').forEach(tbl => new Table(tbl[0], tbl[2]))
}

const createParties = (str) => {
  str.split('; ').forEach(res => {
    let name = res.split(' ')[0];
    let size = parseInt(res.split(' ')[3]);
    if (res.split(' ').length > 5){
      let dislikes = res.split(' ').slice(5);
      new Party(name, size, dislikes)
    } else {
      new Party(name, size)
    }
  })
}

//sort parties in DESC order by size
const sortedParties = () => {
  return PARTIES.sort(function(a,b) {
    return b.size - a.size;
  })
}

class Table {
  constructor(name, space) {
    this.name = name;
    this.space = space;
    this.filled = false;
    this.parties = [];
    TABLES.push(this)
  }

  filled() {
    if(this.space === 0) {
      this.filled = true;
    }
  }
}

class Party {
  constructor(name, size, dislikes = []) {
    this.name = name;
    this.size = size;
    this.dislikes = dislikes;
    this.added = false;
    PARTIES.push(this);
  }
}

createTables(seatCapacities);
createParties(reservations);


/*want to go thru each party instance and iterate through the tables
if table.space > party.size && party.dislikes does not include anyone from the table.parties array
push party to the table instance's parties array.
*/

sortedParties().forEach(party => {

  TABLES.forEach(table => {
    if (!table.filled && party.dislikes.length > 0 && !party.added && !party.added) {
      for (let el of party.dislikes) {
        if (!table.parties.includes(el) && table.space > party.size && !party.added){
          table.parties.push(party);
          table.space -= party.size;
          party.added = true;
        }
      }
    } else if (!table.filled && !table.parties.includes(party) && table.space > party.size && !party.added) {
      table.parties.push(party);
      table.space -= party.size;
      party.added = true;
    }
  })
})

let results = [];

TABLES.forEach(tbl => {
  results.push(`Table ${tbl.name}: ${tbl.parties.map(p => `${p.name} party of ${p.size}`)}`)
})

console.log(results);
