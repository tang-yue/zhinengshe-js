window.onload=function()
	{ var arr=[
		      '一月活动我要复习智能社的视频。把代码重新写一遍。',
	          '二月活动我要复习智能社的视频。把代码重新写一遍。',
		      '三月活动我要复习智能社的视频。把代码重新写一遍。',
              '四月活动我要复习智能社的视频。把代码重新写一遍。',
              '五月活动我要复习智能社的视频。把代码重新写一遍。',
              '六月活动我要复习智能社的视频。把代码重新写一遍。',
              '七月活动我要复习智能社的视频。把代码重新写一遍。',
              '八月活动我要复习智能社的视频。把代码重新写一遍。',
              '九月活动我要复习智能社的视频。把代码重新写一遍。',
              '十月活动我要复习智能社的视频。把代码重新写一遍。',
              '十一月活动我要复习智能社的视频。把代码重新写一遍。',
              '十二月活动我要复习智能社的视频。把代码重新写一遍。'
             ];
      var odiv=document.getElementById("tab");
      var atd=odiv.getElementsByTagName("td");
      var text=odiv.getElementsByTagName("div")[0];//只有一个div，获取的是第零个div。
     for(var i=0;i<atd.length;i++)
     	{     atd[i].index=i;
     		atd[i].onclick=function()
     		{   for(var i=0;i<atd.length;i++)
     			{atd[i].className="";
     		      
     		     }
     			this.className="active";
                text.innerHTML='<h2>'+(this.index+1)+'月的活动</h2><p>'+arr[this.index]+'</p>'
                //这里注意的就是拼接符的书写方式。凡是字符串要加单引号，字符串与不是字符串之间要加加号。
     			}
     		}
     	}
