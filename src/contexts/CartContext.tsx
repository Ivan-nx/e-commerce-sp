import { createContext, ReactNode, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'
interface Snack extends SnackData {
  quantity: number
  subtotal: number
}
interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDencrement: (snack: Snack) => void
  confirmeOrder: (snack: Snack) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    // buscar
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )

    // atualizar
    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
      setCart(newCart)

      return
    }

    // adicionar
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack] // push de um array

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  function upDateSnackQuantity(snack: Snack, newQuantity: number) {
    if (newQuantity === 0) return

    const snackExistentInCart = cart.find(
      (item) => item.id === snack.id && item.snack === snack.snack,
    )
    if (!snackExistentInCart) return

    const newCart = cart.map((item) => {
      if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }
      return item
    })
    setCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))
    setCart(newCart)
  }

  function snackCartIncrement(snack: Snack) {
    upDateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDencrement(snack: Snack) {
    upDateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmeOrder() {
    /*   */
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDencrement,
        confirmeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
