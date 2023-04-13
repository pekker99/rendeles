async function fetchOrders(){
 
        const response = await fetch('rendeles.json');
    
        const data = await response.json();
    
        let output = "";
    
        
        data.map((order)=>{
    
            output +=`<div class="order">
            <img src="${order.kep}" alt="${order.pizza}"></img>
            <h2>${order.pizza}</h2>
            <p>Rendelési aznonosító: ${order.id}</p>
            <p>Plusz feltét: ${order.extra}</p>
            <p>Üditő: ${order.ital}</p>
            <p>Ár: ${order.ar}</p>
            
            </div>`
        })
    
        result.innerHTML = output;
    
    
    }
    
    fetchOrders();