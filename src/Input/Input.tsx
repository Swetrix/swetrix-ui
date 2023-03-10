import React, {memo} from 'react'
import cx from 'clsx'
import _isEmpty from 'lodash/isEmpty'
import {ExclamationCircleIcon} from '@heroicons/react/24/solid'
import {Beta} from '../Beta/Beta'

export interface IInputProps {
    label?: string
    hint?: string
    placeholder?: string
    onChange?: () => void
    className?: string
    error?: boolean | string
    name?: string
    isBeta?: boolean
    id?: string
    onKeyDown?: () => void
    disabled?: boolean
    value: string | number
    type?: string
    betaText?: string
}

export const Input: React.FC<IInputProps> = memo(({
                                                      label = '',
                                                      hint = '',
                                                      placeholder = '',
                                                      type = '',
                                                      id = '',
                                                      name = '',
                                                      className = '',
                                                      onChange = () => {},
                                                      error = false,
                                                      value,
                                                      disabled = false,
                                                      onKeyDown = () => {},
                                                      isBeta = false,
                                                      betaText = ''
                                                  }) => {
    const identifier = id || name || type
    const isError = !_isEmpty(error)

    return (
        <div className={className}>
            <div
                className={cx({
                    'flex justify-between': label && hint,
                })}
            >
                <label htmlFor={identifier} className='flex text-sm font-medium text-gray-700 dark:text-gray-200'>
                    {label}
                    {isBeta && (
                        <div className='ml-5'>
                            <Beta text={betaText}/>
                        </div>
                    )}
                </label>
            </div>
            <div className='mt-1 relative'>
                <input
                    type={type}
                    value={value}
                    name={name}
                    id={identifier}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    className={cx('shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:text-gray-50 dark:placeholder-gray-400 dark:border-gray-800 dark:bg-gray-700 rounded-md', {
                        'border-red-300 text-red-900 placeholder-red-300': isError,
                        'cursor-text': disabled,
                    })}
                    placeholder={placeholder}
                    aria-describedby={`${identifier}-optional`}
                    disabled={disabled}
                />
                {isError && (
                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                        <ExclamationCircleIcon className='h-5 w-5 text-red-500' aria-hidden/>
                    </div>
                )}
            </div>
            <p className='mt-2 text-sm text-gray-500 dark:text-gray-300 whitespace-pre-line'
               id={`${identifier}-optional`}>{hint}</p>
            {isError && (
                <p className='mt-2 text-sm text-red-600 dark:text-red-500' id='email-error'>{error}</p>
            )}
        </div>
    )
})

