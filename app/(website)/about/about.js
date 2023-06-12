import Container from "@/components/container";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      {/* <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div> */}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Welcome to Tech Parrots! We are your trusted source for
          simplified tech knowledge. Stay informed, engaged, and ahead
          of the curve with our tech blog. Explore the latest updates,
          insights, and reviews on gadgets, software, AI,
          cybersecurity, and more. Join our community of tech
          enthusiasts and let&apos;s dive into the world of technology
          together!
        </p>

        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
