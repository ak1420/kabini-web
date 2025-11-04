import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formGuid = process.env.HUBSPOT_NEWSLETTER_FORM_GUID || process.env.HUBSPOT_FORM_ID;

    if (!portalId || !formGuid) {
      console.error('Missing HUBSPOT_PORTAL_ID or HUBSPOT_NEWSLETTER_FORM_GUID/HUBSPOT_FORM_ID env variables');
      return NextResponse.json(
        { error: 'Server not configured for HubSpot. Set HUBSPOT_PORTAL_ID and HUBSPOT_NEWSLETTER_FORM_GUID (or HUBSPOT_FORM_ID).' },
        { status: 500 }
      );
    }

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    // Build fields. Some HubSpot forms (like contact forms) require firstname.
    // We add a safe fallback so submissions don't fail if the target form requires it.
    const fields = [{ name: 'email', value: email }];
    const fallbackFirstName = process.env.HUBSPOT_NEWSLETTER_FIRSTNAME_FALLBACK || 'Subscriber';
    fields.push({ name: 'firstname', value: fallbackFirstName });

    const payload = {
      fields,
      context: {
        pageUri: request.headers.get('referer') || '',
        pageName: 'Newsletter Signup'
      }
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    }

    const text = await res.text();
    console.error('HubSpot newsletter submission error:', text);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  } catch (err) {
    console.error('Newsletter subscribe route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


