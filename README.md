# Al-Tayeb Khaled Sayed — Portfolio

Personal portfolio for **Al-Tayeb Khaled Sayed**, a Frontend Engineer focused on building production web applications with React.js, Next.js, and TypeScript.

The portfolio presents professional experience, bilingual case studies, colleague recommendations, a downloadable CV, and direct contact links.

Live site: [al-tayeb-frontend-portfolio.vercel.app](https://al-tayeb-frontend-portfolio.vercel.app/)

## About me

I am a Frontend Engineer with hands-on experience building SaaS dashboards and business-critical workflows, including:

- React.js, Next.js App Router, and TypeScript applications.
- REST API integration and backend-driven interfaces.
- Authentication, OTP, RBAC, and permission-aware navigation.
- Payments, multi-step onboarding, filtering, pagination, and search.
- Arabic/English products with RTL/LTR support.
- Close collaboration with product, backend, clients, and development teams.

## Portfolio sections

- Hero and downloadable CV.
- Professional experience at AutoZad and AlexApps.
- Recommendations from people I have worked with.
- Dedicated project case studies under the Work page.
- Arabic and English interface with saved language preference.
- Responsive dark/light design.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Once UI
- MDX
- Sass

## Local development

Requirements: Node.js 20 or later and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
```

The GitHub Actions workflow runs these checks for pushes to `main` and pull requests targeting `main`. Production deployment is handled by the repository's Vercel Git integration.

## Content and configuration

- Personal content: `src/resources/content.tsx`
- Site configuration: `src/resources/once-ui.config.ts`
- Homepage sections: `src/components/home/`
- Project case studies: `src/app/work/projects/`
- Public assets and CV: `public/`

## Contact

- Email: [altayeb.kha@gmail.com](mailto:altayeb.kha@gmail.com)
- LinkedIn: [linkedin.com/in/altayeb-khaled](https://linkedin.com/in/altayeb-khaled)
- GitHub: [github.com/EngEltayib](https://github.com/EngEltayib)

## Credits and license

This portfolio is customized from [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio), built with [Once UI](https://once-ui.com).

The original template is distributed under the **CC BY-NC 4.0** license. Attribution is required and commercial use is restricted unless an appropriate extended license is obtained. See [LICENSE](LICENSE) for the license included in this repository.
