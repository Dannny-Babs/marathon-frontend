import * as React from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input, type InputProps } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { FormLabel } from './form'

// This line defines a password input component that uses a forwardRef to allow parent components to directly access the underlying input element.
const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  const disabled = props.value === undefined || props.disabled

  return (
    <div>
      <FormLabel className="text-xs font-semibold text-gray-800">Password</FormLabel>
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('hide-password-toggle pr-10', className)}
          placeholder="Enter your Password"
          ref={ref}
          {...props as any}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(prev => !prev)}
          disabled={disabled}
        >
          {showPassword ? <EyeIcon className="h-4 w-4" aria-hidden="true" /> : <EyeOffIcon className="h-4 w-4" aria-hidden="true" />}
          <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
          .hide-password-toggle::-ms-reveal,
          .hide-password-toggle::-ms-clear {
            visibility: hidden;
            pointer-events: none;
            display: none;
          }
        `}</style>
      </div>
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
