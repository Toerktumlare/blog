import React, { ReactNode } from "react"
import { AttentionBox } from "./AttentionBox"

const WarningBox = ({ children }: WarningProps) => {
    return (
        <AttentionBox type="warning">
            {children}
        </AttentionBox>
    )
}

interface WarningProps {
    children: ReactNode
}

export default WarningBox;