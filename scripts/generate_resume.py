"""Generate the downloadable resume PDF served at /Diksha_Grover_Resume.pdf.

Run: python3 scripts/generate_resume.py
Output: public/Diksha_Grover_Resume.pdf
"""

import os

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ACCENT = HexColor("#1f4e79")
TEXT = HexColor("#222222")
MUTED = HexColor("#555555")

OUTPUT = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public",
    "Diksha_Grover_Resume.pdf",
)


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=22, textColor=TEXT, spaceAfter=2))
    styles.add(ParagraphStyle(name="Role", fontName="Helvetica-Bold", fontSize=12, textColor=ACCENT, spaceAfter=4))
    styles.add(ParagraphStyle(name="Contact", fontName="Helvetica", fontSize=8.5, textColor=MUTED, leading=12))
    styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=11, textColor=ACCENT, spaceBefore=10, spaceAfter=2))
    styles.add(ParagraphStyle(name="JobTitle", fontName="Helvetica-Bold", fontSize=10, textColor=TEXT, spaceBefore=6, spaceAfter=0))
    styles.add(ParagraphStyle(name="JobMeta", fontName="Helvetica", fontSize=8.5, textColor=MUTED, spaceAfter=2))
    styles.add(ParagraphStyle(name="Body", fontName="Helvetica", fontSize=9, textColor=TEXT, leading=12, alignment=TA_JUSTIFY))
    styles.add(ParagraphStyle(name="BulletText", fontName="Helvetica", fontSize=9, textColor=TEXT, leading=12, alignment=TA_JUSTIFY))
    styles.add(ParagraphStyle(name="Tech", fontName="Helvetica-Oblique", fontSize=8.5, textColor=MUTED, spaceBefore=2, spaceAfter=2))
    return styles


def hr():
    return HRFlowable(width="100%", thickness=0.7, color=ACCENT, spaceBefore=1, spaceAfter=3)


def bullets(items, styles):
    return ListFlowable(
        [ListItem(Paragraph(t, styles["BulletText"]), leftIndent=10, value="•") for t in items],
        bulletType="bullet",
        bulletColor=ACCENT,
        bulletFontSize=8,
        leftIndent=12,
        spaceBefore=1,
        spaceAfter=1,
    )


def experience(story, styles, title, meta, items, tech):
    story.append(Paragraph(title, styles["JobTitle"]))
    story.append(Paragraph(meta, styles["JobMeta"]))
    story.append(bullets(items, styles))
    story.append(Paragraph(f"<b>Tech Stack:</b> {tech}", styles["Tech"]))


