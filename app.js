let btn=document.querySelector(".btn")
let display=document.querySelector("#display")
let titles=document.querySelector("#Title")
let contents=document.querySelector("#Content")

let arr=[]
function ob(title,content){
    display.innerHTML=""
    titles.value=""
    contents.value=""
    let object={title,content}
    arr.push(object)
    console.log(arr)
    for(i=0;i<arr.length;i++){
        let div=document.createElement("div")
        let para=document.createElement("p")
        let para1=document.createElement("p")

        let edit=document.createElement("input")
        edit.setAttribute("type","submit")
        edit.setAttribute("value","Edit")
        
        let del=document.createElement("input")
        del.setAttribute("type","submit")
        del.setAttribute("value","Delete")
        del.onclick=function(){
            let node=this.parentNode
            display.removeChild(node)
             arr.splice(arr[i],1)
             console.log(arr)
            }
        para.innerHTML=arr[i]['title']
        para1.innerHTML=arr[i]['content']


        edit.onclick=function(){
            titles.innerHTML=para.innerText
            contents.innerHTML=para1.innerText
            console.log(titles,contents)
        }

        para.onclick=()=>{
            para.style.fontSize="30px"
            para.innerHTML=`${para.innerText} : ${para1.innerText}`
        }
        
        div.appendChild(para)
        div.appendChild(edit)
        div.appendChild(del)
        display.appendChild(div)
        
    }
}
btn.addEventListener("click",(e) =>{
    e.preventDefault();
    let title1=titles.value
    let content1=contents.value
    ob(title1,content1)
    
    

})


