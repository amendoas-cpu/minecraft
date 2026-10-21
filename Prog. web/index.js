document.querySelectorAll('.cabecario h2 a, .sobre h1 a, .gostos h1 a, .contato h1 a').forEach((textLink) => {
    const heading = textLink.parentElement;

    textLink.addEventListener('mouseenter', () => {
        heading.classList.add('is-hovered');
    });

    textLink.addEventListener('mouseleave', () => {
        heading.classList.remove('is-hovered');
    });
});

const imageViewer = document.querySelector('.image-viewer');
const enlargedImage = imageViewer.querySelector('img');
const closeViewerButton = imageViewer.querySelector('.image-viewer-close');
let imageToRestoreFocus;

document.querySelectorAll('img:not(.img-democracia):not(.instagram-icon):not(.whatsapp-icon):not(.linkedin-icon):not(.image-viewer img)').forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Ampliar: ${image.alt}`);

    const openViewer = () => {
        imageToRestoreFocus = image;
        enlargedImage.src = image.currentSrc || image.src;
        enlargedImage.alt = image.alt;
        imageViewer.showModal();
        closeViewerButton.focus();
    };

    image.addEventListener('click', openViewer);
    image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openViewer();
        }
    });
});

closeViewerButton.addEventListener('click', () => imageViewer.close());

imageViewer.addEventListener('click', (event) => {
    if (event.target === imageViewer) {
        imageViewer.close();
    }
});

imageViewer.addEventListener('close', () => imageToRestoreFocus?.focus());

const instagramParagraph = document.querySelector('.contato p[data-url]');

if (instagramParagraph) {
    const openInstagram = () => window.location.assign(instagramParagraph.dataset.url);

    instagramParagraph.addEventListener('click', openInstagram);
    instagramParagraph.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            openInstagram();
        }
    });
}