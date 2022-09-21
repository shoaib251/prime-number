function prime(){
    let values= document.getElementById("value").value;

    let primenumber="This is values of prime number";
    let result;
     result = primenumber;

    for( n=2; n<values; n++)
    {
        if (values%n==0){
            result="The values is not prime number";
        }
    }
    document.getElementById("result").innerHTML=result;
}    