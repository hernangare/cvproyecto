
//intento de menú
document.getElementById('name').addEventListener('mousemove', function(){
    document.getElementById('info').innerHTML = "Hola! mi nombre es"
    document.getElementById('descrip').innerHTML = "Hernan Garcia Esquerdo"});

document.getElementById('cumple').addEventListener('mousemove', function(){
    document.getElementById('info').innerHTML = "Cumplo años el"
    document.getElementById('descrip').innerHTML = "25 de Mayo de 1992"});

document.getElementById('home').addEventListener('mousemove', function(){
    document.getElementById('info').innerHTML = "Vivo en la zona de"
     document.getElementById('descrip').innerHTML = "Balvanera (calle falsa 1234)"});

document.getElementById('email').addEventListener('mousemove', function(){
    document.getElementById('info').innerHTML = "Mi correo electrónico"
    document.getElementById('descrip').innerHTML = "hernangare_92@hotmail.com"});

document.getElementById('tel').addEventListener('mousemove', function(){
    document.getElementById('info').innerHTML = "Teléfono celular"
    document.getElementById('descrip').innerHTML = "+54-1131313131"});

document.getElementById('linkedin').addEventListener('mousemove', function(){
    document.getElementById('info').innerHTML = "Visita mi linkedin!"
    document.getElementById('descrip').innerHTML = "www.linkedin.com/"});


//cargamos los usuarios ID haciendo un fetch
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      for (let i = 1; i <= 3; i++) {
        let usuario = data.find(user => user.id === i)
        let nombre = usuario.name
        let email = usuario.email
        let telefono = usuario.phone
        let referencia = document.getElementById("ref-"+i)
        referencia.innerHTML = 'Nombre y apellido: ' + nombre + ' - ' + 'Email: ' + email +
         ' - ' + 'Teléfono de contacto: ' + telefono
      }
    });