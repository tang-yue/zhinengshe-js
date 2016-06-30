window.onload=function()
{
	var temp1=document.getElementById("div1");
	var obj1=temp1.getElementsByTagName("td");
     var temp2=document.getElementById("div3");
     var obj2=temp2.getElementsByTagName("p");
     var temp3=document.getElementById("p1");
     for(var i=0;i<obj1.length;i++)
      {   
      	obj1[i].onclick=function()
      	{    
      		for(var i=0;i<obj1.length;i++)
      		{   obj1[i].index=i;
      			obj1[i].className='';
      			
      		}
      		this.className="active";
      		temp3.innerHTML=obj2[this.index].innerHTML;
      	}
        }
}