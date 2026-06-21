import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Controlled Risk Services LLC social preview'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#081522',
          color: '#f8fafc',
          fontFamily: 'Arial, Helvetica, sans-serif',
          padding: 64,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 128,
                height: 128,
                borderRadius: 24,
                border: '2px solid #d9a441',
                background: '#10263a',
                color: '#f5c451',
                fontSize: 48,
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              CRS
            </div>
            <div style={{ display: 'flex', color: '#f5c451', fontSize: 26, fontWeight: 700, letterSpacing: 0 }}>
              Integrity. Protection. Excellence.
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(245, 196, 81, 0.55)',
              borderRadius: 999,
              padding: '14px 22px',
              color: '#e2e8f0',
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            Construction Safety | Risk Management
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 920 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 82,
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            Controlled Risk Services LLC
          </div>
          <div
            style={{
              display: 'flex',
              color: '#dbeafe',
              fontSize: 34,
              lineHeight: 1.22,
              fontWeight: 500,
              letterSpacing: 0,
            }}
          >
            Safety governance, field leadership, and project controls support for industrial, infrastructure, and
            mission-critical work.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', color: '#93a4b8', fontSize: 24, fontWeight: 700, letterSpacing: 0 }}>
            controlled-risk-services.vercel.app
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {['OSHA', 'HSE', 'PM'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 72,
                  height: 44,
                  borderRadius: 10,
                  background: '#f5c451',
                  color: '#081522',
                  fontSize: 22,
                  fontWeight: 900,
                  letterSpacing: 0,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
