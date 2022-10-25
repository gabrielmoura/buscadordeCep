document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    getCep();
});

async function getCep() {
    cep = document.getElementById("cep").value.replace(/([^\d])+/gim, "");
    if (cep.length < 8) {
        document.getElementById("cepSpan").innerText = "Cep Inválido";
        document.getElementById("cepSpan").classList.remove("d-none");
    } else {
        document.getElementById("cepSpan").classList.add("d-none");
        response = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
        setData(await response.json());
    }
}

function setData(data) {
    document.getElementById("none").classList.remove("d-none");
    document.getElementById("rua").value = data.logradouro;
    document.getElementById("cidade").value = data.localidade;
    document.getElementById("estado").value = data.uf;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("complemento").value = data.complemento;
}