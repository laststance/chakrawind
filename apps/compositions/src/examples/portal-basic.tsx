import { Portal } from "@laststance/chakrawind-ui"

export default {
  title: "Components / Portal",
}

export const PortalBasic = () => (
  <>
    <p>Welcome</p>
    <Portal>This text has been portaled</Portal>
  </>
)
