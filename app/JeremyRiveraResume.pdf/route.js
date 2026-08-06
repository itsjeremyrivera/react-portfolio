import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PAGE_WIDTH = 816;
const PAGE_HEIGHT = 1056;
const MARGIN = 68;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const COLORS = {
  background: rgb(0.043, 0.071, 0.125),
  surface: rgb(0.067, 0.102, 0.169),
  text: rgb(0.969, 0.976, 0.988),
  muted: rgb(0.72, 0.761, 0.827),
  line: rgb(0.19, 0.239, 0.322),
  accent: rgb(0.49, 0.69, 1),
};

const experience = [
  {
    company: "The Villages",
    role: "Product Designer & Front End Developer",
    date: "2025 to Present",
    bullets: [
      "Led end to end product design and front end delivery for Golf Rail, a point of sale system supporting golf operations.",
      "Designed navigation experiences for golf carts and cars in The Villages app, mapping vehicle specific routing workflows across mobile platforms.",
      "Created reusable interaction patterns and implementation ready prototypes for a .NET MAUI Blazor Hybrid application.",
      "Championed Figma adoption, introduced collaborative workflows, and helped onboard the design team.",
      "Partnered with product and engineering to translate operational requirements into clear user flows and production ready interfaces.",
      "Applied AI assisted prototyping and front end fluency to accelerate exploration, validation, and handoff.",
    ],
  },
  {
    company: "Quadient",
    role: "UX/UI Designer",
    date: "July 2022 to April 2023",
    bullets: [
      "Owned end to end UI design for Switch by Quadient, a cloud product that enabled users to prepare and send physical mail online.",
      "Designed onboarding, document creation and upload, address verification, mailing, payment, and account management flows.",
      "Improved a dashboard serving more than 15,000 users by translating research into clearer workflows and stronger visual hierarchy.",
      "Used Maze and Hotjar to analyze user behavior, validate concepts, and identify friction.",
      "Collaborated with product managers, engineers, and stakeholders to deliver implementation ready designs.",
    ],
  },
];

const continuedExperience = [
  {
    company: "Independent / Freelance",
    role: "Product Designer",
    date: "April 2023 to Present",
    bullets: [
      "Designed and developed custom websites, dashboards, and financial services SaaS experiences.",
      "Built scalable design systems and reusable component libraries.",
      "Conducted user research and usability testing to validate concepts and reduce uncertainty.",
      "Translated business requirements into user flows, wireframes, prototypes, responsive interfaces, and production ready websites.",
    ],
  },
  {
    company: "Electus Media",
    role: "UX/UI Designer",
    date: "December 2019 to July 2022",
    bullets: [
      "Reduced high fidelity prototype delivery cycles from approximately 5 weeks to 2 weeks.",
      "Helped reduce development timelines by 20% through cross functional workshops.",
      "Designed and developed accessibility conscious websites and dashboards for e commerce clients.",
      "Connected design intent to implementation across Figma, Webflow, HTML, CSS, and JavaScript.",
    ],
  },
];

function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(test, size) <= maxWidth) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function drawWrapped(page, text, options) {
  const {
    x,
    y,
    font,
    size,
    color,
    maxWidth,
    lineHeight = size * 1.35,
  } = options;
  const lines = wrapText(text, font, size, maxWidth);

  lines.forEach((line, index) => {
    page.drawText(line, {
      x,
      y: y - index * lineHeight,
      font,
      size,
      color,
    });
  });

  return y - lines.length * lineHeight;
}

function drawRule(page, y) {
  page.drawLine({
    start: { x: MARGIN, y },
    end: { x: PAGE_WIDTH - MARGIN, y },
    thickness: 1,
    color: COLORS.line,
  });
}

function drawSectionLabel(page, label, y, fonts) {
  page.drawText(label.toUpperCase(), {
    x: MARGIN,
    y,
    font: fonts.bold,
    size: 8,
    color: COLORS.accent,
    characterSpacing: 2.2,
  });
  return y - 34;
}

function drawBulletList(page, bullets, y, fonts, options = {}) {
  const size = options.size || 9.2;
  const lineHeight = options.lineHeight || 13.1;
  const maxWidth = options.maxWidth || CONTENT_WIDTH - 18;

  for (const bullet of bullets) {
    const lines = wrapText(bullet, fonts.regular, size, maxWidth);
    page.drawCircle({
      x: MARGIN + 3.2,
      y: y + 3.3,
      size: 1.8,
      color: COLORS.accent,
    });

    lines.forEach((line, index) => {
      page.drawText(line, {
        x: MARGIN + 14,
        y: y - index * lineHeight,
        font: fonts.regular,
        size,
        color: COLORS.muted,
      });
    });

    y -= lines.length * lineHeight + 5.5;
  }

  return y;
}

function drawExperience(page, item, y, fonts, compact = false) {
  page.drawText(item.company, {
    x: MARGIN,
    y,
    font: fonts.serif,
    size: compact ? 20 : 22,
    color: COLORS.text,
  });

  const dateWidth = fonts.regular.widthOfTextAtSize(item.date, 9);
  page.drawText(item.date, {
    x: PAGE_WIDTH - MARGIN - dateWidth,
    y: y + 1,
    font: fonts.regular,
    size: 9,
    color: COLORS.muted,
  });

  y -= 25;
  page.drawText(item.role, {
    x: MARGIN,
    y,
    font: fonts.bold,
    size: 9.4,
    color: COLORS.text,
  });

  y -= 22;
  y = drawBulletList(page, item.bullets, y, fonts, {
    size: compact ? 8.8 : 9.1,
    lineHeight: compact ? 12.3 : 12.7,
  });

  return y - (compact ? 18 : 24);
}

function drawHeader(page, fonts, compact = false) {
  page.drawText("JEREMY RIVERA", {
    x: MARGIN,
    y: PAGE_HEIGHT - MARGIN,
    font: fonts.bold,
    size: compact ? 11 : 16,
    color: COLORS.text,
    characterSpacing: compact ? 1.7 : 2.2,
  });

  if (!compact) {
    page.drawText("Product Designer", {
      x: MARGIN,
      y: PAGE_HEIGHT - MARGIN - 29,
      font: fonts.serifItalic,
      size: 18,
      color: COLORS.accent,
    });
  } else {
    page.drawText("/ PRODUCT DESIGNER", {
      x: MARGIN + 126,
      y: PAGE_HEIGHT - MARGIN,
      font: fonts.bold,
      size: 9.5,
      color: COLORS.text,
      characterSpacing: 1.2,
    });
  }

  const contactLines = compact
    ? ["jeremyrivera23@yahoo.com  •  linkedin.com/in/itsjeremyrivera"]
    : [
        "Central Florida  •  (813) 330 6105",
        "jeremyrivera23@yahoo.com  •  linkedin.com/in/itsjeremyrivera",
        "jeremy portfolio",
      ];

  contactLines.forEach((line, index) => {
    const size = compact ? 8.2 : 8.4;
    const width = fonts.regular.widthOfTextAtSize(line, size);
    page.drawText(line, {
      x: PAGE_WIDTH - MARGIN - width,
      y: PAGE_HEIGHT - MARGIN - index * 14,
      font: fonts.regular,
      size,
      color: COLORS.muted,
    });
  });

  drawRule(page, PAGE_HEIGHT - MARGIN - (compact ? 28 : 58));
}

function addPageNumber(page, label, fonts) {
  const width = fonts.bold.widthOfTextAtSize(label, 8);
  page.drawText(label, {
    x: PAGE_WIDTH - MARGIN - width,
    y: 42,
    font: fonts.bold,
    size: 8,
    color: COLORS.muted,
    characterSpacing: 1.6,
  });
}

