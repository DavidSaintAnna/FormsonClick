function validation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let select = document.getElementById("dropdown");
    let valueDropDownTwo = select.options[select.selectedIndex].value;
    let preference = document.querySelector('input[name="preference"]:checked').value;
    let selectTwo = document.getElementById("dropdown_two");
    let valueDropDown = selectTwo.options[selectTwo.selectedIndex].value;
    let evaluation = document.querySelector('input[name="evaluation"]:checked').value;
    let comment = document.getElementById("comment").value;

    document.getElementById("return").innerHTML = `
    <h1>RESULTADOS</h1>
    <p>Nome: ${name}</p>
    <p>Email: ${email}</p>
    <p>Idade: ${number}</p>
    <p>Ocupação: ${valueDropDownTwo}</p>
    <p>Preferência: ${preference}</p>
    <p>Avaliação: ${valueDropDown}</p>
    <p>Tempo de Entrega: ${evaluation}</p>
    <p>Comentários e Sugestões: ${comment}</p>`
}