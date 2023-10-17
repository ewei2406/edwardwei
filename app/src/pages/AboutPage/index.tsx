import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Text from "../../components/Text"

const AboutPage = () => {
    return(
        <>
            <Navbar/>
            <div style={{
                height: 'calc(100% - 655px)',
                maxHeight: '100px',
            }}>
            </div>
            <div style={{
                display: 'flex',
                margin: '60px 100px 0px 100px',
                padding: '0 32px',
                flexDirection: 'column',
                alignItems: 'center',
                flexGrow: 0,
                gap: 45
            }}>
                <Header text="About" />

                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum unde explicabo, aliquam, ratione, sed odit corporis soluta sequi placeat impedit sit. Aliquam a id alias accusantium, pariatur praesentium quia!
                </Text>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage