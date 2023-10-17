import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Logo from "../../components/Logo"
import Navbar from "../../components/Navbar"
import Search from "../../components/Search"

const HomePage = () => {
    return(
        <>
            <Navbar/>
                <div style={{
                    height: 'calc(100% - 655px)',
                    maxHeight: '215px',
                }}>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: 60,
                    padding: '0 32px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexGrow: 0,
                    gap: 45
                }}>
                    <Logo />
                    <Search />
                    <Button text="I'm Feeling Lucky" onClick={() => {}}/>
                </div>
            <Footer/>
        </>
    )
}

export default HomePage