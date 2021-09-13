import Footer from "./footer"
import Header from "./header"

export default function Layout(props) {
    return (
        <div>
            <Header isProject={props.isProject} />
            { props.children }
            <Footer />
        </div>
    )
}