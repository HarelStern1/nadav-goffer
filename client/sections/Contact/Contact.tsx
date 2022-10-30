import { FC, useState } from "react";
import Section from "../../components/Section/Section";
import { useCaptcha } from "../../hooks/usecaptcha";
import useMediaQuery from "../../hooks/useMediaQuery";
import colors from "../../utils/colors";
import { submitData } from "../../utils/functions/submitData";
import {
  Button,
  Column,
  Form,
  Input,
  LongInput,
  Row,
  ReCaptcha,
  Greeting,
  Info,
  ButtonsWrapper,
  Message,
} from "./Contact.styled";

const Contact: FC = () => {
  const isMobile = useMediaQuery(767);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const token = useCaptcha();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // send post request to /submit with user & token
    const { data } = await submitData(user, token);
    setSuccess(data === "success" ? "Message recieved successfuly!" : "");
  };

  return (
    <Section
      id="consultation"
      backgroundColor={colors.contact}
      justify="space-around"
    >
      <Form>
        <Column>
          <ReCaptcha
            data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            data-size="invisible"
          ></ReCaptcha>
          <Greeting>
            <h2>Get in Touch</h2>
            <p>Leave a message and i'll get back to you</p>
          </Greeting>
          <Row>
            <Input
              type={"text"}
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <Input
              type={"text"}
              placeholder="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </Row>
          <Row>
            <Input
              type={"email"}
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Input
              type={"text"}
              placeholder="Phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </Row>
          <LongInput
            type={"text"}
            placeholder="Message"
            value={user.message}
            onChange={(e) => setUser({ ...user, message: e.target.value })}
          />
          <ButtonsWrapper>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Message>{success}</Message>
          </ButtonsWrapper>
        </Column>
      </Form>
      {!isMobile ? (
        <Info>
          <h2>{`Contact
        Information`}</h2>
          <h3>Email : nadavgof@gmail.com</h3>
          <h3>Phone : 054-649-3839</h3>
          <h3>Location : Ramat-Gan / Tel-Aviv</h3>
        </Info>
      ) : (
        <></>
      )}
    </Section>
  );
};

export default Contact;
