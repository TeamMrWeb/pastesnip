import { setCookie } from "cookies-next"

const formatDate = (days: string) => {
  const formatDays = Number(days.split("d")[0])
  const currentDate = new Date()
  return new Date(currentDate.setDate(currentDate.getDate() + formatDays))
}

export const cookies = ({
  accessToken,
  refreshToken
}: {
  accessToken: string
  refreshToken: string
}) => {
  setCookie("accessToken", accessToken, {
    expires: formatDate(process.env.NEXT_PUBLIC_JWT_ACCESS_TOKEN_EXPIRES_IN || "0")
  })
  setCookie("refreshToken", refreshToken, {
    expires: formatDate(process.env.NEXT_PUBLIC_JWT_REFRESH_TOKEN_EXPIRES_IN || "0")
  })
}
