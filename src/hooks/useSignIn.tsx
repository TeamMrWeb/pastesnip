import { ValuesProps } from "../../interfaces"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
// import { setCookie } from "cookies-next"

export const useSignIn = () => {
  const router = useRouter()
  // onSuccess: res => {
  //   const tokens = res.data.body.tokens
  //   localStorage.setItem("accessToken", tokens.access.token)
  //   localStorage.setItem("refreshToken", tokens.refresh.token)
  //   const accessToken = tokens.access.token
  //   console.log(accessToken)
  //   setCookie("auth", tokens.access.token)
  //   router.push("/")
  //   toast.success("You have successfully logged in")
  // },
  // onError: (error: any) => {
  //   if (error.request.status === 404) return toast.error("This account doesn't exist")
  //   else return toast.error("An error has occurred, please try again later")
  // }

  const handleSubmit = async (values: ValuesProps) => {
    const user = {
      email: values.email,
      password: values.password
    }
    // handle submit
  }

  return { handleSubmit }
}
