import { ReactNode } from "react"

type TextProps = {
    children: ReactNode
}

const Text = ({ children }: TextProps) => <div style={{
    color: 'var(--dark4)',
    width: '100%'
}}>
    {children}
</div>

export default Text