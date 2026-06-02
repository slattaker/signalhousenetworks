import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import logo from './assets/signalhouse-logo.png'
import wifiBefore from "./assets/wifi-before.png";
import wifiAfter from "./assets/wifi-after.png";
import closetBefore from "./assets/closet-before.png";
import closetAfter from "./assets/closet-after.png";
import seanHeadshot from "./assets/sean-headshot.png";
import websiteOne from "./assets/website-one.png";
import websiteTwo from "./assets/website-two.png";
import websiteThree from "./assets/website-three.png";


export default function SignalHouseNetworksWebsite() {
    const [speed, setSpeed] = useState(0);
    const [headerState, setHeaderState] = useState("top");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // At top
    if (currentScrollY < 50) {
      setHeaderState("top");
    }

    // Scrolling down
    else if (currentScrollY > lastScrollY) {
      setHeaderState("hidden");
    }

    // Scrolling up
    else {
      setHeaderState("floating");
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const runSpeedTest = async () => {
    setSpeed(0);

    const start = performance.now();
    const image = new Image();

    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg?cache=" +
      Math.random();

    image.onload = () => {
      const end = performance.now();
      const duration = (end - start) / 1000;
      const bitsLoaded = 8790000 * 8;
      const speedMbps = ((bitsLoaded / duration) / 1024 / 1024).toFixed(0);

      setSpeed(Number(speedMbps));
    };
  };
  return (
    <div className="min-h-screen bg-gray-950/80 text-white font-sans">

{/* Header */}
<header
  className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
    headerState === "top"
      ? "translate-y-0 border-b border-blue-800 bg-gray-950/80/95 py-4"
      : headerState === "floating"
      ? "translate-y-0 bg-gray-950/80/80 py-1 shadow-2xl backdrop-blur-xl"
      : "-translate-y-full opacity-0"
  }`}
>
<div
  className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
    headerState === "top" ? "py-5" : "py-2"
  }`}
>
    {/* Logo */}
    <div>
      <img
        src={logo}
        alt="SignalHouse Networks Logo"
className={`w-auto transition-all duration-300 ${
  headerState === "top" ? "h-24" : "h-14"
}`}      />
    </div>

    {/* Desktop Nav */}
    <nav className="hidden gap-6 text-xl md:flex">
      <a href="#services" className="hover:text-blue-400 transition">Services</a>
      <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
      <a href="#transformations" className="hover:text-blue-400 transition">Projects</a>
      <a href="#about" className="hover:text-blue-400 transition">About</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-2xl border border-blue-800 bg-gray-900 px-5 py-3 text-lg font-bold text-white transition hover:border-blue-400 md:hidden"
    >
      Menu
    </button>

  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="border-t border-blue-800 bg-gray-950/80 md:hidden">

      <nav className="flex flex-col px-6 py-4 text-lg">

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-3 transition hover:bg-blue-500/10 hover:text-blue-400"
        >
          Services
        </a>

        <a
          href="#pricing"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-3 transition hover:bg-blue-500/10 hover:text-blue-400"
        >
          Pricing
        </a>

        <a
          href="#transformations"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-3 transition hover:bg-blue-500/10 hover:text-blue-400"
        >
          Projects
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-3 transition hover:bg-blue-500/10 hover:text-blue-400"
        >
          About
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-3 transition hover:bg-blue-500/10 hover:text-blue-400"
        >
          Contact
        </a>

      </nav>

    </div>
  )}
</header>

