module.exports = function(){
	String.prototype.DoSelectHack = function(int){
			return int%2 ? this.toUpperCase() : this.toLowerCase()
		};
	return {
		
	}
}