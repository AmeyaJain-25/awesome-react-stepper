import sectionCss from "./Section.module.css";

const Section = (props: any) => {
  const { children, title } = props;

  return (
    <div className={sectionCss.sectionComponent}>
      <h1 className={sectionCss.sectionTitle}>{title}</h1>
      <div className={sectionCss.sectionDiv}>{children}</div>
    </div>
  );
};

export default Section;
