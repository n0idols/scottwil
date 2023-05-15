import ContactForm from "@/components/ui/forms/ContactForm";
import PageContainer from "@/components/ui/layout/PageContainer";
import PageHero from "@/components/ui/layout/PageHero";
import PageWrapper from "@/components/ui/layout/PageWrapper";
export const metadata = {
  title: "Scott Wilson - Contact",
  description:
    "Experienced web developer Based in California, USA. Passionate about creating functional, beautiful, user friendly websites.",
};
const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHero
        title="Contact"
        subtitle=" I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible."
      />
      <section className="container">
        <PageContainer className="max-w-xl mx-auto">
          <ContactForm />
        </PageContainer>
      </section>
    </PageWrapper>
  );
};
export default ContactPage;
