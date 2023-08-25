import { Button, Container } from "./styles";
import manAndBurgers from '../../assets/man-and-burger.svg'


interface EmptyCartProps {
  title: string;
  label: string
}

export const EmptyCart = ({title, label}: EmptyCartProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Button to='/' type='button'>{label}</Button>
      <img src={manAndBurgers} />
    </Container>
  )
}
