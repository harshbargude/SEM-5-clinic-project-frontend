import { useParams } from "react-router-dom"

export function Clinic ()  {
  const {id} = useParams();
  return (
      <h1>Clinic {id}</h1>
  )
}

// export default Book
