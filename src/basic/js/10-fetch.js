/* Fetch Api */

const apiKey = 'jmx4IBeCtwRcxEi9HsneWwl59W3yCNn0';

const  peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then((resp) => {
//     // console.log(resp);
//     resp.json().then((data) => {
//         console.log(data);
//     })
// })
// .catch(console.warn);

peticion.then((resp) => resp.json())
        .then(({data}) => {
            const {url} = data.images.original;
            console.log(url);
            const img = document.createElement('img');
            img.src = url;

            document.body.append(img);
        })
        .catch(console.warn);