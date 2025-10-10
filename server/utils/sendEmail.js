const { Resend } = require("resend");
const dotenv = require("dotenv");
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendVerificationEmail = async (email, token) => {
  const verifyUrl = `${process.env.CLIENT_URL}/verify/${token}`;

  try {
    await resend.emails.send({
      from: "Fitin <onboarding@resend.dev>",
      to: email,
      subject: "Verify your FITIN account 💪",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify Your Email</title>
        </head>
        <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background:linear-gradient(135deg,#111827 0%,#000000 50%,#111827 100%);min-height:100vh;">
          <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:transparent;">
            <tr>
              <td align="center" style="padding:40px 20px;">
                
                <!-- Main Container -->
                <table role="presentation" style="width:100%;max-width:600px;border-collapse:collapse;border:0;border-spacing:0;background:#1f2937;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(163,230,53,0.15);">
                  
                  <!-- Header with gradient -->
                  <tr>
                    <td style="padding:0;background:linear-gradient(135deg,#1f2937 0%,#111827 100%);">
                      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                          <td style="padding:40px 40px 30px 40px;text-align:center;">
                            <h1 style="margin:0;font-size:48px;font-weight:800;color:#ffffff;letter-spacing:-1px;">
                              Find Your <span style="color:#a3e635;">Fit</span>
                            </h1>
                            <p style="margin:8px 0 0 0;font-size:14px;color:#9ca3af;text-transform:uppercase;letter-spacing:2px;font-weight:600;">
                              FITIN
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding:40px 40px;">
                      <h2 style="margin:0 0 16px 0;font-size:28px;font-weight:700;color:#ffffff;line-height:1.3;">
                        Welcome to the FITIN Family! 🎉
                      </h2>
                      <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;color:#d1d5db;">
                        We're excited to have you on board! You're just one click away from accessing verified personal trainers and customized workout plans tailored to your goals.
                      </p>
                      <p style="margin:0 0 32px 0;font-size:16px;line-height:1.6;color:#d1d5db;">
                        Click the button below to verify your email address and start your fitness journey:
                      </p>
                      
                      <!-- CTA Button -->
                      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                          <td align="center" style="padding:0;">
                            <a href="${verifyUrl}" target="_blank" style="display:inline-block;background:#a3e635;color:#000000;font-size:18px;font-weight:700;text-decoration:none;padding:16px 48px;border-radius:9999px;transition:all 0.3s;box-shadow:0 4px 14px rgba(163,230,53,0.4);">
                              Verify Email Address
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Info Box -->
                  <tr>
                    <td style="padding:0 40px 40px 40px;">
                      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#111827;border-radius:12px;border:1px solid #374151;">
                        <tr>
                          <td style="padding:20px;text-align:center;">
                            <p style="margin:0;font-size:14px;color:#9ca3af;line-height:1.6;">
                              ⏱️ <strong style="color:#a3e635;">This link expires in 24 hours</strong><br>
                              For your security, please verify your email as soon as possible.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:30px 40px;background:#111827;border-top:1px solid #374151;">
                      <p style="margin:0 0 12px 0;font-size:14px;color:#6b7280;line-height:1.6;">
                        If you didn't create an account with FITIN, you can safely ignore this email.
                      </p>
                      <p style="margin:0;font-size:13px;color:#4b5563;line-height:1.6;">
                        © 2025 FITIN. All rights reserved.<br>
                        Your personal fitness companion.
                      </p>
                    </td>
                  </tr>

                </table>

                <!-- Bottom tagline -->
                <table role="presentation" style="width:100%;max-width:600px;border-collapse:collapse;border:0;border-spacing:0;margin-top:24px;">
                  <tr>
                    <td align="center" style="padding:0;">
                      <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.6;">
                        💪 Start your transformation today
                      </p>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log("✅ Verification email sent to:", email);
  } catch (err) {
    console.error("❌ Email send failed:", err);
  }
};