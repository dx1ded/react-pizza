import ContentLoader from "react-content-loader"

export function NameSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={580}
      height={50}
      viewBox="0 0 580 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="2" ry="2" width="220" height="21" />
      <rect x="0" y="31" rx="2" ry="2" width="90" height="12" />
    </ContentLoader>
  )
}

export function BasicInfoSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={580}
      height={50}
      viewBox="0 0 580 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="2" ry="2" width="120" height="21" />
      <rect x="0" y="31" rx="2" ry="2" width="120" height="21" />
    </ContentLoader>
  )
}

export function AdressesSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={580}
      height={92}
      viewBox="0 0 580 92"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="183" height="92" />
      <rect x="198" y="0" rx="4" ry="4" width="183" height="92" />
      <rect x="396" y="0" rx="4" ry="4" width="183" height="92" />
    </ContentLoader>
  )
}
