async function fetchOrders(){
 
        const response = await fetch('rendeles.json');
    
        const data = await response.json();
    
        let output = "";
    
        
        data.map((order)=>{
    
            output +=`<div class="order">
            <h2>${order.pizza}</h2>
            <p>${order.id}</p>
            <p>${order.extra}</p>
            <p>${order.ital}</p>
            <p>${order.ar}</p>
            <img src="${order.kep}"></img>
            </div>`
        })
    
        result.innerHTML = output;
    
    
    }
    
    fetchOrders();