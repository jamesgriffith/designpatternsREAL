function catName(name) { //constructor pattern
	this.name = name;
	this.talk = function() {
		alert( this.name + " says meeow!" )
	}
} 

cat1 = new catName("Garfield")
cat1.talk() //alerts "felix says meeow!"

cat2 = new catName("ginger")
cat2.talk() //alerts "ginger says meeow!"

catName.prototype.changeName = function(name) { //prototype pattern
	this.name = name;
}

firstCat = new catName
firstCat2 = new catName
firstCat.changeName("Bill")
firstCat2.changeName("johnny")
firstCat.talk() //alerts "Bill says meeow!"
firstCat2.talk()
