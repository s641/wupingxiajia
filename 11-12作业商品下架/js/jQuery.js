

/*
	作用：数组求和，
	参数 ：数组
	返回值 ： 求和的数字
*/ 
function sum(obj){
	var num = 0;
	for(var i=0;i<obj.length;i++){
		num += obj[i];
	}
	return num;	
}

/*
	作用 ： 获取元素
	参数 ：
		参数一： 字符串，是一个css选择器
		参数二：可选，是一个确定的元素
	
	返回值 ： 获取的元素
*/
function $(name,obj){
				
				// 首位字符
				var first = name.charAt(0);
				
				obj = obj || document;
				
				
				if(first == '#'){
					
					var id = name.split('#')[1];
					return obj.getElementById(id);
					
				}else if(first == '.'){
					
					// 找到所有的元素
					var all = obj.getElementsByTagName('*');
					var str = name.split('.')[1];
					var num = [];
					
					for(var i=0;i<all.length;i++){						
						if(all[i].className){ // 排除没有class的元素
							// 说明有class
							// 确定元素是否要找的	
							var arr = all[i].className.split(' ');
							for(var k=0;k<arr.length;k++){
								if(arr[k] == str){
									num.push(all[i]);
								}
							}														
						}						
					}
					
					return num;
					
				}else{
					
					// 通过标签名找元素					
					return obj.getElementsByTagName(name);					
				}
				
			}
 /*
    封装一个写事件的函数 
	作用 ：给元素添加事件
	参数 ：
		参数一 ：添加事件的元素，元素
		参数二 ：不带on的事件 ， 字符串
		参数三 ：触发事件时，执行的代码，函数
	
 */ 
function bind(obj,event,fn){
  obj['on'+event] = fn;
}


 /*
 
    封装一个for循环,循环数组
	作用：通过for循环操作数组里面的每一个数据
	参数 ：
		参数一 ： 数组
		参数二 ： 函数，操作代码的函数function(el,i){}
 
		
 */ 
function forEach(obj,fn){
  for(var i=0;i<obj.length;i++){
	  fn(obj[i],i);
  }		  
}

 /*
	封装一个兼容获取样式的函数
	作用 ： 获取元素的样式
	参数 ：
		参数一 ：元素
		参数二 ：元素的样式
	返回结果 ： 样式的值
	
 */ 
   function getCSS(obj,attr){
	   
	   if(obj.currentStyle){
		   // ie
		   return obj.currentStyle[attr]
	   }else{
		   // 谷歌
		   return getComputedStyle(obj)[attr];
	   }
   }

/*
	封装一个倒计时
	
		参数：
		对象 ：
			future:  时间戳
			
			success  :function(){}
			
			
*/ 

