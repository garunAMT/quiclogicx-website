const Hero = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Hero Section */}
      <section
        className="pt-32 md:pt-40 lg:pt-48 pb-6 md:pb-16 lg:pb-24 px-4 md:px-8"
        id="home"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-10 inline-flex flex-col items-center">
            <div className="flex items-center flex-wrap justify-center">
              <span
                className="border border-black px-3 md:px-6 py-2 md:py-4 animate-fade-in"
                style={{ animationDelay: "0.3s", animationFillMode: "both" }}
              >
                Build
              </span>
              <span
                className="bg-[#ff6bff] border border-black px-3 md:px-6 py-2 md:py-4 rounded-[20px] md:rounded-[40px] -ml-px animate-fade-in"
                style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              >
                Faster.
              </span>
            </div>
            <div className="flex items-center flex-wrap justify-center -mt-px">
              <span
                className="border border-black px-3 md:px-6 py-2 md:py-4 animate-fade-in"
                style={{ animationDelay: "0.5s", animationFillMode: "both" }}
              >
                Decide
              </span>
              <span
                className="bg-[#ff6bff] border border-black px-3 md:px-6 py-2 md:py-4 rounded-[20px] md:rounded-[40px] -ml-px animate-fade-in"
                style={{ animationDelay: "0.6s", animationFillMode: "both" }}
              >
                Smarter.
              </span>
            </div>
            <div className="flex items-center flex-wrap justify-center -mt-px">
              <span
                className="border border-black px-3 md:px-6 py-2 md:py-4 animate-fade-in"
                style={{ animationDelay: "0.7s", animationFillMode: "both" }}
              >
                Scale
              </span>
              <span
                className="bg-[#ff6bff] border border-black px-3 md:px-6 py-2 md:py-4 rounded-[20px] md:rounded-[40px] -ml-px animate-fade-in"
                style={{ animationDelay: "0.8s", animationFillMode: "both" }}
              >
                Confidently.
              </span>
            </div>
          </h1>
          <p
            className="text-sm md:text-base lg:text-[18px] text-black max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.9s", animationFillMode: "both" }}
          >
            Quiclogix helps businesses turn data, design, and code into powerful
            digital solutions. From dashboards and data pipelines to websites
            and applications, we build systems that grow with you.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "1.0s", animationFillMode: "both" }}
          >
            <a
              href="#contact"
              className="relative overflow-hidden bg-black text-white h-12 px-6 flex items-center justify-center text-[13px] font-medium uppercase border border-black leading-none group"
            >
              <span className="relative z-10">Book a call</span>
              <span className="absolute inset-0 bg-[#ff6bff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </a>
            <a
              href="#services"
              className="relative overflow-hidden bg-white text-black h-12 px-6 flex items-center justify-center text-[13px] font-medium uppercase border border-black leading-none group"
            >
              <span className="relative z-10">Explore Our Services</span>
              <span className="absolute inset-0 bg-[#ff6bff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
