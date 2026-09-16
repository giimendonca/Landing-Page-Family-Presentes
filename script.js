/* =========================================
   FORMULÁRIO → WHATSAPP
========================================= */

const formLead = document.getElementById("formLead");

formLead.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const produto = document.getElementById("produto").value;

    if (nome === "" || produto === "") {
        alert("Preencha os campos obrigatórios.");
        return;
    }

    const numeroLoja = "5512988708658";

    const mensagem =
        `Olá Family Presentes! Me chamo ${nome} e tenho interesse em ${produto}.`;

    const linkWhatsApp =
        `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsApp, "_blank");

});


/* =========================================
   SELEÇÃO DE PRODUTO
========================================= */

const produtoLinks = document.querySelectorAll(".produto-item");

const produtoSelect = document.getElementById("produto");

const formWhatsApp = document.getElementById("formWhatsApp");


produtoLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const produto = this.dataset.produto;

        produtoSelect.value = produto;

        formWhatsApp.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const btnTopo = document.getElementById("btnTopo");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        btnTopo.classList.add("show");

    } else {

        btnTopo.classList.remove("show");

    }

});


btnTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   CARROSSEL DE PRODUTOS
========================================= */

const dadosCategorias = {

    "Presentes": {

        bg: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000",

        itens: [
            {
                img: "imgs/produtos/presentes4.webp",
                nome: "Cestas"
            },
            {
                img: "imgs/produtos/presentes5.webp",
                nome: "Mimos"
            },
            {
                img: "imgs/produtos/presentes6.webp",
                nome: "Lembrancinhas"
            },
            {
                img: "imgs/produtos/presentes3.webp",
                nome: "Brinquedos"
            }
        ]

    },


    "Moda & Estilo": {

        bg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000",

        itens: [
            {
                img: "imgs/produtos/moda6.webp",
                nome: "Masculina"
            },
            {
                img: "imgs/produtos/moda4.webp",
                nome: "Feminina"
            },
            {
                img: "imgs/produtos/moda3.webp",
                nome: "Lingerie"
            }
        ]

    },


    "Cuidados": {

        bg: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000",

        itens: [
            {
                img: "imgs/produtos/cuidados1.webp",
                nome: "Perfumaria"
            },
            {
                img: "imgs/produtos/cuidados2.webp",
                nome: "Cosméticos"
            },
            {
                img: "imgs/produtos/cuidados3.webp",
                nome: "Maquiagem"
            }
        ]

    },


    "Casa": {

bg: "https://images.unsplash.com/photo-1774200981075-a728eaaa3824?auto=format&fit=crop&fm=jpg&q=80&w=2000",

        itens: [
            {
                img: "imgs/produtos/casa2.webp",
                nome: "Toalhas"
            },
            {
                img: "imgs/produtos/casa1.webp",
                nome: "Utilidades"
            }
        ]

    }

};


const carouselDiv = document.querySelector(".carousel");

const categoriaBoxes =
    document.querySelectorAll(".categoria-box");


/* =========================================
   CARREGAR CATEGORIA
========================================= */

function carregarCarrossel(categoriaNome) {

    const dados = dadosCategorias[categoriaNome];

    if (!dados) {
        return;
    }

    carouselDiv.style.opacity = "0";


    setTimeout(function () {

        carouselDiv.style.backgroundImage =
            `url("${dados.bg}")`;


        let html = `
            <div class="carousel-inner">
        `;


        dados.itens.forEach(function (item) {

            html += `
                <div class="carousel-item">

                    <img
                        src="${item.img}"
                        alt="${item.nome}"
                    >

                    <p>
                        ${item.nome}
                    </p>

                </div>
            `;

        });


        html += `
            </div>
        `;


        carouselDiv.innerHTML = html;

        carouselDiv.style.opacity = "1";

    }, 300);

}


/* =========================================
   CLIQUE NAS CATEGORIAS
========================================= */

categoriaBoxes.forEach(function (box) {

    box.addEventListener("click", function () {

        categoriaBoxes.forEach(function (categoria) {

            categoria.classList.remove("active");

        });


        this.classList.add("active");


        const categoriaNome =
            this.querySelector("h4").textContent.trim().replace(/^.*?\s/, "");


        carregarCarrossel(categoriaNome);


        carouselDiv.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


/* =========================================
   PRIMEIRA CATEGORIA AO CARREGAR
========================================= */

if (categoriaBoxes.length > 0) {

    categoriaBoxes[0].click();

}