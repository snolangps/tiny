module.exports = function tiny(string) {
	if (typeof string !== "string") throw new TypeError("type was not of a String!");
	return string.replace(/\s/g, "");
};