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
