export function createHeader(){
    const headerContainer = document.createElement('div')
    headerContainer.className = 'headerContainer'

    //Logo text container
    const logoTextContainer = document.createElement('div')
    logoTextContainer.className = 'logoTextContainer'
    const logoText = document.createElement('h2')
    logoText.className = 'logoText'
    logoText.textContent = 'KAIZEN HOUSE'
    logoTextContainer.appendChild(logoText)
    headerContainer.appendChild(logoTextContainer)

    //NAV CONTAINER
    const navContainer = document.createElement('div')
    navContainer.className = 'navContainer'
    const pages = ['Home', 'Menu', 'About']
    pages.forEach(page => {
        const a = document.createElement('a')
        a.href = '#'
        a.textContent = page
        // i learned this today(19/08/24) so this will create a data*(data-page) attribute and will set it to the page name in lowercase known as a best practice since i will reuse the value for routing pages
        a.dataset.page = page.toLowerCase()
        a.addEventListener('click', (e) => {
            e.preventDefault()
            //TODO
            //IMPLEMENT NAVIGATETO
            window.navigateTo(e.target.dataset.page)

        })
        navContainer.appendChild(a)
    })

    headerContainer.appendChild(navContainer)


    //ICON CONTAINER
    const iconContainer = document.createElement('div')
    iconContainer.className = 'iconContainer'
    const cartIcon = document.createElement('img')
    cartIcon.className = 'cartIcon'
    cartIcon.src = "./src/assets/cartIcon.png"
    cartIcon.alt = "Cart"
    const cartItemCount = document.createElement('span')
    cartItemCount.className = 'cartCounter'
    cartItemCount.textContent = '0'
    iconContainer.appendChild(cartIcon)
    iconContainer.appendChild(cartItemCount)
    headerContainer.appendChild(iconContainer)

    return headerContainer
}