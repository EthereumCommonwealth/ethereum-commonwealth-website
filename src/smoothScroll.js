export function smoothScroll(id) {

    document.querySelector(id).scrollIntoView( {
        alignToTop: true,
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    });

    window.history.pushState(null, null, id);
}

