window.onload=function()
{
	var temp1=document.getElementById("div1");
	var obj1=temp1.getElementsByTagName("td");
     var obj2=temp1.getElementsByTagName("div");
     for(var i=0;i<obj1.length;i++)
      {   
      	obj1[i].onclick=function()
      	{    
      		for(var i=0;i<obj1.length;i++)
      		{   obj1[i].index=i;
      			obj1[i].className='';
      			obj2[i].style.display="none";
      		}
      		this.className="active";
      		obj2[this.index].style.display="block";
      		// alert(this.index);
      	}
      }
     }