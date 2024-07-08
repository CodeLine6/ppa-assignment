"use client"
import ImageSection from './ImageSection'

function Fold3() {
    const Title = () => {
        return <>The unseen of spending three <br className='hidden md:inline' />years at Pixelgrade</>
    }
    return (
        <ImageSection Image={'/assets/rafiki.svg'} Title={Title} Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio" cta="Learn More" />
    )
}

export default Fold3