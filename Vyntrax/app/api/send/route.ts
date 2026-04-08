import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_for_build');

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'info@vyntrax.de';

    // E-Mail senden
    const data = await resend.emails.send({
      from: 'Vyntra Kontakt <onboarding@resend.dev>', // Resend Onboarding Adresse
      to: [recipientEmail],
      subject: `🚀 Neue Anfrage von ${name} | Vyntra`,
      html: `
        <!DOCTYPE html>
        <html lang="de">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              background-color: #ffffff;
              border-radius: 12px;
              padding: 40px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 3px solid #00CED1;
            }
            .header h1 {
              margin: 0;
              color: #00CED1;
              font-size: 28px;
            }
            .badge {
              display: inline-block;
              background: #00CED1;
              color: white;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 600;
              margin-top: 10px;
            }
            .info-section {
              margin: 25px 0;
              padding: 20px;
              background-color: #f9fafb;
              border-radius: 8px;
              border-left: 4px solid #00CED1;
            }
            .info-label {
              font-weight: 600;
              color: #00CED1;
              margin-bottom: 5px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .info-value {
              color: #1f2937;
              font-size: 16px;
              margin: 0;
            }
            .message-box {
              background-color: #ffffff;
              border: 2px solid #e5e7eb;
              border-radius: 8px;
              padding: 20px;
              margin: 25px 0;
            }
            .message-label {
              font-weight: 600;
              color: #00CED1;
              margin-bottom: 10px;
              font-size: 14px;
            }
            .message-content {
              color: #374151;
              line-height: 1.8;
              white-space: pre-wrap;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
            .cta-button {
              display: inline-block;
              background: #00CED1;
              color: white;
              text-decoration: none;
              padding: 12px 30px;
              border-radius: 8px;
              font-weight: 600;
              margin-top: 20px;
            }
            .timestamp {
              color: #9ca3af;
              font-size: 12px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Neue Anfrage</h1>
              <span class="badge">Vyntra</span>
            </div>

            <div class="info-section">
              <div class="info-label">👤 Name</div>
              <p class="info-value">${name}</p>
            </div>

            <div class="info-section">
              <div class="info-label">📧 E-Mail</div>
              <p class="info-value"><a href="mailto:${email}" style="color: #00CED1; text-decoration: none;">${email}</a></p>
            </div>

            ${company ? `
            <div class="info-section">
              <div class="info-label">🏢 Unternehmen</div>
              <p class="info-value">${company}</p>
            </div>
            ` : ''}

            <div class="message-box">
              <div class="message-label">💬 Nachricht</div>
              <div class="message-content">${message}</div>
            </div>

            <div style="text-align: center;">
              <a href="mailto:${email}" class="cta-button">
                📨 Direkt antworten
              </a>
            </div>

            <div class="footer">
              <p class="timestamp">⏰ Gesendet am ${new Date().toLocaleString('de-DE', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}</p>
              <p>Diese E-Mail wurde über das Kontaktformular auf deiner Website gesendet.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Neue Anfrage von ${name}

Name: ${name}
E-Mail: ${email}
${company ? `Unternehmen: ${company}` : ''}

Nachricht:
${message}

---
Gesendet am ${new Date().toLocaleString('de-DE')}
      `,
    });

    if (data.error) {
       console.error('Resend API Fehler:', data.error);
       return NextResponse.json(
         { error: data.error.message || 'E-Mail konnte nicht gesendet werden' },
         { status: 400 }
       );
    }

    return NextResponse.json({
      success: true,
      message: 'E-Mail erfolgreich gesendet',
      data
    });

  } catch (error) {
    console.error('Server Fehler beim E-Mail-Versand:', error);
    return NextResponse.json(
      { 
        error: 'E-Mail konnte nicht gesendet werden',
        details: error instanceof Error ? error.message : 'Unbekannter Fehler'
      },
      { status: 500 }
    );
  }
}

