import { motion } from 'framer-motion'

const Contact = () => {
  const contactLinks = [
    {
      label: 'akolesnyk1989@gmail.com',
      href: 'mailto:akolesnyk1989@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: '+421951813809 Whatsup',
      href: 'https://wa.me/421951813809',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 bg-[#F5EFE6] min-h-[40vh] lg:min-h-screen relative overflow-hidden"
      >
        {/* Decorative botanical elements */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 400 600" fill="none">
            {/* Leaves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M50 550 Q100 400 80 300 Q60 200 100 100"
              stroke="#2D4A43"
              strokeWidth="2"
              fill="none"
            />
            <motion.ellipse
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.5, delay: 1 }}
              cx="120" cy="200" rx="40" ry="60"
              fill="#2D4A43"
              transform="rotate(-30 120 200)"
            />
            <motion.ellipse
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              cx="60" cy="350" rx="35" ry="55"
              fill="#2D4A43"
              transform="rotate(20 60 350)"
            />
            <motion.ellipse
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              cx="150" cy="450" rx="50" ry="70"
              fill="#2D4A43"
              transform="rotate(-15 150 450)"
            />
            {/* Berries */}
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.6 }}
              cx="100" cy="150" r="8"
              fill="#C9A86C"
              opacity="0.4"
            />
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
              cx="115" cy="165" r="6"
              fill="#C9A86C"
              opacity="0.3"
            />
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
              cx="85" cy="160" r="7"
              fill="#C9A86C"
              opacity="0.35"
            />
          </svg>
        </div>
      </motion.div>

      {/* Right Side - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 bg-[#2D4A43] p-8 lg:p-16 flex flex-col items-center justify-center min-h-[60vh] lg:min-h-screen"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-[#C9A86C]/20 border-2 border-[#C9A86C]/40 flex items-center justify-center">
            <span className="text-[#C9A86C] text-3xl font-serif font-semibold">AK</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#C9A86C] text-2xl lg:text-3xl font-serif mb-12"
        >
          Contact Me
        </motion.h1>

        {/* Contact Links */}
        <div className="space-y-6 w-full max-w-sm">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-[#C9A86C] hover:text-white transition-colors duration-300 group"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                {link.icon}
              </span>
              <span className="text-lg underline-offset-4 hover:underline">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-[#C9A86C]/50 text-sm text-center"
        >
          Let's create something beautiful together
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Contact
