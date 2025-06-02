  // Seleciona todos os links que possuem âncoras, inclusive dropdown items
  var links = document.querySelectorAll('.nav-link, .dropdown-item');
  
  // Itera sobre cada link e adiciona um evento de clique
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();  // Previne o comportamento padrão do link

      // Obtém o ID da seção a partir do href (sem o '#')
      var targetId = this.getAttribute('href').substring(1);

      // Seleciona o elemento correspondente ao ID
      var targetElement = document.getElementById(targetId);

      // Realiza o scroll suave para a posição do elemento alvo, se o elemento existir
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,  // Desconta a altura da navbar
          behavior: 'smooth'
        });
      }

      // Fechar o offcanvas após o clique em um item de menu (se estiver aberto) exceto no dropdown
      var isDropdown = this.classList.contains('dropdown-toggle');
      if (!isDropdown) {
        var offcanvasElement = document.querySelector('.offcanvas.show');
        if (offcanvasElement) {
          var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
          offcanvasInstance.hide();
        }
      }
    });
  }

  // Adiciona uma classe à navbar para ficar fixa no topo após rolar a página
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top');  // Torna a navbar fixa no topo
    } else {
      navbar.classList.remove('fixed-top');  // Remove a fixação quando voltar ao topo
    }
  });