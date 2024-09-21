import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

/**
 * @swagger
 * /hero-title:
 *   get:
 *     summary: Get the hero title
 *     description: Returns the current hero title for the homepage.
 *     responses:
 *       200:
 *         description: Successfully retrieved hero title
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Balancing Crypto Markets"
 */
router.get("/hero-title", (_req: Request, res: Response) => {
  res.status(200).json({
    data: "Balancing Crypto Markets",
  });
});

/**
 * @swagger
 * /hero-description:
 *   get:
 *     summary: Get the hero description
 *     description: Returns the hero description for the homepage.
 *     responses:
 *       200:
 *         description: Successfully retrieved hero description
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges."
 */
router.get("hero-description", (_req: Request, res: Response) => {
  res.status(200).json({
    data: "Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.",
  });
});

/**
 * @swagger
 * /about-title:
 *   get:
 *     summary: Get the About page title
 *     description: Returns the title for the About page.
 *     responses:
 *       200:
 *         description: Successfully retrieved About title
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "About Gravity Team"
 */
router.get("/about-title", (_req: Request, res: Response) => {
  res.status(200).json({
    data: "About Gravity Team",
  });
});

/**
 * @swagger
 * /about-description:
 *   get:
 *     summary: Get the About page description
 *     description: Returns the description for the About page.
 *     responses:
 *       200:
 *         description: Successfully retrieved About description
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets."
 */
router.get("/about-description", (_req: Request, res: Response) => {
  res.status(200).json({
    data: "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
  });
});

/**
 * @swagger
 * /about-statistics:
 *   get:
 *     summary: Get statistics for About page
 *     description: Returns statistics about Gravity Team.
 *     responses:
 *       200:
 *         description: Successfully retrieved statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: "~$100 billion"
 *                       description:
 *                         type: string
 *                         example: "cumulative trading volume to date"
 */
router.get("/about-statistics", (_req: Request, res: Response) => {
  res.status(200).json({
    data: [
      {
        title: "~$100 billion",
        description: "cumulative trading volume to date",
      },
      {
        title: "0.8%",
        description: "of the global crypto spot trading volume",
      },
      {
        title: "~30",
        description: "Gravity Teammates (& growing)",
      },
      {
        title: "25+",
        description: "leading global and local crypto exchanges",
      },
      {
        title: "2017",
        description: "start, crypto-natives",
      },
      {
        title: "1,200+",
        description: "crypto-asset pairs",
      },
      {
        title: "24/7",
        description: "liquidity",
      },
      {
        title: "5 billion+",
        description: "trades done to date",
      },
    ],
  });
});

/**
 * @swagger
 * /marketing-title:
 *   get:
 *     summary: Get marketing title
 *     description: Returns the marketing title.
 *     responses:
 *       200:
 *         description: Successfully retrieved marketing title
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Crypto Market Making"
 */
router.get("/marketing-title", (_req: Request, res: Response) => {
  res.status(200).json({ data: "Crypto Market Making" });
});

/**
 * @swagger
 * /marketing-description:
 *   get:
 *     summary: Get marketing description
 *     description: Returns the marketing description.
 *     responses:
 *       200:
 *         description: Successfully retrieved marketing description
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide."
 */
router.get("/marketing-description", (_req: Request, res: Response) => {
  res.status(200).json({
    data: "We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.",
  });
});

/**
 * @swagger
 * /marketing-list:
 *   get:
 *     summary: Get marketing services list
 *     description: Returns a list of marketing services.
 *     responses:
 *       200:
 *         description: Successfully retrieved marketing services list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: "Market Making for Crypto Projects"
 *                       secondaryTitle:
 *                         type: string
 *                         example: "Accelerate your token’s journey by boosting its liquidity"
 *                       description:
 *                         type: string
 *                         example: "We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network."
 *                       learnMoreLabel:
 *                         type: string
 *                         example: "learn more"
 *                       learnMoreLink:
 *                         type: string
 *                         example: "https://google.com"
 */
router.get("/marketing-list", (_req: Request, res: Response) => {
  res.status(200).json({
    data: [
      {
        title: "Market Making for Crypto Projects",
        secondaryTitle:
          "Accelerate your token’s journey by boosting its liquidity",
        description:
          "We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.",
        learnMoreLabel: "learn more",
        learnMoreLink: "https://google.com",
      },
      {
        title: "Market Making for Crypto Exchanges",
        secondaryTitle:
          "Attract more traders and projects with deep order books & liquidity",
        description:
          "Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.",
        learnMoreLabel: "learn more",
        learnMoreLink: "https://google.com",
      },
    ],
  });
});

/**
 * @swagger
 * /partners-title:
 *   get:
 *     summary: Get the partners title
 *     description: Returns the title for the partners section.
 *     responses:
 *       200:
 *         description: Successfully retrieved partners title
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Our Partners & Friends"
 */
