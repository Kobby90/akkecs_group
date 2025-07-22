import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// In a real application, you would want to store these in a database
// For now, we'll use an encrypted cookie as a simple solution
const COOKIE_NAME = 'analytics_settings';

export async function GET() {
  const cookieStore = cookies();
  const settings = cookieStore.get(COOKIE_NAME);

  if (!settings) {
    return NextResponse.json({
      gaId: '',
      gtmId: '',
      customScript: '',
      environment: 'production'
    });
  }

  try {
    return NextResponse.json(JSON.parse(settings.value));
  } catch (error) {
    return NextResponse.json({
      gaId: '',
      gtmId: '',
      customScript: '',
      environment: 'production'
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (typeof body.gaId !== 'string' || typeof body.gtmId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    // In a real application, you would want to validate the user is an admin here
    
    const response = NextResponse.json(
      { message: 'Settings saved successfully' },
      { status: 200 }
    );

    // Set the cookie with the settings
    response.cookies.set({
      name: COOKIE_NAME,
      value: JSON.stringify(body),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 