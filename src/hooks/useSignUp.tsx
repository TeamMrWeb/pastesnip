import { useRouter } from "next/router"
import { ValuesProps } from "../../interfaces"
import { toast } from "react-toastify"

export const useSignUp = () => {
  const router = useRouter()

  const handleSubmit = async (values: ValuesProps) => {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password
    }
    // signUpMutation.mutate(user)
  }

  return { handleSubmit }
}
