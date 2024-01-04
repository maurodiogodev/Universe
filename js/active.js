

const links = document.querySelectorAll('a')

links.forEach(link => {
    link.classList.remove('active')
});

const currentLink = window.location.pathname
if (currentLink) {
    document.querySelector(`a[href=${currentLink}]`)
}