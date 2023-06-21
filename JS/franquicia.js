const form = document.getElementById('Form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const button = document.getElementById('btnEnviar');
    button.disabled = true;
    const data = new FormData(form);
    const apiKey = 'Api Key';
    const body = {
        "sender": {
            "name": "Your name",
            "email": "Your Mail"
        },
        "to": [
            {
                "email": "Email to which it is sent", 
                "name": "Your Name"
            }
        ],
        "subject": "Solicitud para franquicia",
        "htmlContent": `<h1 style="color:#6cace4">SE HA SOLICITADO CONTACTO</h1> 
            <p>Nombre y Apellido : <b>${data.get('NombreCompleto')}</b> </p>
            <p>Email : <b>${data.get('Email')}</b> </p>
            <p>Teléfono : <b>${data.get('Telefono')}</b> </p>
            <p>Experiencia comercial : <b>${data.get('Experiencia')}</b> </p>
            <p>Zona donde desea abrir un local : <b>${data.get('Zona')}</b> </p>
            <p>Dispone de local en la zona? : <b>${data.get('TieneLocal')}</b> </p>
            <p>Cómo nos conoció : <b>${data.get('Recomendacion')}</b> </p>`
    }
    fetch(`Api Brevo`, {
        method: 'POST',
        headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title:'Formulario enviado!',
                text:'Pronto será contactado',
                confirmButtonColor: '#6cace4',
                icon:'success'
            });
            form.reset();

        })
        .finally(data=>{
            button.disabled = false;
        })
});