export async function GET() {
  const pdfDoc = await PDFDocument.create();
  const fonts = {
    regular: await pdfDoc.embedFont(StandardFonts.Helvetica),
    bold: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    serif: await pdfDoc.embedFont(StandardFonts.TimesRoman),
    serifItalic: await pdfDoc.embedFont(StandardFonts.TimesRomanItalic),
  };

  pdfDoc.setTitle("Jeremy Rivera Product Designer Resume");
  pdfDoc.setAuthor("Jeremy Rivera");
  pdfDoc.setSubject("Product design resume");
  pdfDoc.setKeywords([
    "Product Designer",
    "UX UI",
    "Interaction Design",
    "Design Systems",
    "Front End",
  ]);

  const pageOne = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  pageOne.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: COLORS.background,
  });
  drawHeader(pageOne, fonts);

  let y = PAGE_HEIGHT - 174;
  y = drawWrapped(
    pageOne,
    "I design complex products, and make them easier to build, use, and scale.",
    {
      x: MARGIN,
      y,
      font: fonts.serifItalic,
      size: 31,
      color: COLORS.text,
      maxWidth: CONTENT_WIDTH,
      lineHeight: 35,
    },
  );

  y -= 16;
  y = drawWrapped(
    pageOne,
    "Product Designer with 6+ years shaping enterprise software, SaaS platforms, dashboards, websites, and cross platform mobile products. I lead work from research and workflow definition through high fidelity prototyping and engineering handoff, pairing systems thinking with front end fluency to translate complex operational requirements into scalable, production ready experiences.",
    {
      x: MARGIN,
      y,
      font: fonts.regular,
      size: 9.8,
      color: COLORS.muted,
      maxWidth: CONTENT_WIDTH,
      lineHeight: 13.6,
    },
  );

  y -= 18;
  pageOne.drawText(
    "SELECTED IMPACT  •  QUADIENT: DASHBOARD FOR 15,000+ USERS  •  ELECTUS MEDIA: PROTOTYPE DELIVERY REDUCED FROM ABOUT 5 WEEKS TO 2 WEEKS  •  DEVELOPMENT TIMELINES REDUCED 20%",
    {
      x: MARGIN,
      y,
      font: fonts.bold,
      size: 7.15,
      color: COLORS.accent,
      characterSpacing: 0.25,
    },
  );

  y -= 42;
  y = drawSectionLabel(pageOne, "Experience", y, fonts);
  y = drawExperience(pageOne, experience[0], y, fonts);
  drawRule(pageOne, y + 6);
  y -= 32;
  drawExperience(pageOne, experience[1], y, fonts, true);
  addPageNumber(pageOne, "01 / 02", fonts);

  const pageTwo = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  pageTwo.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: COLORS.background,
  });
  drawHeader(pageTwo, fonts, true);

  y = PAGE_HEIGHT - 126;
  y = drawSectionLabel(pageTwo, "Work Experience Continued", y, fonts);
  y = drawExperience(pageTwo, continuedExperience[0], y, fonts, true);
  y = drawExperience(pageTwo, continuedExperience[1], y, fonts, true);
  drawRule(pageTwo, y + 10);
  y -= 30;

  y = drawSectionLabel(pageTwo, "Selected Client Work", y, fonts);
  pageTwo.drawText("Payro Finance", {
    x: MARGIN,
    y,
    font: fonts.serif,
    size: 15,
    color: COLORS.text,
  });
  y -= 19;
  y = drawWrapped(
    pageTwo,
    "Designed a financial services SaaS platform, creating custom interface components and scalable design patterns across dashboards and workflow experiences.",
    {
      x: MARGIN,
      y,
      font: fonts.regular,
      size: 8.7,
      color: COLORS.muted,
      maxWidth: CONTENT_WIDTH,
      lineHeight: 12,
    },
  );
  y -= 10;
  pageTwo.drawText("Web Way Studios", {
    x: MARGIN,
    y,
    font: fonts.serif,
    size: 15,
    color: COLORS.text,
  });
  y -= 19;
  y = drawWrapped(
    pageTwo,
    "Designed and developed websites for small businesses, applying UX research and design thinking methods to improve engagement, usability, and conversion.",
    {
      x: MARGIN,
      y,
      font: fonts.regular,
      size: 8.7,
      color: COLORS.muted,
      maxWidth: CONTENT_WIDTH,
      lineHeight: 12,
    },
  );

  y -= 18;
  y = drawSectionLabel(pageTwo, "Additional Experience", y, fonts);
  pageTwo.drawText("Verizon / Account Executive / November 2015 to October 2019", {
    x: MARGIN,
    y,
    font: fonts.bold,
    size: 8.9,
    color: COLORS.text,
  });
  y -= 18;
  y = drawWrapped(
    pageTwo,
    "Built durable customer relationships, translated customer needs into solutions, and communicated value across varied stakeholders.",
    {
      x: MARGIN,
      y,
      font: fonts.regular,
      size: 8.5,
      color: COLORS.muted,
      maxWidth: CONTENT_WIDTH,
      lineHeight: 11.7,
    },
  );

  y -= 18;
  y = drawSectionLabel(pageTwo, "Professional Development", y, fonts);
  pageTwo.drawText("CS50x: Introduction to Computer Science / Harvard University", {
    x: MARGIN,
    y,
    font: fonts.bold,
    size: 8.9,
    color: COLORS.text,
  });
  y -= 18;
  pageTwo.drawText("Online Certificate", {
    x: MARGIN,
    y,
    font: fonts.regular,
    size: 8.5,
    color: COLORS.muted,
  });

  y -= 24;
  drawRule(pageTwo, y);
  y -= 28;
  y = drawSectionLabel(pageTwo, "Core Skills", y, fonts);
  y = drawWrapped(
    pageTwo,
    "Product Design  •  UX/UI Design  •  Interaction Design  •  User Flows  •  Wireframing  •  Rapid Prototyping  •  Design Systems  •  Responsive Design  •  Accessibility  •  User Research  •  Usability Testing  •  Information Architecture  •  Cross Functional Facilitation  •  AI Assisted Prototyping",
    {
      x: MARGIN,
      y,
      font: fonts.regular,
      size: 8.1,
      color: COLORS.muted,
      maxWidth: CONTENT_WIDTH,
      lineHeight: 11.2,
    },
  );

  y -= 16;
  y = drawSectionLabel(pageTwo, "Tools & Technical Fluency", y, fonts);
  y = drawWrapped(
    pageTwo,
    "Figma  •  Webflow  •  Maze  •  Hotjar  •  Miro  •  Jira  •  HTML  •  CSS  •  JavaScript  •  Node.js  •  .NET MAUI Blazor Hybrid",
    {
      x: MARGIN,
      y,
      font: fonts.regular,
      size: 8.1,
      color: COLORS.muted,
      maxWidth: CONTENT_WIDTH,
      lineHeight: 11.2,
    },
  );

  y -= 16;
  pageTwo.drawText("LANGUAGES", {
    x: MARGIN,
    y,
    font: fonts.bold,
    size: 8,
    color: COLORS.accent,
    characterSpacing: 2.2,
  });
  pageTwo.drawText("English  •  Spanish", {
    x: MARGIN + 126,
    y,
    font: fonts.regular,
    size: 8.4,
    color: COLORS.muted,
  });

  addPageNumber(pageTwo, "02 / 02", fonts);

  const bytes = await pdfDoc.save({ useObjectStreams: true });

  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="JeremyRiveraResume.pdf"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
