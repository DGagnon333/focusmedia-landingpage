import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    var status = 0;
    var email = document.getElementsByName("email")[0];
    var emailError = document.getElementById("emailError");

    if (!email.value) {
      emailError.innerHTML = "Please enter a valid email address";
      status = -1;
    } else {
      emailError.innerHTML = "";
    }

    var message = document.getElementsByName("message")[0];
    var messageError = document.getElementById("messageError");

    if (!message.value) {
      messageError.innerHTML = "Please enter a message";
      status = -1;
    } else {
      messageError.innerHTML = "";
    }

    var subject = document.getElementsByName("subject")[0];
    var subjectError = document.getElementById("subjectError");

    if (!subject.value) {
      subjectError.innerHTML = "Please enter a subject";
      status = -1;
    } else {
      subjectError.innerHTML = "";
    }

    console.log(subject.innerHTML);

    if (status === -1) {
      return false;
    }

    emailjs.sendForm('service_sep5zvk', 'template_bp3z0wm', e.target, 'eX86mubH8rB3HYwZL')
        .then((result) => {
            alert('Email sent!');
        }, (error) => {
            alert(error.text);
        });

    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div>
            <span id="emailError" className="text-red-600 text-xs"></span>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div>
            <span id="subjectError" className="text-red-600 text-xs"></span>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div>
            <span id="messageError" className="text-red-600 text-xs"></span>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <button type="submit" className="rounded-full">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
