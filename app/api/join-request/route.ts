import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, github, skills, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New KhmerStack Join Request

Name: ${name}
Email: ${email}
GitHub: ${github || "Not provided"}
Skills: ${skills || "Not provided"}

Message:
${message}

---
Sent from KhmerStack website
    `.trim()

    // Send email using a simple mailto approach or integrate with email service
    // For now, we'll log the request and return success
    // In production, you would integrate with an email service like Resend, SendGrid, etc.
    
    console.log("Join Request Received:")
    console.log("To: muyleanging@gmail.com")
    console.log("Subject: New KhmerStack Join Request from", name)
    console.log("Content:", emailContent)

    // If you want to use a real email service, uncomment and configure one of these:
    
    // Option 1: Using Resend (recommended)
    // const { Resend } = await import("resend")
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: "KhmerStack <noreply@khmerstack.com>",
    //   to: "muyleanging@gmail.com",
    //   subject: `New KhmerStack Join Request from ${name}`,
    //   text: emailContent,
    // })

    return NextResponse.json({ 
      success: true,
      message: "Request received successfully" 
    })
  } catch (error) {
    console.error("Error processing join request:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
}
