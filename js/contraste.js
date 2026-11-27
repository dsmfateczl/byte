/* Alto contraste - BYTE
   Cria um botão fixo na tela, liga/desliga a classe "alto-contraste" no <html>
   e lembra a escolha do usuário entre as páginas (localStorage). */
(function () {
  var CHAVE = "byte-alto-contraste";
  var CLASSE = "alto-contraste";
  var raiz = document.documentElement;

  function lerPreferencia() {
    try {
      return localStorage.getItem(CHAVE) === "1";
    } catch (e) {
      return false;
    }
  }

  function salvarPreferencia(ativo) {
    try {
      localStorage.setItem(CHAVE, ativo ? "1" : "0");
    } catch (e) {
      /* se o navegador bloquear o armazenamento, o botão continua funcionando */
    }
  }

  // Aplica o modo já no carregamento, antes de a página aparecer (evita "piscar")
  if (lerPreferencia()) {
    raiz.classList.add(CLASSE);
  }

  // Troca a logo preta pela versão amarela (atumalak2-amarelo.png) no alto contraste
  function atualizarLogos() {
    var ativo = raiz.classList.contains(CLASSE);
    var logos = document.querySelectorAll("img.logo, img.logo-footer");
    for (var i = 0; i < logos.length; i++) {
      var img = logos[i];
      if (!img.getAttribute("data-src-original")) {
        img.setAttribute("data-src-original", img.getAttribute("src"));
      }
      var original = img.getAttribute("data-src-original");
      img.setAttribute(
        "src",
        ativo ? original.replace(/\.png$/i, "-amarelo.png") : original
      );
    }
  }

  function atualizarBotao(botao) {
    var ativo = raiz.classList.contains(CLASSE);
    botao.setAttribute("aria-pressed", ativo ? "true" : "false");
    botao.textContent = ativo ? "Alto contraste: ligado" : "Alto contraste: desligado";
  }

  function criarBotao() {
    var botao = document.createElement("button");
    botao.type = "button";
    botao.className = "btn-contraste";
    botao.setAttribute("aria-label", "Ativar ou desativar o modo de alto contraste");
    atualizarBotao(botao);
    atualizarLogos();

    botao.addEventListener("click", function () {
      var ativo = raiz.classList.toggle(CLASSE);
      salvarPreferencia(ativo);
      atualizarBotao(botao);
      atualizarLogos();
    });

    document.body.appendChild(botao);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", criarBotao);
  } else {
    criarBotao();
  }
})();
