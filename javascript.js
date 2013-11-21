function Welcometohell()
			{
				var date=new Date()
				var welcome=''
				var myhours=date.getHours()
				if(myhours>16){
					welcome='Добрый вечер'}
				else if(myhours>12){
					welcome='Добрый день'}
				else if(myhours>5){
					welcome='Доброе утро'}
				else{
					welcome='Спокойной ночи'}
				document.write(welcome+', ')
			}
			function show_time()
			{
				var mytoday=new Date()
				var myhours=mytoday.getHours()
				myhours=checktime(myhours)
				var mymin=mytoday.getMinutes()
				mymin=checktime(mymin)
				var mysec=mytoday.getSeconds()
				mysec=checktime(mysec)
				var mydate=mytoday.getDate()
				mydate=checktime(mydate)
				var mymonth=mytoday.getMonth()+1
				mymonth=checktime(mymonth)
				var myyear=mytoday.getFullYear()
				document.getElementById('showtime').innerHTML=myhours+':'+mymin+':'+mysec+' '+mydate+'/'+mymonth+'/'+myyear
				setTimeout('show_time()',1000)
			}
			function checktime(i)
			{
				if(i<10)
					i='0'+i
				return i
			}
			function DaysToBirthday()
			{
				var today=new Date()	//0..11 - месяца
				birthday=new Date(1973,11,29,23,59,59,999)
				birthday.setFullYear(today.getFullYear())
				msPerDay=24*60*60*1000
				if((birthday.getTime()-today.getTime())/msPerDay<0)
					birthday.setFullYear(today.getFullYear()+1)
				daysLeft=(birthday.getTime()-today.getTime())/msPerDay
				daysLeft=Math.round(daysLeft)
				var text=""
				if(daysLeft%10==1)
					text=" день"
				else if(daysLeft%10<=4)
					text=" дня"
				else
					text=" дней"
				document.write("До дня рождения группы осталось "+daysLeft+text)
			}
			function DayOfBirthday()
			{
				var weekday=new Array("воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу");
				if(birthday.getDay==2)
					document.write("во "+weekday[birthday.getDay()])
				else
					document.write("в "+weekday[birthday.getDay()])
			}
			var nameuser=""
			function disp_prompt()
			{
				nameuser=prompt("Пожалуйста, введите своё имя:","Мартин Гарднер")
				var r=confirm("Вы хотите, чтобы ваше имя присутствовало на сайте?")
				if(r==true)
				{
					show_name()
				}
			}
			function show_name()
			{
				if(nameuser!=null && nameuser!="" && nameuser!=" ")
				{
					document.getElementById('showname').innerHTML=nameuser+", "
				}
			}
			var contents=new Array('main','history','galery','alboms','audio','video')
			function toggle(sDivId)
			{
				var oDiv=document.getElementById(sDivId);
				var shab=/(audio)*(video)*\d+/;
				if(shab.test(sDivId)==true)
					oDiv.style.display=(oDiv.style.display=="none")?"block":"none";
				else if(oDiv.style.display!="block")
				{
					oDiv.style.display="block";
					for(var i=0;i<contents.length;i++)
						if(contents[i]!=sDivId)
						{
							oDiv=document.getElementById(contents[i]);
							oDiv.style.display="none";
						}
				}
			}