type Props = {
  name: string;
  description?: string | React.ReactNode;
  image: string;
};

function Project({ name, description, image }: Props) {
  const overlayStyles = `p-5 absolute z-20 flex h-[350px] w-[380px] flex flex-col
    whitespace-normal bg-primary-500 text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-1  flex h-[350px] w-[380px] items-center md:mx-5">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <div className="md:mt-5">{description}</div>
      </div>
      <img src={image} alt="image1" />
    </li>
  );
}

export default Project;
