import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';


function Contact() {
  return (
    <div>
      
      <div className='if'>
      <div className='what'>
      <div className="container">
        <h1>Contact</h1>
      <form action="/action_page.php">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" className="form-control" id="fname" name="firstname" placeholder="Your name.." />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input type="text" className="form-control" id="lname" name="lastname" placeholder="Your last name.." />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select className="form-control" id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <textarea className="form-control" id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