{/* Hero */}
<section className="relative overflow-hidden border-b border-blue-950 bg-[#020617] pt-40">

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />

    {/* Glow */}
    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-900/20 blur-3xl" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      {/* LEFT SIDE */}
      <div>
        <div className="mb-6 inline-flex rounded-full border border-blue-800 bg-blue-950/40 px-5 py-2 text-xl font-medium text-blue-300">
        Fort Mill • Rock Hill • Charlotte • Indian Land
      </div>

      <h1 className="text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
        Your WiFi
        <span className="block text-blue-400">
          Shouldn't Suck.
        </span>

      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl text-slate-300">

        Dead zones, buffering TVs, dropped Zoom calls, and unreliable smart home devices —
        fixed by a local IT consultant with real networking experience.

      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-5">
        <a
          href="https://calendly.com/signalhousenetworks/30min"
          target="_blank"
          rel="noopener noreferrer"          
          className="rounded-2xl bg-blue-500 px-8 py-4 text-xl font-bold text-white transition duration-300 hover:scale-105 hover:bg-blue-400"
        >
          Free 10-Min Consultation
        </a>

        <a
          href="#pricing"
          className="rounded-2xl border border-blue-800 bg-slate-950 px-8 py-4 text-xl font-semibold text-white transition duration-300 hover:border-blue-500 hover:text-blue-400"
        >
          View Pricing
        </a>

      </div>

      {/* Trust */}
      <div className="mt-10 flex flex-wrap gap-6 text-xl md:text-2xl text-slate-400">

        <span>✓ Same-day appointments</span>
        <span>✓ Local to Fort Mill</span>
        <span>✓ Real IT consulting experience</span>
        <span>✓ No subcontractors</span>

      </div>

      <p className="mt-6 text-lg text-slate-500">
        Serving homeowners and small businesses throughout the Charlotte area.
      </p>

    </div>

{/* RIGHT SIDE */}
<div className="hidden lg:flex justify-center">
  <div className="animate-[float_6s_ease-in-out_infinite] overflow-hidden rounded-[32px] border border-blue-900/60 bg-[#0b1120] shadow-2xl shadow-blue-950/20">
    <img
      src={wifiAfter}
      alt="WiFi coverage optimization"
      className="mx-auto w-full max-w-[420px] object-cover"
    />

      <div className="border-t border-blue-900/40 px-6 py-6">

        <div className="mb-3 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xl font-semibold text-green-300">
          Real Client Result
        </div>

        <h3 className="text-3xl font-bold text-white">
          Better Whole-Home Coverage
        </h3>

        <p className="mt-4 text-xl leading-relaxed text-slate-300">
          Eliminated dead zones and improved signal reliability for streaming,
          Zoom calls, and smart home devices.
        </p>

      </div>

  </div>

</div>

  </div>

</section>

