import emailjs from 'emailjs-com';
import React from 'react';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_oen6nso', 'template_aqkj65f', e.target, 'user_ogL0T2AGHcYr5XqDuXYK4')
            .then((result) => {
                console.log(result.text);
                alert("Message sent")
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="d-flex justify-content-center " >
            <form onSubmit={sendEmail} className="col-md-4 p-md-3 p-2 mt-3 shadow" >
                <h2 className="text-center" >Get In Touch</h2>
                <input className="form-control bg-transparent mt-3" required placeholder="Your Name" type="text" name="name" id="" />
                <input className="form-control bg-transparent mt-3" required placeholder="Your Email" type="email" name="email" id="" />
                <textarea className="form-control bg-transparent mt-3" required placeholder="Your Message" name="messages" id="" cols="30" rows="10"></textarea>
                <input type="submit" className="form-control mt-3 btn-success" value="Send" ></input>
            </form>
        </section>
    );
};

export default Contact;