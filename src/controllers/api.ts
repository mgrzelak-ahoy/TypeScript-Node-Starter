import {createTransport} from "nodemailer";
import { Response, Request, } from "express";
import {render} from "mjml-react";
import {EmailMapper} from "../emails/interfaces";

/**
 * GET /email_template
 * Email Api example
 */
const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'annie.mitchell@ethereal.email',
        pass: 'wz3R8xTbdj4D1FYuMR'
    }
});

interface GetEmailRequest extends Omit<Request, 'body'>{
    body: {
        emailKey: string;
        emailData: object;
    };
}

// eslint-disable-next-line import/prefer-default-export
export const getEmail = (req: GetEmailRequest, res: Response): void => {
  const {body: {emailKey, emailData}} = req;
  const {message, reactMessage} = EmailMapper[emailKey](emailData);
  const {html} = render(reactMessage, {validationLevel: "soft"});
  transporter.sendMail({to: 'annie.mitchell@ethereal.email', html, text: message}).then(info => {console.log(info)});
  res.json({
      htmlMessage: html,
      message,
  });
};
