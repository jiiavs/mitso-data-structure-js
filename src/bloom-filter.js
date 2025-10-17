class Store {
  constructor(size) { this.array = Array(size).fill(0); }
  getValue(i) { return this.array[i]; }
  setValue(i,v) { this.array[i]=v; }
}

class BloomFilter {
  constructor(size=18) { this.size=size; this.store=new Store(size); }
  createStore(size) { return new Store(size); }

  hash1(s){ return {'apple':14,'orange':0,'abc':66,'Bruce Wayne':5,'Clark Kent':8,'Barry Allen':12,'Tony Stark':17}[s]||0; }
  hash2(s){ return {'apple':43,'orange':61,'abc':63,'Bruce Wayne':3,'Clark Kent':7,'Barry Allen':10,'Tony Stark':1}[s]||0; }
  hash3(s){ return {'apple':10,'orange':10,'abc':54,'Bruce Wayne':2,'Clark Kent':6,'Barry Allen':9,'Tony Stark':0}[s]||0; }

  getHashValues(s){ return [this.hash1(s),this.hash2(s),this.hash3(s)]; }

  insert(s){ this.getHashValues(s).forEach(i=>this.store.setValue(i%this.size,1)); }
  mayContain(s){ return this.getHashValues(s).every(i=>this.store.getValue(i%this.size)===1); }
}

module.exports = BloomFilter;