def main():
    styles = build_styles()
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=LETTER,
        leftMargin=0.6 * inch,
        rightMargin=0.6 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
        title="Diksha Grover Resume",
        author="Diksha Grover",
    )

    story = []

    story.append(Paragraph("Diksha Grover", styles["Name"]))
    story.append(Paragraph("Full Stack Developer", styles["Role"]))
    story.append(
        Paragraph(
            "Noida, Uttar Pradesh, India&nbsp;|&nbsp;8950184456&nbsp;|&nbsp;thedikshagrover@gmail.com&nbsp;|&nbsp;Immediate Joiner<br/>"
            "Portfolio: https://www.dikshagrover.in/&nbsp;|&nbsp;LinkedIn: https://www.linkedin.com/in/diksha-grover-9b4342192",
            styles["Contact"],
        )
    )

    story.append(Paragraph("PROFESSIONAL SUMMARY", styles["Section"]))
    story.append(hr())
    story.append(
        Paragraph(
            "Full Stack Developer with 5+ years of experience building scalable web applications and backend services "
            "across the stack using Python, JavaScript, TypeScript, React, and PostgreSQL. Skilled in designing REST "
            "APIs, responsive front-end interfaces, and cloud deployments on AWS and Azure, with strong expertise in "
            "performance optimization, CI/CD, and delivering end-to-end features across finance, healthcare, and "
            "logistics domains.",
            styles["Body"],
        )
    )

    story.append(Paragraph("SKILLS", styles["Section"]))
    story.append(hr())
    skills = [
        ("Programming Languages", "JavaScript · TypeScript · Python · SQL"),
        ("Frontend Development", "React · Next.js · Redux Toolkit · RTK Query · HTML5 · CSS3"),
        ("Backend Development", "FastAPI · Django · Flask · REST APIs · Microservices · Kafka · Authentication"),
        ("Databases", "PostgreSQL · MySQL · Redis"),
        ("Cloud & DevOps", "AWS · Azure · Docker · CI/CD Pipelines · Git"),
        ("Testing & Dev Tools", "Pytest · Unit Testing · GitHub · Jira"),
    ]
    for label, value in skills:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["Body"]))

    story.append(Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"]))
    story.append(hr())

    experience(
        story,
        styles,
        "Consultant - Full Stack Developer",
        "Topsoe&nbsp;|&nbsp;Noida, India&nbsp;|&nbsp;Oct 2025 - Sep 2026",
        [
            "Built Python REST APIs and Django backend services powering internal web platforms (Topsearch, Clearview), integrating with front-end reporting interfaces.",
            "Optimized PostgreSQL queries and API response times, reducing latency by 40% and improving dashboard performance by 45%.",
            "Automated build, test, and deployment through CI/CD pipelines, cutting release cycle time by 30%.",
            "Deployed and monitored cloud-hosted services on Azure, sustaining 99.9% uptime through proactive troubleshooting and performance tuning.",
            "Led peer code reviews and defined documentation and coding standards, mentoring engineers on modular design and secure practices.",
        ],
        "Python, FastAPI, Django, Kafka, TypeScript, REST APIs, PostgreSQL, CI/CD, Azure, Docker, Git",
    )

    experience(
        story,
        styles,
        "Sr. Engineering Analyst - Full Stack Developer",
        "Qualtech&nbsp;|&nbsp;Noida, India&nbsp;|&nbsp;May 2024 - Mar 2025",
        [
            "Built core backend services and REST APIs for MyMoneyMantra, a leading fintech lending marketplace in the banking domain, powering loan and credit-card discovery for 1M+ monthly users.",
            "Developed FastAPI microservices for eligibility checks, KYC-driven onboarding, lead routing, and partner-bank integrations across multiple lending and credit products.",
            "Built responsive React front-end journeys and dashboards surfacing real-time lending and application data, reducing manual handoffs by 60%.",
            "Implemented caching, partitioning, and archival strategies for high-volume financial data, cutting report runtimes by 40% and reducing production defects by 35% via Pytest-based validation and secure, compliance-aligned data handling.",
            "Owned end-to-end feature delivery and drove Agile sprint execution, mentoring 3 junior engineers through code reviews.",
        ],
        "Python, FastAPI, Django, Kafka, React, REST APIs, SQL, PostgreSQL, Pytest, AWS, Git",
    )

    experience(
        story,
        styles,
        "Software Engineer - Full Stack Developer",
        "MTAP Technologies&nbsp;|&nbsp;Gurugram, India&nbsp;|&nbsp;Jan 2023 - May 2024",
        [
            "Built end-to-end features for Autologix SaaS booking, fleet operations, dispatching, and tracking using Python, React, and PostgreSQL for 500+ daily transactions.",
            "Developed responsive front-end interfaces in JavaScript/React and modular backend services connected through REST APIs.",
            "Streamed real-time vehicle tracking and dispatch events through Kafka, enabling low-latency updates across fleet operations modules.",
            "Designed normalized database schemas and API integrations that unified operations modules, improving reporting turnaround by 30%.",
            "Containerized services with Docker and wired CI/CD pipelines into AWS, reducing deployment errors by 25%.",
        ],
        "Python, FastAPI, Django, Kafka, JavaScript, React, REST APIs, PostgreSQL, Docker, AWS, Git",
    )

    experience(
        story,
        styles,
        "Software Engineer - Full Stack Developer",
        "Crownstack&nbsp;|&nbsp;Remote&nbsp;|&nbsp;Oct 2021 - Jan 2023",
        [
            "Delivered full-stack features using Python, JavaScript, React, REST APIs, and SQL for healthcare product engineering and digital transformation initiatives.",
            "Built reusable front-end components and backend modules with database integrations across MySQL and NoSQL stores, supporting 4+ product teams.",
            "Optimized queries, API flows, and UI rendering, reducing average response and load times by 30%.",
            "Hardened authentication flows and documented deployment runbooks, cutting incident resolution time by 20%.",
        ],
        "Python, FastAPI, Django, Kafka, JavaScript, React, REST APIs, SQL, MySQL, Git, AWS",
    )

    story.append(Paragraph("PROJECTS", styles["Section"]))
    story.append(hr())

    projects = [
        (
            "PEC - Performance Evaluation Calculation",
            "Engineered full-stack workflows and Django REST backends for a catalyst performance evaluation system at "
            "Topsoe, with front-end views for calculating and reviewing catalyst performance across ammonia and "
            "chemical process use cases.",
            "Python, Django, React, PostgreSQL, REST APIs, Azure, CI/CD",
        ),
        (
            "MyMoneyMantra Lending Platform",
            "Delivered full-stack modules for a banking and fintech lending marketplace spanning retail lending, asset "
            "management, and investment banking, powering loan and credit-card discovery, eligibility checks, and "
            "KYC-driven onboarding. Built FastAPI backends and partner-bank integrations behind responsive React "
            "customer journeys, serving 1M+ monthly users with secure, high-volume data flows.",
            "Python, FastAPI, React, SQL, PostgreSQL, AWS",
        ),
        (
            "Autologix Fleet Operations Platform",
            "Built a full-stack logistics fleet operations platform with a React front-end and Python/PostgreSQL "
            "backend for booking, dispatching, and tracking across 6 modules, using Kafka event streaming for "
            "real-time vehicle tracking and dispatch updates.",
            "Python, React, PostgreSQL, Kafka, REST APIs, Docker, AWS",
        ),
    ]
    for name, desc, tech in projects:
        story.append(Paragraph(name, styles["JobTitle"]))
        story.append(Paragraph(desc, styles["Body"]))
        story.append(Paragraph(f"<b>Tech:</b> {tech}", styles["Tech"]))

    story.append(Paragraph("EDUCATION", styles["Section"]))
    story.append(hr())
    story.append(Paragraph("Bachelor of Engineering (B.E.) in Computer Science", styles["JobTitle"]))
    story.append(Paragraph("PRMCEAM, Maharashtra&nbsp;|&nbsp;2016 - 2020", styles["JobMeta"]))
    story.append(
        bullets(
            [
                "Focused on software engineering, web technologies, and database fundamentals",
                "Built capstone projects around full-stack web applications",
            ],
            styles,
        )
    )

    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
