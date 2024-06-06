import logoImg from '../assets/logo.jpg'

export default function Header(){
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A food restaurent" />
                <h1>ReactFood</h1>
            </div>

        </header>
    )
}