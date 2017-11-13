String.prototype.isPalindrome = String.prototype.isPalindrome || function(){
	let i = 0;
	let count = -1;
	for(i = 0; i < Math.round(this.length / 2); i++) {
		if(this[i] == this[(this.length - 1) - i]) {
			count++;
		}
	}
	return count >= Math.round(this.length / 2) - 1 ? true:false;
}
