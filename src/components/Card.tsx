
type Props = {
  id: number;
  title: string;
  body: string;
}

const Card = ({ title, body }: Props) => {
  return <div className="tw-bg-gray-900y">
    <div className="tw-text-sm md:tw-text-lg tw-text-gray-300 tw-flex tw-justify-center tw-my-4">{title}</div>
    <div className="tw-text-sm tw-text-gray-300 tw-flex tw-justify-center">{body}</div>
  </div>;
}

export default Card;