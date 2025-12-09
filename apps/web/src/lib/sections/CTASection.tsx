import { motion } from 'framer-motion'
import type { PageType } from '@/components/ui/navigation/types'
import { Button } from '@/components/ui/button'

export function CTA({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <motion.section
      className="py-20 bg-white relative z-30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-gray-900 mb-6">
          Ready to Begin Your <span className="text-emerald-600 font-medium">Healing Journey?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Take the first step towards wellness and transformation. Book your personalized session
          today.
        </p>

        <div className="flex gap-4 justify-center md:w-[388px] mx-auto">
          <Button className="w-full" onClick={() => onNavigate('booking')}>
            Book Now
          </Button>
          <Button variant="outlined" className="w-full" onClick={() => onNavigate('about')}>
            Learn More
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
