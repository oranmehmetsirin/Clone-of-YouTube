const Error = ({ message }) => {
  return (
    <div className="bg-red-500 h-fit reounded p-4 flex flex-col gap-5">
      <p>We are sorry, something went wrong.Try again later.</p>
      <h2 className="font-semibold">{message}</h2>
    </div>
  );
};

export default Error;
