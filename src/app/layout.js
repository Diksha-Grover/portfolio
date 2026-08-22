import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

export const metadata = {
  title: 'Diksha Grover | Full Stack Developer',
  description: 'Full Stack Developer with 5+ years of experience building scalable web applications and backend services using Python, JavaScript, TypeScript, React, and PostgreSQL.',
  keywords: 'Full Stack Developer, Frontend Developer, Backend Developer, React, Next.js, Python, FastAPI, TypeScript, PostgreSQL, REST APIs, AWS, Azure',
  openGraph: {
    title: 'Diksha Grover | Full Stack Developer',
    description: 'Full Stack Developer with 5+ years of experience building scalable web applications and backend services across the stack.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Diksha Grover',
              jobTitle: 'Full Stack Developer',
              url: 'https://dikshagrover.com',
              image: 'https://dikshagrover.com/og-image.jpg',
              sameAs: [
                'https://github.com/Diksha-Grover',
                'https://www.linkedin.com/in/diksha-grover-9b4342192',
              ],
              location: {
                '@type': 'City',
                name: 'Noida, India',
              },
              email: 'thedikshagrover@gmail.com',
              description: 'Full Stack Developer with 5+ years of experience building scalable web applications and backend services using Python, JavaScript, TypeScript, React, and PostgreSQL.',
              knowsAbout: [
                'Full Stack Development',
                'Frontend Development',
                'Backend Development',
                'React',
                'Next.js',
                'Python',
                'FastAPI',
                'TypeScript',
                'PostgreSQL',
                'REST APIs',
                'AWS',
                'Azure',
              ],
              workExperience: [
                {
                  '@type': 'OrganizationRole',
                  roleName: 'Consultant – Full Stack Developer',
                  organizationName: 'Topsoe',
                  startDate: '2025-10-01',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// source ~/.nvm/nvm.sh && nvm use 20 && npm run build && npm start