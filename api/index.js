// API endpoint for handling form submissions via Resend
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend("re_HwBu8xhv_53Lrj6V2ggPvVE3Q5V9xgv6J");

// Email templates
const getContactEmailHtml = (data) => {
  return `
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Sujet:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `;
};

const getReservationEmailHtml = (data) => {
  return `
    <h2>Nouvelle demande de réservation</h2>
    <p><strong>Nom complet:</strong> ${data.firstName} ${data.userLastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Téléphone:</strong> ${data.phone}</p>
    <p><strong>Type de chambre:</strong> ${data.roomType}</p>
    <p><strong>Nombre de personnes:</strong> ${data.guests}</p>
    <p><strong>Date d'arrivée:</strong> ${data.checkIn}</p>
    <p><strong>Date de départ:</strong> ${data.checkOut}</p>
    <p><strong>Demandes spéciales:</strong></p>
    <p>${data.specialRequests || 'Aucune'}</p>
  `;
};

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "https://maisondutresormarrakech.com, https://www.maisondutresormarrakech.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // Only allow POST requests
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://maisondutresormarrakech.com, https://www.maisondutresormarrakech.com",
        },
      });
    }

    try {
      const { formType, website, ...formData } = await request.json();
      
      // Security check - if the verification field is filled, silently reject
      if (website) {
        console.log("Automated submission detected - security field was filled");
        // Return success response to avoid alerting bots
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://maisondutresormarrakech.com, https://www.maisondutresormarrakech.com",
          },
        });
      }
      
      // Configure email based on form type
      let emailHtml, subject, toEmail;
      
      // Get recipient email from environment variable
      const recipientEmail = env.RECIPIENT_EMAIL || "badrgou72@gmail.com";
      
      if (formType === "contact") {
        emailHtml = getContactEmailHtml(formData);
        subject = `Nouveau message de contact: ${formData.subject}`;
        toEmail = recipientEmail;
      } else if (formType === "reservation") {
        emailHtml = getReservationEmailHtml(formData);
        subject = `Nouvelle demande de réservation: ${formData.firstName} ${formData.userLastName}`;
        toEmail = recipientEmail;
      } else {
        return new Response(JSON.stringify({ error: "Invalid form type" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://maisondutresormarrakech.com, https://www.maisondutresormarrakech.com",
          },
        });
      }

      // Send email via Resend
      const { data, error } = await resend.emails.send({
        from: 'Maison du Trésor <no-reply@maisondutresormarrakech.com>',
        to: [toEmail],
        subject: subject,
        html: emailHtml,
        reply_to: formData.email,
      });

      if (error) {
        console.error("Resend API error:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://maisondutresormarrakech.com, https://www.maisondutresormarrakech.com",
          },
        });
      }

      return new Response(JSON.stringify({ success: true, id: data.id }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://maisondutresormarrakech.com, https://www.maisondutresormarrakech.com",
        },
      });
    } catch (err) {
      console.error("Server error:", err);
      return new Response(JSON.stringify({ error: "Server error" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://maisondutresormarrakech.com, https://www.maisondutresormarrakech.com",
        },
      });
    }
  },
};
