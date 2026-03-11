import { defineRecipe } from "@laststance/chakrawind-ui"

export const cardRecipe = defineRecipe({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    variant: {
      primary: {
        bg: "teal.600",
        color: "white",
      },
    },
  },
})
