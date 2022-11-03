import React, { ReactNode } from "react"
import { AttentionBox } from "./AttentionBox"

const InfoBox = ({ children }: InfoProps) => {
    return (
        <AttentionBox type="info">
            {children}
        </AttentionBox>
    )
}

interface InfoProps {
    children: ReactNode
}

export default InfoBox;