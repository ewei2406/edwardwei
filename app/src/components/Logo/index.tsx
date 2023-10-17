import edwardwei from '../../assets/edwardwei.png'

const Logo = ({ size }: { size?: number }) => <a href='/'>
    <img style={{
        maxHeight: size || 65,
        margin: '0 auto',
        width: '100%'
    }} src={edwardwei} alt="" />
</a>

export default Logo