function countDown(obj){
	
	// 获取未来时间戳
	var futher = new Date(obj.future).getTime();
	
	// 当前时间的时间戳
	var now = new Date().getTime();
	
	// 两个时间戳的差值
	var dis = parseInt((futher - now)/1000);

	//换算天数
	var day = parseInt(dis/(60*60*24));
	
	// 还剩多少小时
	var h = parseInt((dis - day*60*60*24)/3600);
	
	// 剩下多少分钟
	var min = parseInt((dis - day*3600*24 - h*3600)/60);
	
	// 剩下的秒钟数
	var s = dis - day*3600*24 - h*3600 - min*60;
	
	// obj.success(1)
	
	typeof obj.success == 'function' &&  obj.success({
		day:day,
		hours:h,
		min:min,
		s:s
	});
	
	
	
}
/*
				封装一个函数：给元素添加class
				参数：
					obj:元素
					classNmae:添加的class
			
				
			*/ 
		   function addClass(obj,className){
			   var str = obj.className;
			   if(str){
				   // 判断要添加的class在元素里面是否有
				   // if(str.indexOf(className) == -1){
				   //  obj.className = obj.className+' '+className;
				   // }
				  var arr = str.split(' ');
				  var onoff = false;
				  for(var i=0;i<arr.length;i++){
					  if(arr[i] == className){
						  onoff = true;
					  }
				  }
				  
				  if(!onoff){
					  obj.className = obj.className+' '+className;
				  }
				   
			   }else{
				   obj.className = className;
			   }		   
		   }
		   
		   
		   /*
				作用 ：删除某个元素的class
				参数：
					obj: 元素
					className : class值
					
		   
		   */
		  
		    function removeClass(obj,className){
				// 该元素是否应用class
				if(obj.className){
					
					// box pox lis  [box,pox,lis]
					var arr = obj.className.split(' ');
					for(var i=0;i<arr.length;i++){
						if(arr[i] == className){
							arr.splice(i,1);
						}
					}
					obj.className = arr.join(' ');
					// if(arr.indexOf(className) != -1){
					// 	// 该元素存在要删除的class
					// 	
					// 	arr.splice(arr.indexOf(className),1);
					// 	
					// 	obj.className = arr.join(' ');
					// }
					
				}			  
		   }
		   
		   
	function prev(el){
		  if(el.nodeType != 1){
			  return '请传入一个元素';
		  }
		  return el.previousElementSibling
	 }
	 
	 /*
	 
		作用 ： 获取某个元素的下一个兄弟标签
		参数 ： 元素
	 
	 */
	function next(el){
		 if(el.nodeType != 1){
						  return '请传入一个元素';
		 }
		 return el.nextElementSibling
				 
	}
	function parent(el){
		if(el.nodeType != 1){
			return '请传入一个元素';
		}
		return el.parentNode;
				 
	}	
	   
	 /*
	 
		作用 ： 获取某元素至上的所有兄弟元素
		参数 ： 
			el:某元素
		返回结果 ： 是一个数组，数据就是上面的兄弟元素
		
	 */  
	
	function prevAll(el){	
		if(el.nodeType != 1){
			return;
		}
		
		// 传进来的参数就是元素
		
		var arr = [];		
		function fn(el){
			var pr = el.previousElementSibling;
			if(pr != null){
				arr.push(pr);
				fn(pr);				
			}		
		}
		
		// 第一次递归的调用	
		fn(el) 	
		return arr;
	}
	
	
	/*
		fn(lis)
			var pr = el.previousElementSibling;
			if(pr != null){
				arr.push(pr);
				fn(li2);	
					var pr = el.previousElementSibling;
					if(pr != null){
						arr.push(pr);
						fn(li1);
							var pr = el.previousElementSibling;
							if(pr != null){
								arr.push(pr);
								fn(pr);				
							}				
					}			
			}	
			
	*/
   
   
   /*
		
		作用： 获取某元素的下面的所有兄弟元素
		参数 ： 元素
		返回值 ： 是一个数组
		 
   */
  function nextAll(el){
	  
	 
	 if(el.nodeType != 1){
		 return
	 } 
	 
	 var arr = [];
	 function fn(el){
		 
		var next = el.nextElementSibling;	 
		 if(next){ // 判断下一个兄弟元素是否存在
			arr.push(next);
			// var next1 = next.nextElementSibling;
			fn(next);
		 }
	 }
	  
	 fn(el);
	 
	 return arr;
  }
  // nextAll(li3)
  
  /*
	 作用 ：找到排除自己以外的所有兄弟元素
	  参数 ： 元素
		el: 元素
		str : 字符串，标签名或者class名
	  返回结果 ： 数组
  
  */
 function siblings(el,str){
	if(el.nodeType != 1){
			 return
	} 
	
	// 找到该元素的父级
	var parent = el.parentNode;
	
	// 在找到父级下面的所有子元素
	var children = parent.children;
	
	var arr = [];
	 for(var i=0;i<children.length;i++){
		  
		 if(children[i] != el){
			 arr.push(children[i])
		 }
	 }	
	 
	
	// 判断是否有第二个参数
	if(str){
		
		// 获取字符串里面的第一个字符
		var first = str.substr(0,1);
		if(first == '.'){
			// 传进来的是class名 .box    box pox  lis
			var className = str.substring(1);
			var arr2 = [];
			for(var i=0;i<arr.length;i++){
				// arr[i].className == className
				var arr1 = arr[i].className.split(' ');
				for(var k=0;k<arr1.length;k++){
					if(arr1[k] == className){
						arr2.push(arr[i]);
					}
				}
			}
			return arr2;		
		}else{
			// 传进来的是标签名 
			// arr.filter(function(el,i){	
			// 	return el.nodeName == str.toUpperCase();
			// })
			var a = [];
			for(var i=0;i<arr.length;i++){
				if(arr[i].nodeName == str.toUpperCase()){
					a.push(arr[i])
				}
			}
			return a;
		}		
	}else{
		return arr;
	}
	
 }
  