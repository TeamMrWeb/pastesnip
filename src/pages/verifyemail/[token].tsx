import { useEffect } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { VERIFY_EMAIL_TOKEN } from "@/graphql/mutations"
import { NotificationFailure, NotificationSuccess } from "@/utils/Notifications"

export default function VerifyAccount() {
  const router = useRouter()
  const { token } = router.query
  const [verifyEmailToken] = useMutation(VERIFY_EMAIL_TOKEN)

  useEffect(() => {
    if (!token) return
    verifyEmailToken({
      context: {
        headers: {
          email_token: token
        }
      }
    })
      .then(() => {
        NotificationSuccess("Your email has been verified successfully")
      })
      .catch(() => {
        NotificationFailure(
          "Something went wrong while verifying your email. Please try again later"
        )
      })
    router.push("/signin")
  }, [token])

  return <></>
}
