import ContentLoader from "react-content-loader"

export function CartItemSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={810}
      height={111}
      viewBox="0 0 810 111"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="50" cy="56" r="50" />
      <rect x="115" y="31" rx="4" ry="4" width="97" height="21" />
      <rect x="115" y="64" rx="4" ry="4" width="121" height="21" />
    </ContentLoader>
  )
}
