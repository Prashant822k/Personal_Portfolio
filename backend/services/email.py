import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_contact_email(name: str, email: str, message: str) -> bool:
    """Send contact form submission to Gmail using SMTP."""
    
    smtp_email = os.getenv("SMTP_EMAIL")
    smtp_password = os.getenv("SMTP_APP_PASSWORD")
    to_email = os.getenv("TO_EMAIL", "pkkv2006@gmail.com")

    if not smtp_email or not smtp_password:
        print("WARNING: SMTP credentials not configured. Email not sent.")
        return False

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Portfolio Contact: {name}"
        msg["From"] = smtp_email
        msg["To"] = to_email
        msg["Reply-To"] = email

        # Plain text
        text = f"""
New contact form submission from your portfolio:

Name: {name}
Email: {email}

Message:
{message}

---
Sent from your portfolio contact form
"""

        # HTML version
        html = f"""
<div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f14; color: #f0ede8; padding: 32px; border-radius: 8px;">
    <div style="border-left: 4px solid #ff6b35; padding-left: 16px; margin-bottom: 24px;">
        <h2 style="color: #ff6b35; margin: 0 0 4px 0; font-size: 20px;">New Portfolio Message</h2>
        <p style="color: #8a8799; margin: 0; font-size: 14px;">From your portfolio contact form</p>
    </div>
    
    <div style="background: #17171f; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
        <p style="margin: 0 0 8px 0;"><strong style="color: #ff6b35;">Name:</strong> {name}</p>
        <p style="margin: 0;"><strong style="color: #ff6b35;">Email:</strong> <a href="mailto:{email}" style="color: #ff6b35;">{email}</a></p>
    </div>
    
    <div style="background: #17171f; padding: 20px; border-radius: 8px;">
        <p style="color: #ff6b35; font-weight: bold; margin: 0 0 8px 0;">Message:</p>
        <p style="color: #f0ede8; line-height: 1.6; margin: 0; white-space: pre-wrap;">{message}</p>
    </div>
    
    <p style="color: #4a4860; font-size: 12px; margin-top: 24px; text-align: center;">
        Sent from prashant-kumar.dev portfolio
    </p>
</div>
"""

        msg.attach(MIMEText(text, "plain"))
        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(smtp_email, smtp_password)
            server.sendmail(smtp_email, to_email, msg.as_string())

        return True

    except Exception as e:
        print(f"Email sending failed: {e}")
        return False
