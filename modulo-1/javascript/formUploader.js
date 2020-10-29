export async function formSubmit(e) {
  e.preventDefault();

  try {
    const name = document.querySelector('input').value;
    const result = await (
      await fetch(`https://api.github.com/users/${name}`)
    ).json();
    montarImagem(result);
  } catch (err) {
    console.log(err);
  }
}

function montarImagem({ avatar_url: foto }) {
  const divResultado = document.querySelector('.resultado');

  const img = document.createElement('img');
  img.setAttribute('src', foto);
  img.setAttribute('width', '100px');
  img.setAttribute('height', '100px');
  img.classList.add('image-item');

  divResultado.appendChild(img);

  console.log(divResultado);
}
