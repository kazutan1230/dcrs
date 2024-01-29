import type React from 'react'
import type { InputHTMLAttributes } from 'react'
// import type { RefCallBack } from 'react-hook-form'

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: InputHTMLAttributes<HTMLInputElement>['id']
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const ImageInput: React.FC<Props> = ({
  onChange,
  id,
  fileInputRef,
  ...rest
}) => {
  return (
    <input
      ref={fileInputRef}
      id={id}
      type="file"
      accept="image/*"
      onChange={onChange}
      hidden={true}
      {...rest}
    />
  )
}
