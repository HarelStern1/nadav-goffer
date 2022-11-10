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
import spinner from "../../assets/gifs/spinner.svg";
import Image from "next/image";
import { useAppContext } from "../../context/AppContext/AppContext";
import Head from "next/head";

const Contact: FC = () => {
  const { language } = useAppContext();
  const isMobile = useMediaQuery(767);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string, {
          action: "submit",
        })
        .then(async (token: string) => {
          // Send form value as well as token to the server
          setSuccess(false);
          setLoading(true);
          const { data } = await submitData(user, token);
          console.log(token);
          setLoading(false);
          setSuccess(data === "success" ? true : false);
        });
    });
  };

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?render=6Lc8qWkiAAAAAK7OEvq1AIssBCdpFdfIx11tfDCx"></script>
      </Head>
      <Section
        id="consultation"
        backgroundColor={colors.contact}
        justify="space-around"
        direction={language === "he" ? "row" : "row-reverse"}
        align="flex-start"
      >
        <Form>
          <Column>
            <ReCaptcha
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              data-size="invisible"
            ></ReCaptcha>
            <Greeting language={language}>
              <h2>{language === "he" ? "Get In Touch" : "צור קשר"}</h2>
              <p>
                {language === "he"
                  ? "Leave a message and i'll get back to you"
                  : "השאירו לי הודעה ואחזור אליכם בהקדם"}
              </p>
            </Greeting>
            <Row language={language}>
              <Input
                language={language}
                type={"text"}
                placeholder={language === "he" ? "First Name" : "שם פרטי"}
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
              <Input
                language={language}
                type={"text"}
                placeholder={language === "he" ? "Last Name" : "שם משפחה"}
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </Row>
            <Row language={language}>
              <Input
                language={language}
                type={"email"}
                placeholder={language === "he" ? "Email" : "מייל"}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <Input
                language={language}
                type={"text"}
                placeholder={language === "he" ? "Phone" : "טלפון"}
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </Row>
            <LongInput
              language={language}
              type={"text"}
              placeholder={language === "he" ? "Message" : "הודעה"}
              value={user.message}
              onChange={(e) => setUser({ ...user, message: e.target.value })}
            />
            <ButtonsWrapper language={language}>
              <Button type="submit" onClick={handleSubmit}>
                {language === "he" ? "Send" : "שליחה"}
              </Button>
              {loading && (
                <Image src={spinner.src} width={"35px"} height={"35px"} />
              )}
            </ButtonsWrapper>
            <Message language={language}>
              {success && language === "he"
                ? "Message recieved successfuly!"
                : success && language === "en"
                ? "!ההודעה נשלחה בהצלחה"
                : ""}
            </Message>
          </Column>
        </Form>
        {!isMobile ? (
          <Info language={language}>
            <h2>
              {language === "he"
                ? `Contact
        Information`
                : "פרטי התקשרות"}
            </h2>
            <h3>
              {language === "he"
                ? "Email : nadavgof@gmail.com"
                : "nadavgof@gmail.com :מייל"}
            </h3>
            <h3>
              {language === "he"
                ? "Phone : 054-649-3839"
                : "054-649-3839 :טלפון"}
            </h3>
            <h3>
              {language === "he"
                ? "Location : Ramat-Gan / Tel-Aviv"
                : "מיקום : רמת - גן  /  תל - אביב "}
            </h3>
          </Info>
        ) : (
          <></>
        )}
      </Section>
    </>
  );
};

export default Contact;
