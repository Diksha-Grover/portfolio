import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

export const metadata = {
  title: 'Diksha Grover | Data Engineer',
  description: 'Data Engineer with 5 years of experience building scalable data pipelines and analytics infrastructure using Python, SQL, AWS, and Azure.',
  keywords: 'Data Engineer, ETL, Data Pipeline, Python, SQL, AWS, Azure, Apache Spark, Data Warehousing',
  openGraph: {
    title: 'Diksha Grover | Data Engineer',
    description: 'Data Engineer with 5 years of experience designing scalable data pipelines and analytics infrastructure.',
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
              jobTitle: 'Data Engineer',
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
              description: 'Data Engineer with 5 years of experience building scalable data pipelines and analytics infrastructure using Python, SQL, AWS, and Azure.',
              knowsAbout: [
                'Data Engineering',
                'ETL/ELT',
                'Python',
                'SQL',
                'Apache Spark',
                'AWS',
                'Azure',
                'Data Warehousing',
                'Data Pipelines',
                'Cloud Infrastructure',
              ],
              workExperience: [
                {
                  '@type': 'OrganizationRole',
                  roleName: 'Consultant – Data Engineering',
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