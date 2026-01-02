import "../sass/CardStyle.scss";

type Props = {
  imgUrl: string;
  header?: string;
  buttonContent?: string;
};

const CardWithButton = ({ imgUrl, header, buttonContent }: Props) => {
  return (
    <>
      <div className="card">
        {header && <h1 className="cardHeader">{header}</h1>}
        <img src={imgUrl} alt="" />
        {buttonContent && (
          <button className="cardButton">{buttonContent}</button>
        )}
      </div>
    </>
  );
};

export default CardWithButton;
