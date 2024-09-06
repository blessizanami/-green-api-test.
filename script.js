
function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    fetch(`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}


function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}


function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

   
    if (!phoneNumber.endsWith('@c.us')) {
        phoneNumber = `${phoneNumber}@c.us`;
    }

    const data = {
        chatId: phoneNumber,
        message: message
    };

    fetch(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}

function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fileUrl = document.getElementById('fileUrl').value;

    const data = {
        chatId: `${phoneNumber}@c.us`,
        urlFile: fileUrl
    };

    fetch(`https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}
