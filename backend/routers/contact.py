from fastapi import APIRouter, Request
from slowapi import Limiter
from slowapi.util import get_remote_address

from models.contact import ContactRequest, ContactResponse
from services.email import send_contact_email

limiter = Limiter(key_func=get_remote_address)

router = APIRouter()


@router.post("/contact", response_model=ContactResponse)
@limiter.limit("5/hour")
async def contact(request: Request, data: ContactRequest):
    """Handle contact form submission."""
    
    success = send_contact_email(
        name=data.name,
        email=data.email,
        message=data.message,
    )

    if success:
        return ContactResponse(
            success=True,
            message="Message sent successfully. I'll get back to you soon!",
        )
    else:
        return ContactResponse(
            success=True,  # Still return success to user — log the error server-side
            message="Got it. I'll be in touch.",
        )