router.get("/partners-title", (_req: Request, res: Response) => {
  res.status(200).json({ data: "Our Partners & Friends" });
});

/**
 * @swagger
 * /testimonials-title:
 *   get:
 *     summary: Get the testimonials title
 *     description: Returns the title for the testimonials section.
 *     responses:
 *       200:
 *         description: Successfully retrieved testimonials title
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "We are in a good company"
 */
router.get("/testimonials-title", (_req: Request, res: Response) => {
  res.status(200).json({ data: "We are in a good company" });
});

/**
 * @swagger
 * /testimonials-description:
 *   get:
 *     summary: Get testimonials description
 *     description: Returns the description for the testimonials section.
 *     responses:
 *       200:
 *         description: Successfully retrieved testimonials description
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below"
 */
router.get("/testimonials-description", (_req: Request, res: Response) => {
  res.status(200).json({
    data: "Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below",
  });
});

/**
 * @swagger
 * /testimonials-list:
 *   get:
 *     summary: Get the testimonials list
 *     description: Returns a list of testimonials.
 *     responses:
 *       200:
 *         description: Successfully retrieved testimonials list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                         example: "Since 2019, Gravity team has been an astounding market maker for Bitkub..."
 *                       person:
 *                         type: string
 *                         example: "Atthakrit Chimplapibul"
 *                       designation:
 *                         type: string
 *                         example: "Co-founder & CEO of Bitkub"
 */
router.get("/testimonials-list", (_req: Request, res: Response) => {
  res.status(200).json({
    data: [
      {
        message:
          "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
        person: "Atthakrit Chimplapibul",
        designation: "Co-founder & CEO of Bitkub",
      },
      {
        message:
          "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
        person: "Atthakrit Chimplapibul",
        designation: "Co-founder & CEO of Bitkub",
      },
      {
        message:
          "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
        person: "Atthakrit Chimplapibul",
        designation: "Co-founder & CEO of Bitkub",
      },
    ],
  });
});

/**
 * @swagger
 * /bitkub-icon:
 *   get:
 *     summary: Get Bitkub icon
 *     description: Returns the Bitkub logo image.
 *     responses:
 *       200:
 *         description: Successfully retrieved Bitkub icon
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get("/bitkub-icon", (_req: Request, res: Response) => {
  const filePath = path.join(__dirname, "../assets/Bitkub Logo Light.png");
  res.status(200).sendFile(filePath);
});

/**
 * @swagger
 * /join-us-title:
 *   get:
 *     summary: Get the join us title
 *     description: Returns the title for the Join Us section.
 *     responses:
 *       200:
 *         description: Successfully retrieved join us title
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Join Gravity Team"
 */
router.get("/join-us-title", (_req: Request, res: Response) => {
  res.status(200).json({ data: "Join Gravity Team" });
});

/**
 * @swagger
 * /join-us-description:
 *   get:
 *     summary: Get the join us description
 *     description: Returns the description for the Join Us section.
 *     responses:
 *       200:
 *         description: Successfully retrieved join us description
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     passageOne:
 *                       type: string
 *                       example: "Join our community of innovators, problem solvers and owners..."
 *                     passageTwo:
 *                       type: string
 *                       example: "As we emphasize it in our name – Gravity Team, we are a team..."
 *                     learnMoreLabel:
 *                       type: string
 *                       example: "Learn more about working with us"
 *                     learnMoreLink:
 *                       type: string
 *                       example: "https://google.com"
 */
router.get("/join-us-description", (_req: Request, res: Response) => {
  res.status(200).json({
    data: {
      passageOne:
        "Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.",
      passageTwo:
        "As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!",
      learnMoreLabel: "Learn more about working with us",
      learnMoreLink: "https://google.com",
    },
  });
});

/**
 * @swagger
 * /contact-us-title:
 *   get:
 *     summary: Get the contact us title
 *     description: Returns the title for the Contact Us section.
 *     responses:
 *       200:
 *         description: Successfully retrieved contact us title
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "Contact Us"
 */
router.get("/contact-us-title", (_req: Request, res: Response) => {
  res.status(200).json({ data: "Contact Us" });
});

/**
 * @swagger
 * /contact-us-description:
 *   get:
 *     summary: Get the contact us description
 *     description: Returns the description for the Contact Us section.
 *     responses:
 *       200:
 *         description: Successfully retrieved contact us description
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: "We are always open to discuss new value-adding partnerships..."
 */
router.get("/contact-us-description", (_req: Request, res: Response) => {
  res.status(200).json({
    data: "We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!",
  });
});

/**
 * @swagger
 * /company-logo:
 *   get:
 *     summary: Get company logo
 *     description: Returns the Gravity Team logo image.
 *     responses:
 *       200:
 *         description: Successfully retrieved company logo
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get("/company-logo", (_req: Request, res: Response) => {
  const filePath = path.join(
    __dirname,
    "../assets/Gravity Team logo light.png",
  );
  res.status(200).sendFile(filePath);
});

export default router;
