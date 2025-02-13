interface ImageFrameProps {
  src: string;
  alt: string;
  isDark?: boolean;
}

const ImageFrame: React.FC<ImageFrameProps> = ({ src, alt, isDark = true }) => {
  return (
    <div className="relative group">
      <div className={`absolute inset-0 rounded-md ${isDark ? 'bg-[#7aa2f7]/10' : 'bg-gray-100'} transform transition-transform group-hover:scale-105`} />
      <div className={`relative aspect-[16/9] rounded-md overflow-hidden border ${isDark ? 'border-[#7aa2f7]/30' : 'border-gray-200'}`}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ImageFrame;
