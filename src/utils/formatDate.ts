export const formatDate = (createdAt: string) => {
  const date = new Date(Number(createdAt)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
  return date
}
