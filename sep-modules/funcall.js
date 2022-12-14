const name=require('./names')
// one way of importing the exported data
const hi=require('./func')
//other way
require('./func2')
hi(name.nishita)
hi(name.pearl)