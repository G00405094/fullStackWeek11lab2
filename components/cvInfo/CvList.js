import CvItem from './CvItem';
import classes from './CvList.module.css';

function CvList(props) {
  return (
    <ul className={classes.list}>
      {props.cvInfo.map((cv) => (
        <CvItem
        key={cv._id}
        id={cv.infoId}
        name={cv.name}
        email={cv.email}
        phone={cv.phone}
        education={cv.education}
        experience={cv.experience}
        skills={cv.skills}
        />
      ))}
    </ul>
  );
}

export default CvList;
