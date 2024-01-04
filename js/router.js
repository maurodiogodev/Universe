export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {

        event.preventDefault()

        window.history.pushState({}, '', event.currentTarget.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location

        const route = this.routes[pathname] || this.routes[404]

        this.changeBackground(pathname)

        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.getElementById('content').innerHTML = html
            })
        this.activateCurrentLink(pathname, route)
    }

    changeBackground(pathname) {

        switch (pathname) {
            case '/exploration':
                document.body.style.backgroundImage = "url(../images/mountains-universe-3.png)"
                break;

            case '/universe':
                document.body.style.backgroundImage = "url(../images/mountains-universe-2.png)"
                break;

            default:
                document.body.style.backgroundImage = "url(../images/mountains-universe-1.png)"
                break
        }
    }

    activateCurrentLink(pathname, route) {
        const links = document.querySelectorAll('a.links')

        links.forEach(link => {
            link.classList.remove('active')
        });

        if (route != '/pages/404.html') {
            document.querySelector(`a.links[href="${pathname}"]`).classList.add('active')
        }
    }
}