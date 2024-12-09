import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewCvForm.module.css';

function NewCvForm(props) {
    console.log('CVForm rendered');
    console.log('onAddCV prop:', props.onAddCV);

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const educationInputRef = useRef();
    const experienceInputRef = useRef();
    const skillsInputRef = useRef();
    const imageInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        console.log('Form Submitted');

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredEducation = educationInputRef.current.value;
        const enteredExperience = experienceInputRef.current.value;
        const enteredSkills = skillsInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const cvData = {
            infoId: enteredName,
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            education: enteredEducation,
            experience: enteredExperience,
            skills: enteredSkills,
            image: enteredImage,
        };

        console.log('Submitted CV Data:', cvData);
        props.onAddCV(cvData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" ref={nameInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" ref={phoneInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="education">Education</label>
                    <textarea id="education" ref={educationInputRef} required></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor="experience">Work Experience</label>
                    <textarea id="experience" ref={experienceInputRef} required></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor="skills">Skills</label>
                    <textarea id="skills" ref={skillsInputRef} required></textarea>
                    <label htmlFor='image'>Cv Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Create CV</button>
                </div>
            </form>
        </Card>
    );
}

export default NewCvForm;
