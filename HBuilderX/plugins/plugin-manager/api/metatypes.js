let constructors = {}
module.exports = {
	newObject:function(obj,deep){
		if(!deep){
			if(!obj){
				return undefined;
			}
			if(!obj.metatype){
				return obj;
			}
			if(obj.metatype in constructors){
				return new constructors[obj.metatype](obj);
			}
			return obj;
		}else{
			if(typeof obj !== 'object'){
				return obj;
			}
			//复制一份对象
			let newObj = JSON.parse(JSON.stringify(obj));
			if(newObj.metatype){
				if(newObj.metatype in constructors){
					newObj = new constructors[newObj.metatype](newObj);
				}
			}
			
			for(let prop in newObj){
				newObj[prop] = this.newObject(newObj[prop],deep);
			}
			return newObj;
		}
	},
	registerObject:function(metatype,constructor){
		constructors[metatype] = constructor;
		constructor.prototype.metatype = metatype;
	}
}