import {motion} from "framer-motion"

const DaloIntl = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
      >
      DaloIntl
    </motion.div>
  )
}

export default DaloIntl