{/* Real Speed Test */}
<section id="speed-test" className="border-b border-blue-800 bg-gradient-to-b from-[#020617] to-black">
  <div className="mx-auto max-w-7xl px-6 py-20">

    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-sky-300">
        Quick Internet Check
      </div>

      <h2 className="text-4xl font-black tracking-tight md:text-6xl">
        How Good Is Your WiFi?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
        Run a real internet speed test below, then compare your download result using the simple guide.
      </p>
    </div>

    <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-blue-800 bg-gray-950/80 p-6 text-center">
        <p className="text-3xl font-black text-blue-400">1</p>
        <h3 className="mt-3 text-xl font-bold text-white">Press Start</h3>
        <p className="mt-2 text-gray-400">Tap the blue Start button inside the speed test.</p>
      </div>

      <div className="rounded-3xl border border-blue-800 bg-gray-950/80 p-6 text-center">
        <p className="text-3xl font-black text-blue-400">2</p>
        <h3 className="mt-3 text-xl font-bold text-white">Wait 30 Seconds</h3>
        <p className="mt-2 text-gray-400">Let the test finish before reading your result.</p>
      </div>

      <div className="rounded-3xl border border-blue-800 bg-gray-950/80 p-6 text-center">
        <p className="text-3xl font-black text-blue-400">3</p>
        <h3 className="mt-3 text-xl font-bold text-white">Check Download</h3>
        <p className="mt-2 text-gray-400">Use the download number to compare below.</p>
      </div>
    </div>

    <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl border border-blue-800 bg-[#1b1b1b] shadow-2xl shadow-blue-950/30">
      <iframe
        src="https://openspeedtest.com/Get-widget.php"
        title="Internet Speed Test"
        className="h-[640px] w-full"
      ></iframe>
    </div>

    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-red-900 bg-red-950/20 p-6 text-center">
        <h3 className="mb-3 text-3xl font-black text-red-400">Bad</h3>
        <p className="text-2xl font-bold text-white">Under 50 Mbps</p>
        <p className="mt-3 text-gray-400">May cause buffering, slow rooms, and dropped calls.</p>
      </div>

      <div className="rounded-3xl border border-yellow-700 bg-yellow-950/20 p-6 text-center">
        <h3 className="mb-3 text-3xl font-black text-yellow-300">Good</h3>
        <p className="text-2xl font-bold text-white">50–200 Mbps</p>
        <p className="mt-3 text-gray-400">Good for normal streaming, browsing, and work.</p>
      </div>

      <div className="rounded-3xl border border-green-700 bg-green-950/20 p-6 text-center">
        <h3 className="mb-3 text-3xl font-black text-green-300">Great</h3>
        <p className="text-2xl font-bold text-white">200+ Mbps</p>
        <p className="mt-3 text-gray-400">Great for multiple devices, streaming, and video calls.</p>
      </div>
    </div>

    <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-blue-800 bg-blue-500/10 p-8 text-center">
      <h3 className="text-2xl font-black text-white">
        Still having WiFi issues even with good speed?
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
        The problem may be weak coverage, router placement, old equipment, or network setup — not your internet plan.
      </p>

      <a
        href="https://calendly.com/signalhousenetworks/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-blue-500 px-8 py-4 text-lg font-bold text-white transition hover:scale-105 hover:bg-blue-400"
      >
        Schedule Free Consultation
      </a>
    </div>

  </div>
</section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14 text-center">

          <h2 className="mb-4 text-4xl font-bold">
            Services
          </h2>

          <p className="mx-auto max-w-2xl text-2xl text-gray-400">
            Straightforward networking help without confusing jargon.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

          {[
            {
              title: 'Small Business Websites',
              text: 'Simple, modern websites for local businesses with hosting, updates, and ongoing support available.',
            },
            {
              title: 'WiFi Troubleshooting',
              text: 'Fix slow internet, disconnects, buffering, and unreliable wireless coverage.',
            },
            {
              title: 'Home Network Setup',
              text: 'Professional setup for routers, mesh systems, switches, and smart home devices.',
            },
            {
              title: 'WiFi Coverage Improvements',
              text: 'Eliminate dead zones and improve wireless signal throughout the home.',
            },
            {
              title: 'Smart Home Connectivity',
              text: 'Get cameras, TVs, thermostats, doorbells, and smart devices working reliably.',
            },
            {
              title: 'Home Office Networking',
              text: 'Stable networking solutions for remote work, video calls, and productivity.',
            },           
  ].map((service, index) => (

  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
  >

    <div
      className="w-full max-w-[360px] rounded-3xl border border-blue-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20"
    >

      <h3 className="mb-3 text-2xl font-semibold text-blue-400">
        {service.title}
      </h3>

      <p className="text-gray-300">
        {service.text}
      </p>

    </div>

  </motion.div>

))}

        </div>

      </section>
{/* Pricing */}
<section
  id="pricing"
  className="border-y border-blue-800 bg-gradient-to-b from-[#020617] to-black"
>

  <div className="mx-auto max-w-7xl px-6 py-24">

    {/* Header */}
    <div className="mb-16 text-center">

      <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-sky-300">
        Straightforward Pricing
      </div>

      <h2 className="text-5xl font-black tracking-tight md:text-6xl">
        No Geek Squad.
        <span className="mt-2 block text-blue-400">
          No MSP Contracts.
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-400">
        Just reliable networking help from a local IT professional that actually explains things clearly.
      </p>

    </div>

    {/* Pricing Cards */}
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4 justify-items-center">

      {/* WiFi Diagnostic */}
      <div className="w-full max-w-[340px] group relative overflow-hidden rounded-[32px] border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-black p-8 shadow-2xl shadow-blue-500/10 transition duration-300 hover:-translate-y-2">

        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-bold text-sky-300">
          MOST POPULAR
        </div>

        <h3 className="text-3xl font-black">
          WiFi Diagnostic
        </h3>

        <div className="mt-6 flex items-end gap-2">

          <h2 className="text-6xl font-black text-blue-400">
            $89
          </h2>

          <span className="mb-2 text-gray-400">
            starting at
          </span>

        </div>

        <ul className="mt-8 space-y-4 text-gray-300">

          <li>✓ Slow WiFi troubleshooting</li>
          <li>✓ Dead zone analysis</li>
          <li>✓ Speed testing</li>
          <li>✓ Router optimization</li>
          <li>✓ Smart device connectivity fixes</li>

        </ul>

        <p className="mt-8 text-xl leading-relaxed text-gray-400">
          Not sure what’s wrong? Start with a free 10-minute phone consultation before booking.
        </p>

        <a
          href="tel:7046043088"
          className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-blue-400 px-6 py-4 text-lg font-bold text-black transition duration-300 hover:bg-sky-300"
        >
          Book Appointment
        </a>

      </div>

      {/* Home Setup */}
      <div className="w-full max-w-[340px] group relative overflow-hidden rounded-[32px] border border-blue-800 bg-gradient-to-b from-gray-900 to-black p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10">

        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"></div>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          HOME SETUP
        </p>

        <h3 className="text-3xl font-black">
          Home Network Setup
        </h3>

        <div className="mt-6 flex items-end gap-2">

          <h2 className="text-6xl font-black text-blue-400">
            $149
          </h2>

          <span className="mb-2 text-gray-400">
            starting at
          </span>

        </div>

        <ul className="mt-8 space-y-4 text-gray-300">

          <li>✓ Mesh WiFi setup</li>
          <li>✓ Smart home setup</li>
          <li>✓ Coverage improvements</li>
          <li>✓ Device optimization</li>
          <li>✓ Basic network cleanup</li>

        </ul>

        <a
          href="tel:7046043088"
          className="mt-10 inline-flex w-full items-center justify-center rounded-2xl border border-blue-700 bg-gray-900 px-6 py-4 text-lg font-bold text-white transition duration-300 hover:border-blue-400 hover:text-sky-300"
        >
          Get Started
        </a>

      </div>

      {/* Business */}
      <div className="w-full max-w-[340px] group relative overflow-hidden rounded-[32px] border border-blue-800 bg-gradient-to-b from-gray-900 to-black p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10">

        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"></div>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          SMALL BUSINESS
        </p>

        <h3 className="text-3xl font-black">
          Business Networking
        </h3>

        <div className="mt-6 flex items-end gap-2">

          <h2 className="text-6xl font-black text-blue-400">
            Custom
          </h2>

        </div>

        <ul className="mt-8 space-y-4 text-gray-300">

          <li>✓ Office WiFi</li>
          <li>✓ VLANs & switching</li>
          <li>✓ Security cameras</li>
          <li>✓ Structured cabling</li>
          <li>✓ Network cleanup</li>

        </ul>

        <a
          href="mailto:signalhousenetworks@gmail.com"
          className="mt-10 inline-flex w-full items-center justify-center rounded-2xl border border-blue-700 bg-gray-900 px-6 py-4 text-lg font-bold text-white transition duration-300 hover:border-blue-400 hover:text-sky-300"
        >
          Request Quote
        </a>

      </div>
{/* Website Design */}
<div className="w-full max-w-[380px] group relative overflow-hidden rounded-[32px] border border-blue-800 bg-gradient-to-b from-gray-900 to-black p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10">

  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"></div>

  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
    WEBSITE DESIGN
  </p>

<h3 className="text-3xl font-black leading-tight tracking-tight">    Small Business Websites
  </h3>

  <div className="mt-8">

  <p className="text-5xl font-black text-blue-400">
    $49
  </p>

  <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gray-500">
    One-Time Setup
  </p>

  <div className="my-5 h-px bg-blue-900"></div>

  <p className="text-4xl font-black text-white">
    $50/mo
  </p>

  <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gray-500">
    Hosting & Support
  </p>

</div>

  <ul className="mt-8 space-y-4 text-gray-300">

    <li>✓ Mobile-friendly design</li>
    <li>✓ Contact forms</li>
    <li>✓ Domain setup</li>
    <li>✓ Fast hosting available</li>
    <li>✓ Ongoing support plans</li>

  </ul>

  <p className="mt-8 text-xl leading-relaxed text-gray-400">
    Professional websites for local businesses without expensive agency pricing.
  </p>

  <a
    href="mailto:signalhousenetworks@gmail.com"
    className="mt-10 inline-flex w-full items-center justify-center rounded-2xl border border-blue-700 bg-gray-900 px-6 py-4 text-lg font-bold text-white transition duration-300 hover:border-blue-400 hover:text-sky-300"
  >
    Request Website Quote
  </a>

</div>
    </div>

    {/* Bottom Line */}
    <div className="mt-14 text-center">

      <p className="text-3xl text-gray-400">
        No pushy upselling. No confusing jargon. Just clean, reliable networking help.
      </p>

    </div>

  </div>

</section>

{/* Transformations */}
<section
  id="transformations"
  className="border-y border-blue-800 bg-gray-900/60"
>

  <div className="mx-auto max-w-7xl px-6 py-20">

    <div className="mb-14 text-center">

      <h2 className="mb-4 text-4xl font-bold">
        Real Network Transformations
      </h2>

      <p className="mx-auto max-w-4xl text-2xl text-gray-400">
        Real-world network cleanup and WiFi optimization projects focused on reliability, cleaner installations, and better overall performance.
      </p>

    </div>

<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
      {/* Closet Cleanup */}
<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.97 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  viewport={{ once: true }}
  className="w-full max-w-[380px] rounded-3xl border border-blue-800 bg-gray-950/80 p-5"
>
        <div className="mb-4">
          <p className="mb-2 text-xl font-semibold uppercase tracking-wide text-red-400">
            Before
          </p>

          <img
            src={closetBefore}
            alt="Network closet before cleanup"
            className="rounded-2xl border border-blue-800"
          />
        </div>

        <div>
          <p className="mb-2 text-xl font-semibold uppercase tracking-wide text-blue-400">
            After
          </p>

          <img
            src={closetAfter}
            alt="Network closet after cleanup"
            className="rounded-2xl border border-blue-800"
          />
        </div>

        <h3 className="mt-5 mb-2 text-2xl font-semibold text-blue-400">
          Network Closet Cleanup
        </h3>

        <p className="text-gray-300 text-xl">
          Reorganized messy network equipment and cabling to improve reliability,
          airflow, appearance, and easier troubleshooting.
        </p>

      </motion.div>

      {/* Speed Improvements */}
<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.97 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="w-full max-w-[380px] rounded-3xl border border-blue-800 bg-gray-950/80 p-5"
>
        <div className="mb-4 rounded-2xl border border-blue-800 bg-gray-900 p-10 text-center">

          <p className="mb-3 text-xl font-semibold uppercase tracking-wide text-red-400">
            Before Optimization
          </p>

          <h3 className="text-5xl font-bold text-white">
            48.4 Mbps
          </h3>

          <p className="mt-3 text-lg text-gray-400">
            Slow and inconsistent WiFi performance
          </p>

        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-10 text-center">

          <p className="mb-3 text-xl font-semibold uppercase tracking-wide text-blue-400">
            After Optimization
          </p>

          <h3 className="text-5xl font-bold text-sky-300">
            224.69 Mbps
          </h3>

          <p className="mt-3 text-lg text-gray-300">
            Faster and more reliable wireless performance
          </p>

        </div>

        <h3 className="mt-5 mb-2 text-2xl font-semibold text-blue-400">
          WiFi Speed Improvements
        </h3>

        <p className="text-gray-300 text-xl">
          Improved a homeowner’s WiFi speeds from 48 Mbps to over 224 Mbps through
          network optimization, better placement, and wireless tuning.
        </p>

</motion.div>
      {/* Dead Zones */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-[380px] rounded-3xl border border-blue-800 bg-gray-950/80 p-5"
      >
        <div className="mb-4">
          <p className="mb-2 text-xl font-semibold uppercase tracking-wide text-red-400">
            Before Coverage
          </p>

          <img
            src={wifiBefore}
            alt="WiFi before optimization"
            className="rounded-2xl border border-blue-800"
          />
        </div>

        <div>
          <p className="mb-2 text-xl font-semibold uppercase tracking-wide text-blue-400">
            After Coverage
          </p>

          <img
            src={wifiAfter}
            alt="WiFi after optimization"
            className="rounded-2xl border border-blue-800"
          />
        </div>

        <h3 className="mt-5 mb-2 text-2xl font-semibold text-blue-400">
          Dead Zone Elimination
        </h3>

        <p className="text-gray-300 text-xl">
          Eliminated weak WiFi areas throughout the home and improved wireless
          coverage for streaming, work-from-home, and smart devices.
        </p>

      </motion.div>

    </div>

  </div>

</section>

{/* Website Examples */}
<section className="border-y border-blue-800 bg-gradient-to-b from-[#020617] to-black">

  <div className="mx-auto max-w-7xl px-6 py-20">

    <div className="mb-14 text-center">

      <h2 className="mb-4 text-4xl font-bold text-white">
        Simple Websites For Local Businesses
      </h2>

      <p className="mx-auto max-w-3xl text-2xl text-gray-400">
        Clean, modern websites built for small businesses that want a professional online presence without agency pricing.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center">

      {/* Website 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.6, delay: 0.4 }}

        viewport={{ once: true }}
        className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-blue-800 bg-gray-950/80 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
      >

        <img
          src={websiteOne}
          alt="HVAC Website Example"
          className="w-full object-cover"
        />

        <div className="p-6">
          <h3 className="mb-2 text-2xl font-bold text-white">
            HVAC Company Website
          </h3>

          <p className="text-gray-400 text-lg">
            Modern service website with mobile-friendly design, contact forms, and strong local branding.
          </p>

        </div>

      </motion.div>

      {/* Website 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-blue-800 bg-gray-950/80 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
      >

        <img
          src={websiteTwo}
          alt="Coffee Shop Website Example"
          className="w-full object-cover"
        />

        <div className="p-6">
          <h3 className="mb-2 text-2xl font-bold text-white">
            Coffee Shop Website
          </h3>

          <p className="text-gray-400 text-lg">
            Simple and clean website for local restaurants, cafés, and small businesses.
          </p>

        </div>

</motion.div>
      {/* Website 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-blue-800 bg-gray-950/80 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
      >

        <img
          src={websiteThree}
          alt="Contractor Website Example"
          className="w-full object-cover"
        />

        <div className="p-6">

          <h3 className="mb-2 text-2xl font-bold text-white">
            Contractor Website
          </h3>
          <p className="text-gray-400 text-lg">
            Professional website example for contractors, landscapers, and local service businesses.
          </p>

        </div>

      </motion.div>

    </div>

  </div>

</section>
{/* About */}
<section id="about" className="relative overflow-hidden border-y border-blue-950 bg-[#020617]">
  <div className="absolute inset-0 bg-blue-500/5 blur-3xl"></div>

  <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_.9fr] md:items-center">

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-sky-300">
        Meet The Owner
      </div>

      <h2 className="text-5xl font-black tracking-tight md:text-6xl">
        Real IT Help,
        <span className="block text-blue-400">Without The Runaround.</span>
      </h2>

      <p className="mt-6 text-xl leading-relaxed text-gray-300">
        Hey, I’m Sean — a network and cloud engineer based in the Fort Mill and Charlotte area with a passion for helping people solve frustrating technology problems.
      </p>

      <p className="mt-5 text-xl leading-relaxed text-gray-300">
        I specialize in WiFi optimization, networking, Microsoft 365, cloud infrastructure, and small business technology solutions.
      </p>

      <p className="mt-5 text-xl leading-relaxed text-gray-400">
        My goal is simple: make your network faster, cleaner, more reliable, and easier to use.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center md:justify-end"
    >
      <div className="w-full max-w-[430px] rounded-[32px] border border-blue-900/60 bg-[#0b1120] p-8 shadow-2xl shadow-blue-950/30">

        <div className="flex justify-center">

  <div className="rounded-[36px] bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-700 p-[2px] shadow-[0_0_40px_rgba(59,130,246,0.35)]">

    <div className="rounded-[34px] bg-[#0b1120] p-2">

      <img
        src={seanHeadshot}
        alt="Sean Lattaker - SignalHouse Networks"
        className="h-[220px] w-[220px] rounded-[28px] object-cover object-top"
      />

    </div>

  </div>

</div>
        <div className="mt-8 text-center">
          <div className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-5 py-2 text-xl font-semibold text-blue-300">
            Sean Lattaker
          </div>

          <h3 className="text-3xl font-black text-white">
            Real Networking Help
          </h3>

          <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-slate-300">
            Local support for WiFi issues, home networks, smart devices, and small business technology.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-blue-900/50 bg-[#050b16] px-2 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">WiFi</p>
            <p className="mt-2 text-lg font-bold text-blue-300">Refined</p>
          </div>

          <div className="rounded-2xl border border-blue-900/50 bg-[#050b16] px-2 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Based In</p>
            <p className="mt-2 text-lg font-bold text-white">Fort Mill</p>
          </div>

          <div className="rounded-2xl border border-blue-900/50 bg-[#050b16] px-2 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Support</p>
            <p className="mt-2 text-lg font-bold text-green-300">Real Human</p>
          </div>
        </div>

      </div>
    </motion.div>

  </div>
</section>

      {/* Contact */}
      <section id="contact" className="border-t border-blue-800 bg-gray-900/70">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <h2 className="mb-6 text-5xl md:text-6xl font-bold">
            Get In Touch
          </h2>

    <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
      Need help with slow WiFi, dead zones, buffering TVs, or unreliable smart home devices?
    </p>

    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
      Serving Fort Mill, Rock Hill, Indian Land, Charlotte, and surrounding areas.
    </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <a
  href="tel:7046043088"
  className="rounded-3xl border border-blue-800 bg-gray-950/80 p-10 transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20"
>

  <Phone className="mx-auto mb-5 h-11 w-11 text-blue-400" />

  <h3 className="mb-3 text-2xl font-bold text-blue-400">
    Call or Text
  </h3>

  <p className="text-xl font-semibold text-white">
    704-604-3088
  </p>

</a>

            <a
              href="mailto:signalhousenetworks@gmail.com"
              className="rounded-3xl border border-blue-800 bg-gray-950/80 p-10 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20"
            >
<Mail className="mx-auto mb-4 h-10 w-10 text-blue-400" />
              <h3 className="mb-2 text-2xl font-semibold text-blue-400">
                Email
              </h3>

              <p className="break-words text-xl font-semibold text-white">
                signalhousenetworks@gmail.com
              </p>
              
            </a>

            <a
              href="mailto:signalhousenetworks@gmail.com"
              className="rounded-3xl border border-blue-800 bg-gray-950/80 p-10 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20"
            >
                            <Clock className="mx-auto mb-4 h-10 w-10 text-blue-400" />

              <h3 className="mb-2 text-2xl font-semibold text-blue-400">
                Hours
              </h3>

              <p className="text-xl font-semibold text-white">
                Mon - Sat
                <br />
                By Appointment
              </p>
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-blue-800 bg-gray-950/80 text-base">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 SignalHouse Networks. All rights reserved.
          </p>

          <p>
            Reliable WiFi, Networking & Smart Home Connectivity
          </p>

        </div>

      </footer>

    </div>
  )
}