document.querySelectorAll('.demo-details-jquery-accordion').forEach(details => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('p');

    if (!summary || !content) return;

    summary.addEventListener('click', function(e) {
        e.preventDefault();

        const isOpen = details.hasAttribute('open');

        if (!isOpen) {
            details.setAttribute('open', '');
            content.style.display = 'block';
            content.style.overflow = 'hidden';
            
            const height = content.scrollHeight;
            
            content.animate([
                { height: '0px' },
                { height: height + 'px' }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => {
                content.style.height = '';
                content.style.overflow = '';
            };
        } else {
            content.style.overflow = 'hidden';
            const height = content.scrollHeight;
            
            content.animate([
                { height: height + 'px' },
                { height: '0px' }
            ], {
                duration: 300,
                easing: 'ease-out'
            }).onfinish = () => {
                details.removeAttribute('open');
                content.style.display = 'none';
                content.style.height = '';
                content.style.overflow = '';
            };
        }
    });
});