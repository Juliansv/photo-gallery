import Image from "next/image";

const About = () => {
  return (
    <div className="p-4 md:flex md:flex-col">
      <h2 className="p-6 text-center text-3xl font-extrabold">About</h2>
      <div className="flex md:w-3/4 flex-col gap-4 md:flex-row md:self-center">
        <div className="relative md:w-1/2">
          <Image
            key={69}
            src={
              "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            }
            alt="Matias Lucero"
            fill={true}
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
            className="!relative"
            priority={true}
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-around">
          <p className="leading-relaxed">
            Welcome and thank you for visiting!
            <br /> I am a street and travel photographer from Porto, Portugal. I
            do my best and derive great pleasure to learn, evolve, and be
            inspired by so many past and present photographers. I&apos;m mostly
            a people photographer - loving to shoot my subjects in their context
            and doing my best to hunt for the poetry (or absurds) of daily life.
            Yet I like to keep changing subjects and my output may range from
            candid, quirky or humorous moments to wild nature shots -
            photographing is my preferred way to celebrate the diversity of life
            and I try to capture whatever is on my mind or engages the eye. I
            like to keep exploring and questioning myself, and if there is some
            common element you may find linking it all, I hope that may be the
            benevolent, optimistic humanity that surrounds us. Some of my
            photographic work has been selected by editors and published in a
            diversity of photographic sites, magazines and newspapers, including
            National Geographic, NatGeo Travel, LensCulture, Life Framer, 500px,
            The Times, Chasseur D&apos; Images, Reponses Photo, Eyeshot
            Magazine, Musee, CN Traveller, Lonely Planet and DK Guides; I won a
            few awards, including an UPOTY&apos;s Urban Photographer of the Year
            in 2018, have been a jury member in some international photography
            prizes, had the pleasure of being named Photographer of the Month by
            NatGeoYS in 2021, was an awarded finalist in the 500px Global
            Photography Awards 2022, and was picked as one of the winners of
            LifeFramer&apos;s/Martin Parr&apos;s &apos;Humans 2023&apos;. I
            participated in a number of collective exhibitions and ran a first
            solo exhibition, &apos;Urban Chronicles&apos; Sep22-Nov26, 2023
            @Forum da Maia, Portugal (catalog available at:
            https://www.blurb.com/b/11784539-urban-chronicles). If you have an
            engaging project for me, just drop me a line. All photos © Eduardo
            Teixeira de Sousa. For licensing, comissioning and prints please
            contact through this platform or inquire by email to
            edtsousa@hotmail.com.
          </p>
          <div>
            <h3 className="text-md mt-2 text-center font-bold text-gray-400">
                Location
            </h3>
            <p className="text-center text-xl">Hamrun, Malta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
