export interface ContactInquiryInput {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface ContactInquiryResult {
  success: boolean;
  message: string;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitContactInquiry(
  payload: ContactInquiryInput,
): Promise<ContactInquiryResult> {
  await wait(1200);

  const hasRequiredFields =
    payload.name.trim() &&
    payload.email.trim() &&
    payload.service.trim() &&
    payload.message.trim();

  if (!hasRequiredFields) {
    return {
      success: false,
      message: "Missing required fields.",
    };
  }

  return {
    success: true,
    message: "Inquiry captured in frontend-ready workflow.",
  };
}
