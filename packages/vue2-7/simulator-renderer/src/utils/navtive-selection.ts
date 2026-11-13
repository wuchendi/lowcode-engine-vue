let nativeSelectionEnabled = true
const preventSelection = (e: Event) => {
  if (nativeSelectionEnabled) {
    return null
  }
  e.preventDefault()
  e.stopPropagation()
  return false
}

export function installNativeSelectionGuard(): () => void {
  document.addEventListener('selectstart', preventSelection, true)
  document.addEventListener('dragstart', preventSelection, true)
  return () => {
    document.removeEventListener('selectstart', preventSelection, true)
    document.removeEventListener('dragstart', preventSelection, true)
  }
}

export function setNativeSelection(enableFlag: boolean) {
  nativeSelectionEnabled = enableFlag
}
