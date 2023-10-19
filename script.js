var arr = [
    { name: "kayf", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "Strangers" },
    { name: "Suhana", img: "https://plus.unsplash.com/premium_photo-1664203068267-aa40017d2702?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "Strangers" },
    { name: "Aaryan", img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=1923&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "Strangers" }
];

function print(){
    var clutter = "";

arr.forEach(function(val,index){
    clutter += `<div id="cards">
    <div id="img">
    <img src="${val.img}"></div>
    <h3>${val.name}</h3>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
    <h4 id="${val.status}">${val.status}</h4>
    <button class = "${val.status === "Strangers"?"blue":"red"}" id="${index}">${val.status === "Strangers" ? "Add Friend": "Remove Friend"}</button>
</div>`
})

document.querySelector("#main").innerHTML = clutter;
}
print();

var flag = 0;
document.querySelector("#main")
.addEventListener("click", function (details){
    if(flag == 0){
        arr[details.target.id].status = "Friends";
    print();
    flag++;
    } else{
        arr[details.target.id].status = "Strangers";
    print();
    flag = 0;
    }
    
})