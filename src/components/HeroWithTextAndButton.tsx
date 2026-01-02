type Props = {
  //   hasText: boolean;
  //   hasButton: boolean;
  imgUrl: string;
  style?: string;
  headerContent?: string;
  textHeader?: string;
  textContent?: string;
  buttonContent?: string;
};

const HeroWithTextAndButton = ({
  //   hasText,
  //   hasButton,
  imgUrl,
  style,
  headerContent,
  textHeader,
  textContent,
  buttonContent,
}: Props) => {
  return (
    <>
      <div className={style}>
        {headerContent && <h1 className="heroHeader">{headerContent}</h1>}
        <img src={imgUrl} alt="" />
        <div className="contentContainer">
          {(textContent || textHeader) && (
            <div className="textSection">
              <h2 className="textHeader">{textHeader}</h2>
              <p className="heroText">{textContent}</p>
              {buttonContent && (
                <button className="heroButton">{buttonContent}</button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroWithTextAndButton;
