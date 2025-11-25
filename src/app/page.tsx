"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Basketball Hub"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Browse Products",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Your Basketball Destination"
          description="Shop premium basketball equipment, shoes, and apparel from top brands. Everything you need to elevate your game."
          tag="New Arrivals"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107032358-u2maib6s.jpg"
          imageAlt="Professional basketball player in action"
          frameStyle="card"
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Products"
          description="Explore our curated selection of basketball equipment and gear."
          tag="Popular"
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Professional Basketball",
              price: "$49.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107033747-e2beqteh.jpg",
              imageAlt: "Professional grade basketball"
            },
            {
              id: "2",
              name: "Elite Basketball Shoes",
              price: "$129.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107034910-v6jzr7g4.jpg",
              imageAlt: "Premium basketball shoes"
            },
            {
              id: "3",
              name: "Training Equipment Set",
              price: "$89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107035822-ebb8f2cy.jpg",
              imageAlt: "Basketball training gear"
            },
            {
              id: "4",
              name: "Athletic Jersey",
              price: "$39.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107036806-h1s1j1rj.jpg",
              imageAlt: "Basketball jersey"
            },
            {
              id: "5",
              name: "Advanced Training Package",
              price: "$199.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107038105-fh21yexo.jpg",
              imageAlt: "Complete training package"
            },
            {
              id: "6",
              name: "Court Basketball Socks",
              price: "$24.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107036806-h1s1j1rj.jpg",
              imageAlt: "Basketball performance socks"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Shop by Category"
          description="Find exactly what you need with our organized product categories."
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Basketballs",
              description: "Official regulation and practice basketballs for all skill levels and league standards.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107039725-r85o3av7.jpg"
            },
            {
              id: 2,
              title: "Basketball Shoes",
              description: "Performance footwear designed for comfort, support, and on-court excellence.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107040677-bs3mx18d.jpg"
            },
            {
              id: 3,
              title: "Accessories",
              description: "Complete your collection with protective gear, bags, socks, and training aids.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107041950-sb5c6t3o.jpg"
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Us"
          description={[
            "Basketball Hub is your premier destination for quality basketball equipment and apparel. Founded by passionate basketball enthusiasts, we're committed to providing athletes of all levels with top-tier products.",
            "From professional athletes to weekend warriors, we believe everyone deserves access to quality basketball gear that enhances their performance and enjoyment of the game."
          ]}
          showBorder={true}
          buttons={[
            { text: "Explore Products", href: "products" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Athletes Say"
          description="Hear from basketball players who trust our products for their game."
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Professional Player",
              company: "NBA",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107044215-cax1qu0z.jpg"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "College Athlete",
              company: "State University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107045221-372hnl9i.jpg"
            },
            {
              id: "3",
              name: "James Williams",
              role: "High School Coach",
              company: "Central High",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107046344-ogxmvgqj.jpg"
            },
            {
              id: "4",
              name: "Emma Davis",
              role: "Amateur Player",
              company: "Local Team",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107047497-ghfo0236.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services."
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764107049625-vou2u54u.jpg"
          imageAlt="Basketball court"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all products. Items must be in original condition with tags attached."
            },
            {
              id: "2",
              title: "Do you offer international shipping?",
              content: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location."
            },
            {
              id: "3",
              title: "Are your products authentic?",
              content: "100% authentic products from authorized retailers and manufacturers. We guarantee authenticity on all items."
            },
            {
              id: "4",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, and secure payment methods for your convenience."
            },
            {
              id: "5",
              title: "How long does shipping take?",
              content: "Standard shipping takes 5-7 business days. Express shipping options available for faster delivery."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with Latest Gear"
          description="Subscribe to our newsletter for exclusive deals, new product releases, and basketball tips from the pros."
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Basketball Hub"
          columns={[
            {
              items: [
                { label: "Shop", href: "products" },
                { label: "About", href: "about" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Terms", href: "#" },
                { label: "Privacy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}