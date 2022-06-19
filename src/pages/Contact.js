import { Footerback, ContactForm, Text } from '../components';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <hr className="h-two-px bg-very-light-grey opacity-10 mb-6 mt-10"></hr>
      <Text />
      <hr className="h-two-px bg-very-light-grey opacity-10 mb-6 mt-10"></hr>
      <ContactForm />
      <Footerback />
    </motion.div>
  );
}

export default Contact;
