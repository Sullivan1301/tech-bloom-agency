import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { InputHTMLAttributes, useState } from 'react';

interface FlowerFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isValid?: boolean;
  showFlower?: boolean;
}

const FlowerFieldInput: React.FC<FlowerFieldInputProps> = ({
  label,
  isValid = false,
  showFlower = true,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block font-montserrat font-medium text-tech-primary mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 border-2 rounded-lg font-montserrat transition-all duration-300 ${
            isValid
              ? 'border-green-500 bg-green-50'
              : isFocused
              ? 'border-tech-accent bg-white'
              : 'border-gray-300 bg-white'
          } focus:outline-none focus:ring-2 focus:ring-tech-accent/20 ${props.className}`}
        />
        
        {/* Petite pousse/check qui apparaît quand validé */}
        <AnimatePresence>
          {isValid && showFlower && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <div className="relative">
                {/* Petite fleur animée */}
                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <Check className="w-5 h-5 text-green-500 relative z-10" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FlowerFieldInput;

