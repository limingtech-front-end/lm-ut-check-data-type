module.exports=function(Type){
	function isType(value){
		return Object.prototype.toString.call(value)==='[object '+Type+']'
	}
	isType.validate=function(value){
		if(!isType(value)) throw new TypeError('@param value must be a '+Type)
	}
}