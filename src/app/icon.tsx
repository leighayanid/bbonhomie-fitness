import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',
          fontWeight: 'bold',
          fontFamily: 'sans-serif', // Bebas Neue might be too thin at 32px
        }}
      >
        BB
      </div>
    ),
    {
      ...size,
    }
  )
}
