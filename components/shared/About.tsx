const stats = [
  { value: '2+', label: 'Projects in Progress' },
  { value: '24 hours', label: 'Response Time' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Team Members' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.1] mb-8">
              We believe in the power of <span className="italic font-normal">great technology.</span>
            </h2>
            <p className="text-lg text-background/70 leading-relaxed mb-6">
              Quiclogix is a technology services company focused on building reliable, scalable, and intelligent digital solutions. We work at the intersection of data, design, and engineering to help businesses move faster and make better decisions.
            </p>
            <p className="text-lg text-background/70 leading-relaxed">
              Unlike generic dev agencies, we don't just deliver features—we design systems that are easy to maintain, easy to scale, and aligned with real business goals
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-background/20 pl-6">
                <div className="text-5xl md:text-6xl font-medium tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-[0.15em] text-background/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
