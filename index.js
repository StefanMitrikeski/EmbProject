let main = document.getElementById("mainContainer");

async function fetchData(){
    let response = await fetch('data.json');
    let unit = await response.json();
    console.log(unit)
}
fetchData();