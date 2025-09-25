'use strict';

// Função para alternar a classe 'ativo'
const elementToggleFunc = function (elem) { elem.classList.toggle("ativo"); }

// Variáveis e funcionalidade para a barra lateral
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector(".botao-informacao-extra"); // Usa a classe correta do seu HTML

// Alternar a barra lateral em telas móveis
if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
        elementToggleFunc(sidebar);
    });
}

// Variáveis para a navegação das páginas
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Adicionar evento de clique a todos os links de navegação
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        const selectedPageName = this.innerText.toLowerCase();

        for (let j = 0; j < pages.length; j++) {
            const pageName = pages[j].dataset.page;

            if (pageName === selectedPageName) {
                pages[j].classList.add("ativo");
                navigationLinks[i].classList.add("ativo");
                window.scrollTo(0, 0);
            } else {
                pages[j].classList.remove("ativo");
                navigationLinks[i].classList.remove("ativo");
            }
        }
    });
}

// Variáveis e funcionalidade do formulário de contato
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Adicionar evento 'input' a todos os campos do formulário para validação
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

// Variáveis e funcionalidade do filtro de portfólio
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        const category = filterItems[i].dataset.category.toLowerCase();
        
        if (selectedValue === "todos" || category === selectedValue) {
            filterItems[i].classList.add("ativo");
        } else {
            filterItems[i].classList.remove("ativo");
        }
    }
}

// Adicionar evento de clique a todos os botões de filtro
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        
        for (let j = 0; j < filterBtn.length; j++) {
            filterBtn[j].classList.remove("ativo");
        }
        this.classList.add("ativo");
        
        filterFunc(selectedValue);
    });
}