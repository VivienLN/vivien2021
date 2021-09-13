import Logo from './icons/logo'
import TwitterIcon from './icons/twitter'
import LinkedinIcon from './icons/linkedin'
import MaltIcon from './icons/malt'
import HeaderButton from './header-button'
import ButtonBack from './button-back'

export default function Header(props) {
    var logo = (<Logo className="fill-current" />)
    var buttonBack = (<ButtonBack href="/#section-projects" className="fill-current hover:text-white" />)
    
    return (    
        <div className="text-right p-4 w-full fixed z-30 flex justify-between">
            <div className="p-4 text-primary">
                <div className="w-9 h-9">
                    { props.isProject ? buttonBack : logo }
                </div>
            </div>
            <div className="flex justify-end">
                <HeaderButton icon={MaltIcon} color="#fc5656" blank url="https://www.malt.fr/profile/vivienln" />
                <HeaderButton icon={LinkedinIcon} color="#006edb" blank url="https://www.linkedin.com/in/vivien-le-neez-8364236a/" />
                <HeaderButton icon={TwitterIcon} color="#1ca4ff" blank url="https://twitter.com/vivien_le_neez" />
            </div>
        </div>
    )
}