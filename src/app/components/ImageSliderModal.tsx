'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ImageSliderModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  title: string;
  onClose: () => void;
}

const ImageSliderModal = ({ 
  isOpen, 
  images, 
  initialIndex = 0, 
  title, 
  onClose 
}: ImageSliderModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[currentIndex];
    link.download = `${title}-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrevious();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Control Bar */}
          <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-4 sm:px-6 z-20">
            <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <p className="text-sm font-medium">
                {title} - {currentIndex + 1} / {images.length}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download"
              >
                <Download className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={onClose}
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Close"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Main Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center px-4 sm:px-16 py-20"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Previous Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-2 sm:left-6 bg-white/10 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={images.length <= 1}
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            {/* Image Slider */}
            <div className="relative w-full max-w-5xl h-[70vh] overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${title} ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-contain"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;

                    if (swipe < -10000) {
                      handleNext();
                    } else if (swipe > 10000) {
                      handlePrevious();
                    }
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 bg-white/10 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={images.length <= 1}
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4 z-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 flex space-x-2 overflow-x-auto max-w-full">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-white scale-110'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                  whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageSliderModal;
