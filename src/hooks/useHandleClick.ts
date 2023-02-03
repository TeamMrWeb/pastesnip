import { useEffect } from "react"

export const useHandleClick = (
  elementIsShown: boolean,
  element: HTMLElement,
  buttonElement: HTMLElement,
  setShowElement: (value: boolean) => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        elementIsShown &&
        !element.contains(event.target as Element) &&
        !buttonElement.contains(event.target as Element)
      )
        return setShowElement(false)
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [elementIsShown, setShowElement, element, buttonElement])
}
