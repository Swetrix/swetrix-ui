import React, {memo} from 'react'

import {Tooltip} from '../Tooltip/Tooltip'
import {WarningPin} from '../Pin/Pin'

export interface IBetaProps {
    className?: string
    text: string
}

export const Beta: React.FC<IBetaProps> = memo(({
                                                    className = '',
                                                    text = ''
                                                }) => {
    return (
        <Tooltip
            className='max-w-content !w-full'
            tooltipNode={(
                <WarningPin className={className} label={text}/>
            )}
            text={text}
        />
    )
})
