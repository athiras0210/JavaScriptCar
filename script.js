//To store details

function storeRecord() {
    const car = {
        key: carkey.value,
        brand: carbrand.value,
        price: carprice.value
    }
    if (car.key == "" || car.brand == "" || car.price == "") {
        alert("Please fill the car details");
    }
    else {
        localStorage.setItem(car.key, JSON.stringify(car))
        alert("Car details saved successfully");
        deletekey.value = '';
        retcarkey.value = '';
        carkey.value = '';
        carbrand.value = '';
        carprice.value = '';
        result.innerHTML = '';
    }
}

//To Retrieve record

function retrieveRecord() {
    var key = retcarkey.value;
    console.log(key);
    if(key.value==''){
        alert(`Please fill the key`);
    }
    else if (key in localStorage) {
        car = JSON.parse(localStorage.getItem(key))
        console.log(car);
        result.innerHTML = `<div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">Key: ${car.key} </a>
        <a href="#" class="list-group-item list-group-item-action">Car Price: ${car.price}</a>
        <a href="#" class="list-group-item list-group-item-action">Car Brand: ${car.brand}</a>
      </div>`;
    }
    else {
        result.innerHTML = '';
        alert(`Car details not found with key: ${key}`);
        retcarkey.value = '';
    }
}

//To Remove Record

function removeRecord(){
    if(deletekey.value==''){
        alert(`Please fill the key`);
    }
    else if(deletekey.value in localStorage){
        localStorage.removeItem(deletekey.value);
        alert("Data removed successfully");
        deletekey.value = '';
        retcarkey.value = '';
        carkey.value = '';
        carbrand.value = '';
        carprice.value = '';
        result.innerHTML = '';
    }
    else {
        result.innerHTML = '';
        alert(`Car details not found with key: ${deletekey.value} not remove`);
        deletekey.value = '';
    }
}

function removeAllRecords(){
    localStorage.clear()
    alert("All data removed successfully");
    deletekey.value = '';
    retcarkey.value = '';
    carkey.value = '';
    carbrand.value = '';
    carprice.value = '';
    result.innerHTML = '';
}