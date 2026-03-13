export const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-muted"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        {title}
      </h2>
    </div>
    <div
      className="mt-2 text-sub-text max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      {description}
    </div>
  </div>
);
