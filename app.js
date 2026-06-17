// Liga o Service Worker no navegador
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then((registration) => {
        console.log('EcoShop SW ativo com sucesso!', registration);
    })
    .catch((error) => {
        console.error('Ops, o SW falhou:', error);
    });
}

// Faz o botão de notificação pedir permissão na tela
document.getElementById('notify-btn').addEventListener('click', () => {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                alert('Boa! Notificações ativadas para a EcoShop! 🌱');
            } else {
                alert('Poxa, você bloqueou as notificações. 😢');
            }
        });
    } else {
        alert('Este navegador não aceita notificações.');
    }
});