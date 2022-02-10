const btn = document.getElementById('jokeBtn');
const text = document.getElementById('text');

const loading = document.getElementById('shimmer');

const url = 'https://icanhazdadjoke.com/';

async function getter() {
  text.style.display = 'none';
  loading.style.display = 'block';
  const initialPromise = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const myPromise = await initialPromise.json();
  text.innerHTML = myPromise.joke;
  loading.style.display = 'none';
  text.style.display = 'block';
}
btn.addEventListener('click', getter);
