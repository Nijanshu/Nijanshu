 let wd=prompt("Input a word")
       let k=document.getElementById('sg')
       k.innerHTML=wd
       wd=wd.toLowerCase()
       wd=wd.replace(/ /g,"")
       wd=wd.replace(/,/g,"")
       v=Array.from(wd)
       l=wd.length
       f=[]
    for(let i in v){
        f.push(v[l-i-1])
    }
    b=f.toString()
    b=f.join("")
    document.getElementById('w1').innerHTML=b
    if(b==wd){
        document.getElementById('w2').innerHTML="Palndrome"
    }
    else{
        document.getElementById('w2').innerHTML="NO"
    }
