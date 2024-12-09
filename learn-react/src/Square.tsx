interface Props extends React.ComponentPropsWithoutRef<"button"> {
  value: string;
  onSquareClick: () => void;
}

export default function Square(props: Props) {
  const { value, onSquareClick } = props;

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}
