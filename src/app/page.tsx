import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { LocalizedText } from "@/components/LocalizedText";

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
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
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
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
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
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Row gap="12" wrap horizontal="center">
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
      </Column>
      <Column fillWidth gap="24" paddingX="l">
        <Heading as="h2" variant="display-strong-xs">
          <LocalizedText en="What I bring to a product team" ar="ما أقدمه لفريق المنتج" />
        </Heading>
        <Row fillWidth gap="16" s={{ direction: "column" }}>
          <Column flex={1} border="neutral-alpha-weak" radius="l" padding="24" gap="8">
            <Text variant="heading-strong-m">React · Next.js · TypeScript</Text>
            <Text onBackground="neutral-weak" variant="body-default-s"><LocalizedText en="Production experience building and maintaining real product features." ar="خبرة إنتاجية في بناء وتطوير خصائص حقيقية داخل المنتجات." /></Text>
          </Column>
          <Column flex={1} border="neutral-alpha-weak" radius="l" padding="24" gap="8">
            <Text variant="heading-strong-m">SaaS · APIs · RBAC</Text>
            <Text onBackground="neutral-weak" variant="body-default-s"><LocalizedText en="Complex dashboards, authentication, payments, permissions, and server-driven workflows." ar="لوحات تحكم معقدة ومصادقة ومدفوعات وصلاحيات وتدفقات معتمدة على الخادم." /></Text>
          </Column>
          <Column flex={1} border="neutral-alpha-weak" radius="l" padding="24" gap="8">
            <Text variant="heading-strong-m">Product collaboration</Text>
            <Text onBackground="neutral-weak" variant="body-default-s"><LocalizedText en="Comfortable translating backend contracts and evolving product needs into maintainable UI." ar="أحوّل عقود Backend ومتطلبات المنتج المتغيرة إلى واجهات واضحة وقابلة للصيانة." /></Text>
          </Column>
        </Row>
        <Row wrap gap="8">
          {['React.js', 'Next.js', 'TypeScript', 'Material UI', 'React Hook Form', 'Yup', 'REST APIs', 'next-intl', 'Git'].map((skill) => (
            <Badge key={skill} background="neutral-alpha-weak" onBackground="neutral-strong">{skill}</Badge>
          ))}
        </Row>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} />
      <Mailchimp />
    </Column>
  );
}
