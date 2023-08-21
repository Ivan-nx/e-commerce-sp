export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'burger':
      return '🍔'
      break;
    case 'pizza':
      return '🍕'
      case 'drink':
        return '🥤'
case 'ice-cream':
  return '🍨'
    default:
      return '😋'
  }
}