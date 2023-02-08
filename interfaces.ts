export interface ValuesProps {
  username?: string
  email: string
  password: string
}

export interface PasteProps {
  id: string
  title: string
  content: string
  createdAt: string
  syntax_highlight: string
  author: UserProps
}

export interface UserProps {
  id: string
  username: string
  email: string
  password: string
  createdAt: string
}
