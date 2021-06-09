export const Image = ({ urlImage }) => {
  return (
    <div className="mx-3 my-3">
      <img src={urlImage} className="rounded" alt={urlImage} />
    </div>
  )
};