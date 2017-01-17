var checkFactory = require('./lib/data-type-prototype-check-factory')
module.exports={
	isString:checkFactory('String'),
	isObject:checkFactory('Object'),
	isFunction:checkFactory('Function'),
	isInteger:function(value){
		return Number.isInteger(value)
	},
	isEmpty:function(value){
		if(value){
			if(String(value).trim().length){
				return false
			}else{
				return true
			}
		}else{
			return true
		}		
	}
}