import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, website, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // HubSpot configuration
    const portalId = "244225778";
    const formGuid = "d8ed421e-b73b-43e3-90b9-bf1eb26b554b";
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    // HubSpot expects fields in this format
    const hubspotFields = [
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "email", value: email },
      { name: "website", value: website || '' },
      { name: "message", value: message }
    ];

    const payload = {
      fields: hubspotFields,
      context: {
        pageUri: request.headers.get('referer') || '',
        pageName: 'Contact Form'
      }
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.text();
      console.error('HubSpot submission error:', errorData);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}