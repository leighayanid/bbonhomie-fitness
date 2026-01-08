import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'BBonhomie Fitness - Elite Coaching'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // Fetch Bebas Neue font
  const bebasNeue = await fetch(
    new URL('https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK7jtWnitglgzBE4A.ttf')
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          position: 'relative',
        }}
      >
        {/* Background Image Overlay */}
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
          alt="Gym Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.15,
          }}
        />
        
        {/* Gradient Overlays to match Hero */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.4), rgba(5,5,5,0.6), #050505)',
          }}
        />

        {/* Watermark */}
        <div
          style={{
            position: 'absolute',
            fontSize: 500,
            fontFamily: 'Bebas Neue',
            color: 'white',
            opacity: 0.03,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          BB
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 60px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontFamily: 'Bebas Neue',
              color: 'white',
              lineHeight: 0.8,
              letterSpacing: '-0.04em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span>ACHIEVE YOUR</span>
            <span style={{ color: '#D4AF37' }}>FITNESS GOALS.</span>
            <span>OUTWORK YOUR EXCUSES.</span>
          </div>
          
          <div
            style={{
              marginTop: 40,
              fontSize: 28,
              color: '#EAEAEA',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.8,
              fontFamily: 'sans-serif',
            }}
          >
            Elite Bodybuilding & Physique Coaching
          </div>
        </div>
        
        {/* Decorative Gold Line */}
        <div 
          style={{
            position: 'absolute',
            bottom: 40,
            width: 100,
            height: 4,
            backgroundColor: '#D4AF37',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Bebas Neue',
          data: bebasNeue,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
