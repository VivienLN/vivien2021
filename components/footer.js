import Container from './container'

export default function Footer(props) {
    return (    
        <div className="bg-black text-right py-20 relative z-10">
            <Container>
                Il n'y a plus rien à voir ici, mais vous pouvez toujours <button className="link link-white" onClick={e => (typeof window !== "undefined") && window.scrollTo({top: 0, behavior: "smooth"})}>remonter</button>.
            </Container>
        </div>
    )
}