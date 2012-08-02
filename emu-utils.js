/***********************************************
*	Number display methods
************************************************/

Number.prototype.toHex = function(length) {
	var str = this.toString(16);
	while (str.length < length)
		str = '0' + str;
	str = str.toUpperCase();
	return str;
};

Number.prototype.toChar = function() {
	return String.fromCharCode(this);
};

/***********************************************
*	Number modification methods
************************************************/

Number.prototype.mod = function(num) {
	return ((this%num)+num)%num;
};
	
Number.prototype.byteWrap = function(bits) {
	return this.mod(1 << bits);
};

Number.prototype.bitSet = function(bit) {
	return this | (1<<bit);
};

Number.prototype.bitUnset = function(bit) {
	return this & ~(1<<bit);
};

Number.prototype.bitToggle = function(bit) {
	return this ^ (1<<bit);
};

