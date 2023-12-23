'use client'

import { forwardRef } from 'react'
import { TimeValue } from 'react-aria'
import { TimeFieldStateOptions } from 'react-stately'
import { TimeField } from './time-field'

const TimePicker = forwardRef<HTMLDivElement, Omit<TimeFieldStateOptions<TimeValue>, 'locale'>>(
  (props, forwardedRef) => {
    return <TimeField {...props} />
  },
)

TimePicker.displayName = 'TimePicker'

export { TimePicker }
