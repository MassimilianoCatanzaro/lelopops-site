/* =========================================================
   CONFIGURAÇÃO LELOPOPS — mude só aqui
   ========================================================= */
window.LELO_CONFIG = {

  /* WhatsApp da marca: 55 + DDD + número, só dígitos. Ex.: '5511912345678'
     Vazio = as páginas de sabor mostram só o formulário. */
  WHATSAPP: '',

  /* Para onde cada QR code leva.
     Vazio ('') = abre a página do sabor normalmente.
     Com um link (começando com https://) = o QR manda a pessoa direto para esse link. */
  DESTINOS: {
    'acai-com-banana': '',
    'blue-ice': '',
    'chocolate': 'https://wa.me/5511974724373?text=' + encodeURIComponent('Oi! Escaneei o QR code do picolé de Chocolate 😋 (teste)'),
    'coco-branco': '',
    'creme-holandes': '',
    'groselha': '',
    'limao': '',
    'milho-verde': '',
    'skimo': '',
    'tangerina': '',
    'uva': '',
    'brigadeiro': '',
    'coco-queimado': '',
    'chococo': '',
    'maracuja': '',
    'skibranco': ''
  },

  SHEET_WEBAPP_URL: 'https://script.google.com/macros/s/AKfycbzOlnUaVK7SXhNTJIE7UtOK9adwTVaMvoNtv9zh0SUmPfbxx0by2i67NxCr20SEeZE/exec'
};
