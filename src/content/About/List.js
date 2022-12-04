import style from "./List.module.css";
import ImageLogo from "./ImageLogo";

function List({ title, ImageLogos }) {
  console.log(ImageLogos);
  return (
    <>
      <li className={style.skillLists}>
        <p>{title}</p>
        <div style={{ display: "flex", columnGap: "10px", flexWrap: "wrap" }}>
          {ImageLogos &&
            ImageLogos.map((data, index) => (
              <ImageLogo
                key={index}
                icon={data.svgUrl}
                tooltip={data.tooltip}
              />
            ))}
        </div>
      </li>
    </>
  );
}

export default List;
