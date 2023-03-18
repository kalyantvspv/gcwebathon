fetch("http://localhost:3000/results")
.then(response => response.json())
.then((response)=>{
    console.log(response)
    // var element = document.getElementById("tochange");
    // for (var i in response){
    // template = `
    //               <h1>Order by ${response[i].name}</h1>
    //               <p>contact info : ${response[i].email}</p>
    //             `
    // element.innerHTML+=template;
    // }
})