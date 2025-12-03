import { RequestHandler } from "express";

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  description: string;
  characteristics: {
    ecommerce: boolean;
    blog: boolean;
    portfolio: boolean;
    booking: boolean;
    cms: boolean;
  };
  budget: string;
  timeline: string;
}

export const handleSendEmail: RequestHandler = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      description,
      characteristics,
      budget,
      timeline,
    } = req.body as ContactRequest;

    // For now, we'll log the data and send a success response
    // In production, you would integrate with a real email service
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      description,
      characteristics,
      budget,
      timeline,
      timestamp: new Date().toISOString(),
    });

    // Send success response
    res.json({
      success: true,
      message:
        "Tu solicitud ha sido enviada correctamente. Nos pondremos en contacto pronto.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message:
        "Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.",
    });
  }
};
