import React, { ReactNode } from "react"
import { AttentionBox } from "./AttentionBox"

const DangerBox = ({ children }: DangerProps) => {
    return (
        <AttentionBox type="danger">
            {children}
        </AttentionBox>
    )
}

interface DangerProps {
    children: ReactNode
}

export default DangerBox;