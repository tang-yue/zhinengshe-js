window.onload=function()
{var temp=document.getElementById("div1");
	 var obj1=temp.getElementsByTagName("input");
	 var  obj2=temp.getElementsByTagName("div");

	 for(var i=0;i<obj1.length;i++)
	 	{    obj1[i].index=i;//把i换成其他字母就不对了。
	 		obj1[i].onclick=function()
	 		{  for(i=0;i<obj1.length;i++)
	 			{  
	 				obj1[i].className='';
	 			obj2[i].style.display="none";}
	 			this.className='active';
	 			obj2[this.index].style.display="block";
	 			//其实我在想这里的this.index为什么不能换成i，this.index它指代的是按钮的0,1,2,3,4等，而如果把它换成i，暂时想到有两种原因，第一点这个命令是加在for循环里吗？显然没有，而只是单纯的函数。第二点就是加在for循环里，那么和上面的obj2[i].style.display="none";不是完全相反的语句么，这自相矛盾，而且你也应该明白这个语句执行所出现的效果。
	 			alert(this.index);
	 			alert(this.value);
	 	     }
	 	}
   }