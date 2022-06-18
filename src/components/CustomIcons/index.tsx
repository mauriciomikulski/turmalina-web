import IconType from './icon-type';
import icons from './import-images';
import './style.scss'

const CustomIcons = (props: IconType) => {
  const { name, color } = props;
  const onClickIcon = () => {
    
  }
  return (
    <>
      <div className="icon-color" >
        <img src={icons[0]} />
      </div>
    </>
  );
}