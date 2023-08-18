import emailjs from "emailjs-com";

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_fnx8nrd', 'template_2608frm', e.target, 'oSw2yO6NldNQ8PLTh')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <button type="submit" className="rounded-full">Send message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}