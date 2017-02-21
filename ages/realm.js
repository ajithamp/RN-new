var Realm = require('realm');

class Item{}
Item.schema={
name: 'Item',
 properties: 
 {
 	id:'float',
 	item:'string',
 	price:'float'
 }
}
export default new Realm({schema: [Item]});