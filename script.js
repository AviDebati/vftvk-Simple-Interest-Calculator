function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var status=false;
    if(principal<=0)
    {
        document.getElementById("prn").innerHTML="Enter a positive number";
      
    }
      else
{
      
    var interest=principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
document.getElementById("result").innerHTML="If you deposit "+ "<mark>"+principal+"</mark>"+" <br/>at an interest rate of "+"<mark>"+rate+"%</mark>"+" <br/>You will receive an amount of "+"<mark>"+ interest+"</mark>"+"<br/>in the year "+ "<mark>"+(year)+"</mark>";
status=true;
}
return status;
}

        function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 