import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactNotification = ({ name, email, subject, message }: Props) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>{`Nuevo mensaje de ${name ?? 'un visitante'} desde su sitio web`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>MENSAJE DESDE ANGELDAVIDFLORES.COM</Text>
        <Heading style={h1}>{subject || 'Nuevo mensaje de contacto'}</Heading>
        <Section style={meta}>
          <Text style={metaText}><strong>Nombre:</strong> {name || '—'}</Text>
          <Text style={metaText}><strong>Correo:</strong> {email || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={body}>{message || ''}</Text>
        <Hr style={hr} />
        <Text style={footer}>Puede responder directamente a este correo para contestarle a {name || 'esta persona'}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotification,
  subject: (data: Record<string, any>) => `Contacto web: ${data['subject'] ?? 'Nuevo mensaje'}`,
  displayName: 'Aviso de formulario de contacto',
  to: 'angeldavid@coltlax.edu.mx',
  previewData: {
    name: 'María López',
    email: 'maria@example.com',
    subject: 'Colaboración en investigación',
    message: 'Estimado Dr. Flores, me gustaría conversar sobre una posible colaboración.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '32px 28px', maxWidth: '580px' }
const eyebrow = { fontFamily: 'monospace', fontSize: '11px', letterSpacing: '2px', color: '#a0623f', margin: '0 0 12px' }
const h1 = { fontSize: '24px', color: '#203b33', margin: '0 0 20px' }
const meta = { backgroundColor: '#f3f0e7', borderRadius: '8px', padding: '12px 16px' }
const metaText = { fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#203b33', margin: '4px 0' }
const hr = { borderColor: '#e3ddd0', margin: '24px 0' }
const body = { fontFamily: 'Arial, sans-serif', fontSize: '15px', lineHeight: '1.6', color: '#2b2b2b', whiteSpace: 'pre-wrap' as const }
const footer = { fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#777777' }
