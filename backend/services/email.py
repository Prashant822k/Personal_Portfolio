import httpx
import os


def send_contact_email(name: str, email: str, message: str) -> bool:
    """Send contact form submission via Resend API (HTTPS — works on Render free tier)."""

    api_key = os.getenv("RESEND_API_KEY")
    to_email = os.getenv("TO_EMAIL", "pkkv2006@gmail.com")

    if not api_key:
        print("WARNING: RESEND_API_KEY not configured. Email not sent.")
        return False

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
        Sent from prashantkumar.site portfolio
    </p>
</div>
"""

    try:
        response = httpx.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json={
                "from": "Portfolio Contact <onboarding@resend.dev>",
                "to": [to_email],
                "reply_to": email,
                "subject": f"Portfolio Contact: {name}",
                "html": html,
            },
            timeout=10.0,
        )

        if response.status_code == 200:
            return True
        else:
            print(f"Resend API error: {response.status_code} — {response.text}")
            return False

    except Exception as e:
        print(f"Email sending failed: {e}")
        return False
