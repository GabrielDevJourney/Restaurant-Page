import facebookIco from '../assets/facebookIco.png'
import instagramIco from '../assets/instagramIco.png'
import githubIco from '../assets/githubIco.png'

function renderFooter(){
    const footerContainer = document.createElement('div')
    footerContainer.className = 'footerContainer'

    const logoContainerFooter = document.createElement('div')
    logoContainerFooter.className = 'logoContainerFooter'
    footerContainer.appendChild(logoContainerFooter)

    const logoTextFooter = document.createElement('p')
    logoTextFooter.className = 'logoTextFooter'
    logoTextFooter.textContent = 'KAIZEN HOUSE'
    logoContainerFooter.appendChild(logoTextFooter)

    const navigationContainerFooter = document.createElement('div')
    navigationContainerFooter.className = 'navigationContainerFooter'
    footerContainer.appendChild(navigationContainerFooter)

    const homeNavigationContainer = document.createElement('div')
    homeNavigationContainer.className = 'homeNavigationContainer'
    navigationContainerFooter.appendChild(homeNavigationContainer)

    const menuNavigationContainer = document.createElement('div')
    menuNavigationContainer.className = 'menuNavigationContainer'
    navigationContainerFooter.appendChild(menuNavigationContainer)

    const menuText = document.createElement('p')
    menuText.className = 'menuText'
    menuText.textContent = 'MENU'
    menuNavigationContainer.appendChild(menuText)

    const categoriesNavigationContainer = document.createElement('div')
    categoriesNavigationContainer.className = 'categoriesNavigationContainer'
    menuNavigationContainer.appendChild(categoriesNavigationContainer)

    const linksList = document.createElement('ul')
    linksList.className = 'linksList'
    categoriesNavigationContainer.appendChild(linksList)
    const links = [
        {name : 'sushi'},
        {name : 'ramen'},
        {name : 'mochi'},
        {name : 'onigiri'}
    ]
    links.forEach((link) => {
        const linkHref = document.createElement('a')
        linkHref.className = 'linkHref'
        linkHref.id = `linkHref${link.name}`
        linkHref.textContent = link.name
        linkHref.href = "#" + link.name.toLowerCase()
        linkHref.dataset.link = link.name.toLowerCase()
        linkHref.addEventListener('click', (e) => {
            e.preventDefault()
            const navigateEvent = new CustomEvent('navigate' , {
                detail : {
                    page : 'menu',
                    category : link.name.toLocaleLowerCase()
                }
            })
            window.dispatchEvent(navigateEvent)
        })

        linksList.appendChild(linkHref)
    })

    const aboutContainer = document.createElement('div')
    aboutContainer.className = 'aboutContainer'
    navigationContainerFooter.appendChild(aboutContainer)

    const aboutTextFooter = document.createElement('p')
    aboutTextFooter.className = 'aboutTextFooter'
    aboutTextFooter.textContent = 'ABOUT US'
    aboutContainer.appendChild(aboutTextFooter)

    const iconsWrapper = document.createElement('div')
    iconsWrapper.className = 'iconsWrapper'
    footerContainer.appendChild(iconsWrapper)

    const iconsToDisplay = [
        {name : 'facebookIco', image : facebookIco},
        {name : 'instagramIco', image : instagramIco},
        {name : 'githubIco', image : githubIco},
    ]

    iconsToDisplay.forEach((icon) => {
        const iconContainer = document.createElement('div')
        iconContainer.className = 'iconContainer'
        iconContainer.id = `iconContainer${icon.name}`
        iconsWrapper.appendChild(iconContainer)

        const iconImg = document.createElement('img')
        iconImg.className = `iconImage${icon.name}`
        iconImg.src = icon.image
        iconImg.alt = icon.name
        iconContainer.appendChild(iconImg)
    })


    return footerContainer
}

renderFooter()

export {renderFooter}