            hrs=document.getElementById("hrs")
            min=document.getElementById("min")
            sec=document.getElementById("sec")
            disptime=()=>{
                tm=new Date()
                hrs.innerHTML=tm.getHours()
                min.innerHTML=tm.getMinutes()
                sec.innerHTML=tm.getSeconds()
            }
            setInterval(disptime,1000)
