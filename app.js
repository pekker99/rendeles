async function fetchOrders(){
 
        const response = await fetch('rendeles.json');
    
        const data = await response.json();
    
        let output = "";
    
        
        data.map((user)=>{
    
            output +=`<div><h2>${user.login}</h2></div>`
        })
    
        document.body.innerHTML = output;
    
    
    }
    
    fetchUsers();