import checkFactory from './lib/data-type-prototype-check-factory'
export default {
	isString:checkFactory('String'),
	isObject:checkFactory('Object'),
	isFunction:checkFactory('Function'),
	isInteger(value){
		return Number.isInteger(value)
	},
	isEmpty(value){
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