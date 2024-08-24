import landingPageImage from '../assets/imageLandingPage.svg'

export function renderHomePage(){
    const contentHomeWrapper = document.createElement('div')
    contentHomeWrapper.className = 'contentHomeWrapper'

    const heroSection = createHeroSection()
    // const menuPreviewSection = createMenuPreview()
    // const testimonialsSection = createTestimonialsSection()

    contentHomeWrapper.appendChild(heroSection)
    // contentHomeWrapper.appendChild(menuPreviewSection)
    // contentHomeWrapper.appendChild(testimonialsSection)

    // addDecorativeElements(contentHomeWrapper)

    return contentHomeWrapper
}

function createHeroSection(){
    const heroSection = document.createElement('div')
    heroSection.className = 'heroSection'


    const heroTextContainer = document.createElement('div')
    heroTextContainer.className = 'heroTextContainer'

    const heroTextLine1 = document.createElement('p')
    heroTextLine1.className = 'heroTextLine1'
    heroTextLine1.textContent = 'TASTE THE TRADITION'
    heroTextContainer.appendChild(heroTextLine1)

    const heroTextLine2 = document.createElement('p')
    heroTextLine2.className = 'heroTextLine2'
    heroTextLine2.textContent = 'OF JAPAN'
    heroTextContainer.appendChild(heroTextLine2)

    heroSection.appendChild(heroTextContainer)

    const heroCtaBtn = document.createElement('button')
    heroCtaBtn.className = 'heroCtaBtn'
    heroCtaBtn.textContent = 'Order Now'
    heroCtaBtn.addEventListener('click', () => {
        const navigateEvent = new CustomEvent('navigate', {detail: {page : 'menu'}})
        window.dispatchEvent(navigateEvent)
    })
    heroSection.appendChild(heroCtaBtn)

    const heroImage = document.createElement('img')
    heroImage.className = 'heroImage'
    heroImage.src = landingPageImage
    heroImage.alt = 'Tradicional Japanese Dish'
    heroImage.onerror = () => {
        console.log('failed to load hero image');
    }
    heroImage.loading = 'lazy'
    heroSection.appendChild(heroImage)

    return heroSection
}