// ── MENU HAMBURGUER ──
document.addEventListener('DOMContentLoaded', function () {
    var menuIcone = document.getElementById("menu-hamburguer");
    var navMenu = document.querySelector("header nav");

    if (menuIcone && navMenu) {
        menuIcone.onclick = function () {
            navMenu.classList.toggle("active");
            menuIcone.classList.toggle("open");
        };
    }

    // Link ativo
    var paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('header nav ul li a').forEach(function (link) {
        var href = link.getAttribute('href').split('/').pop();
        if (href === paginaAtual) link.classList.add('active');
    });

    criarFooter();
    iniciarCarrinho();
});

// ── FOOTER DINÂMICO ──
function criarFooter() {
    var footer = document.querySelector('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-grid">
            <div class="footer-coluna">
                <h4>NEONARENA</h4>
                <p>A loja gamer de confiança dos jogadores brasileiros. Hardware, periféricos e acessórios para todos os níveis.</p>
                <p style="margin-top: 10px; font-size: 0.82rem; color: #555;">Fundada em 2018. São Paulo, SP.</p>
            </div>

            <div class="footer-coluna">
                <h4>NAVEGAÇÃO</h4>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/pages/portifolio.html">Portfólio</a></li>
                    <li><a href="/pages/sobre.html">Sobre</a></li>
                    <li><a href="/pages/contato.html">Contato</a></li>
                </ul>
            </div>

            <div class="footer-coluna">
                <h4>CONTATO</h4>
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9370DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;vertical-align:middle;margin-right:6px"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> <a href="tel:+5511987654321">(11) 9 8765-4321</a></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9370DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;vertical-align:middle;margin-right:6px"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg> <a href="mailto:contato@neonarena.com">contato@neonarena.com</a></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9370DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;vertical-align:middle;margin-right:6px"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> Av. Paulista, 756 — SP</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9370DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Seg–Sex: 9h às 18h</li>
                </ul>
            </div>

            <div class="footer-coluna">
                <h4>REDES SOCIAIS</h4>
                <div class="footer-redes">
                    <a href="#" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        Instagram
                    </a>
                    <a href="#" aria-label="Twitter / X">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
                        Twitter / X
                    </a>
                    <a href="#" aria-label="Discord">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
                        Discord
                    </a>
                    <a href="#" aria-label="YouTube">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                        YouTube
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-copy">
            &copy; ${new Date().getFullYear()} <span>NEONARENA</span> &mdash; Todos os direitos reservados.
        </div>
    `;
}

// ── FORMULÁRIO DE CONTATO ──
function enviarFormulario(event) {
    event.preventDefault();
    document.getElementById('form-contato').style.display = 'none';
    document.getElementById('mensagem-sucesso').style.display = 'block';
}

// ── CARRINHO ──
var carrinho = [];

function iniciarCarrinho() {
    // Injeta HTML do carrinho no body
    var html = `
        <div id="carrinho-overlay"></div>
        <aside id="carrinho-painel">
            <div class="carrinho-header">
                <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9370DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;vertical-align:middle;margin-right:6px"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> MEU CARRINHO</h3>
                <button id="carrinho-fechar" aria-label="Fechar carrinho">✕</button>
            </div>
            <div id="carrinho-itens"></div>
            <div id="carrinho-obrigado">
                <span class="obrigado-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9370DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:64px;height:64px"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></span>
                <h3>COMPRA REALIZADA!</h3>
                <p>Obrigado por comprar na NeonArena.<br>Você receberá um e-mail de confirmação em breve.</p>
                <button id="btn-voltar-loja">CONTINUAR COMPRANDO</button>
            </div>
            <div class="carrinho-footer">
                <div class="carrinho-subtotal">
                    <span>TOTAL</span>
                    <span class="total-valor" id="carrinho-total">R$ 0,00</span>
                </div>
                <button id="btn-finalizar">FINALIZAR COMPRA ▸</button>
                <button id="btn-limpar">LIMPAR CARRINHO</button>
            </div>
        </aside>
    `;
    document.body.insertAdjacentHTML('beforeend', html);

    // Eventos do painel
    document.getElementById('carrinho-overlay').onclick = fecharCarrinho;
    document.getElementById('carrinho-fechar').onclick = fecharCarrinho;
    document.getElementById('btn-finalizar').onclick = finalizarCompra;
    document.getElementById('btn-limpar').onclick = limparCarrinho;
    document.getElementById('btn-voltar-loja').onclick = voltarLoja;

    // Botão no header
    var btnCarrinho = document.getElementById('carrinho-btn');
    if (btnCarrinho) btnCarrinho.onclick = abrirCarrinho;

    renderCarrinho();
}

function abrirCarrinho() {
    document.getElementById('carrinho-painel').classList.add('aberto');
    document.getElementById('carrinho-overlay').classList.add('aberto');
    document.body.style.overflow = 'hidden';
}

function fecharCarrinho() {
    document.getElementById('carrinho-painel').classList.remove('aberto');
    document.getElementById('carrinho-overlay').classList.remove('aberto');
    document.body.style.overflow = '';
}

function adicionarItem(nome, preco, icone) {
    var existente = carrinho.find(function (i) { return i.nome === nome; });
    if (existente) {
        existente.qty++;
    } else {
        carrinho.push({ nome: nome, preco: preco, icone: icone, qty: 1 });
    }
    renderCarrinho();
    animarContador();
    abrirCarrinho();
}

function removerItem(nome) {
    carrinho = carrinho.filter(function (i) { return i.nome !== nome; });
    renderCarrinho();
}

function alterarQty(nome, delta) {
    var item = carrinho.find(function (i) { return i.nome === nome; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removerItem(nome);
    else renderCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    renderCarrinho();
}

function finalizarCompra() {
    if (carrinho.length === 0) return;
    document.getElementById('carrinho-itens').style.display = 'none';
    document.querySelector('.carrinho-footer').style.display = 'none';
    document.getElementById('carrinho-obrigado').style.display = 'flex';
}

function voltarLoja() {
    limparCarrinho();
    document.getElementById('carrinho-itens').style.display = 'block';
    document.querySelector('.carrinho-footer').style.display = 'block';
    document.getElementById('carrinho-obrigado').style.display = 'none';
    fecharCarrinho();
}

function renderCarrinho() {
    var lista = document.getElementById('carrinho-itens');
    var totalEl = document.getElementById('carrinho-total');
    var countEl = document.getElementById('carrinho-count');
    if (!lista) return;

    var totalQty = carrinho.reduce(function (s, i) { return s + i.qty; }, 0);
    var totalVal = carrinho.reduce(function (s, i) { return s + i.preco * i.qty; }, 0);

    if (countEl) countEl.textContent = totalQty;
    if (totalEl) totalEl.textContent = 'R$ ' + totalVal.toFixed(2).replace('.', ',');

    if (carrinho.length === 0) {
        lista.innerHTML = `
            <div class="carrinho-vazio">
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9370DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:48px;height:48px;opacity:0.3"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></span>
                <p>SEU CARRINHO ESTÁ VAZIO</p>
            </div>`;
        return;
    }

    lista.innerHTML = carrinho.map(function (item) {
        var nomeSafe = item.nome.replace(/'/g, "\\'");
        return `
            <div class="carrinho-item">
                <span class="carrinho-item-icon">${item.icone}</span>
                <div class="carrinho-item-info">
                    <h4>${item.nome}</h4>
                    <span class="item-preco">R$ ${(item.preco * item.qty).toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="carrinho-item-controles">
                    <button class="item-qty-btn" onclick="alterarQty('${nomeSafe}', -1)">−</button>
                    <span class="item-qty">${item.qty}</span>
                    <button class="item-qty-btn" onclick="alterarQty('${nomeSafe}', 1)">+</button>
                    <button class="item-remover" onclick="removerItem('${nomeSafe}')" title="Remover">✕</button>
                </div>
            </div>`;
    }).join('');
}

function animarContador() {
    var countEl = document.getElementById('carrinho-count');
    if (!countEl) return;
    countEl.classList.remove('bump');
    void countEl.offsetWidth;
    countEl.classList.add('bump');
    setTimeout(function () { countEl.classList.remove('bump'); }, 200);
}
