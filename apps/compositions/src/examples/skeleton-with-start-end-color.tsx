import { Skeleton } from "@laststance/chakrawind-ui"

export const SkeletonWithStartEndColor = () => {
  return (
    <Skeleton
      variant="shine"
      width="full"
      height="5"
      css={{
        "--start-color": "colors.pink.500",
        "--end-color": "colors.orange.500",
      }}
    />
  )
}
