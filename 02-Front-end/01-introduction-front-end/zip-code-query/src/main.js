import Swal from 'sweetalert2';

const inputCep = document.getElementById('input-number');
const btnCep = document.getElementById('btn-cep');
const spaceCep = document.getElementById('content-data');

btnCep.addEventListener('click', consultCep)


async function consultCep() { // async comes before the function
  const cep = inputCep.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // await comes before fetch
    const data = await result.json();

    if (data.erro) throw new Error('Erro de cep inválido');

    spaceCep.innerHTML = JSON.stringify(data);
      return data;
  } catch (error) {
    Swal.fire('Ops', error.message, 'error');
  }
}

