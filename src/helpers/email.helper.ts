import * as sendgrid from '@sendgrid/mail';
import { AppConfigKey, Environment } from '../objects/enums';
import { MailDataRequired } from '../objects/model';
import AppHelper from './app.helper';

class EmailHelperClass {
  private static instance: EmailHelperClass;

  private constructor() {}

  public static getInstance() {
    if (!EmailHelperClass.instance) {
      EmailHelperClass.instance = new EmailHelperClass();
    }
    return EmailHelperClass.instance;
  }

  public init() {
    sendgrid.setApiKey(AppHelper.getConfig(AppConfigKey.SendgridKey));
  }

  public async sendEmail(mail: MailDataRequired) {
    mail = this.prepareEmail(mail);
    await sendgrid.send(mail);
  }

  public sendResetPasswordEmail(email: string, token: string) {
    const mail: MailDataRequired = {
      subject: 'Reset Password',
      to: email,
      from: undefined,
      text: `${AppHelper.getConfig(AppConfigKey.DefaultLink)}/${token}`,
    };

    this.sendEmail(mail);
  }

  private prepareEmail(mail: MailDataRequired) {
    if (AppHelper.checkEnvironment(Environment.Development)) {
      mail.to = AppHelper.getConfig(AppConfigKey.DefaultUsername);
      mail.cc = null;
      mail.bcc = null;
    }

    mail.from = AppHelper.getConfig(AppConfigKey.DefaultEmail);
    return mail;
  }
}

const EmailHelper = EmailHelperClass.getInstance();
export default EmailHelper;
