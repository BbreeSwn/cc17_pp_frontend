export default function ProgramContainer({ program }) {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={program.src} alt={`card`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{program.title}</h2>
          <p>{program.description}</p>
        </div>
      </div>
    </>
  );
}