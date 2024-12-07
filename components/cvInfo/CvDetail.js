import classes from './CvDetail.module.css'

function CvDetail(props) {
    return (
        <section className={classes.detail}>
            <h1>{props.name}</h1>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <h2>Education</h2>
            <p>{props.education}</p>
            <h2>Experience</h2>
            <p>{props.experience}</p>
            <h2>Skills</h2>
            <p>{props.skills}</p>
        </section>
    )
}

export default CvDetail