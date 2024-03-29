import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/core"

interface ChakraProps {
  cookies: string
}

export const Chakra: React.FC<ChakraProps> = ({ children, cookies}) => {
  // b) Pass `colorModeManager` prop
  console.log("Chakra Component")
  console.log(cookies)

  const colorModeManager = typeof cookies === "string"
    ? cookieStorageManager(cookies)
    : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

// also export a reusable function getServerSideProps
export const getServerSideProps = (req: any) => {
  console.log("Server SIde Props")
  console.log(req.headers.cookie)
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  }
}