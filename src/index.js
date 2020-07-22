const API_KEY = 'KzBUHGTAFsK94lN0hRVHnJcSFG4B58Y7';
const HTTP_CALL = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

HTTP_CALL.then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
