export function CheckDraw(boardToCheck: (string | null)[]) {
	return boardToCheck.every(square => square !== null);
}