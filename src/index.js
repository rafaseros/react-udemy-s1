const getGif = async () => {
  try {
    const API_KEY = 'KzBUHGTAFsK94lN0hRVHnJcSFG4B58Y7';
    const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await res.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (err) {
    console.error(err);
  }
};

getGif();
