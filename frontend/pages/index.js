import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhoItsFor from "@/components/WhoItsFor";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ClinicPay — Pay for Healthcare, a Little at a Time</title>
        <meta name="description" content="ClinicPay lets patients pay for medical treatment in small daily or weekly USDC installments. Clinics get guaranteed payment via Soroban smart contract escrow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <WhoItsFor />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
