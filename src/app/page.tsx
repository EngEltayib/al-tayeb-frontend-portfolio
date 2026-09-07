import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { LocalizedText } from "@/components/LocalizedText";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column className="home-container" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row className="hero-split" fillWidth gap="xl" vertical="center" s={{ direction: "column" }}>
        <Column className="hero-copy" flex={1} gap="m">
          {home.featured.display && (
            <RevealFx
              fillWidth
              paddingTop="16"
              paddingBottom="16"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth paddingBottom="8">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth paddingBottom="24">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="8" delay={0.4}>
            <Row gap="12" wrap>
              <Button id="work" data-border="rounded" href="/work" variant="primary" size="m" weight="default" arrowIcon>
                <LocalizedText en="View my work" ar="شاهد أعمالي" />
              </Button>
              <Button href={`mailto:${person.email}`} variant="secondary" size="m" prefixIcon="email">
                <LocalizedText en="Contact me" ar="تواصل معي" />
              </Button>
              <Button href={about.path} variant="tertiary" size="m">
                <LocalizedText en="About me" ar="اعرف عني" />
              </Button>
            </Row>
          </RevealFx>
        </Column>
        <Column className="cv-column" flex={1} gap="12" horizontal="center">
          <div className="cv-preview-shell">
            <iframe className="cv-preview" src="/Al-Tayeb-Sayed-CV.pdf#toolbar=0&navpanes=0&scrollbar=0" title="Al-Tayeb Khaled Sayed CV preview" />
          </div>
          <a className="cv-download" href="/Al-Tayeb-Sayed-CV.pdf" download="Al-Tayeb-Sayed-CV.pdf">
            <LocalizedText en="Download CV" ar="تحميل السيرة الذاتية" />
          </a>
        </Column>
      </Row>
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </Column>
  );
}
