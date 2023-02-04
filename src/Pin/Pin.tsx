import React from 'react'
import cx from 'clsx'

interface IPinProps {
    label: string
    className?: string
}

const ActivePin: React.FC<IPinProps> = ({ label, className= '' }) => (
    <p className={cx('px-2 inline-flex text-sm leading-5 font-normal rounded-full bg-green-100 text-green-800 dark:bg-emerald-400 dark:text-green-900', className)}>
        {label}
    </p>
)

const InactivePin: React.FC<IPinProps> = ({ label, className= '' }) => (
    <p className={cx('px-2 inline-flex text-sm leading-5 font-normal rounded-full bg-red-100 text-red-800 dark:bg-red-300 dark:text-red-900', className)}>
        {label}
    </p>
)

const WarningPin: React.FC<IPinProps> = ({ label, className= '' }) => (
    <p className={cx('px-2 inline-flex text-sm leading-5 font-normal rounded-full bg-yellow-200 text-yellow-800 dark:bg-yellow-300 dark:text-yellow-900', className)}>
        {label}
    </p>
)

export {
    ActivePin,
    InactivePin,
    WarningPin,
}
