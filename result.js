var checkArray = JSON.parse(localStorage.getItem("budget"))
        
 if(checkArray && checkArray.length >0 ){
  var totalSpent = 0
  displayAll()
  } 
 

 function deleteAny(i) {
  var check = confirm("Are you sure you want to delete this item")
  if(check== true){
    checkArray.splice(i, 1);
    localStorage.setItem("budget", JSON.stringify(checkArray));
    totalSpent = 0; // Reset totalSpent
    result.innerHTML = ""; // Clear the card display
    displayAll(); // Redisplay the updated cards
  }else{}

  if(result.innerHTML==``){
    result.innerHTML=`<p style="color:red;"> no item added yet </p>`
  }else{
    displayAll()
  }
  
}

function editAny(i){
    checkArray[i]["pName"] = document.getElementById(`tem-${i}`).value;
    checkArray[i]["quak"] = document.getElementById(`quan-${i}`).value;
    checkArray[i]["vale"] = document.getElementById(`rate-${i}`).value;
    localStorage.setItem("budget", JSON.stringify(checkArray));
    totalSpent = 0; // Reset totalSpent
    result.innerHTML = ""; // Clear the card display
    displayAll()
  }

  function displayAll(){
    for(i=0; i<checkArray.length; i++ ){
  var item = checkArray[i];
  var itemCost = item.quak * item.vale;
  totalSpent += itemCost;
  result.innerHTML += `
    
  <div class="card" style="width: 18rem;" d-flex>
      <div class="card-body">
        <h5 class="card-text">Product: ${item.pName}</h5><br>
        <h5 class="card-text">Quantity: ${item.quak} </h5><br>
        <h5 class="card-text">Price: ${item.vale}  </h5><br>
        <h5 class="card-text">Total: ${itemCost} </h5><br>
        <a href="#" class="btn btn-danger" onclick="deleteAny(${i})">Delete</a>
        <a href="#" class="btn btn-warning"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-${i}">Edit</a>
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <input type="text" placeholder="Product name" id="tem-${i}">
              <input type="number"  placeholder="Quantity" id="quan-${i}">
              <input type="number" placeholder="Price" id="rate-${i}">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="editAny(${i})" data-bs-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `
      }
  }