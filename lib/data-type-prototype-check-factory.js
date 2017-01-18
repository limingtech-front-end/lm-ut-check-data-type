module.exports=function(Type){
	var identify='[object '+Type+']'
	function isType(value){
		return Object.prototype.toString.call(value)===identify
	}
	isType.validate=function(value){
		if(!isType(value)) throw new TypeError('@param value must be a '+Type)
	}
	return isType
}