import { CalEmbed } from '@/components/shared/CalEmbed';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-8 py-16 md:py-24 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.1] text-foreground mb-8">
                Let's create something <span className="italic font-normal">amazing</span> together.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Ready to start your next project? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
              
              {/* <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  <a href="mailto:hello@agency.com" className="text-foreground hover:text-muted-foreground transition-colors">
                    hello@agency.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  <a href="tel:+1234567890" className="text-foreground hover:text-muted-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  <span className="text-foreground">
                    123 Creative Street, New York, NY 10001
                  </span>
                </div>
              </div> */}
            </div>
        </div>
          
          <div className="bg-white border border-black h-150 md:h-175 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <CalEmbed />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
