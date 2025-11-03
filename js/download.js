// Rede de Influencers - Download Functionality

// Download como HTML
function downloadHTML() {
  const htmlContent = document.documentElement.outerHTML;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `rede-influencers-mockup-${Date.now()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showNotification('Download HTML iniciado!', 'success');
}

// Download como PDF
async function downloadPDF() {
  showNotification('Gerando PDF... Aguarde.', 'info');
  
  try {
    // Esconder elementos que não devem aparecer no PDF
    const downloadSection = document.querySelector('.download-section');
    if (downloadSection) downloadSection.style.display = 'none';
    
    // Usar window.print() que abre o diálogo de impressão
    // O usuário pode salvar como PDF
    window.print();
    
    // Restaurar elementos
    if (downloadSection) downloadSection.style.display = 'flex';
    
    showNotification('Diálogo de impressão aberto. Salve como PDF.', 'success');
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    showNotification('Erro ao gerar PDF. Tente novamente.', 'error');
    
    // Restaurar elementos em caso de erro
    const downloadSection = document.querySelector('.download-section');
    if (downloadSection) downloadSection.style.display = 'flex';
  }
}

// Mostrar notificação
function showNotification(message, type = 'info') {
  // Remover notificação anterior se existir
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Criar notificação
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Estilos inline
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? '#66BB6A' : type === 'error' ? '#F44336' : '#1976D2'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-weight: 600;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Smooth scroll para links internos
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
