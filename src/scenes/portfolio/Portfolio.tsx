type Props = {
  name: string;
  description?: string | React.ReactNode;
  image: string;
};

function Project({ name, description, image }: Props) {
  const overlayStyles = `p-5 absolute z-20 flex h-[350px] w-[380px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-1 inline-block h-[350px] w-[380px] md:mx-5">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <div className="mt-5">{description}</div>
      </div>
      <img src={image} alt="image1" />
    </li>
  );
}

export default Project;
