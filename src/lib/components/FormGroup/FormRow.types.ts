interface FormControlRowProps {
  title: string
  subtitle?: string
}

interface RawFormRowProps {
  title: undefined
  subtitle: never
}

interface CommonFormRowProps {
  align: 'top' | 'center' | 'bottom'
}

export type FormRowProps = (FormControlRowProps | RawFormRowProps) &
CommonFormRowProps
