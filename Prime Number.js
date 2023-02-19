function prime(n){
        for(let i=2; i<=n/2;i++){
            if(n%i==0){
                console.log("Not prime");
                return i+" is a factor";
                return;
            }
        }
        console.log("Prime")}
        let num=prompt("Enter")
        let v=prime(num)
        console.log(v)
