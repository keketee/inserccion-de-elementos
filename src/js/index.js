// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


// - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista-

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
// </ul>
// ```

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('addItemButton');
    const ul = document.getElementById('itemList');

    button.addEventListener('click', () => {
        const items = ul.getElementsByTagName('li');
        const nextNumber = items.length + 1;
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${nextNumber}`;
        ul.appendChild(newItem);
    });
});

// Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

// ```html
// <div>
//   <label>1</label>
//   <input type="range" id="range" min="1" max="6" step="1" value="1" />
//   <button>Generar Encabezado</button>
// </div>
// ```

document.addEventListener('DOMContentLoaded', (event) => {
    const rangeInput = document.getElementById('range');
    const button = document.getElementById('generateHeaderButton');
    const headersContainer = document.getElementById('headersContainer');

    button.addEventListener('click', () => {
        const headerLevel = rangeInput.value;
        const headerText = `Soy un h${headerLevel}`;
        const header = document.createElement(`h${headerLevel}`);
        header.textContent = headerText;
        headersContainer.appendChild(header);
    });
});

// Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

// ```html
// <h1>Posts</h1>
// <h2>Post de ejemplo</h2>
// <!-- Contenedor de posts -->
// <div>
//   <!-- Post independiente -->
//   <div>
//     <h2>Nuevo post</h2>
//     <span>Author: Dorian</span>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//   </div>
//   <!-- Fin del post independiente -->
// </div>
// <!-- Fin del contenedor de posts -->
// <form>
//   <div>
//     <label>Title</label>
//     <input type="text" />
//   </div>
//   <div>
//     <label>Author</label>
//     <input type="text" />
//   </div>
//   <div>
//     <label>Message:</label>
//     <textarea></textarea>
//   </div>
//   <button>Send Post</button>
// </form>
// ```

document.addEventListener('DOMContentLoaded', (event) => {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const messageInput = document.getElementById('messageInput');
    const sendPostButton = document.getElementById('sendPostButton');

    sendPostButton.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const message = messageInput.value.trim();

        if (title && author && message) {
            const newPostDiv = document.createElement('div');

            const newPostTitle = document.createElement('h2');
            newPostTitle.textContent = title;
            newPostDiv.appendChild(newPostTitle);

            const newPostAuthor = document.createElement('span');
            newPostAuthor.textContent = `Author: ${author}`;
            newPostDiv.appendChild(newPostAuthor);

            const newPostMessage = document.createElement('p');
            newPostMessage.textContent = message;
            newPostDiv.appendChild(newPostMessage);

            postsContainer.appendChild(newPostDiv);

            // Clear the form inputs
            titleInput.value = '';
            authorInput.value = '';
            messageInput.value = '';
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});

//Crea una función que cree un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.

document.addEventListener("DOMContentLoaded", function() {
    // Crear el div
    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.border = '1px solid black';
    div.style.marginTop = '20px';
    document.body.appendChild(div);

    // Crear el botón 'red'
    const redButton = document.createElement('button');
    redButton.innerText = 'red';
    redButton.style.marginRight = '10px';
    redButton.addEventListener('click', function() {
        div.style.backgroundColor = 'red';
    });
    document.body.appendChild(redButton);

    // Crear el botón 'green'
    const greenButton = document.createElement('button');
    greenButton.innerText = 'green';
    greenButton.addEventListener('click', function() {
        div.style.backgroundColor = 'green';
    });
    document.body.appendChild(greenButton);
});

//Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.


function generarNumerosAleatorios() {
    const numerosAleatorios = [];
    for (let i = 0; i < 25; i++) {
        
        const numero = Math.floor(Math.random() * 101);
        numerosAleatorios.push(numero);
    }
    return numerosAleatorios;
}

const numeros = generarNumerosAleatorios();
console.log(numeros);

//Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.



// Función para crear e insertar listas de números pares e impares en el DOM
function insertarListasNumeros(numeros) {
    // Crear listas para números pares e impares
    const listaPares = document.createElement('ul');
    const listaImpares = document.createElement('ul');

    // Separar los números en pares e impares
    numeros.forEach(numero => {
        const listItem = document.createElement('li');
        listItem.textContent = numero;
        if (numero % 2 === 0) {
            listaPares.appendChild(listItem);
        } else {
            listaImpares.appendChild(listItem);
        }
    });

    // Crear contenedores para las listas y añadir títulos
    const contenedorPares = document.createElement('div');
    const contenedorImpares = document.createElement('div');

    const tituloPares = document.createElement('h3');
    tituloPares.textContent = 'Números Pares';
    const tituloImpares = document.createElement('h3');
    tituloImpares.textContent = 'Números Impares';

    contenedorPares.appendChild(tituloPares);
    contenedorPares.appendChild(listaPares);
    contenedorImpares.appendChild(tituloImpares);
    contenedorImpares.appendChild(listaImpares);

    // Añadir los contenedores al body del documento
    document.body.appendChild(contenedorPares);
    document.body.appendChild(contenedorImpares);
}

// Generar los números aleatorios y crear las listas cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const numeros = generarNumerosAleatorios();
    insertarListasNumeros(numeros);
});



// - Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

// ```html
// <label>Introduce un número</label>
// <input type="number" />
// <button>Imprimir tabla de multiplicar</button>
// <ul></ul>
// ```


document.addEventListener('DOMContentLoaded', function() {
    var input = document.querySelector('input[type="number"]');
    var button = document.querySelector('button');
    var ul = document.querySelector('ul');

    // Desactivar el botón si el valor no es un número positivo mayor que cero
    input.addEventListener('input', function() {
        button.disabled = !(this.value > 0);
    });

    // Al hacer clic en el botón, generar la tabla de multiplicar
    button.addEventListener('click', function() {
        var number = parseInt(input.value, 10);
        if (number > 0) {
            ul.innerHTML = ''; // Limpiar la lista antes de generar la nueva tabla
            for (var i = 0; i <= 10; i++) {
                var li = document.createElement('li');
                li.textContent = number + ' x ' + i + ' = ' + (number * i);
                ul.appendChild(li);
            }
        }
    });

    // Desactivar el botón inicialmente
    button.disabled = true;
});





//ejercicio tarjetas

const USERS = [{
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
    // ... (mismo array de usuarios que proporcionaste)
  ];
  
  function createUserCard(user) {
      const card = document.createElement('div');
      card.className = 'user-card';
  
      const img = document.createElement('img');
      img.src = user.profileImage;
      img.alt = 'Profile Image';
  
      const userInfo = document.createElement('div');
      userInfo.className = 'user-info';
  
      const h3 = document.createElement('h3');
      h3.textContent = user.name;
  
      const pAge = document.createElement('p');
      pAge.textContent = `Age: ${user.age}`;
  
      const pUsername = document.createElement('p');
      pUsername.textContent = `Username: ${user.username}`;
  
      const userDetails = document.createElement('div');
      userDetails.className = 'user-details';
  
      const pEmail = document.createElement('p');
      pEmail.textContent = `Email: ${user.email}`;
  
      const pJob = document.createElement('p');
      if (user.job) {
          pJob.textContent = `Job: ${user.job}`;
      }
  
      // Append elements
      userInfo.appendChild(img);
      userInfo.appendChild(h3);
      userInfo.appendChild(pAge);
      userInfo.appendChild(pUsername);
  
      userDetails.appendChild(pEmail);
      if (user.job) {
          userDetails.appendChild(pJob);
      }
  
      card.appendChild(userInfo);
      card.appendChild(userDetails);
  
      return card;
  }
  
  function generateUserCards() {
      const usersContainer = document.getElementById('users-container');
  
      USERS.forEach(user => {
          const userCard = createUserCard(user);
          usersContainer.appendChild(userCard);
      });
  }
  
  generateUserCards();
  