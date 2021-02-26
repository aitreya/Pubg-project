const socket = io()
const cpu = document.getElementById('cpu')
const ram = document.getElementById('ram')
const uptime = document.getElementById('uptime')
const responcefetch = document.getElementById('responcefetch')
socket.emit('getcpu')
socket.on('getsys', (data) => {
  ram.innerHTML = data.mem;
  let timestr = `${data.uptime.days} : ${data.uptime.hours} : ${data.uptime.min} : ${data.uptime.sec}`;
  uptime.innerHTML = timestr;
})
socket.on('cpuUpdate', (data) => {
  cpu.innerHTML = data
})

//post work start
const date = document.getElementById('date')
const time = document.getElementById('time')
const game = document.getElementById('gameselect')
const startno = document.getElementById('regstart')
const endno = document.getElementById('regend')
const sendMailBtn = document.getElementById('sendMailBtn')
const mailresult = document.getElementById('mailresult')

sendMailBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let execute = true
  if (startno.value > endno.value) {
    alert('Start no. could not be larger that end no. !!')
    execute = false
  }
  if (game.value == 0) {
    alert('Select a game !!')
    execute = false
  }
  if (execute) {
    $.ajax({
      url: "/maildatasend",
      type: "POST",
      data: {
        game: game.value,
        date: date.value,
        time: time.value,
        startno: startno.value,
        endno: endno.value
      },
      success: function (data, textStatus, jqXHR) { console.log(data) },
      error: function (jqXHR, textStatus, errorThrown) { console.log(errorThrown) }
    });
    sendMailBtn.value = 'Wait'
    setTimeout(() => {
      socket.emit('getmailresponce')
    }, 10000);
  }
})
responcefetch.addEventListener('click', () => {
  socket.emit('getmailresponce')
})

socket.on('recievemailresponce', (data) => {
  sendMailBtn.value = 'Send Again'
  console.log(data);
  mailresult.innerHTML += JSON.stringify(data) + `<br><br>`
})

async function pubgdataconvert() {
  let jsonpubg
  socket.emit('getregistrationdata')
  await socket.on('recieveregistrationdata', (data) => { jsonpubg = data })
  setTimeout(() => {
    convert(jsonpubg.pubgdata)
  }, 1000);
}


async function freefiredataconvert() {
  let json
  socket.emit('getregistrationdata')
  await socket.on('recieveregistrationdata', (data) => { json = data })
  setTimeout(() => {
    convert(json.freefiredata)
  }, 1000);
}


function convert(data) {
  const myBooks = data

  // Extract value from table header. 
  // ('Book ID', 'Book Name', 'Category' and 'Price')
  let col = [];
  for (let i = 0; i < myBooks.length; i++) {
    for (let key in myBooks[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // Create a table.
  const table = document.createElement("table");

  // Create table header row using the extracted headers above.
  let tr = table.insertRow(-1);                   // table row.

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");      // table header.
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // add json data to the table as rows.
  for (let i = 0; i < myBooks.length; i++) {

    tr = table.insertRow(-1);

    for (let j = 0; j < col.length; j++) {
      let tabCell = tr.insertCell(-1);
      tabCell.innerHTML = myBooks[i][col[j]];
    }
  }

  // Now, add the newly created table with json data, to a container.
  const divShowData = document.getElementById('showdata');
  divShowData.innerHTML = "";
  divShowData.appendChild(table);
}

