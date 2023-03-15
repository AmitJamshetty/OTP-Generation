function otp()
{
    var result = Math.random()*(9999-1000)+1000;
    var otp=Math.floor(result)
    var name = document.getElementById("input1").value
    var phno = document.getElementById("input2").value
    document.getElementById("output").innerHTML="Dear " + name + " your OTP is: " + otp;
}
