import Dexie from 'dexie'

var db = new Dexie('Topics')

db.version(1).stores({
  topics: "++id, title, body, parent"
})

db.open();

export default(db)
