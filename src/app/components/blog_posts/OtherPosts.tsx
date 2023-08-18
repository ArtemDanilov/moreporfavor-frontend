import BlogPosts from "./BlogPosts";
import Section from "../Section";

type Props = {
  id: number;
  title: string;
  className?: string;
};

const OtherPosts = ({ id, title, className }: Props) => {
  return (
    <>
      {otherPosts.length !== 0 && (
        <Section>
          <div className={className}>
            {title && (
              <h2 className="fonst-sans text-2xl font-bold text-green mb-5 md:text-4xl">
                {title}
              </h2>
            )}
            <BlogPosts posts={otherPosts} direction="horizontal" />
          </div>
        </Section>
      )}
    </>
  );
};

export default OtherPosts;
