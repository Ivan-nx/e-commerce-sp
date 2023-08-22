import { useCart } from "../../../hooks/useCart"
import { TableDesktop } from "./TableDesktop"

export const Table = () => {

  const { cart } = useCart()

  if(cart.length === 0) return <h1>Ops, Adicione pedidos agora!</h1>

  return <TableDesktop />
}