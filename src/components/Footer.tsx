type Props = {
  style?: string;
  urls: {
    label: string;
    url: string;
  }[];
  text: string;
  svg?: string;
};

const Footer = ({ style, urls: links, text, svg }: Props) => {
  return (
    <>
      <div className={style}>
        <div className="contentContainer">
          {links && (
            <div className="linkContainer">
              {links.map((i) => (
                <a href={i.url}>{i.label}</a>
              ))}
            </div>
          )}
          {text && <p className="footerText">{text}</p>}
        </div>
        {svg && <img className="overlayText" src={svg} alt="overlay" />}
      </div>
    </>
  );
};

export default Footer;
