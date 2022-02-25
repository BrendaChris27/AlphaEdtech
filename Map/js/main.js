//used for testing
const client = []
/*const client = [
  {
    name: "Adriana",
    date: "2021-03-02",
    price: 500

  },
  {
    name: "Adam",
    date: "2012-01-05",
    price: 1000
  },
  {
    name: "Brenda",
    date: "2022-01-05",
    price: 5000
  }
];*/

let fees

function addClient() {
  let name = document.getElementById('name').value;
  let date = document.getElementById('date').value;
  let price = parseFloat((document.getElementById('price').value)).toFixed(2);
  
  if(name!="" && date!="" && price!=""){
    client.push({
      name: name,
      date: date,
      price: price
    })
  }

  console.log(client);
  clearInput()
  showClient()

  return true
}

function showClient() {
  clearHtml()
  let table = document.getElementById('dados_cliente')
  client.forEach(function(value,i,array){
    table.innerHTML += `<tr>
    <td>${value.name}</td>
    <td>${value.date}</td>
    <td>R$ ${value.price}</td>
    </tr>`;
  })
  return true
}

function showFees(){
  clearHtml()
  let table = document.getElementById('dados_cliente');

  client.forEach(function(value,i,array){
    table.innerHTML += `<tr>
    <td>${value.name}</td>
    <td>${value.date}</td>
    <td>R$ ${value.price}</td>
    <td>R$ ${fees[i]}</td>
    </tr>`;
  })

  return true
}

function stringDateNow() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const dateAtual = `${year}-${month}-${day}`;
  //console.log(dateAtual);
  return dateAtual
}

console.log(String(stringDateNow()))
const now = new Date()

function diffDate(date1, date2) {
  //const date1 = new Date("2022-01-05");
  //const date2 = new Date( stringDateNow() );
  const diffTime = Math.abs(date2 - date1);
  //console.log(Math.abs(date2));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //console.log(diffTime + " milliseconds");
  //console.log(diffDays + " days");
  return diffDays;
}

function calcfees(value, day) {
  console.log(`preço:${value}`, `dia:${day}`);
  return parseFloat(value * (0.02 + 0.001 * day)).toFixed(2);
}

function calcClient() {
  let dateNow = new Date(stringDateNow());

  fees = client.map(function (value) {
    let feesClient;
    let deuDate = new Date(value.date)
    if (dateNow > deuDate) {
      console.log(`Devendo:${value.name}`);
      feesClient = calcfees(value.price, diffDate(dateNow, deuDate));
      console.log(calcfees(value.price, diffDate(dateNow, deuDate)));

    } else {
      feesClient = 0;
      console.log(`ok:${value.name}`)
    }

    return feesClient
  });
  showFees()
  console.log(fees)
}

function clearHtml() {
  let table = document.getElementById('dados_cliente')
  table.innerHTML = `
  <td>Nome do Cliente</td>
  <td>Data de Vencimento</td>
  <td>Valor da Compra</td>
  <td>Juros</td>`;

  return true
}

function clearInput() {
  document.getElementById('name').value = "";
  document.getElementById('date').value = "";
  document.getElementById('price').value = "";

  return true
}
