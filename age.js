let btn=document.querySelector('#submit');
btn.addEventListener('click',function()
{
	 const update=function()
	 {
		 let dob=document.querySelector('#dob').value,
		    day=new Date(dob),
			time=day.getTime(),
			today=new Date(),
			timenow=today.getTime(),
			value=timenow-time,
			sec=Math.floor(value/(1000)),
			min=Math.floor(value/(1000*60)),
			hour=Math.floor(value/(1000*60*60)),
			days=Math.floor(value/(1000*60*60*24)),
			week=Math.floor(value/(1000*60*60*24*7)),
			month=Math.floor(value/(1000*60*60*24*30.4375)),
			year=Math.floor(value/(1000*60*60*24*365.25))
		 let insert=function(x,y)
		{
			  document.querySelector(x).innerHTML=y;
			  x.style.color="red";
			  
		}
			insert("#year",year +"year");
			insert("#month",month +"month");
			insert("#week",week +"week");
			insert("#days",days +"days");
			insert("#hour",hour +"hour");
			insert("#min",min +"min");
			insert("#sec",sec +"sec");
				
			
			
			
	 }	
	 setInterval(update,1000);
})