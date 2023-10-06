import ContentLoader from "react-content-loader"

export function ProductSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={260}
      height={450}
      viewBox="0 0 260 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="106" y="409" rx="16" ry="16" width="140" height="42" />
      <rect x="1" y="281" rx="7" ry="7" width="250" height="19" />
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="417" rx="11" ry="11" width="72" height="27" />
      <rect x="2" y="315" rx="7" ry="7" width="249" height="73" />
    </ContentLoader>
  )
}

// Row of 4
export function ProductsSkeleton() {
  return (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  )
}
