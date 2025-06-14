document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));


            this.classList.add("active");


            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });
});


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/arlondescarvalho@yahoo.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            } else {
                alert("Erro ao enviar. Tente novamente.");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao enviar. Verifique sua conexão.");
        });
});

document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault(); 
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth' 
    });
});

 
