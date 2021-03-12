// import styles from "./layout.module.css"

export default function Layout({ children }) {
    return (
        <div className="container mx-auto px-4">
            {children}
        </div>
    )
}