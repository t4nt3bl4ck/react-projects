import Square from "./Square";
import { calculateWinner } from "./assets/functions";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  xIsNext: boolean;
  squares: string[];
  handlePlay: (nextSquares: string[]) => void;
}

export default function Board(props: Props) {
  const { xIsNext, squares, handlePlay } = props;

  const winner:string | null = calculateWinner(squares);
  let status:string;

  function handleClick(index: number) {
    if (squares[index] !== "" || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    handlePlay(nextSquares);
  }

  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.some(square => square === "")) {
    status = "Next player: " + (xIsNext ? "X" : "O");
  } else {
    status = "No Winner"
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
