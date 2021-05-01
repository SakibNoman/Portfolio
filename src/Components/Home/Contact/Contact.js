import React from 'react';

const Contact = () => {
    return (
        <section className="d-flex justify-content-center " >
            <form className="w-50 p-md-5 p-0 mt-3 shadow" >
                <h2 className="text-center" >Get In Touch</h2>
                <input className="form-control mt-3" placeholder="Your Name" type="text" name="" id="" />
                <input className="form-control mt-3" placeholder="Your Email" type="email" name="" id="" />
                <textarea className="form-control mt-3" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
                <button className="form-control mt-3" >Send</button>
            </form>
        </section>
    );
};

export default Contact;