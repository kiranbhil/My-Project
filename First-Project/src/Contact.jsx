import styled from "styled-components";

function Contact(){
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    
    .container {
      margin-top: 6rem;
      text-align: center;
      max-width: 100rem;

      
    .contact-form {
        max-width: 50rem;
        margin: auto;
        
    .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


    return (
        <Wrapper>
        <h2 className="common-heading">Feel Free to Contact us</h2>
  
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.2420282222124!2d72.15276071439122!3d21.732140785621556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a1b60f562e3%3A0x9f221d5e152761c0!2sTop%203%20Cir%2C%20B.A.D.A.%20Vikash%20Path%2C%20Bhavnagar%2C%20Gujarat%20364002!5e0!3m2!1sen!2sin!4v1662262330511!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

  
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xjvzgkzw"
              method="POST"
              className="contact-inputs">
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />
  
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
  
              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                required></textarea>
  
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
  
    )
}
export default Contact;