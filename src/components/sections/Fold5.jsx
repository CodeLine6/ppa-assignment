"use client"
import ImageSection from './ImageSection'

function Fold5() {
    const Title = () => {
        return <>How to design your site footer like we did</>
    }
    return (
        <ImageSection Image={'/assets/pana.svg'} Title={Title} Description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida." cta="Learn More" />
    )
}

export default Fold5