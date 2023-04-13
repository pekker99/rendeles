async function fetchOrders(){
 
        const response = await fetch('rendeles.json');
    
        const data = await response.json();
    
        let output = "";
    
        
        data.map((order)=>{
    
            output +=`<div class="order">
            <h2>${order.pizza}</h2>
            <p>Rendelési aznonosító: ${order.id}</p>
            <p>Plusz feltét: ${order.extra}</p>
            <p>Üditő: ${order.ital}</p>
            <p>Ár: ${order.ar}</p>
            <img src="${order.kep}"></img>
            </div>`
        })
    
        result.innerHTML = output;
    
    
    }
    
    fetchOrders();