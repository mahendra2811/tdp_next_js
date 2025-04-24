import Link from "next/link";

interface AboutSectionProps {
  subtitle: string;
  title: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export default function AboutSection({
  subtitle,
  title,
  content,
  buttonText,
  buttonLink,
}: AboutSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <p className="text-center text-primary font-medium mb-2">{subtitle}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-8 text-center sm:text-left">
          {content}
        </p>
        <div className="text-center">
          <Link 
            href={buttonLink} 
            className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 font-semibold transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}