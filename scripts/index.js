// Definición de la clase Actividad
class Actividad {
    constructor(id, titulo, descripcion, urlImagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
    }
}

// Definición de la clase Repositorio
class Repositorio {
    constructor() {
        this.actividades = [];
        this.idActual = 1;
    }

    obtenerTodasLasActividades() {
        return this.actividades;
    }

    crearActividad(titulo, descripcion, urlImagen) {
        const nuevaActividad = new Actividad(this.idActual, titulo, descripcion, urlImagen);
        this.actividades.push(nuevaActividad);
        this.idActual++;
    }
}

// Función para crear una tarjeta
function crearTarjetaDeActividad(actividad) {
    const tarjetaDiv = document.createElement('div');
    const tituloElemento = document.createElement('h3');
    const descripcionElemento = document.createElement('p');
    const imagenElemento = document.createElement('img');

    // Configurar el contenido
    tituloElemento.innerText = actividad.titulo;
    descripcionElemento.innerText = actividad.descripcion;
    imagenElemento.src = actividad.urlImagen;
    imagenElemento.alt = actividad.titulo;

    // Asignar las clases
    tarjetaDiv.className = 'tarjeta';
    tituloElemento.className = 'tarjeta-titulo';
    descripcionElemento.className = 'tarjeta-descripcion';
    imagenElemento.className = 'tarjeta-imagen';

    // Agregar elementos a la tarjeta
    tarjetaDiv.appendChild(tituloElemento);
    tarjetaDiv.appendChild(descripcionElemento);
    tarjetaDiv.appendChild(imagenElemento);

    return tarjetaDiv;
}

// Mostrar las actividades
function mostrarTodasLasActividades() {
    const contenedorActividades = document.querySelector('.tarjetas-container');
    contenedorActividades.innerHTML = ''; // Limpiar el contenedor
    const actividades = repositorio.obtenerTodasLasActividades();
    actividades.forEach(function(actividad) {
        const tarjeta = crearTarjetaDeActividad(actividad);
        contenedorActividades.appendChild(tarjeta);
    });
}

// Manejar cuando se agrega una actividad
function manejarAgregarActividad(evento) {
    evento.preventDefault(); 

    const titulo = document.getElementById('Titulo').value;
    const descripcion = document.getElementById('comentario').value;
    const urlImagen = document.getElementById('url').value;

    // Validar campos
    if (titulo === '' || descripcion === '' || urlImagen === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear nueva actividad y actualizar
    repositorio.crearActividad(titulo, descripcion, urlImagen);
    mostrarTodasLasActividades();
    evento.target.reset(); // Resetear el formulario
}

// Inicializar
const repositorio = new Repositorio();
const botonAgregar = document.querySelector('#boton button');
botonAgregar.addEventListener('click', manejarAgregarActividad);
