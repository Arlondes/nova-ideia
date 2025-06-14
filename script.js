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

 const form = document.getElementById('meuFormulario');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const data = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                document.getElementById('popup').style.display = 'block';
            } else {
                alert('Erro no envio. Tente novamente.');
            }
        }).catch(error => {
            alert('Erro no envio. Tente novamente.');
        });
    });

    function fecharPopup() {
        document.getElementById('popup').style.display = 'none';
    }

 
