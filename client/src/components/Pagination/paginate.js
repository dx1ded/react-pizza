export const paginate = ({ current: c, pagesTotal }) => {
  const r = c < 3 || c >= pagesTotal - 1 ? 1 : 2
  let r1 = c === 1 ? c : c - r
  const r2 = c === pagesTotal ? pagesTotal : c + r

  const prev = c === 1 ? null : c - 1
  const next = c === pagesTotal ? null : c + 1
  const items = []

  for (r1; r1 <= r2; r1++) {
    if (r1 > pagesTotal) break
    items.push(r1)
  }

  return { items, prev, next }
}
